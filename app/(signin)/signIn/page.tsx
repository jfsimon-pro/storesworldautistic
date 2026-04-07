'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/Register.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function SignInPage() {
  const { t, language, setLanguage } = useLanguage();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
    if (!email) {
      console.log('❌ [LOGIN] Validação falhou: email vazio');
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
        }),
      });

      console.log('📥 [LOGIN] Response recebido:', response.status, response.statusText);
      const data = await response.json();
      console.log('📦 [LOGIN] Data:', data);

      if (!response.ok) {
        console.log('❌ [LOGIN] Response não OK:', data.error);
        if (data.details === 'subscription_required') {
          throw new Error(t('signIn.subscriptionRequired'));
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
      <div className={styles['header-container']}>

        {/* Back Button */}
        <Link href="/" className={styles['header-btn']}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles['header-icon']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>

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

          </form>

        </div>

        {/* Legal links */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '1rem',
          flexWrap: 'wrap',
        }}>
          <Link href="/terms" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', textDecoration: 'underline' }}>
            Termos de Uso
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>|</span>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', textDecoration: 'underline' }}>
            Politica de Privacidade
          </Link>
        </div>

      </div>

    </div>
  );
}

