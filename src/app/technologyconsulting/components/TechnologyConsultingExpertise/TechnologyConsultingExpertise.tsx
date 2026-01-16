import React from 'react';
import styles from './TechnologyConsultingExpertise.module.css';

const servicesItems = [
  {
    id: 1,
    number: '/number-1.png',
    title: 'Digital Transformation Strategy',
    description: 'Developing comprehensive strategies to integrate digital technologies across your organization.',
  },
  {
    id: 2,
    number: '/number-2.png',
    title: 'System Integration',
    description: 'Ensuring seamless integration of various technology systems to optimize data flow and collaboration.',
  },
  {
    id: 3,
    number: '/number-3.png',
    title: 'Automation Solutions',
    description: 'Identifying opportunities to automate repetitive tasks, freeing up your team for strategic initiatives.',
  },
  {
    id: 4,
    number: '/number-4.png',
    title: 'Data Analytics and Insights',
    description: 'Implementing tools and processes to extract valuable insights from your data, enabling data-driven decision-making.',
  },
];

export default function TechnologyConsultingExpertise() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Technology Consulting Expertise Includes:</h2>
      
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
