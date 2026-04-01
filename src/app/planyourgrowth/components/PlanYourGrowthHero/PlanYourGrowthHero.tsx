import Link from 'next/link';
import styles from './PlanYourGrowthHero.module.css';

const stats = [
  { n: '180', sup: '+',       label: 'Strategy Mandates Completed' },
  { n: '6',   sup: ' markets', label: 'GCC Coverage' },
  { n: '3.2', sup: '×',       label: 'Avg. Client Revenue Growth' },
];

export default function PlanYourGrowthHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.grid}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>Management Consulting</span>
          </div>
          <h1 className={styles.h1}>
            Plan Your <em>Growth.</em><br />
            Execute with Precision.
          </h1>
          <p className={styles.desc}>
            Clear strategy is the difference between companies that scale and companies
            that stall. Our management consulting practice brings senior-level strategic
            thinking to every challenge — from market entry to operational overhaul.
          </p>
          <div className={styles.acts}>
            <Link href="/buildwithus" target="_blank" rel="noopener" className={styles.btnPrimary}>
              Start Your Strategy →
            </Link>
            <Link href="/casestudies" target="_blank" rel="noopener" className={styles.btnOutline}>
              See Case Studies
            </Link>
          </div>
        </div>

        {/* RIGHT — stats box */}
        <div className={styles.stats}>
          {stats.map(s => (
            <div className={styles.stat} key={s.label}>
              <div className={styles.statN}>
                {s.n}<span className={styles.statSup}>{s.sup}</span>
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}