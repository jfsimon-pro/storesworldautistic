
import { useState, useEffect } from 'react';

const publicVapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

export function usePushNotifications() {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [subscription, setSubscription] = useState<PushSubscription | null>(null);
    const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window) {
            // Register service worker if not already registered (though usually done in layout or main entry)
            // Ideally we just get the registration
            navigator.serviceWorker.ready.then(reg => {
                setRegistration(reg);
                reg.pushManager.getSubscription().then(sub => {
                    if (sub) {
                        setSubscription(sub);
                        setIsSubscribed(true);
                    }
                    setLoading(false);
                });
            });
        } else {
            setLoading(false);
            setError('Push notifications are not supported directly in this browser context (or Service Workers are disabled).');
        }
    }, []);

    const subscribeToPush = async (userId?: string) => {
        setLoading(true);
        setError(null);
        try {
            if (!registration) {
                setError('Service Worker não está pronto ou não é suportado.');
                setLoading(false);
                return;
            }

            if (!publicVapidKey) {
                setError('Chave pública VAPID não encontrada.');
                setLoading(false);
                return;
            }

            // Check permission state first
            let permission = Notification.permission;
            if (permission === 'default') {
                permission = await Notification.requestPermission();
            }

            if (permission !== 'granted') {
                setError('Permissão negada. Por favor, habilite as notificações nas configurações do seu navegador.');
                setLoading(false);
                return;
            }

            const sub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
            });

            setSubscription(sub);
            setIsSubscribed(true);

            // Send subscription to backend
            await fetch('/api/notifications/subscribe', {
                method: 'POST',
                body: JSON.stringify({ subscription: sub, userId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Subscribed to push notifications!');
        } catch (err: any) {
            console.error('Failed to subscribe:', err);
            // Handle specific error for permission denied if the catch block catches it
            if (err.name === 'NotAllowedError' || err.message.includes('permission denied')) {
                setError('Permissão negada pelo navegador. Verifique as configurações do site (ícone de cadeado na barra de endereço).');
            } else {
                setError(`Erro ao inscrever: ${err.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const unsubscribeFromPush = async () => {
        setLoading(true);
        try {
            if (subscription) {
                await subscription.unsubscribe();
                setSubscription(null);
                setIsSubscribed(false);
                // Optionally notify backend to delete subscription
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        isSubscribed,
        subscription,
        subscribeToPush,
        unsubscribeFromPush,
        error,
        loading
    };
}

// Helper function to convert VAPID key
function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
