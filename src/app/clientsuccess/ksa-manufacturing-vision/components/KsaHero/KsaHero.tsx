import Link from 'next/link';
import styles from './KsaHero.module.css';

const kpis = [
  { n: 'SAR 28M', label: 'Government grant funding secured' },
  { n: '72%',     label: 'Reduction in projected first-year losses' },
  { n: 'IKTVA',  label: 'Full compliance achieved' },
];

export default function KsaHero() {
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
          <span className={styles.tagPrimary}>Manufacturing</span>
          <span className={styles.tagSecondary}>Financial Advisory</span>
          <span className={styles.tagSecondary}>Market Entry</span>
          <span className={styles.tagSecondary}>Vision 2030</span>
        </div>

        <h1 className={styles.h1}>
          UAE manufacturer wins SAR 28M in KSA Vision 2030 grants<br />
          and builds a Saudi operation from zero
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
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=85&auto=format&fit=crop"
          alt="Industrial manufacturing plant operations"
        />
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}