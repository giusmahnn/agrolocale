'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ReferralSuccessModal.module.css';

export type RegistrationResult = {
    name: string;
    email: string;
    uplineName: string;
    referralLink: string;
};

export default function RegistrationSuccessModal({
    result,
    onClose,
}: {
    result: RegistrationResult | null;
    onClose: () => void;
}) {
    const [copied, setCopied] = useState(false);
    const closeRef = useRef<HTMLButtonElement>(null);

    // Escape closes, background scroll locks, focus moves to the close button.
    useEffect(() => {
        if (!result) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [result, onClose]);

    // Reset the "Copied!" label each time a new result opens.
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCopied(false);
    }, [result]);

    if (!result) return null;

    async function copyLink() {
        try {
            await navigator.clipboard.writeText(result!.referralLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // Clipboard can be blocked; the link is still selectable in the field.
        }
    }

    return createPortal(
        <div className={styles.overlay} onClick={onClose} role="presentation">
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="registration-success-title"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    ref={closeRef}
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close and return to the form"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className={styles.header}>
                    <span className={styles.checkCircle} aria-hidden>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                    </span>
                    <h3 id="registration-success-title" className={styles.title}>
                        You&apos;re now registered as an Agrolocale realtor
                    </h3>
                    <p className={styles.subtitle}>
                        Share your referral link with clients so every qualified lead is tracked to your account.
                    </p>
                </div>

                <div className={styles.body}>
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
                            <dt>Upline</dt>
                            <dd>{result.uplineName || 'None'}</dd>
                        </div>
                    </dl>

                    <label className={styles.linkLabel} htmlFor="referral-link-field">
                        Your referral link
                    </label>
                    <div className={styles.linkRow}>
                        <input
                            id="referral-link-field"
                            readOnly
                            value={result.referralLink}
                            onFocus={(e) => e.target.select()}
                            className={styles.linkInput}
                        />
                        <button type="button" className={styles.copyButton} onClick={copyLink}>
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}