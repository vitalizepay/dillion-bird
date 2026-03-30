import styles from './InsolvencyServices.module.css';

const services = [
  {
    n: '01',
    title: 'Voluntary Company Liquidation',
    desc: 'Orderly wind-down with full DED/free zone compliance. We handle deregistration, creditor notices, asset disposal and final clearance certificates.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 4L33 11.5V26.5L19 34L5 26.5V11.5Z"/>
        <path d="M13 19L17 23L25 15"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Court-Supervised Liquidation',
    desc: 'Representation before UAE courts when a creditor or regulator initiates winding-up proceedings. We protect director interests throughout the process.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="28" height="22" rx="1"/>
        <path d="M5 14H33M13 8V14"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Debt Restructuring & Workout',
    desc: 'Formal restructuring plans to renegotiate terms with banks, suppliers and stakeholders — preserving the business while managing obligations responsibly.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 5V33M25 9H15C12.2 9 10 11.2 10 14C10 16.8 12.2 19 15 19H23C25.8 19 28 21.2 28 24C28 26.8 25.8 29 23 29H10"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Creditor Negotiation & Representation',
    desc: 'We negotiate directly with creditors on your behalf — securing moratoriums, payment schedules and write-downs to create breathing room and stability.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19H29M9 13H22M9 25H18"/>
        <rect x="5" y="7" width="28" height="24" rx="1"/>
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Business Rescue & Turnaround',
    desc: 'Where viable, we implement operational and financial restructuring to rescue the business — preserving jobs, value and stakeholder relationships.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="19" cy="19" r="14"/>
        <path d="M19 10V19L25 25"/>
      </svg>
    ),
  },
  {
    n: '06',
    title: 'Cross-Border Insolvency',
    desc: 'Multi-jurisdiction insolvency cases involving assets, creditors or entities across UAE, GCC and international jurisdictions — coordinated through one expert team.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="19" cy="19" r="14"/>
        <path d="M5 19H33M19 5C19 5 13 11 13 19C13 27 19 33 19 33M19 5C19 5 25 11 25 19C25 27 19 33 19 33"/>
      </svg>
    ),
  },
];

export default function InsolvencyServices() {
  return (
    <section className={styles.sec} id="services">
      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>What We Handle</span>
        </div>
      </div>
      <div className={styles.hdr}>
        <h2 className={styles.h2}>
          Every Path Through Insolvency,<br />
          <em>Covered End-to-End</em>
        </h2>
        <p className={styles.intro}>
          We provide expert guidance on company liquidation, debt restructuring, and insolvency proceedings aligned with Federal Decree-Law No. 9/2016 and UAE commercial law frameworks.
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