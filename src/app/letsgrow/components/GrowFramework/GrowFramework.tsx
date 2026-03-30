import styles from './GrowFramework.module.css';

const steps = [
  {
    n: '01',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#1565c0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="19" cy="14" r="7"/>
        <path d="M8 33c0-6.075 4.925-11 11-11s11 4.925 11 11"/>
        <path d="M19 7v7l4 3"/>
      </svg>
    ),
    title: 'Deep Business Discovery',
    desc: 'We spend time understanding your business model, market position, competitive dynamics, team capabilities, and ambition. No assumptions, no templates — just rigorous discovery that forms the foundation of everything we do together.',
  },
  {
    n: '02',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#1565c0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 19h6l4-10 6 20 4-14 3 4h3"/>
      </svg>
    ),
    title: 'Strategic Opportunity Mapping',
    desc: 'We identify your highest-value growth opportunities — market adjacencies, operational efficiencies, new revenue streams, partnership potential — and prioritise them by impact and feasibility in the GCC context.',
  },
  {
    n: '03',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#1565c0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="5" width="26" height="28" rx="1"/>
        <path d="M12 13h14M12 19h14M12 25h8"/>
        <path d="M24 22l3 3 5-6"/>
      </svg>
    ),
    title: 'Tailored Growth Blueprint',
    desc: 'We build a bespoke, actionable growth roadmap with clear milestones, resource requirements, financial projections, and accountability structures. Not a 200-slide deck — a living strategic document.',
  },
  {
    n: '04',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#1565c0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 19h6M24 19h6M19 8v6M19 24v6"/>
        <circle cx="19" cy="19" r="5"/>
        <path d="M11 11l3.5 3.5M23.5 23.5l3.5 3.5M27 11l-3.5 3.5M14.5 23.5L11 27"/>
      </svg>
    ),
    title: 'Active Implementation Support',
    desc: 'We stay embedded through the execution phase — connecting you to our partner network, removing obstacles, and course-correcting as market conditions evolve. Our success is measured by your results.',
  },
  {
    n: '05',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#1565c0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="28" height="24" rx="1"/>
        <path d="M5 28l7-7 6 4 8-9 7 7"/>
        <path d="M5 14h28"/>
      </svg>
    ),
    title: 'Performance Measurement',
    desc: 'We establish clear KPIs from day one and conduct regular performance reviews to ensure your growth trajectory stays on track — and accelerates where opportunities emerge.',
  },
  {
    n: '06',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#1565c0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 6C11.268 6 5 12.268 5 20s6.268 14 14 14 14-6.268 14-14"/>
        <path d="M26 6l3 3-3 3"/>
        <path d="M29 9H19"/>
        <path d="M13 20l4 4 8-8"/>
      </svg>
    ),
    title: 'Sustained Partnership',
    desc: 'Growth is not a project — it\'s a journey. Our longest client relationships span over a decade. We evolve with your business, continuously adding value as you scale into new markets and new stages.',
  },
];

export default function GrowFramework() {
  return (
    <section className={styles.sec} id="framework">

      {/* Top row */}
      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>How Growth Happens</span>
        </div>
      </div>

      {/* Header block */}
      <div className={styles.hdr}>
        <h2 className={styles.h2}>
          Our Growth <em>Framework</em>
        </h2>
        <p className={styles.intro}>
          A proven methodology distilled from 200+ engagements across the GCC — designed to create compounding, lasting growth.
        </p>
      </div>

      {/* 3×2 grid */}
      <div className={styles.grid}>
        {steps.map((s) => (
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