import styles from './StreamlineNowHandle.module.css';

const services = [
  {
    n: '01',
    title: 'Accounting & Bookkeeping',
    desc: 'Full-service accounting — from transaction processing and payroll to management accounts, MIS reporting, and CFO-on-demand services. IFRS-compliant, audit-ready books at all times.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="20" height="22" rx="1"/>
        <path d="M9 8h10M9 12h10M9 16h6"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'VAT & Tax Compliance',
    desc: 'Complete VAT registration, filing, and compliance management across the UAE and GCC. Corporate tax registration and filing under the UAE CT regime, including transfer pricing documentation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3l2.97 5.9 6.53.95-4.73 4.6 1.12 6.5L14 17.9l-5.89 3.05 1.12-6.5-4.73-4.6 6.53-.95z"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Company Secretarial',
    desc: 'Licence renewals, trade name registrations, MoA amendments, board minutes, shareholder resolutions, and all statutory filings — managed proactively so deadlines are never missed.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="22" height="18" rx="1"/>
        <path d="M3 10h22M8 5v5M20 5v5"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'HR & Payroll Administration',
    desc: 'WPS-compliant payroll processing, DEWS/DIFC pension management, employment contracts, labour law compliance, visa processing, and employee lifecycle management — for teams of 5 to 500.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3v6M14 19v6M3 14h6M19 14h6"/>
        <circle cx="14" cy="14" r="5"/>
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Corporate Governance',
    desc: 'Board advisory, governance frameworks, board pack preparation, committee structuring, and independent director services. Helping businesses build institutional-grade governance that investors and lenders trust.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10"/>
        <path d="M14 8v6l4 2"/>
      </svg>
    ),
  },
  {
    n: '06',
    title: 'Financial Planning & Analysis',
    desc: 'Budgeting, forecasting, cash flow management, financial modelling, and board-level financial reporting. Transform your finance function from a reporting tool into a strategic decision-making engine.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22l8-8 6 6 10-14"/>
      </svg>
    ),
  },
];

export default function StreamlineNowHandle() {
  return (
    <section className={styles.sec}>

      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>What We Handle</span>
        </div>
      </div>

      <div className={styles.hdr}>
        <h2 className={styles.h2}>
          Comprehensive <em>Corporate Services</em>
        </h2>
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