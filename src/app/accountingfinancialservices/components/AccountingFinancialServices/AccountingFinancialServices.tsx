import React from 'react';
import styles from './AccountingFinancialServices.module.css';

const servicesItems = [
  {
    id: 1,
    number: '/number-1.png',
    title: 'Bookkeeping and Accounting',
    description: 'Accurate and timely record-keeping to provide a clear picture of your financial health.',
  },
  {
    id: 2,
    number: '/number-2.png',
    title: 'Financial Reporting',
    description: 'Preparation of comprehensive financial statements that meet regulatory requirements and provide valuable insights.',
  },
  {
    id: 3,
    number: '/number-3.png',
    title: 'Audit Preparation',
    description: 'Ensuring your financial records are meticulously prepared for audits, minimizing risk and maximizing credibility.',
  },
  {
    id: 4,
    number: '/number-4.png',
    title: 'Tax Compliance',
    description: 'Navigating the complexities of GCC tax regulations to ensure full compliance.',
  },
];

export default function AccountingFinancialServices() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Expert Team Offers A Range Of Services, Including:</h2>
      
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
