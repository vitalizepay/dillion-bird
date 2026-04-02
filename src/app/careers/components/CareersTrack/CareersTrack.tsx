import styles from './CareersTrack.module.css';

const tracks = [
  {
    n: '01',
    title: 'Analyst',
    desc: 'Research, financial modelling, and client deliverables under close senior guidance. Real mandates from week one.',
    chip: '0 – 2 years',
  },
  {
    n: '02',
    title: 'Associate',
    desc: 'Own workstreams independently, lead client interactions, develop your own strategic point of view on complex mandates.',
    chip: '2 – 5 years',
  },
  {
    n: '03',
    title: 'Associate Director',
    desc: 'Lead engagement teams, own senior relationships, develop new business. Recognised expert in at least one practice area.',
    chip: '5 – 9 years',
  },
  {
    n: '04',
    title: 'Partner',
    desc: "Own client relationships at the highest level. Drive firm strategy, mentor the next generation, and share in D&B's success.",
    chip: '9+ years · Merit',
  },
];

export default function CareersTrack() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>Career Progression</span>
      </div>
      <h2 className={styles.h2}>
        Where You Can <em>Go From Here</em>
      </h2>
      <p className={styles.sub}>
        We&apos;re transparent about how progression works. Here&apos;s the advisory
        track — and exactly what it takes to move through it.
      </p>

      <div className={styles.grid}>
        {tracks.map((t, i) => (
          <div className={styles.card} key={t.n}>
            <div className={styles.cardN}>{t.n}</div>
            <h3 className={styles.cardTitle}>{t.title}</h3>
            <p className={styles.cardDesc}>{t.desc}</p>
            <span className={styles.chip}>{t.chip}</span>
          </div>
        ))}
      </div>
    </section>
  );
}