'use client';

import { useCallback, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './ReferralForm.module.css';
import RealtorLookup from './RealtorLookup';
import layout from './ReferralLayout.module.css';
import RegistrationSuccessModal, { type RegistrationResult } from './ReferralSuccessModal';

// Paste your Apps Script deployment URL here.
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx4fJwxdHRDXEWFKRItsQCF_vx3snM9uQFOEgckf4HGS0jHlsRrvQ2EuNhw-o8Kg81V/exec";

// Test script URL (for local testing only, not for production):
// const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx-7LHHIaJJL2ZHvt6cZUvPsaiQzlupy6L0prwde-i2J0lmZbXCwvDEr96cKMv_r-J9/exec"

// Reuses the existing banner image from /public for the sidebar panel.
// Set to '' to show a plain green gradient instead.
const SIDEBAR_IMAGE = '/hero-farmland.png';

type Status = 'idle' | 'loading' | 'success' | 'error';

function LeafIcon({ size = 28 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

const BENEFITS = [
    'Earn commissions on verified land sales.',
    'Get access to your realtor referral network.',
    'Receive marketing support and resources.',
    'Work with Agrolocale to connect buyers with agricultural land opportunities.',
];

/**
 * NOTE: because this reads useSearchParams(), the page that renders this
 * component must wrap it in <Suspense> for `next build` with output: 'export'
 * to work, e.g.:
 *
 *   <Suspense fallback={null}>
 *     <ReferralForm />
 *   </Suspense>
 */
export default function ReferralForm() {
    const searchParams = useSearchParams();
    const referredBy = searchParams.get('ref') || '';
    const uplineDisplay = referredBy ? `Yes — referred by ${referredBy}` : 'No';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [realtorStatus, setRealtorStatus] = useState('');
    const [birthday, setBirthday] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [realtorsGroup, setRealtorsGroup] = useState('');

    const [status, setStatus] = useState<Status>('idle');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState<RegistrationResult | null>(null);
    const closeResult = useCallback(() => setResult(null), []);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const res = await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                // text/plain avoids a CORS preflight that Apps Script can't answer.
                // Apps Script still reads the body with JSON.parse() on its side.
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    name,
                    email,
                    whatsapp,
                    realtorStatus,
                    birthday,
                    bankName,
                    accountNumber,
                    accountName,
                    realtorsGroup,
                    referredBy,
                }),
            });

            let data;
            try {
                data = await res.json();
            } catch {
                setStatus('error');
                setMessage('Unexpected response from the server. Please try again, or contact support if this keeps happening.');
                return;
            }

            if (data.success) {
                setResult({
                    name: data.name || name,
                    email: data.email || email,
                    uplineName: data.uplineName || '',
                    referralLink: `${window.location.origin}/register?ref=${data.referralCode}`,
                });
                setStatus('idle');

                // Clear the form only on success — on any error the fields persist.
                setName('');
                setEmail('');
                setWhatsapp('');
                setRealtorStatus('');
                setBirthday('');
                setBankName('');
                setAccountNumber('');
                setAccountName('');
                setRealtorsGroup('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setMessage('Network error. Please check your connection and try again.');
        }
    }

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroBg} aria-hidden />
                <div className="container">
                    <div className={styles.heroContent}>
                        <p className={styles.heroTag}>Realtor Partner Program</p>
                        <h1 className={styles.heroTitle}>Register as an Agrolocale Realtor</h1>
                        <p className={styles.heroSub}>
                            Fill out this form to join our realtor network, receive your unique referral link, and start earning commissions from verified land sales.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.formSection}>
                <div className="container">
                    <div className={layout.grid}>
                        <div className={layout.formCard}>
                            <div className={layout.cardHeader}>
                                <span className={layout.badge} aria-hidden>
                                    <LeafIcon />
                                </span>
                                <div>
                                    <h2 className={layout.formTitle}>Realtor Registration Form</h2>
                                    <p className={layout.formIntro}>Complete your details below to activate your realtor profile and get started with referrals.</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className={layout.form}>
                                {referredBy && (
                                    <p className={layout.referredBy}>Referred by: {referredBy}</p>
                                )}

                                <div className={layout.fieldGrid}>
                                    <div className={layout.field}>
                                        <label className={layout.label}>Full name</label>
                                        <input
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={layout.input}
                                            placeholder="e.g. Adaora Okonkwo"
                                        />
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>Work email</label>
                                        <input
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={layout.input}
                                            placeholder="you@agency.com"
                                        />
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>WhatsApp number</label>
                                        <input
                                            required
                                            type="tel"
                                            value={whatsapp}
                                            onChange={(e) => setWhatsapp(e.target.value)}
                                            className={layout.input}
                                            placeholder="e.g. 08012345678"
                                        />
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>Are you an existing or newbie realtor?</label>
                                        <select
                                            required
                                            value={realtorStatus}
                                            onChange={(e) => setRealtorStatus(e.target.value)}
                                            className={`${layout.input} ${layout.select}`}
                                        >
                                            <option value="" disabled>Select one</option>
                                            <option value="Existing Realtor">Existing Realtor</option>
                                            <option value="Newbie Realtor">Newbie Realtor</option>
                                        </select>
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>Birthday</label>
                                        <input
                                            required
                                            type="date"
                                            value={birthday}
                                            onChange={(e) => setBirthday(e.target.value)}
                                            className={layout.input}
                                        />
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>Bank name</label>
                                        <input
                                            required
                                            value={bankName}
                                            onChange={(e) => setBankName(e.target.value)}
                                            className={layout.input}
                                            placeholder="e.g. GTBank"
                                        />
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>Account number</label>
                                        <input
                                            required
                                            value={accountNumber}
                                            onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ''))}
                                            className={layout.input}
                                            placeholder="10-digit account number"
                                            inputMode="numeric"
                                            pattern="\d{10}"
                                            maxLength={10}
                                            title="Enter a 10-digit account number"
                                        />
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>Account name</label>
                                        <input
                                            required
                                            value={accountName}
                                            onChange={(e) => setAccountName(e.target.value)}
                                            className={layout.input}
                                            placeholder="Name on the bank account"
                                        />
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>Realtors group</label>
                                        <input
                                            required
                                            value={realtorsGroup}
                                            onChange={(e) => setRealtorsGroup(e.target.value)}
                                            className={layout.input}
                                            placeholder="Which realtors group are you part of?"
                                        />
                                    </div>

                                    <div className={layout.field}>
                                        <label className={layout.label}>Do you have an upline?</label>
                                        <input
                                            readOnly
                                            disabled
                                            value={uplineDisplay}
                                            className={layout.input}
                                        />
                                    </div>
                                </div>

                                <div className={layout.actions}>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className={layout.submitButton}
                                    >
                                        {status === 'loading' ? 'Submitting...' : 'Register as Realtor'}
                                    </button>
                                </div>

                                {status === 'error' && <p className={layout.errorText}>{message}</p>}
                                <p className={layout.formNote}>After registration, your referral link will be generated instantly for client sharing.</p>
                            </form>
                        </div>

                        <aside className={layout.sidebar}>
                            <div>
                                <span className={layout.badge} aria-hidden>
                                    <LeafIcon />
                                </span>
                                <h2 className={layout.sidebarTitle}>Why Join Our Realtor Network?</h2>
                            </div>

                            <ul className={layout.benefits}>
                                {BENEFITS.map((text) => (
                                    <li key={text} className={layout.benefit}>
                                        <span className={layout.check}>
                                            <CheckIcon />
                                        </span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={layout.divider} />

                            <RealtorLookup scriptUrl={APPS_SCRIPT_URL} />

                            <div className={layout.imagePanel}>
                                {SIDEBAR_IMAGE && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={SIDEBAR_IMAGE} alt="" />
                                )}
                                <div className={layout.imageOverlay} />
                                <p className={layout.imageCaption}>
                                    More farmers. More land.
                                    <br />
                                    A greater future.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <RegistrationSuccessModal result={result} onClose={closeResult} />
        </div>
    );
}