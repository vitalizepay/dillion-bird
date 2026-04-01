import styles from './ValuesPhilosophy.module.css';

const pillars = [
  { num: 'I',   name: 'Beyond the Brief',       width: '90%' },
  { num: 'II',  name: 'Integrated Thinking',    width: '75%' },
  { num: 'III', name: 'Long-Term Partnership',  width: '85%' },
  { num: 'IV',  name: 'Outcome Over Output',    width: '95%' },
];

export default function ValuesPhilosophy() {
  return (
    <section className={styles.sec}>

      {/* Subtle grid texture */}
      <div className={styles.gridBg} />

      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Our Philosophy</span>
          </div>
          <h2 className={styles.h2}>
            &ldquo;Do More&rdquo; — what it truly means.
          </h2>
          <p className={styles.body}>
            Our tagline is not a marketing slogan. It is a demand we place on ourselves —
            and a promise we make to every client we work with. &ldquo;Do More&rdquo; means
            refusing to accept the ceiling others set. It means finding the next layer of
            possibility in every brief, every challenge, every partnership.
          </p>
          <p className={styles.body}>
            In practice, this shows up as going beyond the scope of an engagement to surface
            the risk no one asked about. It means bringing a technology insight to a financial
            restructuring. It means staying the phone call after hours when a client is
            navigating a critical decision. It means caring — deeply and genuinely — about
            outcomes, not outputs.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <blockquote className={styles.quote}>
            We are not here to tell you what you want to hear. We are here to help you
            build what you truly want to become.
          </blockquote>

          <div className={styles.pillars}>
            {pillars.map(p => (
              <div className={styles.pillar} key={p.num}>
                <span className={styles.pillarNum}>{p.num}</span>
                <span className={styles.pillarName}>{p.name}</span>
                <div className={styles.pillarBar}>
                  <div className={styles.pillarFill} style={{ width: p.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}