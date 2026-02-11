
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminNotificationsPage() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [url, setUrl] = useState('/');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch('/api/admin/notifications/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, message, url }),
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error sending notification:', error);
            setResult({ error: 'Failed to send notification' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            padding: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: '#F9FAFB',
            minHeight: '100vh',
        }}>
            <div style={{
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div>
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                    }}>📢 Enviar Notificações Push</h1>
                    <p style={{ color: '#6B7280' }}>
                        Envie mensagens para todos os usuários inscritos no PWA
                    </p>
                </div>
                <button
                    onClick={() => router.push('/admin')}
                    style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#3B82F6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontWeight: 600,
                    }}
                >
                    ← Voltar
                </button>
            </div>

            <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}>
                <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>
                            Título da Notificação
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            placeholder="Ex: Nova Atividade Disponível!"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.375rem',
                                border: '1px solid #D1D5DB',
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>
                            Mensagem
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder="Digite o conteúdo da notificação..."
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.375rem',
                                border: '1px solid #D1D5DB',
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>
                            URL de Destino (Opcional)
                        </label>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Ex: /activities"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.375rem',
                                border: '1px solid #D1D5DB',
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: '1rem',
                            backgroundColor: loading ? '#9CA3AF' : '#10B981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.5rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: loading ? 'not-allowed' : 'pointer',
                            marginTop: '1rem',
                        }}
                    >
                        {loading ? 'Enviando...' : 'Enviar Notificação 🚀'}
                    </button>
                </form>

                {result && (
                    <div style={{
                        marginTop: '2rem',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        backgroundColor: result.success ? '#ECFDF5' : '#FEF2F2',
                        border: '1px solid',
                        borderColor: result.success ? '#10B981' : '#EF4444',
                        color: result.success ? '#065F46' : '#991B1B',
                    }}>
                        {result.success ? (
                            <>
                                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Sucesso!</h3>
                                <p>Enviado para {result.sent} de {result.total} usuários inscritos.</p>
                            </>
                        ) : (
                            <>
                                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Erro</h3>
                                <p>{result.error}</p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
