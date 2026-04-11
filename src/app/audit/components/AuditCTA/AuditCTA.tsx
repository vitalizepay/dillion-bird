'use client';

import styles from './AuditCTA.module.css';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function AuditCTA() {
  return (
    <section className={styles.sec}>
      <p className={styles.label}>Get Started Today</p>
      <h2 className={styles.h2}>Ready for an Audit That<br /><em>Actually Helps Your Business?</em></h2>
      <p className={styles.sub}>
        Free, no-obligation consultation with a UAE audit specialist. Clear scope.<br />
        Fixed fee. Response guaranteed within 24 hours.
      </p>
      <div className={styles.acts}>
        <button onClick={scrollToContact} className={styles.btnOutline}>
          Book Free Consultation
        </button>
        <a href="https://wa.me/971585570593" target="_blank" rel="noopener" className={styles.btnPrimary}>
  <img src="/whatsapplogo1.svg" alt="WhatsApp" width={20} height={20} />
  WhatsApp +971 585 570 593
</a>
      </div>
    </section>
  );
}