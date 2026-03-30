import styles from './InsolvencyProcess.module.css';

const steps = [
  {
    n: '1',
    name: 'Confidential Assessment',
    desc: 'We review your full situation — liabilities, assets, entity type — and present all available options with complete confidentiality guaranteed from day one.',
  },
  {
    n: '2',
    name: 'Strategy & Engagement',
    desc: 'We agree the optimal route — voluntary, court, restructuring or rescue — and engage all relevant authorities, regulators and creditors on your behalf.',
  },
  {
    n: '3',
    name: 'Authority & Creditor Management',
    desc: 'We manage all filings, court appearances, creditor communications and regulatory submissions — removing the burden from you completely.',
  },
  {
    n: '4',
    name: 'Closure & Clearance',
    desc: 'Final deregistration, clearance certificates and confirmation of discharge — giving you a clean, documented conclusion and peace of mind.',
  },
];

export default function InsolvencyProcess() {
  return (
    <section className={styles.sec} id="process">
      <div className={styles.hdr}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>How It Works</span>
        </div>
        <h2 className={styles.h2}>
          A Clear, Confidential <em>Process</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {/* Continuous line behind all boxes */}
        <div className={styles.line} />

        {steps.map(s => (
          <div className={styles.step} key={s.n}>
            <div className={styles.topRow}>
              <div className={styles.dot}>
                <span className={styles.dotN}>{s.n}</span>
              </div>
            </div>
            <div className={styles.title}>{s.name}</div>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}