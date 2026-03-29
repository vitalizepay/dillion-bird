import styles from './AuditServices.module.css';

const services = [
  {
    n: '01',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="5" width="26" height="28" rx="1"/>
        <path d="M12 14H26M12 19H26M12 24H20"/>
        <path d="M22 22L26 26L34 18"/>
      </svg>
    ),
    title: 'Internal Audit',
    desc: 'Risk-based internal audit programmes evaluating controls, processes and governance. We give boards and CFOs the independent assurance they need — structured to international IIA standards and fully aligned with UAE regulatory requirements.',
  },
  {
    n: '02',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 4L33 11.5V26.5L19 34L5 26.5V11.5Z"/>
        <path d="M13 19L17 23L25 15"/>
      </svg>
    ),
    title: 'External Audit Readiness',
    desc: 'Pre-audit health checks that identify control gaps before your statutory auditor arrives — eliminating management letter findings, reducing audit fees and protecting your team from costly post-audit remediation.',
  },
  {
    n: '03',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="28" height="24" rx="1"/>
        <path d="M5 29L12 22L18 26L33 10"/>
      </svg>
    ),
    title: 'VAT Compliance Audit',
    desc: 'End-to-end FTA VAT audit support: VAT return reviews, input tax reconciliation, voluntary disclosure preparation and full representation during FTA audit visits. We have a 100% success rate in FTA audit outcomes.',
  },
  {
    n: '04',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="19" cy="19" r="14"/>
        <path d="M19 10V19L25 25"/>
        <path d="M12 8L8 4M26 8L30 4"/>
      </svg>
    ),
    title: 'Corporate Tax Compliance Audit',
    desc: 'UAE CT readiness reviews — assessing tax calculations, transfer pricing positions, qualifying group structures, exemption eligibility and filing accuracy to keep you fully compliant with MoF and the FTA ahead of filing deadlines.',
  },
  {
    n: '05',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 5V33M13 9H25C28 9 30 11 30 14C30 17 28 19 25 19H13"/>
        <path d="M13 19H26C29 19 31 21 31 24C31 27 29 29 26 29H13"/>
      </svg>
    ),
    title: 'Financial Due Diligence',
    desc: 'Buy-side and sell-side FDD for M&A, fundraising and JVs. We give investors and acquirers a verified view of quality of earnings, working capital, normalised EBITDA and hidden liabilities — before they commit capital.',
  },
  {
    n: '06',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 28L19 10L28 28"/>
        <path d="M14 22H24"/>
        <circle cx="19" cy="10" r="2" fill="#2196f3" stroke="none"/>
      </svg>
    ),
    title: 'Forensic Audit & Investigation',
    desc: 'Confidential investigations into suspected fraud, financial misstatement or regulatory breaches — producing court-ready evidence trails, board-level remediation reports and recommendations to prevent recurrence.',
  },
];

export default function AuditServices() {
  return (
    <section className={styles.sec} id="services">

      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Our Audit Services</span>
        </div>
        <a href="https://dillonbird.com/accountingfinancialservices" target="_blank" rel="noopener" className={styles.allLink}>
          All Financial Services ↗
        </a>
      </div>

      <div className={styles.hdr}>
        <h2 className={styles.h2}>
          Full-Spectrum Audit Coverage<br />
          <em>Across Every UAE Jurisdiction</em>
        </h2>
        <p className={styles.intro}>
          From FTA VAT audits to investor-grade internal control reviews, we deliver independent assurance that satisfies regulators, attracts capital and gives your leadership team a clear view of financial health — with practical recommendations, not just compliance checklists.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map(s => (
          <div className={styles.card} key={s.n}>
            <span className={styles.cardN}>{s.n}</span>
            <div className={styles.cardIcon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}