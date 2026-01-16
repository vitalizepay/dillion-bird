import React from 'react';
import styles from './FinancialPlanningInvestorServices.module.css';

const servicesItems = [
  {
    id: 1,
    number: '/number-1.png',
    title: 'Financial Planning',
    description: 'Developing comprehensive financial plans aligned with your objectives, whether for business expansion or personal wealth management.',
  },
  {
    id: 2,
    number: '/number-2.png',
    title: 'Investment Strategy Development',
    description: 'Creating tailored investment strategies to maximize returns and mitigate risks within the GCC market.',
  },
  {
    id: 3,
    number: '/number-3.png',
    title: 'Investor Relations',
    description: 'Preparing investor-ready materials and strategies to effectively attract and engage potential investors.',
  },
  {
    id: 4,
    number: '/number-4.png',
    title: 'Due Diligence Support',
    description: 'Assisting investors in evaluating opportunities and providing comprehensive due diligence services.',
  },
];

export default function FinancialPlanningInvestorServices() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Services Include:</h2>
      
      <div className={styles.grid}>
        {servicesItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.numberWrapper}>
              <img src={item.number} alt="" className={styles.numberImage} />
            </div>
            <div className={styles.textWrapper}>
              <h3 className={styles.cardHeading}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
