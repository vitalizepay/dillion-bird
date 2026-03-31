import styles from './CFProcess.module.css';

const steps = [
  { n: '1', name: 'Free Consultation', desc: 'We assess your activity, structure, and budget to recommend the optimal setup within 24 hours.' },
  { n: '2', name: 'Document Prep', desc: 'We prepare and notarise all MOA, shareholder, and application documents — you just sign.' },
  { n: '3', name: 'Licence Approval', desc: 'We submit directly to the relevant authority (DED, DMCC, ADGM, etc.) and liaise until approved.' },
  { n: '4', name: 'Visas & Banking', desc: 'Investor visa, Emirates ID, and introductions to leading UAE banks — all handled end to end.' },
  { n: '5', name: 'You Start Trading', desc: 'Your company is live. We stay on as your ongoing compliance and PRO services partner.' },
];

export default function CFProcess() {
  return (
    <section className={styles.sec} id="process">
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Our Process</span>
        </div>
        <h2 className={styles.h2}>
          From Consultation to<br /><em>Trading in 5 Steps</em>
        </h2>
      </div>
      <div className={styles.steps}>
        {steps.map(s => (
          <div className={styles.step} key={s.n}>
            <div className={styles.topRow}>        {/* ← added wrapper */}
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