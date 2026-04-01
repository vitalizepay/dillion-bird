import styles from './StreamlineNowWhy.module.css';

const points = [
  'Single point of accountability — one senior advisor owns your account',
  'Proactive compliance management — we flag issues before they become problems',
  'Fixed monthly fees with full transparency — no surprise invoices',
  'Scales with you — from startup to enterprise, our service grows as you do',
];

export default function StreamlineNowWhy() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Why Dillon &amp; Bird</span>
          </div>
          <h2 className={styles.h2}>
            The Smart Way to Run <em>Back Office</em>
          </h2>
          <p className={styles.desc}>
            Our integrated delivery model means one team handles everything —
            eliminating the fragmentation, duplication, and communication gaps
            that come with using multiple providers.
          </p>
          <div className={styles.points}>
            {points.map(p => (
              <div className={styles.point} key={p}>
                <div className={styles.check}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#2563eb" strokeWidth="2">
                    <polyline points="2 6 5 9 10 3"/>
                  </svg>
                </div>
                <div className={styles.pointText}>{p}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — stat box */}
        <div className={styles.right}>
          <div className={styles.statN}>40<span className={styles.statSup}>%</span></div>
          <div className={styles.statLabel}>Average time reclaimed by leadership</div>
          <p className={styles.statDesc}>
            Our clients consistently report that outsourcing corporate services to
            Dillon &amp; Bird frees up 40% or more of leadership bandwidth previously
            spent on administrative and compliance matters.
          </p>
        </div>

      </div>
    </section>
  );
}