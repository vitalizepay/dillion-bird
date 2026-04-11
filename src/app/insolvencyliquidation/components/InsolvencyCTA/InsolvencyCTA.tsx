'use client';

import styles from './InsolvencyCTA.module.css';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function InsolvencyCTA() {
  return (
    <section className={styles.sec}>
      <p className={styles.label}>Take the First Step</p>
      <h2 className={styles.h2}>
        You Don&apos;t Have to<br /><em>Face This Alone</em>
      </h2>
      <p className={styles.sub}>
        Speak to a UAE insolvency specialist today. Confidential, no-obligation,<br />
        and with a clear answer within 24 hours.
      </p>
      <div className={styles.acts}>
        <button onClick={scrollToContact} className={styles.btnOutline}>
          Get Free Consultation
        </button>
        <a href="https://wa.me/971585570593" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
          <img src="/whatsapplogo1.svg" alt="WhatsApp" width={20} height={20} />
          WhatsApp +971 585 570 593
        </a>
      </div>
    </section>
  );
}