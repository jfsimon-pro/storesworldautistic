export async function register() {
    // Only run in Node.js runtime (not Edge), and only on the server
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const { startNotificationProcessor } = await import('./app/lib/notificationProcessor');
        startNotificationProcessor();
    }
}
