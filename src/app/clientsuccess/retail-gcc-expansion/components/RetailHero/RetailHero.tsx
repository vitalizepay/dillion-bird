import Link from 'next/link';
import styles from './RetailHero.module.css';

const kpis = [
  { n: '38%', label: 'Revenue increase in 12 months' },
  { n: '3',   label: 'New GCC markets entered' },
  { n: '2×',  label: 'Unit contribution margin vs. Year 1' },
];

export default function RetailHero() {
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
          <span className={styles.tagPrimary}>Retail</span>
          <span className={styles.tagSecondary}>Management Consulting</span>
          <span className={styles.tagSecondary}>Market Entry</span>
        </div>

        <h1 className={styles.h1}>
          UAE retailer scales into Saudi Arabia and Kuwait with a franchise-ready model
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
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=85&auto=format&fit=crop"
          alt="Premium retail store interior"
        />
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}