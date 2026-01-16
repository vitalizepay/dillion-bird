import React from 'react';
import Button from '@/components/Button/Button';
import styles from './CompanyFormationWhatItMeans.module.css';

export default function CompanyFormationWhatItMeans() {
  return (
    <section className={styles.section}>
      {/* Content - Left */}
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${styles.headingDesktop}`}>What It Means For You</h2>
        <h2 className={`${styles.heading} ${styles.headingMobile}`}>What it means for you</h2>
        
        <p className={styles.description}>
          Launch your business in the GCC quickly and with confidence. Our expert guidance ensures a compliant and hassle-free company formation process, allowing you to focus on realizing your entrepreneurial vision in this thriving region.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Launch Here" variant="primary" href="/contact" />
        </div>
      </div>

      {/* Image - Right */}
      <div className={styles.imageWrapper}>
        <img 
          src="/management-what-it-means.png" 
          alt="What It Means For You" 
          className={styles.image}
        />
      </div>
    </section>
  );
}
