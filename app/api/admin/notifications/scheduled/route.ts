import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET() {
    try {
        const [scheduledNotifications, subscribers] = await Promise.all([
            prisma.scheduledNotification.findMany({
                where: { status: 'PENDING' },
                orderBy: { scheduledAt: 'asc' }
            }),
            prisma.pushSubscription.findMany({
                include: {
                    user: {
                        select: { id: true, name: true, email: true, language: true }
                    }
                },
                orderBy: { createdAt: 'desc' }
            })
        ]);

        return NextResponse.json({
            success: true,
            notifications: scheduledNotifications,
            subscriptionCount: subscribers.length,
            subscribers
        });
    } catch (error) {
        console.error('Error fetching scheduled notifications:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        await prisma.scheduledNotification.update({
            where: { id },
            data: { status: 'CANCELLED' }
        });

        return NextResponse.json({ success: true, message: 'Notification cancelled' });
    } catch (error) {
        console.error('Error cancelling notification:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
