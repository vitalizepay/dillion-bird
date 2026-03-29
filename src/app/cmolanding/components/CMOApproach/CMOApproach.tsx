import styles from './CMOApproach.module.css';

const cards = [
  {
    n: '01',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="19" cy="12" r="6"/>
        <path d="M7 32C7 25.4 13 21 19 21s12 4.4 12 11"/>
        <path d="M28 10l3 3-3 3"/>
      </svg>
    ),
    title: 'C-Suite Thinking, Embedded in Your Business',
    desc: 'Your fractional CMO sits at the leadership table and drives decisions with authority — not as an external advisor, but as a strategic partner accountable to your outcomes.',
  },
  {
    n: '02',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 4L33 11.5V26.5L19 34L5 26.5V11.5Z"/>
        <circle cx="19" cy="19" r="6"/>
        <path d="M19 13v12M13 19h12"/>
      </svg>
    ),
    title: 'GCC Market Intelligence',
    desc: 'Deep understanding of the GCC consumer landscape, regulatory environment, and regional nuances that global agencies miss. Our strategy is designed specifically for this market.',
  },
  {
    n: '03',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 29L14 19L20 24L26 15L32 9"/>
        <circle cx="7" cy="29" r="2"/>
        <circle cx="32" cy="9" r="2"/>
        <path d="M7 33H32"/>
      </svg>
    ),
    title: 'Outcomes-Driven Engagement',
    desc: 'Every engagement is anchored to clear KPIs, revenue milestones, and business objectives — not billable hours. We are accountable to results, not reports.',
  },
  {
    n: '04',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="26" height="22" rx="1"/>
        <path d="M6 14h26"/>
        <path d="M13 8V5M25 8V5"/>
        <path d="M12 20h6M12 25h10"/>
      </svg>
    ),
    title: 'Capability Transfer Built In',
    desc: 'As we lead your marketing function, we simultaneously build your internal capability — hiring, training, and structuring your team so you sustain excellence independently.',
  },
  {
    n: '05',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 19C8 13.477 13.477 8 19 8S30 13.477 30 19"/>
        <path d="M5 16L8 19L11 16"/>
        <path d="M30 19C30 24.523 24.523 30 19 30S8 24.523 8 19"/>
        <path d="M27 22L30 19L33 22"/>
      </svg>
    ),
    title: 'Full-Spectrum Marketing Coverage',
    desc: 'From brand strategy and digital channels to MarTech stack selection and team building — we cover every dimension of the modern marketing function in one engagement.',
  },
  {
    n: '06',
    icon: (
      <svg width="34" height="34" viewBox="0 0 38 38" fill="none" stroke="#2196f3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 28V18l9-9 9 9v10"/>
        <path d="M15 28v-7h8v7"/>
        <path d="M6 20l13-13 13 13"/>
      </svg>
    ),
    title: 'Holistic Finance, Tech & Marketing Lens',
    desc: 'Dillon & Bird blends finance, technology, and marketing expertise — giving your CMO engagement a uniquely integrated view of what drives business growth.',
  },
];

export default function CMOApproach() {
    return (
      <section className={styles.sec} id="approach">
  
        <div className={styles.topRow}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Our Approach</span>
          </div>
          <a href="https://dillonbird.com/managementconsulting" target="_blank" rel="noopener" className={styles.allLink}>
            Management Consulting{' \u2197'}
          </a>
        </div>
  
        <div className={styles.hdr}>
          <h2 className={styles.h2}>
            Embedded Leadership.<br />
            <em>Do More!</em>
          </h2>
          <p className={styles.intro}>
            We don&apos;t sit on the outside and advise. Your Fractional CMO embeds within your
            leadership team — attending key meetings, driving accountability, and leading your
            marketing function with the authority and ownership of a full-time executive.
          </p>
        </div>
  
        <div className={styles.grid}>
          {cards.map(c => (
            <div className={styles.card} key={c.n}>
              <span className={styles.cardN}>{c.n}</span>
              <div className={styles.cardIcon}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
  
      </section>
    );
  }