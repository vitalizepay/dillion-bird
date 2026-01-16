import React from 'react';
import styles from './AccountingFinancialServicesHero.module.css';

export default function AccountingFinancialServicesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Accounting & Financial Services</h1>
        <p className={styles.subtitle}>
          Audit-ready, reliable financials that build trust and drive growth.
        </p>
      </div>
    </section>
  );
}
