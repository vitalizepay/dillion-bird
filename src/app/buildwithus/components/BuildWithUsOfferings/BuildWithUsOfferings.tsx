import styles from './BuildWithUsOfferings.module.css';

const offerings = [
  {
    n: '01',
    title: 'Retained Partnership',
    desc: 'Our most comprehensive engagement model — a dedicated senior advisor embedded with your leadership team on an ongoing monthly basis. Think of us as your Chief Strategy Officer, available whenever you need senior-level thinking. Ideal for businesses in active growth phases or navigating complex challenges.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l12 8v12H4V12z"/>
        <rect x="11" y="16" width="10" height="8"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Project-Based Mandate',
    desc: 'A focused engagement with a defined scope, timeline, and deliverables. Perfect for market entry strategies, restructuring mandates, fundraising preparation, or company formation. We define the scope together, agree on outcomes, and deliver with precision.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="1"/>
        <path d="M4 12h24M12 4v24"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Advisory Board Role',
    desc: 'A senior Dillon & Bird partner joins your advisory board or board of directors in a non-executive capacity — providing governance, strategic oversight, and access to our full network. A cost-efficient way to bring institutional-grade strategic thinking to your table.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/>
        <circle cx="10" cy="11" r="4"/>
        <path d="M29 21v-2a4 4 0 00-3-3.87M22 7.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Corporate Services Package',
    desc: 'Ongoing operational support — accounting, compliance, HR, company secretarial, and financial planning — managed by a dedicated team with a single point of contact. From AED 3,500 per month for growing businesses, scaling with you as you expand.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12"/>
        <path d="M16 10v6l4 2"/>
      </svg>
    ),
  },
];

export default function BuildWithUsOfferings() {
  return (
    <section className={styles.sec}>

      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>How We Partner</span>
        </div>
      </div>

      <div className={styles.hdr}>
        <h2 className={styles.h2}>
          Four Ways We Can <em>Work Together</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {offerings.map(o => (
          <div className={styles.card} key={o.n}>
            <span className={styles.cardN}>{o.n}</span>
            <div className={styles.cardIcon}>{o.icon}</div>
            <h3 className={styles.cardTitle}>{o.title}</h3>
            <p className={styles.cardDesc}>{o.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}