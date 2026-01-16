import React from 'react';
import styles from './CorporateServicesEncompass.module.css';

const servicesItems = [
  {
    id: 1,
    number: '/number-1.png',
    title: 'Administrative Support',
    description: 'We handle essential administrative tasks, ensuring efficiency and compliance.',
  },
  {
    id: 2,
    number: '/number-2.png',
    title: 'HR Solutions',
    description: 'We provide support with human resources functions, from talent acquisition to employee management.',
  },
  {
    id: 3,
    number: '/number-3.png',
    title: 'Compliance and Regulatory Guidance',
    description: 'We navigate the complexities of GCC regulations, ensuring your business operates smoothly and within legal frameworks.',
  },
  {
    id: 4,
    number: '/number-4.png',
    title: 'Vendor Management',
    description: 'We optimize your vendor relationships, ensuring cost-effectiveness and quality service.',
  },
];

export default function CorporateServicesEncompass() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Tailored Corporate Services Encompass:</h2>
      
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
