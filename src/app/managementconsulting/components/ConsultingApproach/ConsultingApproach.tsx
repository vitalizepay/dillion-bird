import React from 'react';
import styles from './ConsultingApproach.module.css';

const approachItems = [
  {
    id: 1,
    number: '/number-1.png',
    title: 'Comprehensive Growth Strategy Development',
    description: 'We work with you to define clear objectives, identify key growth drivers, and develop actionable strategies aligned with your vision.',
  },
  {
    id: 2,
    number: '/number-2.png',
    title: 'Organizational Transformation',
    description: 'We guide you through periods of change, ensuring smooth transitions and fostering a culture of adaptability and innovation.',
  },
  {
    id: 3,
    number: '/number-3.png',
    title: 'Operational Excellence',
    description: 'We analyze your current processes, identify areas for improvement, and implement solutions to enhance efficiency and productivity.',
  },
  {
    id: 4,
    number: '/number-4.png',
    title: 'Market Entry and Expansion Strategies',
    description: 'We provide insights and guidance for successfully entering new GCC markets or expanding your existing presence.',
  },
];

export default function ConsultingApproach() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Tailored Consulting Approach Provides:</h2>
      
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
