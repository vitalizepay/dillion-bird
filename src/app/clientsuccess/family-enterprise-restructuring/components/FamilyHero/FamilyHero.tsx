import Link from 'next/link';
import styles from './FamilyHero.module.css';

const kpis = [
  { n: 'AED 120M', label: 'Assets restructured & ring-fenced' },
  { n: '57%',      label: 'Reduction in annual holding costs' },
  { n: '8 mo',     label: 'Mandate to full implementation' },
];

export default function FamilyHero() {
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
          <span className={styles.tagPrimary}>Family Enterprise</span>
          <span className={styles.tagSecondary}>Financial Advisory</span>
          <span className={styles.tagSecondary}>Restructuring</span>
        </div>

        <h1 className={styles.h1}>
          Multi-generational family enterprise restructured
          for the next decade of GCC growth
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
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85&auto=format&fit=crop"
          alt="Dubai skyline family enterprise"
        />
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}