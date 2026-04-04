import Link from 'next/link';
import styles from './RealEstateHero.module.css';

const kpis = [
  { n: 'AED 45M',  label: 'Institutional capital secured' },
  { n: '63%',      label: 'Improvement in debt-to-equity ratio' },
  { n: 'AED 180M', label: 'GDV of project funded' },
];

export default function RealEstateHero() {
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
          <span className={styles.tagPrimary}>Real Estate</span>
          <span className={styles.tagSecondary}>Financial Advisory</span>
          <span className={styles.tagSecondary}>Investor Services</span>
        </div>

        <h1 className={styles.h1}>
          Boutique developer secures AED 45M institutional backing for mixed-use scheme in Ras Al Khaimah
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
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=85&auto=format&fit=crop"
          alt="Real estate development project"
        />
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}