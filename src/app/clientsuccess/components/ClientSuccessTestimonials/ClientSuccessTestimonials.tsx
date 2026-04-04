import styles from './ClientSuccessTestimonials.module.css';

const testimonials = [
  {
    quote: 'Dillon & Bird did not just give us a strategy document. They stayed until every recommendation was implemented and the numbers moved. That is a different kind of firm.',
    name: 'Managing Director',
    role: 'Diversified Family Group, Dubai',
    initials: 'MR',
    color: '#2563eb',
  },
  {
    quote: 'We had been trying to enter the UAE for eight months. Dillon & Bird had us operational in two weeks. Their regional knowledge is genuinely unmatched.',
    name: 'CEO',
    role: 'European SaaS Company, Amsterdam',
    initials: 'SV',
    color: '#2563eb',
  },
  {
    quote: 'The restructuring work they did was genuinely transformative. We now have a platform to build the next generation of this business on — we did not think that was achievable in this timeframe.',
    name: 'Group CFO',
    role: 'Private Healthcare Group, Abu Dhabi',
    initials: 'AK',
    color: '#2563eb',
  },
];

export default function ClientSuccessTestimonials() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>What Our Clients Say</span>
      </div>
      <div className={styles.grid}>
        {testimonials.map(t => (
          <div className={styles.card} key={t.initials}>
            <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className={styles.author}>
              <div className={styles.avatar} style={{ background: t.color }}>{t.initials}</div>
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}