import styles from './BankingCrossLinks.module.css';

export default function BankingCrossLinks() {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <p className={styles.label}>Also From Dillon &amp; Bird</p>
        <p className={styles.text}>Audit, Tax &amp; Business Advisory Services</p>
      </div>
      <div className={styles.actions}>
        <a href="/audit" target="_blank" rel="noopener" className={styles.btnOutline}>
          Audit &amp; Assurance {'\u2197'}
        </a>
        <a href="/accountingfinancialservices" target="_blank" rel="noopener" className={styles.btnOutline}>
          Tax Services {'\u2197'}
        </a>
        <a href="/companyformation" target="_blank" rel="noopener" className={styles.btnOutline}>
          Business Advisory {'\u2197'}
        </a>
      </div>
    </div>
  );
}