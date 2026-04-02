import styles from './CareersProcess.module.css';

const steps = [
  {
    n: '01',
    name: 'Application Review',
    desc: 'Every application personally read by our talent team. Response within 5 business days — always, whatever the outcome.',
  },
  {
    n: '02',
    name: 'Initial Conversation',
    desc: '30-min call to understand your background, ambitions, and what excites you about D&B specifically.',
  },
  {
    n: '03',
    name: 'Skills Assessment',
    desc: 'A practical exercise relevant to your role. Prep guidance provided in advance — no surprises, no trick questions.',
  },
  {
    n: '04',
    name: 'Partner Interview',
    desc: "Deep conversation with a D&B Partner. As much about us answering your questions as the other way around.",
  },
  {
    n: '05',
    name: 'Offer & Onboarding',
    desc: 'A fair, transparent offer with clear rationale. We move fast and set you up for success well before day one.',
  },
];

export default function CareersProcess() {
  return (
    <section className={styles.sec}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Our Hiring Process</span>
        </div>
        <h2 className={styles.h2}>
          Transparent, <em>Respectful,</em> Decisive
        </h2>
        <p className={styles.sub}>
          We respect your time. Every application is personally reviewed.
          Most offers are made within 3 weeks of first contact.
        </p>
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