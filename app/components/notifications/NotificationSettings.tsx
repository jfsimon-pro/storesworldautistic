
'use client';

import { usePushNotifications } from '@/app/hooks/usePushNotifications';
import { useAuth } from '@/app/hooks/useAuth';
import styles from '../../styles/Settings.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function NotificationSettings() {
    const { user } = useAuth();
    const { isSubscribed, subscribeToPush, unsubscribeFromPush, loading, error } = usePushNotifications(user?.id);
    const { t } = useLanguage();

    return (
        <div className={styles.section}>
            {error && (
                <div style={{ color: 'red', marginBottom: '10px', textAlign: 'center' }}>
                    {error}
                </div>
            )}

            <p className={styles.sectionTitle}>
                {isSubscribed ? t('notifications.active') : t('notifications.inactive')}
            </p>

            <button
                onClick={isSubscribed ? unsubscribeFromPush : () => subscribeToPush()}
                disabled={loading}
                className={isSubscribed ? styles.logoutButton : styles.languageButton}
                style={{ marginTop: '10px', maxWidth: '200px' }}
            >
                {loading
                    ? t('notifications.processing')
                    : isSubscribed
                        ? t('notifications.disable')
                        : t('notifications.enable')
                }
            </button>
        </div>
    );
}
