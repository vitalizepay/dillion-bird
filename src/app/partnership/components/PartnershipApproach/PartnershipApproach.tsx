// src/app/partnership/components/PartnershipApproach/PartnershipApproach.tsx
import React from 'react';
import styles from './PartnershipApproach.module.css';

const approachItems = [
  {
    id: 1,
    number: '/number-1.png',
    title: 'Identifying and leveraging core strengths',
    description: 'We help you focus on what you do best and build upon your existing advantages.',
  },
  {
    id: 2,
    number: '/number-2.png',
    title: 'Creating synergistic collaborations',
    description: 'We facilitate connections and partnerships that create mutual value and accelerate growth.',
  },
  {
    id: 3,
    number: '/number-3.png',
    title: 'Optimizing operational efficiency',
    description: 'We streamline processes and implement best practices to enhance productivity and reduce costs.',
  },
  {
    id: 4,
    number: '/number-4.png',
    title: 'Navigating market complexities',
    description: 'We provide insights and guidance to help you navigate the unique challenges and opportunities of the GCC market.',
  },
];

export default function PartnershipApproach() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Strategic Partnership Approach Focuses On:</h2>
      
      <div className={styles.grid}>
        {approachItems.map((item) => (
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
