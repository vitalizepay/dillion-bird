import styles from './ValuesCommitments.module.css';

const commitments = [
  {
    title: 'We will always tell you the truth.',
    desc: 'Honest advice, delivered with clarity and care, is the foundation of every valuable advisory relationship. We will never shape our counsel to tell you what you want to hear — our value depends on you being able to trust what we say completely.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
      </svg>
    ),
  },
  {
    title: 'We will be present when it matters.',
    desc: 'The critical moments in business rarely arrive on a convenient schedule. When you face a time-sensitive challenge, a difficult decision, or an unexpected opportunity, we will be there — available, engaged, and ready to help you act with confidence.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
  {
    title: 'We will bring our full expertise, always.',
    desc: 'Every client — regardless of size, stage, or sector — receives the same level of intellectual effort, strategic depth, and regional insight that defines everything we do. There is no premium tier for attention at Dillon & Bird. It is our standard.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
    ),
  },
  {
    title: 'We will measure ourselves by your results.',
    desc: 'Our success is defined by yours — not by the elegance of our frameworks or the length of our deliverables. We track real outcomes: market positions captured, operations optimised, capital deployed effectively. That accountability shapes everything we do.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/>
      </svg>
    ),
  },
];

export default function ValuesCommitments() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>What This Means In Practice</span>
      </div>
      <h2 className={styles.h2}>Our commitments to you.</h2>

      <div className={styles.grid}>
        {commitments.map(c => (
          <div className={styles.card} key={c.title}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrap}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
            </div>
            <p className={styles.cardDesc}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}