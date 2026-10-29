'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import styles from './RealtorLookup.module.css';

type LookupResult = {
    name: string;
    email: string;
    referralCode: string;
    downlineCount: number;
    uplineName: string;
};

type Status = 'idle' | 'loading' | 'error' | 'notFound';

export default function RealtorLookup({ scriptUrl }: { scriptUrl: string }) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<Status>('idle');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState<LookupResult | null>(null);
    const [copied, setCopied] = useState<'code' | 'link' | null>(null);

    // Close the modal with the Escape key.
    useEffect(() => {
        if (!result) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setResult(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [result]);

    async function handleSearch(e: FormEvent) {
        e.preventDefault();

        setStatus('loading');
        setMessage('');
        setResult(null);

        const showTemporaryMessage = (status: Status, message: string) => {
            setStatus(status);
            setMessage(message);

            setTimeout(() => {
                setMessage('');
                setStatus('idle');
            }, 5000);
        };

        try {
            const res = await fetch(scriptUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    action: 'lookup',
                    email,
                }),
            });

            let data;

            try {
                data = await res.json();
            } catch {
                showTemporaryMessage(
                    'error',
                    'Unexpected response from the server. Please try again.'
                );

                return;
            }

            if (!data.success) {
                showTemporaryMessage(
                    'error',
                    data.error || 'Something went wrong. Please try again.'
                );

                return;
            }

            if (!data.found) {
                showTemporaryMessage(
                    'notFound',
                    'No record found for this email. Please check the spelling or register above.'
                );

                return;
            }

            setStatus('idle');
            setMessage('');

            setResult({
                name: data.name,
                email: data.email,
                referralCode: data.referralCode,
                downlineCount: data.downlineCount,
                uplineName: data.uplineName,
            });

        } catch {
            showTemporaryMessage(
                'error',
                'Network error. Please check your connection and try again.'
            );
        }
    }

    async function copy(text: string, which: 'code' | 'link') {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(which);
            setTimeout(() => setCopied(null), 1500);
        } catch {
            // Clipboard can be blocked; the text is still selectable on screen.
        }
    }

    const referralLink = result
        ? `${typeof window !== 'undefined' ? window.location.origin : ''}/register?ref=${result.referralCode}`
        : '';

    return (
        <>
            <div className={styles.lookupCard}>
                <h2 className={styles.lookupTitle}>Already registered?</h2>
                <p className={styles.lookupIntro}>Enter your email to view your referral details.</p>
                <form onSubmit={handleSearch} className={styles.lookupForm}>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.lookupInput}
                        placeholder="you@agency.com"
                        aria-label="Email address"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={styles.lookupButton}
                    >
                        {status === 'loading' ? 'Searching...' : 'Search'}
                    </button>
                </form>
                {(status === 'error' || status === 'notFound') && (
                    <p className={styles.lookupMessage}>{message}</p>
                )}
            </div>

            {result && createPortal(
                <div
                    className={styles.overlay}
                    onClick={() => setResult(null)}
                    role="presentation"
                >
                    <div
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="lookup-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setResult(null)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <h3 id="lookup-modal-title" className={styles.modalTitle}>Your details</h3>

                        <dl className={styles.details}>
                            <div className={styles.row}>
                                <dt>Full name</dt>
                                <dd>{result.name}</dd>
                            </div>
                            <div className={styles.row}>
                                <dt>Email</dt>
                                <dd>{result.email}</dd>
                            </div>
                            <div className={styles.row}>
                                <dt>Referral code</dt>
                                <dd className={styles.codeRow}>
                                    <code className={styles.code}>{result.referralCode}</code>
                                    <button
                                        type="button"
                                        className={styles.copyButton}
                                        onClick={() => copy(result.referralCode, 'code')}
                                    >
                                        {copied === 'code' ? 'Copied!' : 'Copy'}
                                    </button>
                                </dd>
                            </div>
                            <div className={styles.row}>
                                <dt>Total downlines</dt>
                                <dd>{result.downlineCount}</dd>
                            </div>
                            <div className={styles.row}>
                                <dt>Upline</dt>
                                <dd>{result.uplineName || 'None'}</dd>
                            </div>
                        </dl>

                        <button
                            type="button"
                            className={styles.linkButton}
                            onClick={() => copy(referralLink, 'link')}
                        >
                            {copied === 'link' ? 'Link copied!' : 'Copy referral link'}
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}