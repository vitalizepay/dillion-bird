import styles from './BuildWithUsPartners.module.css';

const partners = [
  {
    abbr: 'BB',
    name: 'Banking & Finance Partners',
    desc: 'Relationships with 30+ UAE and GCC banks — from commercial banks to DFIs — for fast-tracked account opening and financing introductions.',
  },
  {
    abbr: 'LP',
    name: 'Legal Partners',
    desc: 'Curated relationships with top-tier legal firms across UAE mainland, DIFC, and ADGM — covering corporate, employment, real estate, and regulatory law.',
  },
  {
    abbr: 'TP',
    name: 'Technology Partners',
    desc: 'Certified implementation partners for leading ERP, CRM, HR, and analytics platforms — ensuring your technology stack grows with your business.',
  },
  {
    abbr: 'IP',
    name: 'Investor Network',
    desc: 'Access to our proprietary network of UAE family offices, regional VCs, private equity firms, and sovereign wealth fund connections for growth capital introductions.',
  },
  {
    abbr: 'GP',
    name: 'Government Relations',
    desc: 'Established relationships with key UAE government entities, free zone authorities, and regulatory bodies — accelerating approvals and market access.',
  },
  {
    abbr: 'RP',
    name: 'Recruitment Partners',
    desc: 'Senior executive search and specialist recruitment partners across the GCC — helping you build the leadership teams your growth ambitions require.',
  },
];

export default function BuildWithUsPartners() {
  return (
    <section className={styles.sec}>

      <div className={styles.hdr}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Our Network</span>
        </div>
        <h2 className={styles.h2}>
          Partners Who <em>Extend Your Reach</em>
        </h2>
        <p className={styles.intro}>
          When you work with Dillon &amp; Bird, you get access to our entire ecosystem of
          carefully selected partners — giving you the capabilities of a large firm with
          the responsiveness of a boutique.
        </p>
      </div>

      <div className={styles.grid}>
        {partners.map(p => (
          <div className={styles.card} key={p.abbr}>
            <div className={styles.logo}>
              <span>{p.abbr}</span>
            </div>
            <div className={styles.content}>
              <div className={styles.name}>{p.name}</div>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}