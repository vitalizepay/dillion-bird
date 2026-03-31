import styles from './OurStoryValues.module.css';

const values = [
  {
    title: 'Integrity Above All',
    desc: 'We tell clients what they need to hear, not what they want to hear. Our reputation is built on honest, courageous advice that prioritises long-term outcomes over short-term comfort.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l3.09 6.26L26 11.27l-5 4.87 1.18 6.88L16 19.77l-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01z"/>
      </svg>
    ),
  },
  {
    title: 'Relentless Accountability',
    desc: "We own our recommendations and their outcomes. When things don't go to plan, we don't point fingers — we adapt, learn, and find a better path forward alongside our clients.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12"/><path d="M16 8v8l5 3"/>
      </svg>
    ),
  },
  {
    title: 'Results, Not Reports',
    desc: "Beautiful presentations mean nothing if businesses don't grow. Our success metric is our clients' measurable outcomes — revenue, enterprise value, market share, and operational efficiency.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28l8-8 6 6 10-14"/>
      </svg>
    ),
  },
  {
    title: 'GCC-First Thinking',
    desc: "We don't import Western frameworks and apply them wholesale to GCC markets. We develop strategies that are culturally attuned, regulatory-aware, and designed for the specific dynamics of this extraordinary region.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12"/>
        <path d="M4 16h24M16 4a15.3 15.3 0 014 12 15.3 15.3 0 01-4 12 15.3 15.3 0 01-4-12 15.3 15.3 0 014-12z"/>
      </svg>
    ),
  },
  {
    title: 'People at the Centre',
    desc: 'Behind every business is a team of people with families, ambitions, and livelihoods. We never lose sight of the human dimension of every strategy we help build or every transformation we guide.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/>
        <circle cx="10" cy="11" r="4"/>
        <path d="M29 21v-2a4 4 0 00-3-3.87M22 7.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Long-Term Thinking',
    desc: 'We make recommendations that serve your business five and ten years from now — even when short-term pressures tempt toward expedient solutions. Sustainable growth requires sustainable decisions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4-8-12a8 8 0 0116 0c0 8-8 12-8 12z"/>
        <path d="M12 22s8-4 8-12"/>
      </svg>
    ),
  },
];

export default function OurStoryValues() {
  return (
    <section className={styles.sec}>
      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Our Values</span>
        </div>
      </div>

      <div className={styles.hdr}>
        <h2 className={styles.h2}>
          What We <em>Stand For</em>
        </h2>
        <p className={styles.intro}>
          These aren&apos;t words on a wall. They are the operating principles by which every
          Dillon &amp; Bird advisor shows up every day.
        </p>
      </div>

      <div className={styles.grid}>
        {values.map(v => (
          <div className={styles.card} key={v.title}>
            <div className={styles.cardIcon}>{v.icon}</div>
            <h3 className={styles.cardTitle}>{v.title}</h3>
            <p className={styles.cardDesc}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}