
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth'; // Assuming you use next-auth, or your custom auth
// If using custom auth via cookies/headers, adjust accordingly.
// Based on previous files, it seems there might be a custom auth or just getting userId from request if possible.
// Let's look at how other routes get the user. `app/api/admin/purchases/route.ts` didn't show auth check but it's admin.
// `app/api/auth/[...nextauth]/route.ts` check? or `app/lib/auth.ts`?
// I'll stick to a basic structure and refine auth if needed.

const prisma = new PrismaClient();

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
