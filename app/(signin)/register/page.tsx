'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Register.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { useAppleSignIn } from '../../hooks/useAppleSignIn';

export default function RegisterPage() {
  const { t, language, setLanguage } = useLanguage();
  const { signInWithApple, loading: appleLoading, error: appleError } = useAppleSignIn();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const toggleLanguage = () => {
    const languages: Array<'pt' | 'en' | 'es'> = ['en', 'pt', 'es'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!fullName || !email || !confirmEmail || !password) {
      setError(t('register.allFieldsRequired'));
      return;
    }

    if (email !== confirmEmail) {
      setError(t('register.emailsNotMatch'));
      return;
    }

    if (password.length < 6) {
      setError(t('register.passwordMinLength'));
      return;
    }

    if (!agreeTerms) {
      setError(t('register.mustAgreeTerms'));
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('register.error'));
      }

      setSuccess(t('register.success'));
      setTimeout(() => { window.location.href = '/home'; }, 1500);
    } catch (err: any) {
      setError(err.message || t('register.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div className={styles['background-container']}>
        <img src="/images/background.png" alt="Background" className={styles['background-image']} />
      </div>

      {/* Header */}
      <div className={styles['header-container']}>
        <Link href="/signIn" className={styles['header-btn']}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles['header-icon']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>

        <button onClick={toggleLanguage} className={styles['header-btn']}>
          {language.toUpperCase()}
        </button>
      </div>

      {/* Main Content */}
      <div className={styles['main-content']}>

        {/* Logos */}
        <div className={styles['logo-container']}>
          <img src="/images/logo-small.png" alt="World Autistic Logo" className={styles['logo-small']} />
          <img src="/images/logonova.png" alt="Logo" className={styles['logo-new']} />
        </div>

        {/* Form Card */}
        <div className={styles['blue-card']}>

          <div style={{ textAlign: 'center', marginBottom: '1.25rem', color: 'white' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{t('register.title')}</h2>
          </div>

          <form onSubmit={handleRegister}>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>{t('register.name')}</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={styles['form-input']}
              />
            </div>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>{t('register.email')}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles['form-input']}
              />
            </div>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>{t('register.confirmEmail')}</label>
              <input
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                className={styles['form-input']}
              />
            </div>

            <div className={styles['form-group']}>
              <label className={styles['form-label']}>{t('register.password')}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles['form-input']}
              />
            </div>

            <label className={styles['checkbox-container']}>
              <input
                type="checkbox"
                className={styles['checkbox-input']}
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <div className={styles['checkbox-custom']}>
                <svg className={styles['checkbox-icon']} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <span className={styles['checkbox-text']}>{t('register.agreeTerms')}</span>
            </label>

            {error && (
              <div style={{ padding: '1rem', marginBottom: '1rem', backgroundColor: '#fee2e2', border: '1px solid #ef4444', borderRadius: '8px', color: '#b91c1c', fontSize: '0.9rem' }}>
                {error}
              </div>
            )}

            {success && (
              <div style={{ padding: '1rem', marginBottom: '1rem', backgroundColor: '#dcfce7', border: '1px solid #86efac', borderRadius: '8px', color: '#166534', fontSize: '0.9rem' }}>
                {success}
              </div>
            )}

            <button
              type="submit"
              className={styles['default-btn']}
              disabled={loading}
              style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? t('register.creating') : t('register.register')}
            </button>

            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'white', fontSize: '0.9rem' }}>
              <span style={{ opacity: 0.85 }}>{t('register.alreadyHaveAccount')} </span>
              <Link href="/signIn" style={{ color: 'white', fontWeight: 600, textDecoration: 'underline' }}>
                {t('register.signIn')}
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
      </div>
    </div>
  );
}
