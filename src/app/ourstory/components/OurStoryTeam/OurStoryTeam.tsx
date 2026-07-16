'use client';

import styles from './OurStoryTeam.module.css';

const team = [
  {
    initials: 'P',
    name: 'Praveen',
    role: 'Managing Partner',
    bio: '20+ years in GCC strategy and market entry. Former McKinsey and Goldman Sachs. Deep networks across UAE, Saudi, and Qatar business communities.',
    image: '/team-praveen.png',
  },
  {
    initials: 'D',
    name: 'Dinesh',
    role: 'Managing Partner',
    bio: 'Former CFO and strategy lead for three regional unicorns. Expert in financial structuring, growth capital, and operational transformation across family businesses.',
    image: '/team-dinesh.jpg',
  },
  {
    initials: 'S',
    name: 'Senthinathan',
    role: 'Senior Cloud and AI Consultant',
    bio: 'Native GCC advisor with deep roots across UAE, Saudi Arabia, and Kuwait. Leads our regional market entry and government relations practice areas.',
    image: '/team-senthil.jpeg',
  },
  {
    initials: 'TV',
    name: 'Thilagaran Vasagam',
    role: 'Senior Tax and Audit Consultant',
    bio: 'Seasoned financial advisor with 15+ years structuring complex transactions across GCC capital markets, private equity, and sovereign investment vehicles.',
    image: '/team-tilak.jpg',
  },
];

export default function OurStoryTeam() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>Leadership</span>
      </div>
      <h2 className={styles.h2}>
        The Team Behind <em>Your Growth</em>
      </h2>

      <div className={styles.grid}>
        {team.map(m => (
          <div className={styles.card} key={m.name}>
            {/* Image area */}
            <div className={styles.imgWrap}>
              <img
                src={m.image}
                alt={m.name}
                className={styles.img}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback initials shown until real image loads */}
              <div className={styles.initials}>{m.initials}</div>
            </div>

            {/* Info */}
            <div className={styles.body}>
              <div className={styles.name}>{m.name}</div>
              <div className={styles.role}>{m.role}</div>
              <p className={styles.bio}>{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}