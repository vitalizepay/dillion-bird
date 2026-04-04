import styles from './ClientSuccessProcess.module.css';

const steps = [
  { n: '01', name: 'Deep Discovery',        desc: 'We begin by understanding your business, market context, and the specific results you need — not just the problem as presented.' },
  { n: '02', name: 'Integrated Strategy',   desc: 'We combine finance, technology, and operational insights to design solutions with no blind spots and clear accountability.' },
  { n: '03', name: 'Hands-On Execution',    desc: 'We do not hand over a deck and leave. Our team stays present through every stage, removing blockers in real time.' },
  { n: '04', name: 'Sustained Impact',      desc: 'Every engagement ends with your team fully equipped to own and compound the results we created together.' },
];

export default function ClientSuccessProcess() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Our Method</span>
          </div>
          <h2 className={styles.h2}>
            How we deliver <em>results</em>
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map(s => (
            <div className={styles.step} key={s.n}>
              <span className={styles.stepN}>{s.n}</span>
              <p className={styles.stepName}>{s.name}</p>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}