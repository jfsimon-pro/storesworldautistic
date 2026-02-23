import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET() {
    try {
        const [scheduledNotifications, subscriptionCount] = await Promise.all([
            prisma.scheduledNotification.findMany({
                where: { status: 'PENDING' },
                orderBy: { scheduledAt: 'asc' }
            }),
            prisma.pushSubscription.count()
        ]);

        return NextResponse.json({ success: true, notifications: scheduledNotifications, subscriptionCount });
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
