import styles from './AuditTestimonial.module.css';

export default function AuditTestimonial() {
  return (
    <blockquote className={styles.band}>
      <span className={styles.mark}>&ldquo;</span>
      <div className={styles.content}>
        <p className={styles.text}>
          Dillon & Bird&apos;s internal audit team identified three critical control gaps we had missed for two years. Their report was clear, actionable and delivered a week ahead of schedule.
        </p>
        <cite className={styles.auth}>CFO — Technology Scale-Up, DIFC · Internal Audit & Investor Reporting</cite>
        <div className={styles.pills}>
          {['Internal Audit', 'DIFC', 'Series A Fundraise', 'Fixed Fee'].map(p => (
            <span className={styles.pill} key={p}>{p}</span>
          ))}
        </div>
      </div>
    </blockquote>
  );
}