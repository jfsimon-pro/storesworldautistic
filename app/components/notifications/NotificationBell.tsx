'use client';

import { usePushNotifications } from '../../hooks/usePushNotifications';
import { useLanguage } from '../../context/LanguageContext';

export default function NotificationBell() {
    const { isSubscribed, subscribeToPush, unsubscribeFromPush, loading } = usePushNotifications();
    const { t } = useLanguage();

    const handleToggle = () => {
        if (loading) return;
        if (isSubscribed) {
            unsubscribeFromPush();
        } else {
            subscribeToPush();
        }
    };

    return (
        <button
            onClick={handleToggle}
            title={isSubscribed ? t('notifications.disable') : t('notifications.enable')}
            style={{
                backgroundColor: isSubscribed ? '#10B981' : 'rgba(255, 255, 255, 0.95)',
                color: isSubscribed ? 'white' : '#667eea',
                border: `2px solid ${isSubscribed ? '#059669' : '#667eea'}`,
                borderRadius: '10px',
                width: '38px',
                height: '38px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                opacity: loading ? 0.7 : 1,
            }}
        >
            {loading ? '⏳' : isSubscribed ? '🔔' : '🔕'}
        </button>
    );
}
