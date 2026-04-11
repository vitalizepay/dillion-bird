'use client';

import styles from './ABKCTA.module.css';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function ABKCTA() {
  return (
    <section className={styles.sec}>
      <p className={styles.label}>Ready to Get Started?</p>
      <h2 className={styles.h2}>Stop Worrying About<br /><em>Your Numbers.</em></h2>
      <p className={styles.sub}>
        Hand your accounting to a dedicated UAE team. Free assessment, transparent pricing,
        and a named accountant from day one.
      </p>
      <div className={styles.acts}>
        <button onClick={scrollToContact} className={styles.btnOutline}>
          Get Free Assessment →
        </button>
        <a href="https://wa.me/971585570593" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
          <img src="/whatsapplogo1.svg" alt="WhatsApp" width={20} height={20} />
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}