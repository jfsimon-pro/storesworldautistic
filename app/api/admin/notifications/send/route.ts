
// Rebuild trigger
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

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, message, url, icon, targetLang, scheduledAt } = body;

        if (!title || !message) {
            return NextResponse.json({ error: 'Title and message are required' }, { status: 400 });
        }

        // If scheduledAt is provided and is in the future, save it instead of sending
        if (scheduledAt) {
            const scheduledDate = new Date(scheduledAt);
            if (scheduledDate > new Date()) {
                const scheduledNotification = await prisma.scheduledNotification.create({
                    data: {
                        title,
                        message,
                        url,
                        targetLang: targetLang || 'all',
                        scheduledAt: scheduledDate,
                        status: 'PENDING'
                    }
                });
                return NextResponse.json({
                    success: true,
                    message: 'Notification scheduled successfully',
                    scheduledId: scheduledNotification.id
                });
            }
        }

        // Build query based on targetLang
        let subscriptions;
        if (targetLang && targetLang !== 'all') {
            // Filter by language: only subscriptions linked to a user with that language
            subscriptions = await prisma.pushSubscription.findMany({
                where: {
                    user: { language: targetLang }
                }
            });
        } else {
            // No filter - fetch ALL subscriptions
            subscriptions = await prisma.pushSubscription.findMany();
        }

        if (subscriptions.length === 0) {
            return NextResponse.json({ success: false, error: 'Nenhum usuário inscrito encontrada. Inscreva-se na página de configurações para testar.' });
        }

        const notificationPayload = JSON.stringify({
            title,
            body: message,
            url: url || '/',
            icon: icon || '/icon-192x192.png',
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
                // If subscription is invalid (410 Gone means expired), delete it
                if (error.statusCode === 410 || error.statusCode === 404) {
                    await prisma.pushSubscription.delete({ where: { id: sub.id } });
                    return { success: false, id: sub.id, error: 'Expired subscription removed' };
                }
                console.error(`Error sending to ${sub.id}:`, error);
                return { success: false, id: sub.id, error: error.message };
            }
        });

        const results = await Promise.all(sendPromises);
        const successCount = results.filter((r) => r.success).length;

        return NextResponse.json({
            success: true,
            sent: successCount,
            total: subscriptions.length,
            results,
        });

    } catch (error) {
        console.error('Error sending notifications:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
