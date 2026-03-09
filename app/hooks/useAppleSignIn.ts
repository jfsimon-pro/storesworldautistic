'use client';

import { useState } from 'react';

// Detecta se está rodando dentro do app Capacitor nativo
function isNativeApp(): boolean {
  return typeof (window as any).Capacitor !== 'undefined' &&
    (window as any).Capacitor.isNativePlatform?.();
}

export function useAppleSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const signInWithApple = async (): Promise<boolean> => {
    setLoading(true);
    setError('');

    try {
      let identityToken: string;
      let fullName: string | null = null;
      let email: string | null = null;

      if (isNativeApp()) {
        // Fluxo nativo iOS via plugin Capacitor
        const { SignInWithApple } = await import('@capacitor-community/apple-sign-in');
        const result = await SignInWithApple.authorize({
          clientId: 'com.worldautistic.app',
          redirectURI: '', // não usado no nativo
          scopes: 'email name',
        });

        identityToken = result.response.identityToken;
        fullName = result.response.givenName
          ? `${result.response.givenName} ${result.response.familyName || ''}`.trim()
          : null;
        email = result.response.email || null;
      } else {
        // Fluxo web — Apple Sign In JS SDK
        // O SDK é carregado via script tag no layout (ver app/layout.tsx)
        const appleAuth = (window as any).AppleID?.auth;
        if (!appleAuth) {
          throw new Error('Apple Sign In not available in this browser.');
        }
        const result = await appleAuth.signIn();
        identityToken = result.authorization.id_token;
        fullName = result.user?.name
          ? `${result.user.name.firstName || ''} ${result.user.name.lastName || ''}`.trim()
          : null;
        email = result.user?.email || null;
      }

      // Envia token para o backend validar
      const response = await fetch('/api/auth/apple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ identityToken, fullName, email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erro ao autenticar com Apple');
      }

      return true;
    } catch (err: any) {
      // Usuário cancelou — não mostrar erro
      if (err?.error === 'popup_closed_by_user' || err?.code === '1001') {
        return false;
      }
      setError(err.message || 'Erro ao entrar com Apple');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { signInWithApple, loading, error };
}
