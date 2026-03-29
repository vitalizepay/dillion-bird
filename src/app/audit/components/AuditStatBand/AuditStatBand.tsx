import styles from './AuditStatBand.module.css';

const stats = [
  { pre: '500', suf: '+', l1: 'Audit Engagements', l2: 'Completed' },
  { pre: 'AED ', suf: '2B+', l1: 'Assets Reviewed', l2: 'Across GCC' },
  { pre: '100', suf: '%', l1: 'FTA Audit Visits', l2: 'Successfully Managed' },
  { pre: '24', suf: 'hr', l1: 'Guaranteed Response', l2: 'on Every Enquiry' },
];

export default function AuditStatBand() {
  return (
    <div className={styles.band}>
      {stats.map(s => (
        <div className={styles.cell} key={s.suf}>
          <div className={styles.n}>
            {s.pre}<em>{s.suf}</em>
          </div>
          <div className={styles.l}>{s.l1}<br />{s.l2}</div>
        </div>
      ))}
    </div>
  );
}