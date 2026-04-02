import styles from './CareersBenefits.module.css';

const benefits = [
  {
    title: 'Competitive salary + performance bonus',
    desc: 'Market-leading base with a bonus structure that genuinely rewards impact, not just hours logged.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="18" height="14" rx="1"/><path d="M5 4V3a5 5 0 0110 0v1"/>
      </svg>
    ),
  },
  {
    title: 'Hybrid & flexible working',
    desc: 'We trust our people to manage their time. Client delivery comes first, but autonomy is real and respected.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8"/><path d="M10 2a8 8 0 010 16M2 10h16"/>
      </svg>
    ),
  },
  {
    title: 'Gold-tier health insurance',
    desc: "Comprehensive medical, dental, and optical for you and your dependents — UAE's top providers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8.08V9a8 8 0 11-4.95-7.36"/><polyline points="18 2 10 10.01 7.5 7.51"/>
      </svg>
    ),
  },
  {
    title: 'AED 8,000 learning budget',
    desc: 'No approvals, no bureaucracy. Courses, certifications, conferences, books — invest in whatever accelerates you.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h5a2.5 2.5 0 012.5 2.5v11A2 2 0 007.5 15H2z"/><path d="M18 3h-5a2.5 2.5 0 00-2.5 2.5v11a2 2 0 012-1.5H18z"/>
      </svg>
    ),
  },
  {
    title: 'Annual team retreat',
    desc: 'Full-team off-site: strategy, learning, real connection. Past destinations: Maldives, Tuscany, Tokyo.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="10 1 12.5 7.27 19.5 8.15 14.5 12.95 15.8 19.72 10 16.27 4.2 19.72 5.5 12.95 0.5 8.15 7.5 7.27 10 1"/>
      </svg>
    ),
  },
  {
    title: 'Partner mentorship',
    desc: 'Every hire paired with a senior partner from day one. We mentor AND actively sponsor your advancement.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17v-2a4 4 0 014-4h6a4 4 0 014 4v2"/><circle cx="10" cy="7" r="4"/>
      </svg>
    ),
  },
];

export default function CareersBenefits() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>Life at D&amp;B</span>
      </div>
      <h2 className={styles.h2}>
        More Than a Job. <em>A Community.</em>
      </h2>
      <p className={styles.sub}>
        We&apos;ve built a firm where talented people do the most meaningful work of
        their careers — surrounded by colleagues who push them, clients who challenge
        them, and leadership who invests in them.
      </p>

      <div className={styles.layout}>

        {/* LEFT — benefits list */}
        <div className={styles.left}>
          {benefits.map(b => (
            <div className={styles.row} key={b.title}>
              <div className={styles.rowIcon}>{b.icon}</div>
              <div className={styles.rowContent}>
                <div className={styles.rowTitle}>{b.title}</div>
                <div className={styles.rowDesc}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — stats + quote */}
        <div className={styles.right}>
          <div className={styles.stat}>
            <div className={styles.statN}>92%</div>
            <div className={styles.statLabel}>Employee satisfaction score</div>
            <p className={styles.statDesc}>
              From our anonymous quarterly pulse survey across all offices and
              practice areas — consistently maintained.
            </p>
          </div>

          <div className={styles.stat}>
            <div className={styles.statN}>3.2×</div>
            <div className={styles.statLabel}>Avg. compensation growth in 3 years</div>
            <p className={styles.statDesc}>
              The average salary multiple achieved by team members who complete
              their first three years at D&amp;B.
            </p>
          </div>

          <div className={styles.quote}>
            <p className={styles.quoteText}>
              &ldquo;I&apos;ve done more meaningful client work in 18 months here than
              in four years at a Big 4 firm. The access, the pace, the calibre of
              colleagues — there&apos;s nothing else like it in the GCC.&rdquo;
            </p>
            <span className={styles.quoteAttr}>
              — Senior Associate, Strategy Practice · Dubai
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}