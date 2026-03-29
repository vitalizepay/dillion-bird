import styles from './ABKProcess.module.css';

const steps = [
  {
    n: '1',
    name: 'Free Discovery Call',
    desc: 'We review your current setup, software, filing status and pain-points — no charge, no obligation.',
  },
  {
    n: '2',
    name: 'Tailored Proposal',
    desc: 'We send a fixed-scope, fixed-fee proposal within 24 hours — transparent pricing with no hidden extras.',
  },
  {
    n: '3',
    name: 'Onboarding & Migration',
    desc: 'We collect prior records, migrate data into your cloud software, and handle any backdated catch-up work.',
  },
  {
    n: '4',
    name: 'Ongoing Management',
    desc: 'Monthly cycle runs like clockwork — books closed, returns filed, reports delivered, questions answered.',
  },
];

export default function ABKProcess() {
  return (
    <section className={styles.sec} id="process">
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>How It Works</span>
        </div>
        <h2 className={styles.h2}>
          From Enquiry to <em>Fully Operational</em><br />in 4 Steps
        </h2>
      </div>

      <div className={styles.steps}>
        {steps.map((s, i) => (
          <div className={styles.step} key={s.n}>
            {/* Number box + connector line */}
            <div className={styles.topRow}>
              <div className={styles.dot}>
                <span className={styles.dotN}>{s.n}</span>
              </div>
              {i < steps.length - 1 && <div className={styles.line} />}
            </div>
            <div className={styles.stepName}>{s.name}</div>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}