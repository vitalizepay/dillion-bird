import styles from './BankingServices.module.css';

const services = [
  {
    n: '01',
    title: 'Debt Financing Advisory',
    desc: 'We advise on the full spectrum of debt financing options — term loans, revolving facilities, Islamic finance and hybrid structures — matching the right instrument to your business profile, cash flows and growth stage.',
    tag: 'Bank Financing Consultancy',
    icon: (
      <svg width="34" height="34" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h20M4 14h14M4 8h8M22 14v8"/>
        <circle cx="22" cy="11" r="3"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Restructuring & Refinancing',
    desc: 'Facing covenant pressures, cash flow stress or lender negotiations? We restructure existing loans and credit facilities to improve terms, extend tenors and restore financial headroom — working directly with your banking panel.',
    tag: 'Loan & Credit Facility Relief',
    icon: (
      <svg width="34" height="34" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22l4-4 4 4 4-4 4 4"/>
        <path d="M6 10l4 4 4-4 4 4 4-4"/>
        <line x1="6" y1="6" x2="22" y2="6"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Group Bank Credit Relationships',
    desc: 'Managing financing across multiple entities and banks requires strategic coordination. We centralise and manage your group\'s banking relationships — aligning credit limits, reporting obligations and covenant compliance across the portfolio.',
    tag: 'Multi-Bank Management',
    icon: (
      <svg width="34" height="34" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="8" height="8" rx="1"/>
        <rect x="16" y="6" width="8" height="8" rx="1"/>
        <rect x="4" y="18" width="8" height="8" rx="1"/>
        <rect x="16" y="18" width="8" height="8" rx="1"/>
        <path d="M12 10h4M8 18V14h12v4"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Project Financing & Feasibility',
    desc: 'Bankable feasibility study reports prepared to lender standards. We assess project viability, structure the financing model, and present compelling proposals to development finance institutions and commercial banks across the GCC.',
    tag: 'DFI & Commercial Lenders',
    icon: (
      <svg width="34" height="34" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="22" height="20" rx="1"/>
        <path d="M8 10h12M8 14h8M8 18h5"/>
        <path d="M19 17l4 4M23 17l-4 4"/>
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Financial Modelling & Projections',
    desc: 'Integrated three-statement financial models built to banking-grade precision. Our projections underpin credit applications, investor decks and management decisions — stress-tested and scenario-analysed for robust decision-making.',
    tag: 'Banking-Grade Models',
    icon: (
      <svg width="34" height="34" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4,22 10,14 16,18 22,8"/>
        <path d="M22 8h-5M22 8v5"/>
        <line x1="4" y1="6" x2="4" y2="22"/>
        <line x1="4" y1="22" x2="24" y2="22"/>
      </svg>
    ),
  },
  {
    n: '06',
    title: 'Trade Financing Advisory',
    desc: 'Structure letters of credit, trade finance lines, supply chain financing and documentary collections that optimise your working capital cycle. We negotiate terms with UAE and international correspondent banks on your behalf.',
    tag: 'LC · SCF · Documentary Collections',
    icon: (
      <svg width="34" height="34" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="10" height="7" rx="1"/>
        <rect x="15" y="13" width="10" height="7" rx="1"/>
        <path d="M13 11.5h2M13 11.5C13 16 15 16 15 16"/>
        <path d="M8 15v5M20 8v5"/>
        <circle cx="8" cy="6" r="2"/>
        <circle cx="20" cy="22" r="2"/>
      </svg>
    ),
  },
];

export default function BankingServices() {
  return (
    <section className={styles.sec} id="services">

      {/* Header — heading left, description right */}
      <div className={styles.hdr}>
        <div className={styles.hdrLeft}>
        <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>Our Services</span>
    </div>
    <h2 className={styles.h2}>
      End-to-End <em>Banking Advisory</em><br />
      &amp; Financing Solutions
    </h2>
    </div>
    <p className={styles.intro}>
        Independent advisors working exclusively for you — not the banks — to structure, negotiate and optimise your financing arrangements across the UAE and GCC.
    </p>
    </div>

      {/* 2×3 grid */}
      <div className={styles.grid}>
        {services.map(s => (
          <div className={styles.card} key={s.n}>
            <span className={styles.cardN}>{s.n}</span>
            <div className={styles.cardIcon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <span className={styles.cardTag}>{s.tag}</span>
          </div>
        ))}
      </div>

    </section>
  );
}