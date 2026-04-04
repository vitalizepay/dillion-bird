import styles from './ClientSuccessHero.module.css';

const stats = [
  { n: '40', sup: '+', label: 'Engagements Delivered' },
  { n: '6',  sup: '',  label: 'GCC Markets Served' },
  { n: '94', sup: '%', label: 'Client Retention Rate' },
];

export default function ClientSuccessHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.grid}>

        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Proven Results</span>
          </div>
          <h1 className={styles.h1}>
            Where strategy<br />meets <em>real impact.</em>
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.desc}>
            Every engagement we undertake is a partnership with one goal: measurable,
            lasting results. Here is what &ldquo;Do More&rdquo; looks like in practice
            across the GCC.
          </p>
          <div className={styles.stats}>
            {stats.map(s => (
              <div className={styles.stat} key={s.label}>
                <span className={styles.statN}>
                  {s.n}<span className={styles.statSup}>{s.sup}</span>
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}