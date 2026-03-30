import styles from './GrowResults.module.css';

const results = [
  {
    n: '3.2×',
    label: 'Average Revenue Growth',
    desc: 'The average revenue multiple achieved by our strategic partnership clients within 36 months of engagement commencement.',
  },
  {
    n: 'AED 4B+',
    label: 'Total Value Created',
    desc: 'Cumulative enterprise value created across our portfolio of clients through strategic advisory, M&A support, and market expansion.',
  },
  {
    n: '200+',
    label: 'Businesses Transformed',
    desc: 'From early-stage startups securing their first institutional round to family businesses entering regional markets for the first time.',
  },
  {
    n: '94%',
    label: 'Client Retention Rate',
    desc: 'Our clients stay with us because results compound. Nearly all clients who complete a first engagement continue with a second.',
  },
];

export default function GrowResults() {
  return (
    <section className={styles.sec} id="results">
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.topRow}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Proven Impact</span>
          </div>
        </div>
        <h2 className={styles.h2}>
          Growth That <em>Speaks</em> for Itself
        </h2>

        {/* 2×2 grid */}
        <div className={styles.grid}>
          {results.map((r) => (
            <div className={styles.card} key={r.label}>
              <div className={styles.cardN}>{r.n}</div>
              <div className={styles.cardLabel}>{r.label}</div>
              <p className={styles.cardDesc}>{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}