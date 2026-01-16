import React from 'react';
import Button from '@/components/Button/Button';
import styles from './ManagementWhatItMeans.module.css';

export default function ManagementWhatItMeans() {
  return (
    <section className={styles.section}>
      {/* Image - Left */}
      <div className={styles.imageWrapper}>
        <img 
          src="/management-what-it-means.png" 
          alt="What It Means For You" 
          className={styles.image}
        />
      </div>

      {/* Content - Right */}
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${styles.headingDesktop}`}>What It Means For You</h2>
        <h2 className={`${styles.heading} ${styles.headingMobile}`}>What it means for you</h2>
        
        <p className={styles.description}>
          Gain clarity and direction for sustainable growth. Our management consulting services provide you with the strategic roadmap and operational support needed to navigate complexity, optimize performance, and achieve your long-term business objectives in the GCC.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Plan Your Growth" variant="primary" href="/contact" />
        </div>
      </div>
    </section>
  );
}
