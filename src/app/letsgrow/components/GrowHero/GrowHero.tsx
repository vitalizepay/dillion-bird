import styles from './GrowHero.module.css';
import Link from 'next/link';

const pillars = [
  {
    title: 'Speed to Market',
    desc: 'We compress timelines without cutting corners — leveraging our GCC networks to accelerate your growth trajectory.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    title: 'Embedded Partnership',
    desc: 'Unlike consultants who hand over reports, we remain active partners through implementation and beyond.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Data-Driven Decisions',
    desc: 'Every recommendation is grounded in rigorous market data, financial modelling, and competitive intelligence.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Excellence as Standard',
    desc: 'We hold ourselves to the highest standards of quality, integrity, and client impact — in every engagement, every time.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function GrowHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.grid}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>Strategic Partnership</span>
          </div>
          <h1 className={styles.h1}>
            Let's Grow.<br />
            <em>Together.</em>
          </h1>
          <p className={styles.desc}>
            We don't just advise — we embed ourselves in your business, align our
            success with yours, and unlock pathways to sustainable, scalable growth
            across the GCC and beyond.
          </p>
          <div className={styles.acts}>
            <Link href="https://dillonbird.com/contact" target="_blank" rel="noopener" className={styles.btnPrimary}>Start a Conversation →</Link>
            <Link href="#results" className={styles.btnOutline}>See Results</Link>
          </div>
        </div>

        {/* RIGHT — pillars */}
        <div className={styles.pillars}>
          {pillars.map((p) => (
            <div className={styles.pillar} key={p.title}>
              <div className={styles.pillarIcon} aria-hidden="true">
                {p.icon}
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarName}>{p.title}</div>
                <div className={styles.pillarDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}