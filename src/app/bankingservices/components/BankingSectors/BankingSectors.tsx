import styles from './BankingSectors.module.css';

const sectors = [
  {
    title: 'Real Estate & Construction',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="13"/><path d="M1 9l11-7 11 7"/><rect x="9" y="14" width="6" height="8"/>
      </svg>
    ),
  },
  {
    title: 'Trading & Import / Export',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v13H3z"/><path d="M8 9V5h8v4"/><line x1="3" y1="13" x2="21" y2="13"/>
      </svg>
    ),
  },
  {
    title: 'Hospitality & Tourism',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="9.5" y1="14.5" x2="14.5" y2="14.5"/>
      </svg>
    ),
  },
  {
    title: 'Manufacturing & Industrial',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><rect x="4" y="10" width="4" height="10"/><rect x="10" y="6" width="4" height="14"/><rect x="16" y="13" width="4" height="7"/>
      </svg>
    ),
  },
  {
    title: 'Healthcare & Life Sciences',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    title: 'Technology & Fintech',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Professional Services',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18"/>
      </svg>
    ),
  },
  {
    title: 'Free Zone & DIFC / ADGM Entities',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
];

export default function BankingSectors() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>Sectors Served</span>
      </div>
      <h2 className={styles.h2}>
        Financing Advisory Across <em>Key UAE Sectors</em>
      </h2>
      <div className={styles.grid}>
        {sectors.map(s => (
          <div className={styles.item} key={s.title}>
            <div className={styles.ico}>{s.icon}</div>
            <div className={styles.title}>{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}