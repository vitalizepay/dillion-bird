import Link from 'next/link';
import styles from './CareersHero.module.css';

const perks = [
  {
    title: 'Real work from Day One',
    desc: 'No shadow assignments. Live client mandates from your first week.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2l10 6v10H3V8z"/><rect x="8" y="14" width="6" height="6"/>
      </svg>
    ),
  },
  {
    title: 'Merit-driven promotion',
    desc: 'Analysts to AD in under 3 years. Performance, not tenure.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20l7-7 4 4 8-11"/>
      </svg>
    ),
  },
  {
    title: 'Partner mentorship',
    desc: 'Every hire paired with a senior partner from day one.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-2a4 4 0 014-4h8a4 4 0 014 4v2"/><circle cx="11" cy="8" r="4"/>
      </svg>
    ),
  },
  {
    title: 'Deepest GCC network',
    desc: '30+ bank relationships, VCs, and government connections.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9"/><path d="M11 3a9 9 0 010 16M3 11h16"/>
      </svg>
    ),
  },
  {
    title: 'AED 8,000 personal learning budget + MBA sponsorship for high performers',
    desc: 'No approvals, no bureaucracy. Just invest in yourself.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 2 13.9 8.26 21 9.27 16 14.14 17.18 21.02 11 17.77 4.82 21.02 6 14.14 1 9.27 8.1 8.26 11 2"/>
      </svg>
    ),
    wide: true,
  },
];

const stats = [
  { n: '40', sup: '+',     label: 'Team Members' },
  { n: '18', sup: '+',     label: 'Nationalities' },
  { n: '92', sup: '%',     label: 'Satisfaction' },
  { n: '6',  sup: ' cities', label: 'GCC Coverage' },
];

export default function CareersHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.grid}>

        {/* LEFT */}
        <div className={styles.left}>
          {/* Live badge */}
          <div className={styles.liveBadge}>
            <div className={styles.liveDot} />
            <span>Now Hiring — 8 Roles Open</span>
          </div>

          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>GCC&apos;s Premier Strategy Firm</span>
          </div>

          <h1 className={styles.h1}>
            Shape Strategy.<br />
            Build a Career<br />
            That <em>Matters.</em>
          </h1>

          <p className={styles.desc}>
            Join Dillon &amp; Bird — where exceptional advisors work on the GCC&apos;s
            most complex business challenges. Senior exposure from week one,
            accelerated progression, and a culture that invests in people.
          </p>

          <div className={styles.acts}>
            <Link href="/carrers/openroles" className={styles.btnPrimary}>
              Explore Open Roles →
            </Link>
            <Link href="/carrers/apply" className={styles.btnOutline}>
              Spontaneous Application
            </Link>
          </div>

          {/* Stats row */}
          <div className={styles.stats}>
            {stats.map(s => (
              <div className={styles.stat} key={s.label}>
                <div className={styles.statN}>
                  {s.n}<span className={styles.statSup}>{s.sup}</span>
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — perks */}
        <div className={styles.perks}>
          {perks.map(p => (
            <div className={`${styles.perk} ${p.wide ? styles.perkWide : ''}`} key={p.title}>
              <div className={styles.perkIcon}>{p.icon}</div>
              <div className={styles.perkContent}>
                <div className={styles.perkTitle}>{p.title}</div>
                <div className={styles.perkDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}