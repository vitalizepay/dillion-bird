import Link from 'next/link';
import styles from './CMOWhy.module.css';

const pillars = [
  {
    n: '01',
    name: 'Cost-Efficient Senior Leadership',
    desc: 'Access CMO-level expertise at 20–40% of the cost of a full-time hire — without compromising on quality, commitment, or depth of engagement.',
  },
  {
    n: '02',
    name: 'Immediate Impact from Week One',
    desc: 'No recruitment cycle. No onboarding lag. We embed immediately and begin delivering strategic value from the very first week of engagement.',
  },
  {
    n: '03',
    name: 'Flexible to Your Business Stage',
    desc: 'Scale up or down based on your needs. Our engagement model adapts — from early-stage launch to high-growth scale-up to enterprise transformation.',
  },
  {
    n: '04',
    name: 'Multi-Sector Cross-Industry Perspective',
    desc: 'Our CMOs have led marketing across technology, retail, financial services, and real estate — bringing cross-industry intelligence that generic specialists lack.',
  },
];

export default function CMOWhy() {
  return (
    <section className={styles.sec}>
      <div className={styles.grid}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>Why Fractional</span>
          </div>
          <h2 className={styles.h2}>
            The Smarter Path to<br />
            <em>Marketing Leadership.</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.desc}>
            The traditional CMO model is broken for many GCC businesses. Hiring a senior
            marketing leader is expensive, slow, and high-risk. Agencies lack strategic
            ownership. Consultants lack execution. The fractional model resolves all three.
          </p>
          <p className={styles.desc}>
            Dillon &amp; Bird&apos;s Fractional CMO service is designed for ambitious founders,
            growth-stage companies, and enterprises navigating transformation — who need
            serious marketing leadership, today.
          </p>
          <div className={styles.acts}>
            <Link href="#contact" className={styles.btn}>Start the Conversation</Link>
            <a href="https://dillonbird.com/managementconsulting" target="_blank" rel="noopener" className={styles.ghostLink}>
              Explore Management Consulting{' \u2197'}
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.pillars}>
          {pillars.map(p => (
            <div className={styles.pillar} key={p.n}>
              <span className={styles.pillarN}>{p.n}</span>
              <div className={styles.pillarContent}>
                <div className={styles.pillarName}>{p.name}</div>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}