import Link from 'next/link';
import styles from './CFWhy.module.css';

const pillars = [
  {
    n: '01',
    name: 'In-House PRO Team',
    desc: 'Our government relations officers have direct working relationships with DED, DMCC, DIFC, ADGM, and 15+ other authorities — no outsourcing, no delays.',
  },
  {
    n: '02',
    name: 'Fixed-Fee Transparency',
    desc: 'You receive a detailed cost breakdown before you sign anything. No surprise government fees, no hidden handling charges.',
  },
  {
    n: '03',
    name: 'Post-Formation Support',
    desc: 'Trade licences need renewals, visas expire, and VAT must be filed. We offer retained packages so you\'re always compliant.',
  },
  {
    n: '04',
    name: 'Banking Introductions',
    desc: 'Opening a UAE corporate account can take weeks without the right contacts. Our banking partnerships fast-track approvals at leading local and international banks.',
  },
  {
    n: '05',
    name: 'GCC-Wide Network',
    desc: 'Planning to expand into Saudi Arabia, Qatar, or Bahrain? Our regional partners ensure seamless multi-market operations from day one.',
  },
];

export default function CFWhy() {
  return (
    <section className={styles.sec}>
      <div className={styles.grid}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>Why Dillon &amp; Bird</span>
          </div>
          <h2 className={styles.h2}>The GCC Formation<br /><em>Specialists You Need</em></h2>
          <p className={styles.desc}>
            We&apos;re not a generic document processor. We&apos;re a boutique strategy firm that structures
            your company for long-term success — tax efficiency, scalability, and investor readiness
            baked in from day one.
          </p>
          <a href="#contact" className={styles.btn}>Get My Free Consultation →</a>
        </div>

        {/* RIGHT */}
        <div className={styles.pillars}>
          {pillars.map((p, i) => (
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