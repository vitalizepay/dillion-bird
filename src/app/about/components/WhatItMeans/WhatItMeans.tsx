// src/app/about/components/WhatItMeans/WhatItMeans.tsx
'use client';

import React from 'react';
import Button from '@/components/Button/Button';
import styles from './WhatItMeans.module.css';

export default function WhatItMeans() {
  return (
    <section className={styles.section}>
      {/* Image - Left/Top */}
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(min-width: 1025px)" srcSet="/what-it-means-collage.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/what-it-means-tablet.png" />
          <source media="(max-width: 768px)" srcSet="/what-it-means-collage.png" />
          <img 
            src="/what-it-means-collage.png" 
            alt="What It Means For You" 
            className={styles.image}
          />
        </picture>
      </div>

      {/* Content - Right/Bottom */}
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${styles.headingDesktop}`}>What It Means For You</h2>
        <h2 className={`${styles.heading} ${styles.headingMobile}`}>What it means for you</h2>
        
        <p className={styles.description}>
          Gain a partner deeply invested in your growth within the GCC. Benefit from our integrated 
          expertise and our unwavering commitment to delivering sustainable value and future-forward 
          solutions tailored to your specific needs. With Dillon & Bird, you don't just grow; you{' '}
          <span className={styles.highlight}>Do More!</span>
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Learn More About Our Values" variant="primary" href="/values" />
        </div>
      </div>
    </section>
  );
}
