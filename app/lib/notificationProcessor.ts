import prisma from './prisma';
import webPush from 'web-push';

let processorStarted = false;

function configureWebPush() {
    if (process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
        webPush.setVapidDetails(
            process.env.VAPID_SUBJECT || 'mailto:admin@example.com',
            process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
            process.env.VAPID_PRIVATE_KEY
        );
    }
}

export function startNotificationProcessor() {
    if (processorStarted) return;
    processorStarted = true;

    configureWebPush();

    console.log('[NotificationProcessor] Background processor started, checking every 60 seconds');

    // Run immediately on startup to catch any overdue notifications
    processScheduledNotifications();

    // Then check every 60 seconds
    setInterval(processScheduledNotifications, 60 * 1000);
}

async function processScheduledNotifications() {
    try {
        const now = new Date();

        const pendingNotifications = await prisma.scheduledNotification.findMany({
            where: {
                status: 'PENDING',
                scheduledAt: { lte: now }
            }
        });

        if (pendingNotifications.length === 0) return;

        console.log(`[NotificationProcessor] Processing ${pendingNotifications.length} scheduled notification(s)`);

        for (const notification of pendingNotifications) {
            const { title, message, url, targetLang } = notification;

            let subscriptions;
            if (targetLang && targetLang !== 'all') {
                subscriptions = await prisma.pushSubscription.findMany({
                    where: { user: { language: targetLang } }
                });
            } else {
                subscriptions = await prisma.pushSubscription.findMany();
            }

            if (subscriptions.length === 0) {
                await prisma.scheduledNotification.update({
                    where: { id: notification.id },
                    data: {
                        status: 'FAILED',
                        sentAt: new Date(),
                        resultData: { error: 'No matching subscriptions found' }
                    }
                });
                console.log(`[NotificationProcessor] Notification "${title}" FAILED - no matching subscriptions`);
                continue;
            }

            const notificationPayload = JSON.stringify({
                title,
                body: message,
                url: url || '/',
                icon: '/icon-192x192.png',
            });

            const sendPromises = subscriptions.map(async (sub) => {
                try {
                    await webPush.sendNotification(
                        { endpoint: sub.endpoint, keys: sub.keys as any },
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
            const successCount = results.filter(r => r.success).length;

            await prisma.scheduledNotification.update({
                where: { id: notification.id },
                data: {
                    status: 'SENT',
                    sentAt: new Date(),
                    resultData: { sent: successCount, total: subscriptions.length, details: results }
                }
            });

            console.log(`[NotificationProcessor] Notification "${title}" sent to ${successCount}/${subscriptions.length} subscribers`);
        }
    } catch (error) {
        console.error('[NotificationProcessor] Error processing notifications:', error);
    }
}
