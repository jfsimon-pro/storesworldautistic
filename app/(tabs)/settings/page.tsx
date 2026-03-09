'use client';

import { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import styles from '../../styles/Settings.module.css';
import { useLanguage } from '../../context/LanguageContext';
import NotificationSettings from '../../components/notifications/NotificationSettings';

export default function SettingsPage() {
    const { language, setLanguage, t } = useLanguage();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState('');

    const handleLogout = () => {
        // TODO: Implement actual logout functionality
        console.log('Logout clicked');
        // For now, redirect to home
        window.location.href = '/home';
    };

    const handleDeleteAccount = async () => {
        setDeleting(true);
        setDeleteError('');
        try {
            const response = await fetch('/api/auth/delete-account', {
                method: 'DELETE',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error();
            }

            window.location.href = '/';
        } catch {
            setDeleteError(t('settings.deleteAccountError'));
            setDeleting(false);
        }
    };

    return (
        <PageLayout backHref="/home">
            <div className={styles.container}>
                <h1 className={styles.title}>{t('settings.title')}</h1>

                <div className={styles.content}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t('settings.language')}</h2>
                        <div className={styles.languageButtons}>
                            <button
                                className={`${styles.languageButton} ${language === 'pt' ? styles.active : ''}`}
                                onClick={() => setLanguage('pt')}
                            >
                                PT
                            </button>
                            <button
                                className={`${styles.languageButton} ${language === 'en' ? styles.active : ''}`}
                                onClick={() => setLanguage('en')}
                            >
                                EN
                            </button>
                            <button
                                className={`${styles.languageButton} ${language === 'es' ? styles.active : ''}`}
                                onClick={() => setLanguage('es')}
                            >
                                ES
                            </button>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Notificações</h2>
                        <div style={{ marginTop: '10px' }}>
                            <NotificationSettings />
                        </div>
                    </div>

                    <button className={styles.logoutButton} onClick={handleLogout}>
                        {t('settings.logout')}
                    </button>

                    <button
                        className={styles.deleteAccountButton}
                        onClick={() => setShowDeleteConfirm(true)}
                    >
                        {t('settings.deleteAccount')}
                    </button>
                </div>
            </div>

            {showDeleteConfirm && (
                <div className={styles.confirmOverlay}>
                    <div className={styles.confirmBox}>
                        <p className={styles.confirmTitle}>{t('settings.deleteAccount')}</p>
                        <p className={styles.confirmText}>{t('settings.deleteAccountConfirm')}</p>

                        {deleteError && (
                            <p style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                                {deleteError}
                            </p>
                        )}

                        <div className={styles.confirmButtons}>
                            <button
                                className={styles.confirmDeleteBtn}
                                onClick={handleDeleteAccount}
                                disabled={deleting}
                            >
                                {deleting ? '...' : t('settings.deleteAccountConfirmBtn')}
                            </button>
                            <button
                                className={styles.confirmCancelBtn}
                                onClick={() => { setShowDeleteConfirm(false); setDeleteError(''); }}
                                disabled={deleting}
                            >
                                {t('settings.deleteAccountCancel')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </PageLayout>
    );
}
