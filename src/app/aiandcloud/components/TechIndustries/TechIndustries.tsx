import styles from './TechIndustries.module.css';

const industries = [
  {
    icon: '📈',
    title: 'Financial Services',
    items: ['Predictive Analytics', 'Due Diligence Automation', 'Portfolio Optimisation', 'Risk Modelling'],
  },
  {
    icon: '🛍️',
    title: 'Retail & E-Commerce',
    items: ['Demand Forecasting', 'Personalisation Engines', 'Dynamic Pricing', 'Supply Chain AI'],
  },
  {
    icon: '⚖️',
    title: 'Legal & Compliance',
    items: ['Contract Analysis', 'Regulatory Intelligence', 'Document Classification', 'Legal Research AI'],
  },
  {
    icon: '🚚',
    title: 'Logistics & Supply Chain',
    items: ['Route Optimisation', 'Inventory Intelligence', 'Predictive Maintenance', 'Fleet Analytics'],
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    items: ['Patient Data Systems', 'Compliance Automation', 'Workflow Digitalisation', 'Reporting Dashboards'],
  },
  {
    icon: '🏗️',
    title: 'Real Estate & Construction',
    items: ['Project Management Platforms', 'Cost Analytics', 'Tenant Portals', 'Smart Building IoT'],
  },
  {
    icon: '🏭',
    title: 'Manufacturing & Industrial',
    items: ['Production Monitoring', 'Quality Control AI', 'IoT Integration', 'ERP Modernisation'],
  },
  {
    icon: '🏛️',
    title: 'Government & Public Sector',
    items: ['Citizen Services Digitalisation', 'Data Governance', 'Compliance Platforms', 'Secure Infrastructure'],
  },
];

export default function TechIndustries() {
  return (
    <section className={styles.sec} id="industries">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Who We Serve</span>
          </div>
          <h2 className={styles.h2}>Industry Expertise</h2>
          <p className={styles.sub}>
            Deep sector knowledge means we understand your business constraints, regulatory
            environment, and competitive landscape — not just your technology stack.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map(ind => (
            <div className={styles.card} key={ind.title}>
              <div className={styles.cardIcon}>{ind.icon}</div>
              <h3 className={styles.cardTitle}>{ind.title}</h3>
              <ul className={styles.cardList}>
                {ind.items.map(item => (
                  <li key={item}>
                    <span className={styles.dot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}