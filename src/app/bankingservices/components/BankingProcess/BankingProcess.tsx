import styles from './BankingProcess.module.css';

const steps = [
  {
    n: '01',
    name: 'Discovery & Assessment',
    desc: 'We review your financial position, existing credit facilities, banking relationships and financing objectives.',
  },
  {
    n: '02',
    name: 'Strategy & Structuring',
    desc: 'We develop the optimal financing structure, identify appropriate lenders and prepare a lender-ready information memorandum.',
  },
  {
    n: '03',
    name: 'Bank Engagement',
    desc: 'We manage the entire bank engagement process — presenting your case, handling information requests and navigating credit committees.',
  },
  {
    n: '04',
    name: 'Negotiation & Terms',
    desc: 'We negotiate pricing, covenants and documentation terms on your behalf, benchmarking against market norms.',
  },
  {
    n: '05',
    name: 'Drawdown & Ongoing Support',
    desc: 'We support you through legal documentation, drawdown and provide ongoing relationship management with your banking panel.',
  },
];

export default function BankingProcess() {
  return (
    <section className={styles.sec} id="process">
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>How We Work</span>
        </div>
        <h2 className={styles.h2}>Our <em>Advisory Process</em></h2>
        <p className={styles.sub}>
          A structured, proven approach from initial assessment through to facility
          drawdown — designed to maximise your chances of success with lenders.
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