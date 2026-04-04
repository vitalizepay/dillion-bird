import Link from 'next/link';
import styles from './HealthcareHero.module.css';

const kpis = [
  { n: '100%',  label: 'Regulatory compliance achieved' },
  { n: '6 wk',  label: 'Full remediation timeline' },
  { n: 'AED 0', label: 'Penalties or amendments' },
];

export default function HealthcareHero() {
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
          <span className={styles.tagPrimary}>Healthcare</span>
          <span className={styles.tagSecondary}>Audit &amp; Compliance</span>
          <span className={styles.tagSecondary}>Tax Advisory</span>
        </div>

        <h1 className={styles.h1}>
          Healthcare group achieves full UAE Corporate Tax compliance before Year 1 deadline
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
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=85&auto=format&fit=crop"
          alt="Modern healthcare facility interior"
        />
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}