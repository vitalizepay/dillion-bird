import Link from 'next/link';
import styles from './FbHero.module.css';

const kpis = [
  { n: '29%',     label: 'EBITDA margin improvement' },
  { n: '12 mo',   label: 'Full transformation timeline' },
  { n: 'AED 4.2M', label: 'Annualised EBITDA uplift' },
];

export default function FbHero() {
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
          <span className={styles.tagPrimary}>F&amp;B / Hospitality</span>
          <span className={styles.tagSecondary}>Management Consulting</span>
          <span className={styles.tagSecondary}>Operations</span>
        </div>

        <h1 className={styles.h1}>
          Multi-brand F&amp;B group achieves 29% EBITDA improvement<br />
          through data-driven portfolio optimisation
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
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85&auto=format&fit=crop"
          alt="Fine dining restaurant UAE"
        />
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Read the story</span>
      </div>
    </section>
  );
}