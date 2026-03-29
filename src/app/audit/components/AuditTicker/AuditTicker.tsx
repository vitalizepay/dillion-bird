import styles from './AuditTicker.module.css';

const items = [
  'Internal Audit', 'VAT Compliance Audit', 'Corporate Tax Audit',
  'External Audit Readiness', 'Financial Due Diligence',
  'Forensic Investigation', 'AML Compliance Review',
  'IFRS Advisory', 'Risk Assessment', 'Internal Controls Review',
];

export default function AuditTicker() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.ticker}>
      <span className={styles.label}>Our Services</span>
      <div className={styles.sep} />
      <div className={styles.track}>
        <div className={styles.inner}>
          {doubled.map((item, i) => (
            <span key={i}>{item} <span className={styles.dot}>·</span></span>
          ))}
        </div>
      </div>
    </div>
  );
}