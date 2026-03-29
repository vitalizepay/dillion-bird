import styles from './AuditCaseStudies.module.css';

const cases = [
  {
    tag: 'Internal Audit · DIFC Technology',
    title: 'Pre-Fundraise Audit Accelerated Series A Close by Six Weeks',
    excerpt: 'A DIFC-registered SaaS scale-up needed investor-grade internal audit documentation before their Series A round closed. Dillon & Bird delivered a full control environment review, risk register and board pack — satisfying lead investor requirements within the deal timeline and unlocking the round without delay.',
    stat: '6 wks', statLabel: 'Faster deal close · Investor confidence secured',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="7" y1="8" x2="17" y2="8"/>
        <line x1="7" y1="12" x2="17" y2="12"/>
        <polyline points="7 16 10 16 10 19"/>
      </svg>
    ),
  },
  {
    tag: 'VAT Compliance Audit · Dubai Retail',
    title: 'AED 1.8M VAT Exposure Identified & Resolved Before FTA Visit',
    excerpt: 'A multi-outlet retail group received an FTA audit notice. Our pre-visit VAT review uncovered AED 1.8M in under-declared output tax. We prepared voluntary disclosures, negotiated directly with the FTA and achieved a penalty reduction of over 70%.',
    stat: '70%+', statLabel: 'Penalty reduction · AED 1.8M resolved',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    tag: 'Forensic Audit · JAFZA Manufacturing',
    title: 'Procurement Fraud Uncovered — AED 740K Recovered',
    excerpt: 'Following a whistleblower report, our forensic team identified systematic supplier overbilling over 18 months at a JAFZA manufacturing firm. Court-ready evidence enabled full financial recovery and dismissal of the responsible parties.',
    stat: 'AED 740K', statLabel: 'Recovered · Legal action successfully supported',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <polyline points="9 11 11 13 14 9"/>
      </svg>
    ),
  },
];

export default function AuditCaseStudies() {
  return (
    <section className={styles.sec}>
      <div className={styles.hdr}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Case Studies</span>
        </div>
        <h2 className={styles.h2}>Audit Outcomes That<br /><em>Made a Real Difference</em></h2>
      </div>
      <div className={styles.grid}>
        {cases.map(c => (
          <div className={styles.card} key={c.title}>
            <div className={styles.vis}>
              <div className={styles.ico}>{c.icon}</div>
            </div>
            <div className={styles.body}>
              <span className={styles.tag}>{c.tag}</span>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.exc}>{c.excerpt}</p>
              <div className={styles.stat}>
                <span className={styles.statN}>{c.stat}</span>
                <span className={styles.statL}>{c.statLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}