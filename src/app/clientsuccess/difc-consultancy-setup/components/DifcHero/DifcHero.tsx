import Link from 'next/link';
import styles from './DifcHero.module.css';

const kpis = [
  { n: '9',    label: 'Working days to first invoice' },
  { n: '4',    label: 'Multi-currency bank accounts' },
  { n: '100%', label: 'Foreign ownership retained' },
];

export default function DifcHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <Link href="/clientsuccess" className={styles.back}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          All Client Stories
        </Link>

        <div className={styles.tags}>
          <span className={styles.tagPrimary}>Professional Services</span>
          <span className={styles.tagSecondary}>Business Setup</span>
          <span className={styles.tagSecondary}>Banking Services</span>
        </div>

        <h1 className={styles.h1}>
          Independent consultancy established, banked, and trading
          in DIFC within nine working days
        </h1>

        <div className={styles.kpis}>
          {kpis.map(k => (
            <div className={styles.kpi} key={k.label}>
              <span className={styles.kpiN}>{k.n}</span>
              <span className={styles.kpiLabel}>{k.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imgPanel}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1400&q=85&auto=format&fit=crop"
          alt="DIFC Dubai financial district skyline"
        />
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}