'use client';

import styles from './CaseStudiesHero.module.css';

const stats = [
  { n: '200', sup: '+', label: 'Completed Engagements' },
  { n: '94',  sup: '%', label: 'Client Retention Rate' },
  { n: '3.2', sup: '×', label: 'Average Revenue Growth' },
];

export default function WorkHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.grid}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>Case Studies</span>
          </div>
          <h1 className={styles.h1}>
            Businesses We&apos;ve <em>Transformed.</em>
          </h1>
          <p className={styles.desc}>
            We believe the best measure of an advisory firm is its clients&apos; results —
            not its credentials or its consultants&apos; CVs. Here&apos;s a selection of
            the transformations we&apos;re most proud of.
          </p>
        </div>

        {/* RIGHT — stats */}
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