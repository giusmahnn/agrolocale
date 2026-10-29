import { Suspense } from 'react';
import ReferralForm from '@/components/referral/ReferralForm';
import styles from './register.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register as a Realtor | Agrolocale',
    description:
        'Join the Agrolocale realtor partner network. Complete the registration form to receive your referral link and onboard as a verified realtor.',
};

export default function RegisterPage() {
    return (
        <main className={styles.main}>
            <Suspense fallback={null}>
                <ReferralForm />
            </Suspense>
        </main>
    );
}