import React from 'react';
import styles from './FinancialPlanningInvestorServicesHero.module.css';

export default function FinancialPlanningInvestorServicesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Financial Planning & Investor Services</h1>
        <p className={styles.subtitle}>
          Secure your future and attract investors with smart, strategic financial planning and advisory.
        </p>
      </div>
    </section>
  );
}
