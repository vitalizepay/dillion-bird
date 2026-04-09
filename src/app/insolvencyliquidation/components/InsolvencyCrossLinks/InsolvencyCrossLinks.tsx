import Link from 'next/link';
import styles from './InsolvencyCrossLinks.module.css';

export default function InsolvencyCrossLinks() {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <p className={styles.label}>Also From Dillon &amp; Bird</p>
        <p className={styles.text}>Need to start fresh? We also handle company formation and audit services.</p>
      </div>
      <div className={styles.actions}>
        <a href="/companyformation" target="_blank" rel="noopener" className={styles.btnOutline}>
          Company Formation{' \u2197'}
        </a>
        <a href="/audit" target="_blank" rel="noopener" className={styles.btnOutline}>
          Audit & Finance{' \u2197'}
        </a>
      </div>
    </div>
  );
}