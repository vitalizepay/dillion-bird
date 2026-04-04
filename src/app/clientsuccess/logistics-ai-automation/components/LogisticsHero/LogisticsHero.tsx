import Link from 'next/link';
import styles from './LogisticsHero.module.css';

const kpis = [
  { n: '50%',     label: 'Reduction in manual processing hours' },
  { n: 'AED 2.3M', label: 'Annual operational savings' },
  { n: '99.2%',   label: 'Document accuracy rate post-automation' },
];

export default function LogisticsHero() {
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
          <span className={styles.tagPrimary}>Logistics</span>
          <span className={styles.tagSecondary}>Technology Consulting</span>
          <span className={styles.tagSecondary}>Operations</span>
        </div>

        <h1 className={styles.h1}>
          Freight operator cuts manual overhead by 50% with AI-led workflow automation
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
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=85&auto=format&fit=crop"
          alt="Freight logistics warehouse operations"
        />
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}