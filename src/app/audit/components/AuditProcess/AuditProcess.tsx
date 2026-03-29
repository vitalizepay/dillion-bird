import styles from './AuditProcess.module.css';

const steps = [
  { n: '1', title: 'Free Scoping Call', desc: 'We discuss your audit objectives, regulatory requirements and timelines — then provide a clear, fixed-fee proposal with no surprises. Response guaranteed within 24 hours of your enquiry.' },
  { n: '2', title: 'Planning & Risk Assessment', desc: 'Our team designs a risk-based audit plan fully aligned to your business, industry and the specific UAE regulations in scope — with agreed timelines, deliverables and points of contact defined upfront.' },
  { n: '3', title: 'Fieldwork & Testing', desc: 'We execute the audit with minimal disruption to your team — using structured sampling, document review and structured interviews to gather robust, independently verifiable evidence.' },
  { n: '4', title: 'Report & Action Plan', desc: 'You receive a clear written report with findings, risk ratings and a prioritised action plan your team can act on immediately — plus a board presentation and Q&A session if required.' },
];

export default function AuditProcess() {
  return (
    <section className={styles.sec} id="process">
      <div className={styles.hdr}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>How It Works</span>
        </div>
        <h2 className={styles.h2}>From First Call to <br /><em>Final Report</em> in Four Steps</h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.line} />
        {steps.map(s => (
          <div className={styles.step} key={s.n}>
            <div className={styles.dot}>
              <span className={styles.dotN}>{s.n}</span>
            </div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}