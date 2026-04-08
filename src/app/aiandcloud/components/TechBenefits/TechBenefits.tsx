import styles from './TechBenefits.module.css';

const benefits = [
  {
    icon: '🛡️',
    title: 'Avoid Expensive Technology Failures',
    desc: 'Validated approaches and proof-of-concept first methodology that reduce risk and protect your investment from costly missteps before full commitment.',
  },
  {
    icon: '⚡',
    title: 'Weeks to Clarity, Not Months',
    desc: 'Rapid discovery sprints deliver actionable roadmaps and architecture decisions in weeks — not quarters of analysis paralysis.',
  },
  {
    icon: '🤝',
    title: 'Honest Execution',
    desc: 'Transparent timelines, realistic delivery estimates, and no hidden agendas. We tell you what is achievable — not what you want to hear.',
  },
  {
    icon: '🎯',
    title: 'Invest Where ROI is Highest',
    desc: 'Data-driven prioritisation ensures your technology budget flows to the initiatives that will move commercial metrics — not just technical ones.',
  },
  {
    icon: '💎',
    title: 'Find Your Competitive Edge',
    desc: 'Uncover AI-powered and cloud-enabled differentiators that set you apart in crowded GCC markets — with measurable outcomes attached.',
  },
  {
    icon: '🔄',
    title: 'From Strategy to Running Systems',
    desc: 'End-to-end delivery means your technology vision becomes operational reality — not a slide deck gathering dust in a shared drive.',
  },
];

export default function TechBenefits() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Why Choose Us</span>
          </div>
          <h2 className={styles.h2}>Key Benefits</h2>
          <p className={styles.sub}>
            Six reasons why GCC enterprises choose Dillon &amp; Bird for their most
            critical technology transformations.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map(b => (
            <div className={styles.card} key={b.title}>
              <div className={styles.cardIcon}>{b.icon}</div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}