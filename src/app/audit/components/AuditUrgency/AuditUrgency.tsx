'use client';

import styles from './AuditUrgency.module.css';

export default function AuditUrgency() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.band}>
      <p className={styles.txt}>
        🕐 FTA audit season is underway — don&apos;t wait until you receive a notice. Get your VAT compliance reviewed now.
      </p>
      <button onClick={scrollToContact} className={styles.cta}>
        Book Free Review →
      </button>
    </div>
  );
}