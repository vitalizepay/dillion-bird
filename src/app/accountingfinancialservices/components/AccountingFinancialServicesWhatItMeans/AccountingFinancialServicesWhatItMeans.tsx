import React from 'react';
import Button from '@/components/Button/Button';
import styles from './AccountingFinancialServicesWhatItMeans.module.css';

export default function AccountingFinancialServicesWhatItMeans() {
  return (
    <section className={styles.section}>
      {/* Content - Left */}
      <div className={styles.content}>
        <h2 className={`${styles.heading} ${styles.headingDesktop}`}>What It Means For You</h2>
        <h2 className={`${styles.heading} ${styles.headingMobile}`}>What it means for you</h2>
        
        <p className={styles.description}>
          Gain financial clarity and build trust with investors. Our accounting and financial services provide you with accurate, reliable, and audit-proof financials, empowering you to make informed decisions and secure your financial future in the GCC.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Get Secure" variant="primary" href="/contact" />
        </div>
      </div>

      {/* Image Collage - Right */}
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
