import Link from 'next/link';
import styles from './CaseHero.module.css';

const kpis = [
  { n: '14',  label: 'Working days to operational readiness' },
  { n: '42%', label: 'Lower setup cost vs. initial estimates' },
  { n: '4',   label: 'Enterprise contracts activated on Day 1' },
];

export default function CaseHero() {
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
          <span className={styles.tagPrimary}>Technology</span>
          <span className={styles.tagSecondary}>Business Setup</span>
          <span className={styles.tagSecondary}>Banking Services</span>
        </div>

        <h1 className={styles.h1}>
          European SaaS firm enters UAE market in 14 days without a local partner
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

      {/* Right image panel */}
      <div className={styles.imgPanel}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85&auto=format&fit=crop"
          alt="Modern tech office workspace"
        />
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}