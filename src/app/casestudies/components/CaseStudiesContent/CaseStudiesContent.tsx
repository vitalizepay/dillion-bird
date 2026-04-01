import styles from './CaseStudiesContent.module.css';

const cases = [
  {
    name: 'Sarwa',
    industry: 'Fintech',
    title: 'Regulatory Strategy & ADGM Licensing for a Fintech Pioneer',
    desc: 'Sarwa needed a robust regulatory strategy and ADGM FSRA licensing to launch its digital wealth management platform in the UAE. We navigated the full regulatory process and structured the operational and compliance framework.',
    statN: '12 weeks',
    statL: 'License to launch',
  },
  {
    name: 'Kitopi',
    industry: 'F&B / Cloud Kitchen',
    title: 'Operational Transformation Ahead of Series C',
    desc: 'As Kitopi prepared for its Series C, we led a comprehensive operational and financial transformation — restructuring their unit economics, redesigning management reporting, and preparing investor materials that contributed to a successful raise.',
    statN: 'AED 850M',
    statL: 'Series C valuation',
  },
  {
    name: 'FamEnt',
    industry: 'Family Business',
    title: 'Second-Generation Succession & Professionalisation',
    desc: 'A third-generation UAE family business with AED 2B in revenue engaged us to lead succession planning, governance restructuring, and the transition to professional management — preserving family harmony while unlocking institutional-grade performance.',
    statN: 'AED 2B+',
    statL: 'Revenue under governance',
  },
  {
    name: 'RetailCo',
    industry: 'Retail',
    title: 'GCC Market Entry for European Retail Brand',
    desc: 'A UK premium retail brand sought to enter the GCC market. We delivered a full market entry strategy, identified the optimal franchise partner, structured the partnership agreement, and managed the regulatory setup across three markets.',
    statN: '3 markets',
    statL: 'Entered in year one',
  },
  {
    name: 'TechCo',
    industry: 'Technology',
    title: 'Digital Transformation for a Regional Conglomerate',
    desc: 'A multi-business UAE conglomerate needed to modernise its technology infrastructure and create a digital strategy capable of driving group-level efficiencies. We delivered a 3-year digital transformation roadmap now in active execution.',
    statN: '40%',
    statL: 'Operational cost reduction target',
  },
  {
    name: 'PropCo',
    industry: 'Real Estate',
    title: 'Investor Relations & Fundraising Strategy',
    desc: 'A UAE real estate developer needed to raise AED 500M in project financing. We designed the investor relations strategy, built the financial model, prepared the information memorandum, and managed lender relationships through to drawdown.',
    statN: 'AED 500M',
    statL: 'Financing secured',
  },
];

export default function WorkCaseStudies() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>All Case Studies</span>
      </div>
      <h2 className={styles.h2}>
        More <em>Success Stories</em>
      </h2>

      <div className={styles.grid}>
        {cases.map(c => (
          <div className={styles.card} key={c.name}>

            {/* Top — dark panel with name + industry tag */}
            <div className={styles.cardTop}>
              <div className={styles.pattern} />
              <div className={styles.clientName}>{c.name}</div>
              <div className={styles.industryTag}>{c.industry}</div>
            </div>

            {/* Bottom — content */}
            <div className={styles.cardBody}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.desc}>{c.desc}</p>
              <div className={styles.statN}>{c.statN}</div>
              <div className={styles.statL}>{c.statL}</div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}