import styles from './CareersWhyJoin.module.css';

const reasons = [
  {
    n: '01',
    title: 'Immediate senior exposure',
    desc: "From your first week you're in client rooms, contributing to strategy, and owning real deliverables under close partner mentorship. No years of shadow work.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 24V11l10-7 10 7v13"/><rect x="10" y="17" width="8" height="7"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Accelerated progression',
    desc: 'We promote on merit alone. Our fastest Analysts reached Associate Director in under three years. Strong work gets recognised — fast and transparently.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 24l7-7 5 5 8-11"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Unparalleled GCC access',
    desc: "Work across the GCC's most ambitious companies — startups to AED multi-billion family enterprises. Build the regional depth and network that takes decades elsewhere.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10"/><path d="M14 4a10 10 0 010 20M4 14h20"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Multi-disciplinary breadth',
    desc: 'Unlike siloed big-firm practices, our advisors work across strategy, finance, tech, and operations — building genuine versatility that makes you formidable at every stage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="9" height="9"/><rect x="15" y="4" width="9" height="9"/>
        <rect x="4" y="15" width="9" height="9"/><path d="M15 19.5h9M19.5 15v9"/>
      </svg>
    ),
  },
  {
    n: '05',
    title: 'A genuinely human culture',
    desc: "Zero tolerance for internal politics. Ideas judged on merit alone. We celebrate wellbeing — we don't measure dedication by hours billed, and we never will.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4l10 6.5v9.5H4V10.5z"/><path d="M4 10.5l10-6.5 10 6.5"/>
      </svg>
    ),
  },
  {
    n: '06',
    title: 'Continuous investment in you',
    desc: 'AED 8,000 annual learning budget, MBA sponsorship for high performers, bi-monthly masterclasses, and a dedicated partner mentor — every single person, every year.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4l3.1 6.26L24 11.27l-5 4.87 1.18 6.88L14 19.77l-6.18 3.25 1.18-6.88-5-4.87 6.92-1.01z"/>
      </svg>
    ),
  },
];

export default function CareersWhyJoin() {
  return (
    <section className={styles.sec}>
      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Why D&amp;B</span>
        </div>
      </div>

      <div className={styles.hdr}>
        <h2 className={styles.h2}>
          A Firm Where <em>Careers Accelerate</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {reasons.map(r => (
          <div className={styles.card} key={r.n}>
            <span className={styles.cardN}>{r.n}</span>
            <div className={styles.cardIcon}>{r.icon}</div>
            <h3 className={styles.cardTitle}>{r.title}</h3>
            <p className={styles.cardDesc}>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}