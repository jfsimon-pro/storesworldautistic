'use client';

import { useState } from 'react';

export function useAppleSignIn() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const signInWithApple = async (): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            // Apple Sign In not yet configured — requires Apple Developer Portal setup
            setError('Sign in with Apple is not available yet.');
            return false;
        } catch (err: any) {
            setError(err.message || 'Sign in with Apple failed.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { signInWithApple, loading, error };
}
