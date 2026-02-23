
import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { subscription, userId } = body;

        if (!subscription || !subscription.endpoint) {
            return NextResponse.json({ error: 'Invalid subscription' }, { status: 400 });
        }

        // Save subscription to database
        // Using upsert to update keys if endpoint exists, or create new
        const result = await prisma.pushSubscription.upsert({
            where: { endpoint: subscription.endpoint },
            update: {
                userId: userId || null,
                keys: subscription.keys,
                updatedAt: new Date(),
            },
            create: {
                userId: userId || null,
                endpoint: subscription.endpoint,
                keys: subscription.keys,
            },
        });

        return NextResponse.json({ success: true, id: result.id });
    } catch (error) {
        console.error('Error saving subscription:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { endpoint } = body;

        if (!endpoint) {
            return NextResponse.json({ error: 'Endpoint required' }, { status: 400 });
        }

        await prisma.pushSubscription.deleteMany({ where: { endpoint } });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting subscription:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
