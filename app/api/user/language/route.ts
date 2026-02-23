import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessToken } from '@/app/lib/auth';
import { getAccessTokenFromRequest } from '@/app/lib/cookies';
import prisma from '@/app/lib/prisma';

export async function PATCH(request: NextRequest) {
    try {
        const token = getAccessTokenFromRequest(request);
        if (!token) {
            return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
        }

        const payload = await verifyAccessToken(token);
        if (!payload?.userId) {
            return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
        }

        const { language } = await request.json();
        if (!['pt', 'en', 'es'].includes(language)) {
            return NextResponse.json({ error: 'Idioma inválido' }, { status: 400 });
        }

        await prisma.user.update({
            where: { id: payload.userId },
            data: { language }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error updating language:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
