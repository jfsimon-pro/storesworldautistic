import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import { generateAccessToken, generateRefreshToken, getRefreshTokenExpiration } from '@/app/lib/auth';
import { setAuthCookies } from '@/app/lib/cookies';

export async function POST(request: NextRequest) {
    try {
        console.log('\n🔐 [ADMIN LOGIN API] ==================');
        const body = await request.json();
        const { email, password } = body;
        console.log('📧 [ADMIN LOGIN API] Email:', email);

        // Validações básicas
        if (!email || !password) {
            console.log('❌ [ADMIN LOGIN API] Validação falhou');
            return NextResponse.json(
                { error: 'Email e senha são obrigatórios' },
                { status: 400 }
            );
        }

        // Buscar usuário
        console.log('🔍 [ADMIN LOGIN API] Buscando usuário...');
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            console.log('❌ [ADMIN LOGIN API] Usuário não encontrado');
            return NextResponse.json(
                { error: 'Credenciais inválidas' },
                { status: 401 }
            );
        }

        // VERIFICAÇÃO CRÍTICA: Apenas ADMINs podem logar aqui
        if (user.role !== 'ADMIN') {
            console.warn('⛔️ [ADMIN LOGIN API] Tentativa de acesso por não-admin:', user.email);
            return NextResponse.json(
                { error: 'Acesso restrito a administradores' },
                { status: 403 }
            );
        }

        console.log('✅ [ADMIN LOGIN API] Usuário é ADMIN:', user.id);

        // Verificar senha
        console.log('🔑 [ADMIN LOGIN API] Verificando senha...');
        if (!user.passwordHash) {
            return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
        }
        const passwordMatch = await bcrypt.compare(password, user.passwordHash);

        if (!passwordMatch) {
            console.log('❌ [ADMIN LOGIN API] Senha incorreta');
            return NextResponse.json(
                { error: 'Credenciais inválidas' },
                { status: 401 }
            );
        }

        console.log('✅ [ADMIN LOGIN API] Senha correta');

        // Gerar tokens JWT
        console.log('🎫 [ADMIN LOGIN API] Gerando tokens...');
        const accessToken = await generateAccessToken(user.id, user.role);
        const refreshToken = await generateRefreshToken(user.id);

        // Limite de Sessões Simultâneas (Admin)
        const MAX_SESSIONS = 2;

        const activeTokens = await prisma.refreshToken.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'asc' },
            select: { id: true }
        });

        if (activeTokens.length >= MAX_SESSIONS) {
            console.log(`⚠️ [ADMIN LOGIN API] Limite de sessões atingido (${activeTokens.length}/${MAX_SESSIONS}). Removendo antigas...`);
            const tokensToRemoveCount = activeTokens.length - MAX_SESSIONS + 1;
            const tokensToRemove = activeTokens.slice(0, tokensToRemoveCount);
            const idsToRemove = tokensToRemove.map(t => t.id);

            if (idsToRemove.length > 0) {
                await prisma.refreshToken.deleteMany({
                    where: { id: { in: idsToRemove } }
                });
                console.log(`🚫 [ADMIN LOGIN API] ${idsToRemove.length} tokens antigos removidos.`);
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
        console.log('✅ [ADMIN LOGIN API] Tokens gerados e salvos');

        // Tentar atualizar último login
        prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() },
        }).catch((err: any) => console.error('⚠️ Erro ao atualizar lastLoginAt:', err));

        // Criar response com cookies
        const response = NextResponse.json({
            message: 'Login administrativo realizado com sucesso',
            isAdmin: true
        });

        const finalResponse = setAuthCookies(response, accessToken, refreshToken);
        console.log('✅ [ADMIN LOGIN API] Login concluído com sucesso\n');

        return finalResponse;
    } catch (error) {
        console.error('💥 [ADMIN LOGIN API] Erro:', error);
        return NextResponse.json(
            { error: 'Erro ao fazer login. Tente novamente.' },
            { status: 500 }
        );
    }
}
