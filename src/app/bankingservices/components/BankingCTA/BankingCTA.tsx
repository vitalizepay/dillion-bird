'use client';

import styles from './BankingCTA.module.css';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function BankCTA() {
  return (
    <section className={styles.sec}>
      <p className={styles.label}>Get Started Today</p>
      <h2 className={styles.h2}>Ready to Optimise Your<br /><em>Banking Arrangements?</em></h2>
      <p className={styles.sub}>
        Talk to a senior banking advisor. No obligation, no cost — just clear,<br />
        independent guidance on your financing options.
      </p>
      <div className={styles.acts}>
        <button onClick={scrollToContact} className={styles.btnOutline}>
          Request Free Consultation
        </button>
        <a href="https://wa.me/971585570593" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
          <img src="/whatsapplogo1.svg" alt="WhatsApp" width={18} height={18} />
          WhatsApp Us Now
        </a>
      </div>
    </section>
  );
}