'use client';

import styles from './CMOCTA.module.css';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function CMOCTA() {
  return (
    <section className={styles.sec}>
      <p className={styles.label}>Our Driving Philosophy</p>
      <h2 className={styles.h2}>With Dillon &amp; Bird,<br />You <em>Do More!</em></h2>
      <p className={styles.sub}>
        &ldquo;Do More!&rdquo; isn&apos;t just our tagline — it&apos;s our commitment to go
        beyond the expected, relentlessly pursue better marketing outcomes, and deliver real
        commercial impact across the GCC.
      </p>
      <div className={styles.acts}>
        <button onClick={scrollToContact} className={styles.btnPrimary}>
          Begin Your CMO Engagement
        </button>
        <a href="/about" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
          Learn About Us ↗
        </a>
      </div>
    </section>
  );
}