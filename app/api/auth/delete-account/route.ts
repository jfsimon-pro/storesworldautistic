import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { verifyAccessToken } from '@/app/lib/auth';
import { getAccessTokenFromRequest, clearAuthCookies } from '@/app/lib/cookies';

export async function DELETE(request: NextRequest) {
    try {
        const accessToken = getAccessTokenFromRequest(request);

        if (!accessToken) {
            return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
        }

        const payload = await verifyAccessToken(accessToken);

        if (!payload) {
            return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
        }

        const { userId } = payload;

        // Deletar usuário (cascade deleta tokens, streaks, etc via Prisma)
        await prisma.refreshToken.deleteMany({ where: { userId } });
        await prisma.userStreak.deleteMany({ where: { userId } });
        await prisma.user.delete({ where: { id: userId } });

        const response = NextResponse.json({ message: 'Conta deletada com sucesso' });
        return clearAuthCookies(response);
    } catch (error) {
        console.error('Erro ao deletar conta:', error);
        return NextResponse.json({ error: 'Erro ao deletar conta' }, { status: 500 });
    }
}
