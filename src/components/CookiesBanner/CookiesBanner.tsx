'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookiesBanner.module.css';

type Consent = 'accepted' | 'essential' | 'declined' | null;

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    const stored = localStorage.getItem('db_cookie_consent') as Consent;
    if (!stored) setVisible(true);
    else setConsent(stored);
  }, []);

  const save = (val: Consent) => {
    localStorage.setItem('db_cookie_consent', val as string);
    setConsent(val);
    setVisible(false);
  };

  const reopen = () => setVisible(true);

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        <div className={styles.top}>
          <div className={styles.iconWrap}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1010 10h-2a8 8 0 11-4.93-7.36"/>
              <circle cx="12" cy="12" r="1" fill="#2563eb"/>
              <circle cx="17" cy="7" r="1" fill="#2563eb"/>
              <circle cx="20" cy="12" r="1" fill="#2563eb"/>
            </svg>
          </div>
          <div className={styles.text}>
            <p className={styles.title}>We use cookies</p>
            <p className={styles.desc}>
              We use cookies to improve your experience, analyse site traffic, and serve
              relevant content. Choose your preference below.{' '}
              <Link href="/cookies" className={styles.link}>Learn more</Link>
            </p>
          </div>
        </div>

        {/* Cookie categories info */}
        <div className={styles.categories}>
          <div className={styles.cat}>
            <div className={styles.catHeader}>
              <span className={styles.catName}>Essential</span>
              <span className={styles.catBadge}>Always On</span>
            </div>
            <p className={styles.catDesc}>Required for the website to function. Cannot be disabled.</p>
          </div>
          <div className={styles.cat}>
            <div className={styles.catHeader}>
              <span className={styles.catName}>Analytics</span>
              <span className={styles.catOptional}>Optional</span>
            </div>
            <p className={styles.catDesc}>Helps us understand how visitors use our site.</p>
          </div>
          <div className={styles.cat}>
            <div className={styles.catHeader}>
              <span className={styles.catName}>Marketing</span>
              <span className={styles.catOptional}>Optional</span>
            </div>
            <p className={styles.catDesc}>Used to show relevant ads and track campaign performance.</p>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.acts}>
          <button className={styles.btnDecline} onClick={() => save('declined')}>
            Decline All
          </button>
          <button className={styles.btnEssential} onClick={() => save('essential')}>
            Essential Only
          </button>
          <button className={styles.btnAccept} onClick={() => save('accepted')}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}