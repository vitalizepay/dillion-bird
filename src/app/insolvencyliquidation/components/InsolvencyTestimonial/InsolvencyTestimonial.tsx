import styles from './InsolvencyTestimonial.module.css';

export default function AuditTestimonial() {
  return (
    <blockquote className={styles.band}>
      <span className={styles.mark}>&ldquo;</span>
      <div className={styles.content}>
        <p className={styles.text}>
          Dillon & Bird andled our voluntary liquidation with complete discretion and professionalism. What could have been months of uncertainty was resolved cleanly in 14 weeks. Their team knew exactly who to speak to and what needed to happen at every stage..
        </p>
        <cite className={styles.auth}>Managing Director — Gulf Ventures DMCC · Voluntary Liquidation, Dubai</cite>
        <div className={styles.pills}>
          {['Voluntary Liquidation', 'DMCC', '14 Weeks'].map(p => (
            <span className={styles.pill} key={p}>{p}</span>
          ))}
        </div>
      </div>
    </blockquote>
  );
}