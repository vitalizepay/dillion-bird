import React from 'react';
import Button from '@/components/Button/Button';
import styles from './FinancialPlanningInvestorWhatItMeans.module.css';

export default function FinancialPlanningInvestorWhatItMeans() {
  return (
    <section className={styles.section}>
      {/* Image Collage - Left */}
      <div className={styles.imageWrapper}>
        <img 
          src="/accounting-financial-services-what-it-means.png" 
          alt="What It Means For You" 
          className={styles.image}
        />
      </div>

      {/* Content - Right */}
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${styles.headingDesktop}`}>What It Means For You</h2>
        <h2 className={`${styles.heading} ${styles.headingMobile}`}>What it means for you</h2>
        
        <p className={styles.description}>
          Secure your financial future and attract the capital you need to grow. Our expert financial planning and investor services provide you with the strategic guidance and support necessary to achieve your long-term financial aspirations in the GCC.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Invest Smarter" variant="primary" href="/contact" />
        </div>
      </div>
    </section>
  );
}
