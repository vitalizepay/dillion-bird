'use client';

import styles from './CFCTA.module.css';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function AuditCTA() {
  return (
    <section className={styles.sec}>

      {/* LEFT */}
      <div className={styles.content}>
        <p className={styles.label}>Free Consultation</p>
        <h2 className={styles.h2}>
          Ready to Launch Your<br />
          <em>UAE Business?</em>
        </h2>
        <p className={styles.sub}>
          Speak to a senior consultant today — free, no obligation, and no sales pressure.
        </p>
      </div>

      {/* RIGHT */}
      <div className={styles.acts}>
        <button onClick={scrollToContact} className={styles.btnOutline}>
          Get Free Consultation →
        </button>
        <a href="https://wa.me/971585570593" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
          <img src="/whatsapplogo1.svg" alt="WhatsApp" width={20} height={20} />
          WhatsApp Us
        </a>
      </div>

    </section>
  );
}