import styles from './PlanYourGrowthMethod.module.css';

const steps = [
  {
    n: '01',
    title: 'Strategic Diagnosis',
    desc: 'We map your current reality — financial performance, competitive position, organisational capability, and market dynamics — with the precision of a surgeon, not the broad strokes of a theorist.',
  },
  {
    n: '02',
    title: 'Opportunity Architecture',
    desc: 'We identify, size, and prioritise your growth opportunities through a combination of quantitative market analysis and qualitative insight gathered from our deep GCC network.',
  },
  {
    n: '03',
    title: 'Strategy Development',
    desc: 'We develop your strategic choices — where to play, how to win, what capabilities to build — and test them rigorously before committing to a course of action.',
  },
  {
    n: '04',
    title: 'Execution Roadmap',
    desc: 'We translate strategy into a 90-day, 12-month, and 36-month execution roadmap with clear owners, milestones, and success metrics — making strategy actionable at every level.',
  },
  {
    n: '05',
    title: 'Implementation Partnership',
    desc: 'We stay alongside you through implementation — not just to monitor progress, but to actively remove roadblocks, adapt to market feedback, and ensure the strategy delivers its intended results.',
  },
];

export default function PlanYourGrowthMethod() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>Our Method</span>
      </div>
      <h2 className={styles.h2}>
        Strategy That <em>Sticks</em>
      </h2>
      <p className={styles.sub}>
        Most consulting strategies fail at the implementation stage. Ours don&apos;t —
        because we design for execution from day one.
      </p>

      <div className={styles.steps}>
        {steps.map(s => (
          <div className={styles.step} key={s.n}>
            <div className={styles.stepN}>{s.n}</div>
            <div className={styles.stepContent}>
              <div className={styles.stepTitle}>{s.title}</div>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}