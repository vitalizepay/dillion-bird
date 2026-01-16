import React from 'react';
import Button from '@/components/Button/Button';
import styles from './TechnologyConsultingWhatItMeans.module.css';

export default function TechnologyConsultingWhatItMeans() {
  return (
    <section className={styles.section}>
      {/* Image Collage - Left */}
      <div className={styles.imageWrapper}>
        <img 
          src="/technology-consulting-what-it-means.png" 
          alt="What It Means For You" 
          className={styles.image}
        />
      </div>

      {/* Content - Right */}
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${styles.headingDesktop}`}>What It Means For You</h2>
        <h2 className={`${styles.heading} ${styles.headingMobile}`}>What it means for you</h2>
        
        <p className={styles.description}>
           Enhance your operational efficiency and drive innovation through the strategic adoption of smart technologies. Our consulting services provide you with the expertise to implement the right technology solutions for a competitive edge in the GCC market.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Tech Solutions" variant="primary" href="/contact" />
        </div>
      </div>
    </section>
  );
}
