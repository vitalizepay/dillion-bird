import React from 'react';
import Button from '@/components/Button/Button';
import styles from './CorporateServicesWhatItMeans.module.css';

export default function CorporateServicesWhatItMeans() {
  return (
    <section className={styles.section}>
      {/* Image - Left */}
      <div className={styles.imageWrapper}>
        <img 
          src="/partnership-what-it-means.png" 
          alt="What It Means For You" 
          className={styles.image}
        />
      </div>

      {/* Content - Right */}
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${styles.headingDesktop}`}>What It Means For You</h2>
        <h2 className={`${styles.heading} ${styles.headingMobile}`}>What it means for you</h2>
        
        <p className={styles.description}>
          Free up valuable time and resources by entrusting your non-core operations to our expert team. Our comprehensive corporate services ensure efficiency, compliance, and allow you to focus on your strategic priorities and core business activities within the GCC.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Streamline Now" variant="primary" href="/contact" />
        </div>
      </div>
    </section>
  );
}
