'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Register.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { useAppleSignIn } from '../../hooks/useAppleSignIn';

export default function SignInPage() {
  const { t, language, setLanguage } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signInWithApple, loading: appleLoading, error: appleError } = useAppleSignIn();

  useEffect(() => {
    // Verificar se o usuário já está autenticado
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          // Usuário já autenticado, redirecionar para a página apropriada
          if (data.user.role === 'ADMIN') {
            window.location.href = '/admin';
          } else {
            window.location.href = '/home';
          }
        }
      } catch (error) {
        // Usuário não autenticado, continuar na página de sign-in
        console.log('Usuário não autenticado');
      }
    };

    checkAuth();

    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    console.log('🔵 [LOGIN] Iniciando login...');
    console.log('📧 Email:', email);

    // Validações
    if (!email || !password) {
      console.log('❌ [LOGIN] Validação falhou: email ou senha vazio');
      setError(t('signIn.emailRequired'));
      return;
    }

    localStorage.setItem('userEmail', email);
    setLoading(true);
    console.log('⏳ [LOGIN] Loading = true');

    try {
      console.log('📡 [LOGIN] Enviando requisição para /api/auth/login');
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log('📥 [LOGIN] Response recebido:', response.status, response.statusText);
      const data = await response.json();
      console.log('📦 [LOGIN] Data:', data);

      if (!response.ok) {
        console.log('❌ [LOGIN] Response não OK:', data.error);
        if (data.details === 'invalid_credentials') {
          throw new Error(t('signIn.invalidCredentials'));
        }
        throw new Error(data.error || t('signIn.loginError'));
      }

      console.log('✅ [LOGIN] Login bem-sucedido!');
      // Buscar dados do usuário para verificar role
      const userResponse = await fetch('/api/auth/me', {
        credentials: 'include',
      });

      if (userResponse.ok) {
        const userData = await userResponse.json();
        const isAdmin = userData.user.role === 'ADMIN';

        console.log('🔀 [LOGIN] Redirecionando baseado em role:', userData.user.role);

        // Redirecionar baseado no role
        if (isAdmin) {
          window.location.href = '/admin';
        } else {
          window.location.href = '/home';
        }
      } else {
        // Se falhar, redireciona para home por padrão
        window.location.href = '/home';
      }
    } catch (err: any) {
      console.log('💥 [LOGIN] Erro capturado:', err);
      setError(err.message || t('signIn.loginError'));
    } finally {
      console.log('🏁 [LOGIN] Finally - Loading = false');
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    const languages: Array<'pt' | 'en' | 'es'> = ['en', 'pt', 'es'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div className={styles['background-container']}>
        <img
          src="/images/background.png"
          alt="Background"
          className={styles['background-image']}
        />
      </div>

      {/* Header Buttons Container */}
      <div className={styles['header-container']} style={{ justifyContent: 'flex-end' }}>

        {/* Language Button */}
        <button onClick={toggleLanguage} className={styles['header-btn']}>
          {language.toUpperCase()}
        </button>

      </div>

      {/* Main Content */}
      <div className={styles['main-content']}>

        {/* Logos */}
        <div className={styles['logo-container']}>
          <img
            src="/images/logo-small.png"
            alt="World Autistic Logo"
            className={styles['logo-small']}
          />
          <img
            src="/images/logonova.png"
            alt="Puzzle"
            className={styles['logo-new']}
          />
        </div>

        {/* Blue Card Form */}
        <div className={styles['blue-card']}>

          <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'white' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{t('signIn.subscriberAccess')}</h2>
            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              {t('signIn.enterEmailDescription')}
            </p>
          </div>

          <form onSubmit={handleSignIn} >

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>{t('signIn.email')}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles['form-input']}
                placeholder={t('signIn.emailPlaceholder')}
              />
            </div>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>{t('signIn.password')}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles['form-input']}
                placeholder={t('signIn.passwordPlaceholder')}
              />
            </div>

            {/* Mensagem de erro */}
            {error && (
              <div style={{
                padding: '1rem',
                marginBottom: '1rem',
                backgroundColor: '#fee2e2',
                border: '1px solid #ef4444',
                borderRadius: '8px',
                color: '#b91c1c',
                fontSize: '0.9rem',
                fontWeight: 500,
                textAlign: 'left'
              }}>
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              className={styles['default-btn']}
              disabled={loading}
              style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer', marginTop: '1rem' }}
            >
              {loading ? t('signIn.verifying') : t('signIn.enterNow')}
            </button>

            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'white', fontSize: '0.9rem' }}>
              <span style={{ opacity: 0.85 }}>{t('signIn.noAccount')} </span>
              <Link href="/register" style={{ color: 'white', fontWeight: 600, textDecoration: 'underline' }}>
                {t('signIn.createAccount')}
              </Link>
            </div>

          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0', gap: '0.75rem' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>ou</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
          </div>

          {/* Sign in with Apple */}
          <button
            onClick={async () => {
              const ok = await signInWithApple();
              if (ok) window.location.href = '/home';
            }}
            disabled={appleLoading}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              width: '100%',
              height: '50px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: appleLoading ? 'not-allowed' : 'pointer',
              opacity: appleLoading ? 0.7 : 1,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 814 1000" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.8 131.4-317.7 260.8-317.7 70.2 0 128.7 46.2 168.7 46.2 38.5 0 105.5-49 184.7-49 28.8 0 107.6 2.6 167.1 72.2zm-240.1-166.6c31.5-37.1 54.2-89 54.2-140.9 0-7.1-.6-14.3-1.9-20.1-51.3 1.9-112.3 34.2-149.2 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 46.1 0 101.8-31 136.5-69.7z"/>
            </svg>
            {appleLoading ? '...' : 'Sign in with Apple'}
          </button>

          {appleError && (
            <p style={{ color: '#fee2e2', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center' }}>
              {appleError}
            </p>
          )}

        </div>

        {/* Footer links */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link href="/support" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', textDecoration: 'none' }}>
            Support
          </Link>
        </div>

      </div>

    </div>
  );
}

