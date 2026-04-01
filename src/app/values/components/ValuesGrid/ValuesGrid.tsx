import styles from './ValuesGrid.module.css';

const values = [
  {
    n: '01',
    title: 'Integrity Without Exception',
    desc: 'We operate with complete transparency in everything we do. Our clients trust us with their most sensitive business challenges, and we honour that trust by always providing honest counsel — even when it is not what people want to hear.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Relentless Excellence',
    desc: 'Good enough is never good enough. We bring the full depth of our regional expertise and intellectual rigour to every engagement, continuously raising the bar for what strategic partnership can deliver for businesses across the GCC.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Partnership Over Transaction',
    desc: 'We reject the consulting model that parachutes in experts and leaves. We build enduring relationships grounded in genuine investment in your success. When you grow, we grow — that alignment is fundamental to how we work.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Innovation as a Discipline',
    desc: "The GCC is one of the world's most dynamic business environments. We stay relentlessly ahead — investing in deep knowledge of emerging technologies, regulatory shifts, and market intelligence so that our clients are always positioned to lead, not follow.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Deep Regional Roots',
    desc: 'The GCC is not just our market — it is our home. We bring decades of accumulated knowledge of regional culture, regulatory frameworks, and market dynamics that no international firm can replicate. This depth is our enduring competitive advantage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
      </svg>
    ),
  },
  {
    n: '06',
    title: 'Sustainable Impact',
    desc: 'We measure success not by the scale of a single engagement but by the lasting value we create. Every strategy we deliver is designed to compound — building capabilities, structures, and momentum that sustain long after our immediate work is done.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
    ),
  },
];

export default function ValuesGrid() {
  return (
    <section className={styles.sec} id="values">

      <div className={styles.topRow}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Our Core Values</span>
        </div>
      </div>

      {/* Header: heading left, desc right */}
      <div className={styles.hdr}>
        <div className={styles.hdrLeft}>
          <h2 className={styles.h2}>
            What we stand for, every single day.
          </h2>
        </div>
        <p className={styles.intro}>
          These are not aspirational statements on a wall. They are the operating
          principles that guide every recommendation we make, every relationship
          we build, and every result we deliver across the GCC.
        </p>
      </div>

      <div className={styles.grid}>
        {values.map(v => (
          <div className={styles.card} key={v.n}>
            <span className={styles.cardN}>{v.n}</span>
            <div className={styles.cardIcon}>{v.icon}</div>
            <h3 className={styles.cardTitle}>{v.title}</h3>
            <p className={styles.cardDesc}>{v.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}