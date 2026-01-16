import React from 'react';
import styles from './CompanyFormationServices.module.css';

const servicesItems = [
  {
    id: 1,
    number: '/number-1.png',
    title: 'Jurisdictional Advisory',
    description: 'We help you identify the optimal jurisdiction for your business based on your specific needs and objectives.',
  },
  {
    id: 2,
    number: '/number-2.png',
    title: 'Documentation and Application Processing',
    description: 'We manage all necessary paperwork and navigate the application processes efficiently.',
  },
  {
    id: 3,
    number: '/number-3.png',
    title: 'Liaison with Government Authorities',
    description: 'We act as your point of contact with relevant government agencies, ensuring a smooth and compliant process.',
  },
  {
    id: 4,
    number: '/number-4.png',
    title: 'Post-Formation Support',
    description: 'We provide ongoing support to help you establish your operational infrastructure.',
  },
];

export default function CompanyFormationServices() {
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
