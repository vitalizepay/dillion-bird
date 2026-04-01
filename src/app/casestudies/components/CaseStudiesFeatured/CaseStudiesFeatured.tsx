'use client';

import styles from './CaseStudiesFeatured.module.css';

const metrics = [
  { n: '4×',      label: 'Revenue in 18 months' },
  { n: '3',       label: 'New GCC Markets' },
  { n: 'Series B', label: 'Funding Secured' },
];

export default function WorkFeatured() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>Featured Partnership</span>
      </div>
      <h2 className={styles.h2}>
        Transformative <em>Results</em> at Scale
      </h2>

      <div className={styles.card}>

        {/* LEFT — image/logo panel */}
        <div className={styles.imgPanel}>
          <div className={styles.pattern} />
          <img
            src="https://dillonbird.com/washmen.svg"
            alt="Washmen"
            className={styles.clientImg}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className={styles.clientName}>Washmen</div>
        </div>

        {/* RIGHT — content */}
        <div className={styles.body}>
          <div className={styles.client}>
            Washmen · On-Demand Laundry · Dubai
          </div>
          <h3 className={styles.title}>
            Scaling a Laundry Startup into the GCC&apos;s Leading On-Demand Service
          </h3>
          <p className={styles.desc}>
            When Washmen approached Dillon &amp; Bird, they had strong product-market fit
            in Dubai but lacked the operational framework, financial infrastructure, and
            expansion strategy to scale. We redesigned their unit economics, built their
            investor model, and co-authored their GCC expansion strategy.
          </p>

          {/* Metrics row */}
          <div className={styles.metrics}>
            {metrics.map(m => (
              <div className={styles.metric} key={m.label}>
                <div className={styles.metricN}>{m.n}</div>
                <div className={styles.metricL}>{m.label}</div>
              </div>
            ))}
          </div>

          <button className={styles.btn}>
            Read Full Case Study →
          </button>
        </div>

      </div>
    </section>
  );
}