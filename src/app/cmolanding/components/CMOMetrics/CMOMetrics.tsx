import styles from './CMOMetrics.module.css';

const metrics = [
  {
    n: '20', sup: '%',
    label: 'of full-time CMO cost',
    desc: 'Senior leadership without the salary overhead or recruitment risk',
  },
  {
    n: '5', sup: '×',
    label: 'faster than hiring',
    desc: 'No recruitment cycle — embedded and delivering value from week one',
  },
  {
    n: '360', sup: '°',
    label: 'marketing coverage',
    desc: 'Strategy, digital, performance, MarTech, and GTM — all in one engagement',
  },
  {
    n: 'GCC', sup: '+',
    label: 'regional expertise',
    desc: 'Deep knowledge of Gulf consumer markets, regulations, and business culture',
  },
];

export default function CMOMetrics() {
  return (
    <div className={styles.strip} aria-label="Key metrics">
      {metrics.map((m) => (
        <div className={styles.item} key={m.label}>
          <div className={styles.number}>
            {m.n}<span className={styles.sup}>{m.sup}</span>
          </div>
          <div className={styles.label}>{m.label}</div>
          <div className={styles.desc}>{m.desc}</div>
        </div>
      ))}
    </div>
  );
}