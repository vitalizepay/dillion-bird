// src/app/partnership/components/PartnershipWhatItMeans/PartnershipWhatItMeans.tsx
import React from 'react';
import Button from '@/components/Button/Button';
import styles from './PartnershipWhatItMeans.module.css';

export default function PartnershipWhatItMeans() {
  return (
    <section className={styles.section}>
      {/* Content - Left */}
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${styles.headingDesktop}`}>What It Means For You</h2>
        <h2 className={`${styles.heading} ${styles.headingMobile}`}>What it means for you</h2>
        
        <p className={styles.description}>
          Achieve accelerated and sustainable growth through a collaborative partnership that leverages 
          our diverse expertise to enhance your efficiency, identify new opportunities, and navigate 
          the complexities of the GCC market.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Partner With Us" variant="primary" href="/partner" />
        </div>
      </div>

      {/* Image - Right */}
      <div className={styles.imageWrapper}>
        <img 
          src="/partnership-what-it-means.png" 
          alt="What It Means For You" 
          className={styles.image}
        />
      </div>
    </section>
  );
}
