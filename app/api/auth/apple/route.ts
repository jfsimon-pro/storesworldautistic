import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, createRemoteJWKSet } from 'jose';
import prisma from '@/app/lib/prisma';
import { generateAccessToken, generateRefreshToken, getRefreshTokenExpiration } from '@/app/lib/auth';
import { setAuthCookies } from '@/app/lib/cookies';

// Apple's public keys endpoint
const APPLE_JWKS = createRemoteJWKSet(
  new URL('https://appleid.apple.com/auth/keys')
);

export async function POST(request: NextRequest) {
  try {
    const { identityToken, fullName, email } = await request.json();

    if (!identityToken) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 400 });
    }

    // Verificar o identity token JWT com as chaves públicas da Apple
    const { payload } = await jwtVerify(identityToken, APPLE_JWKS, {
      issuer: 'https://appleid.apple.com',
      audience: process.env.APPLE_CLIENT_ID || 'com.worldautistic.app',
    });

    const appleUserId = payload.sub as string; // ID único do usuário na Apple
    const verifiedEmail = (payload.email as string) || email;

    if (!appleUserId) {
      return NextResponse.json({ error: 'Token Apple inválido' }, { status: 401 });
    }

    // Buscar ou criar usuário
    let user = await (prisma as any).user.findFirst({
      where: {
        OR: [
          { appleId: appleUserId },
          ...(verifiedEmail ? [{ email: verifiedEmail }] : []),
        ],
      },
    });

    if (user) {
      // Atualizar appleId se o usuário existe mas ainda não tem
      if (!user.appleId) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { appleId: appleUserId } as any,
        });
      }
    } else {
      // Criar novo usuário
      const name = fullName || verifiedEmail?.split('@')[0] || 'Usuário';

      user = await prisma.user.create({
        data: {
          name,
          email: verifiedEmail || `${appleUserId}@privaterelay.appleid.com`,
          appleId: appleUserId,
          role: 'USER',
          language: 'en',
        } as any,
      });

      // Criar streak inicial
      await prisma.userStreak.create({
        data: {
          userId: user.id,
          currentStreak: 0,
          longestStreak: 0,
          lastActiveDate: new Date(),
        },
      });
    }

    // Gerar tokens
    const accessToken = await generateAccessToken(user.id, user.role);
    const refreshToken = await generateRefreshToken(user.id);

    // Limite de sessões (2 simultâneas)
    const MAX_SESSIONS = 2;
    const activeTokens = await prisma.refreshToken.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'asc' },
      select: { id: true },
    });

    if (activeTokens.length >= MAX_SESSIONS) {
      const toRemove = activeTokens.slice(0, activeTokens.length - MAX_SESSIONS + 1).map((t: any) => t.id);
      await prisma.refreshToken.deleteMany({ where: { id: { in: toRemove } } });
    }

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: getRefreshTokenExpiration(),
      },
    });

    prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    }).catch(() => {});

    const response = NextResponse.json({ message: 'Login com Apple realizado com sucesso' });
    return setAuthCookies(response, accessToken, refreshToken);
  } catch (error: any) {
    console.error('[APPLE AUTH] Erro:', error);
    if (error.code === 'ERR_JWT_EXPIRED') {
      return NextResponse.json({ error: 'Token Apple expirado. Tente novamente.' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Erro ao autenticar com Apple' }, { status: 500 });
  }
}
