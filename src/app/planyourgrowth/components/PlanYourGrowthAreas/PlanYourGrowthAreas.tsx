import styles from './PlanYourGrowthAreas.module.css';

const areas = [
  {
    title: 'Market Entry Strategy',
    desc: 'Rigorous, data-driven strategies for businesses entering GCC markets — covering consumer analysis, competitive mapping, regulatory navigation, and go-to-market playbooks.',
    list: [
      'Consumer & competitive landscape analysis',
      'Regulatory and licensing advisory',
      'Partnership and distribution strategy',
      'Financial viability modelling',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12"/>
        <path d="M4 16h24M16 4a15.3 15.3 0 014 12 15.3 15.3 0 01-4 12"/>
      </svg>
    ),
  },
  {

    title: 'Growth Strategy & Scaling',
    desc: 'For businesses that have found product-market fit and are ready to scale — we architect the strategy, systems, and partnerships needed to grow without breaking.',
    list: [
      'Revenue growth & diversification strategy',
      'Organisational design for scale',
      'New product & service development',
      'Geographic expansion roadmaps',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28l8-8 6 6 10-14"/>
        <path d="M4 4h6v6"/>
      </svg>
    ),
  },
  {
    title: 'Business Transformation',
    desc: 'When market shifts, ownership changes, or competitive disruption demand fundamental business reinvention — we lead the transformation from strategy through execution.',
    list: [
      'Business model redesign',
      'Operational efficiency programmes',
      'Change management & culture',
      'Technology-led transformation',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="10" height="10"/>
        <rect x="18" y="4" width="10" height="10"/>
        <rect x="4" y="18" width="10" height="10"/>
        <rect x="18" y="18" width="10" height="10"/>
      </svg>
    ),
  },
  {
    title: 'Family Business Advisory',
    desc: 'Specialist advisory for family enterprises navigating succession, professionalisation, or regional expansion — blending family dynamics with business imperatives.',
    list: [
      'Succession planning & governance',
      'Professionalisation of management',
      'Family constitution & charter',
      'Intergenerational wealth strategy',
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l3.09 6.26L26 11.27l-5 4.87 1.18 6.88L16 19.77l-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01z"/>
      </svg>
    ),
  },
];

export default function PlanYourGrowthAreas() {
  return (
    <section className={styles.sec}>

      {/* Header */}
      <div className={styles.hdr}>
        <div className={styles.hdrLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>Our Practice Areas</span>
          </div>
          <h2 className={styles.h2}>
            Strategic Services <em>Built for the GCC</em>
          </h2>
        </div>
      </div>

      {/* 2×2 Grid */}
      <div className={styles.grid}>
        {areas.map(a => (
          <div className={styles.card} key={a.title}>
            <div className={styles.cardIco}>{a.icon}</div>
            <h3 className={styles.cardTitle}>{a.title}</h3>
            <p className={styles.cardDesc}>{a.desc}</p>
            <ul className={styles.list}>
              {a.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}