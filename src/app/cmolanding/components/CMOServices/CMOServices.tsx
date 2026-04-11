'use client';

import styles from './CMOServices.module.css';

const areas = [
  {
    n: '01',
    tag: 'Consulting & Advisory',
    title: 'Marketing Strategy Development',
    desc: 'We design holistic marketing strategies aligned with your business goals — grounded in data, shaped by regional insight, and built for execution. From foundational market research to building world-class marketing teams, we architect your growth engine.',
    items: [
      'Market Research & Consumer Insights',
      'Competitive Analysis & Landscape Mapping',
      'Target Audience Segmentation',
      'Marketing Roadmap & Planning',
      'Marketing Talent Management',
      'Marketing Team Building & Structure Design',
    ],
  },
  {
    n: '02',
    tag: 'Channel & Customer Journey',
    title: 'Digital Marketing Strategy',
    desc: 'We build integrated digital ecosystems that capture, nurture, and convert audiences across every relevant touchpoint — from first click to loyal customer, across every channel that matters for your GCC audience.',
    items: [
      'Channel Strategy (SEO, Paid Ads, Social Media, Email)',
      'Customer Journey Mapping',
      'Digital Funnel Design & Optimisation',
      'Omnichannel Marketing Strategy',
    ],
  },
  {
    n: '03',
    tag: 'Measurement & Optimisation',
    title: 'Performance Marketing & Analytics',
    desc: 'We establish the reporting infrastructure and analytical frameworks to make your marketing spend accountable — connecting every campaign activity to revenue with precision, giving leadership full visibility.',
    items: [
      'Marketing KPIs & Executive Dashboards',
      'Attribution Modelling',
      'Marketing Analytics Setup & Governance',
    ],
  },
  {
    n: '04',
    tag: 'Stack Design & Implementation',
    title: 'Marketing Technology (MarTech)',
    desc: 'We architect and implement the technology backbone of your marketing function — selecting, integrating, and activating tools that scale with your business and make your team dramatically more effective.',
    items: [
      'CRM Systems Selection & Deployment',
      'Marketing Automation Design',
      'Customer Data Platforms (CDP)',
      'AI-Driven Marketing Tools & Integration',
    ],
  },
  {
    n: '05',
    tag: 'Launch & Commercial Alignment',
    title: 'Go-To-Market Strategy',
    desc: 'We design and execute the commercial playbook for product launches, market entries, and growth phases — ensuring sales and marketing move as a unified force with clear targets and accountable timelines.',
    items: [
      'Pricing Strategy Development',
      'Distribution Channel Design',
      'Launch Campaign Planning & Execution',
      'Sales & Marketing Alignment',
    ],
  },
];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function CMOServices() {
  return (
    <section className={styles.sec} id="services">

      {/* Header */}
      <div className={styles.hdr}>
        <div className={styles.hdrLeft}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Five Capability Areas</span>
          </div>
          <h2 className={styles.h2}>
            The Full Scope of Your<br />
            <em>Fractional CMO.</em>
          </h2>
        </div>
        <button onClick={scrollToContact} className={styles.bookLink}>
          Book a Consultation ↗
        </button>
      </div>

      {/* Intro */}
      <p className={styles.intro}>
        Each engagement is structured around your specific stage, sector, and growth ambitions.
        Your Fractional CMO leads across all five pillars — bringing strategic thinking and
        hands-on execution to every dimension of your marketing function.
      </p>

      {/* Cards */}
      <div className={styles.grid}>
        {areas.map(a => (
          <div className={styles.card} key={a.n}>

            {/* Left */}
            <div className={styles.cardL}>
              <div className={styles.cardN}>{a.n}</div>
              <div className={styles.cardTag}>{a.tag}</div>
              <div className={styles.cardTitle}>{a.title}</div>
              <p className={styles.cardDesc}>{a.desc}</p>
            </div>

            {/* Right */}
            <div className={styles.cardR}>
              <ul className={styles.list}>
                {a.items.map(item => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.dot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}