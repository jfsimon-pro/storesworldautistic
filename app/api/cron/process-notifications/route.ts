import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import webPush from 'web-push';

// Configure web-push
if (process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
    webPush.setVapidDetails(
        process.env.VAPID_SUBJECT || 'mailto:admin@example.com',
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY
    );
}

export async function GET(request: Request) {
    // Basic security check (e.g. check for a cron secret if running in production)
    const authHeader = request.headers.get('authorization');
    if (
        process.env.CRON_SECRET &&
        authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const now = new Date();

        // Find pending notifications that are due
        const pendingNotifications = await prisma.scheduledNotification.findMany({
            where: {
                status: 'PENDING',
                scheduledAt: {
                    lte: now
                }
            }
        });

        if (pendingNotifications.length === 0) {
            return NextResponse.json({ success: true, message: 'No pending notifications to process.' });
        }

        const processResults = [];

        for (const notification of pendingNotifications) {
            const { title, message, url, targetLang } = notification;

            // Build query
            const whereClause: any = {};
            if (targetLang && targetLang !== 'all') {
                whereClause.user = {
                    language: targetLang
                };
            }

            // Fetch subscriptions
            const subscriptions = await prisma.pushSubscription.findMany({
                where: whereClause
            });

            if (subscriptions.length === 0) {
                await prisma.scheduledNotification.update({
                    where: { id: notification.id },
                    data: {
                        status: 'FAILED',
                        sentAt: new Date(),
                        resultData: { error: 'No matching subscriptions found' }
                    }
                });
                processResults.push({ id: notification.id, status: 'FAILED' });
                continue;
            }

            const notificationPayload = JSON.stringify({
                title,
                body: message,
                url: url || '/',
                icon: '/icon-192x192.png', // Or fetch from the notification record if added
            });

            const sendPromises = subscriptions.map(async (sub) => {
                try {
                    await webPush.sendNotification(
                        {
                            endpoint: sub.endpoint,
                            keys: sub.keys as any,
                        },
                        notificationPayload
                    );
                    return { success: true, id: sub.id };
                } catch (error: any) {
                    if (error.statusCode === 410 || error.statusCode === 404) {
                        await prisma.pushSubscription.delete({ where: { id: sub.id } });
                        return { success: false, id: sub.id, error: 'Expired subscription removed' };
                    }
                    return { success: false, id: sub.id, error: error.message };
                }
            });

            const results = await Promise.all(sendPromises);
            const successCount = results.filter((r) => r.success).length;

            await prisma.scheduledNotification.update({
                where: { id: notification.id },
                data: {
                    status: 'SENT',
                    sentAt: new Date(),
                    resultData: {
                        sent: successCount,
                        total: subscriptions.length,
                        details: results
                    }
                }
            });

            processResults.push({ id: notification.id, status: 'SENT', sentCount: successCount });
        }

        return NextResponse.json({
            success: true,
            processed: pendingNotifications.length,
            results: processResults
        });

    } catch (error) {
        console.error('Error processing scheduled notifications:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
