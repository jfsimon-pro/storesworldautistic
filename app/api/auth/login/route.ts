import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { generateAccessToken, generateRefreshToken, getRefreshTokenExpiration } from '@/app/lib/auth';
import { setAuthCookies } from '@/app/lib/cookies';

export async function POST(request: NextRequest) {
    try {
        console.log('\n🟢 [LOGIN API] ==================');
        const body = await request.json();
        const { email, password } = body;
        console.log('📧 [LOGIN API] Email:', email);

        // Validações básicas
        if (!email || !password) {
            console.log('❌ [LOGIN API] Validação falhou: email ou senha vazio');
            return NextResponse.json(
                { error: 'Email e senha são obrigatórios' },
                { status: 400 }
            );
        }

        // Buscar usuário
        console.log('🔍 [LOGIN API] Buscando usuário...');
        const user = await prisma.user.findUnique({
            where: { email },
        }) as any;

        // 1. Verifica se usuário existe
        if (!user) {
            console.log('❌ [LOGIN API] Usuário não encontrado');
            return NextResponse.json(
                { error: 'Email ou senha incorretos', details: 'invalid_credentials' },
                { status: 401 }
            );
        }

        console.log('✅ [LOGIN API] Usuário encontrado:', user.id);

        // 2. Verificar senha (admins também usam senha)
        if (!user.passwordHash) {
            console.log('❌ [LOGIN API] Usuário sem senha definida');
            return NextResponse.json(
                { error: 'Email ou senha incorretos', details: 'invalid_credentials' },
                { status: 401 }
            );
        }

        const passwordMatch = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatch) {
            console.log('❌ [LOGIN API] Senha incorreta');
            return NextResponse.json(
                { error: 'Email ou senha incorretos', details: 'invalid_credentials' },
                { status: 401 }
            );
        }

        console.log('✅ [LOGIN API] Credenciais válidas');

        // Gerar tokens JWT
        console.log('🎫 [LOGIN API] Gerando tokens...');
        const accessToken = await generateAccessToken(user.id, user.role);
        const refreshToken = await generateRefreshToken(user.id);

        // Limite de Sessões Simultâneas
        const MAX_SESSIONS = 2;

        // Buscar tokens ativos do usuário
        const activeTokens = await prisma.refreshToken.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'asc' }, // Mais antigos primeiro
            select: { id: true, token: true }
        });

        if (activeTokens.length >= MAX_SESSIONS) {
            console.log(`⚠️ [LOGIN API] Limite de sessões atingido (${activeTokens.length}/${MAX_SESSIONS}). Removendo antigas...`);

            // Quantos precisam ser removidos? (tamanho atual + 1 novo - limite)
            // Na prática, removemos os excedentes para deixar espaço para o novo ser o 3º (ou Maxth)
            const tokensToRemoveCount = activeTokens.length - MAX_SESSIONS + 1;
            const tokensToRemove = activeTokens.slice(0, tokensToRemoveCount);

            const idsToRemove = tokensToRemove.map(t => t.id);

            if (idsToRemove.length > 0) {
                await prisma.refreshToken.deleteMany({
                    where: { id: { in: idsToRemove } }
                });
                console.log(`🚫 [LOGIN API] ${idsToRemove.length} tokens antigos removidos.`);
            }
        }

        // Salvar refresh token no banco
        await prisma.refreshToken.create({
            data: {
                token: refreshToken,
                userId: user.id,
                expiresAt: getRefreshTokenExpiration(),
            },
        });
        console.log('✅ [LOGIN API] Tokens gerados e salvos');

        // Atualizar streak do usuário
        const { updateUserStreak } = await import('@/app/lib/streak');
        await updateUserStreak(user.id);

        // Tentar atualizar último login
        prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() },
        }).catch((err: any) => console.error('⚠️ Erro ao atualizar lastLoginAt:', err));

        // Criar response com cookies
        const response = NextResponse.json({
            message: 'Login realizado com sucesso',
        });

        const finalResponse = setAuthCookies(response, accessToken, refreshToken);
        console.log('✅ [LOGIN API] Login concluído com sucesso\n');

        return finalResponse;
    } catch (error) {
        console.error('💥 [LOGIN API] Erro:', error);
        return NextResponse.json(
            { error: 'Erro ao fazer login. Tente novamente.' },
            { status: 500 }
        );
    }
}
