import styles from './BankingCrossLinks.module.css';

export default function BankingCrossLinks() {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <p className={styles.label}>Also From Dillon &amp; Bird</p>
        <p className={styles.text}>Audit, CMO &amp; Company Formation Services</p>
      </div>
      <div className={styles.actions}>
        <a href="/audit" target="_blank" rel="noopener" className={styles.btnOutline}>
          Audit &amp; Assurance {'\u2197'}
        </a>
        <a href="/cmolanding" target="_blank" rel="noopener" className={styles.btnOutline}>
          CMO Services {'\u2197'}
        </a>
        <a href="/companyformation" target="_blank" rel="noopener" className={styles.btnOutline}>
          Company Formation {'\u2197'}
        </a>
      </div>
    </div>
  );
}