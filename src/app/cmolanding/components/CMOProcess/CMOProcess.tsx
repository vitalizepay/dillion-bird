import styles from './CMOProcess.module.css';

const steps = [
  {
    n: '01',
    name: 'Discovery',
    desc: 'Deep-dive audit of your current marketing function, capabilities, and commercial objectives — identifying gaps, quick wins, and strategic priorities.',
  },
  {
    n: '02',
    name: 'Strategy Design',
    desc: 'Bespoke marketing strategy aligned to your business goals and growth stage — complete with a phased roadmap, resource model, and measurable KPIs.',
  },
  {
    n: '03',
    name: 'Embedded Leadership',
    desc: 'Your Fractional CMO attends leadership meetings, leads marketing initiatives, and drives accountability across every dimension of the function.',
  },
  {
    n: '04',
    name: 'Execution',
    desc: 'We manage campaigns, vendors, and internal teams — iterating continuously based on performance data to maximise ROI and business impact.',
  },
  {
    n: '05',
    name: 'Capability Transfer',
    desc: 'We build your internal marketing capability as we go — hiring, training, and structuring the team so you sustain excellence long-term, independently.',
  },
];

export default function CMOProcess() {
  return (
    <section className={styles.sec} id="process">

      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Our Engagement Model</span>
        </div>
        <h2 className={styles.h2}>How We <em>Deliver</em></h2>
      </div>

      <div className={styles.steps}>
        {steps.map(s => (
          <div className={styles.step} key={s.n}>
            <div className={styles.topRow}>
              <div className={styles.dot}>
                <span className={styles.dotN}>{s.n}</span>
              </div>
            </div>
            <div className={styles.stepName}>{s.name}</div>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}