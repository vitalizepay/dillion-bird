import React from 'react';
import Button from '@/components/Button/Button';
import styles from './CompanyFormationCaseStudies.module.css';

const caseStudies = [
  {
    id: 1,
    image: '/case-study-technology.png',
    title: 'Technology Startup',
    location: 'Abu Dhabi Global Market (ADGM), UAE',
    link: '/case-studies/technology-startup',
  },
  {
    id: 2,
    image: '/case-study-retail.png',
    title: 'Retail Business',
    location: 'Saudi Arabia',
    link: '/case-studies/retail-business',
  },
];

export default function CompanyFormationCaseStudies() {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Case Studies</h2>
      
      <div className={styles.grid}>
        {caseStudies.map((study) => (
          <div key={study.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src={study.image} 
                alt={study.title} 
                className={styles.image}
              />
              <div className={styles.overlay}></div>
              
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{study.title}</h3>
                <p className={styles.cardLocation}>{study.location}</p>
                
                <div className={styles.buttonWrapper}>
                  <Button text="View Details" variant="primary" href={study.link} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
