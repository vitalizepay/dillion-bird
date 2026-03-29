import styles from './ABKServices.module.css';

const services = [
  {
    n: '01',
    title: 'Bookkeeping & Monthly Accounts',
    desc: 'Accurate, on-time recording of every transaction. Monthly P&L, balance sheet, and bank reconciliations — delivered in your chosen software (Xero, QuickBooks, Zoho, SAP).',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'VAT Registration & Filing',
    desc: 'Full UAE VAT management — registration with the FTA, preparation of quarterly returns, input tax recovery, and penalty-prevention compliance checks.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Corporate Tax & Compliance',
    desc: "Navigate the UAE's 9% corporate tax regime confidently. We handle registration, taxable income calculations, transfer pricing, and timely CT returns.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Payroll & WPS Processing',
    desc: 'End-to-end UAE payroll — salary calculations, WPS submissions, gratuity provisions, leave accruals, and payslips, all on schedule every month.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Management Accounts & Reporting',
    desc: 'Board-ready monthly packs with KPI dashboards, cash flow forecasts, budget-vs-actual analysis, and actionable recommendations to drive growth.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    n: '06',
    title: 'Outsourced CFO Services',
    desc: 'Senior finance leadership without the full-time cost. Strategy, investor readiness, financial modelling, and lender negotiations — on a flexible retainer.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

export default function ABKServices() {
  return (
    <section className={styles.sec} id="services">

      {/* Header */}
      <div className={styles.hdr}>
        <div className={styles.hdrLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>What We Cover</span>
          </div>
          <h2 className={styles.h2}>
            Complete Financial Services<br />
            for <em>UAE Businesses</em>
          </h2>
        </div>
        <p className={styles.hdrRight}>
          From startup to enterprise — every accounting need handled under one roof, with UAE regulatory expertise built in.
        </p>
      </div>

      {/* Intro */}
      <p className={styles.intro}>
        Our chartered accountants and FTA-registered tax agents work as an extension of your team — giving you accurate numbers, timely filings, and strategic financial clarity every month.
      </p>

      {/* Grid */}
      <div className={styles.grid}>
        {services.map(s => (
          <div className={styles.card} key={s.n}>
            <div className={styles.cardN}>{s.n}</div>
            <div className={styles.cardIco}>{s.icon}</div>
            <div className={styles.cardTitle}>{s.title}</div>
            <p className={styles.cardDesc}>{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}