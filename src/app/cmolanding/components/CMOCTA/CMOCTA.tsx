import Link from 'next/link';
import styles from './CMOCTA.module.css';

export default function CMOCTA() {
  return (
    <section className={styles.sec}>
      <p className={styles.label}>Our Driving Philosophy</p>
      <h2 className={styles.h2}>With Dillon & Bird,<br />You <em>Do More!</em></h2>
      <p className={styles.sub}>
      "Do More!" isn't just our tagline — it's our commitment to go beyond the expected, relentlessly pursue better marketing outcomes, and deliver real commercial impact across the GCC.
      </p>
      <div className={styles.acts}>
        <a href="#contact" className={styles.btnPrimary}>Begin Your CMO Engagement</a>
        <a href="https://dillonbird.com/about" target="_blank" rel="noopener" className={styles.btnOutline}>
        Learn About Us ↗
        </a>
      </div>
    </section>
  );
}