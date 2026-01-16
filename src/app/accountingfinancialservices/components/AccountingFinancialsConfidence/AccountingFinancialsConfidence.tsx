'use client';

import React from 'react';
import styles from './AccountingFinancialsConfidence.module.css';

export default function AccountingFinancialsConfidence() {
  return (
    <section className={styles.section}>
      {/* Content - Left */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span className={styles.headingBlack}>Financials with Confidence.</span>
          <br />
          <span className={styles.headingBlue}>Do More!</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            Sound financial management is the bedrock of sustainable growth. Dillon & Bird provides comprehensive accounting and financial services designed to ensure your business is investor-ready, audit-proof, and positioned for long-term financial success in the GCC.
          </p>
        </div>
      </div>

      {/* Image - Right */}
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(min-width: 1025px)" srcSet="/accounting-financials-confidence.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/accounting-financials-confidence-tab.png" />
          <source media="(max-width: 768px)" srcSet="/accounting-financials-confidence.png" />
          <img
            src="/accounting-financials-confidence.png"
            alt="Accounting & Financial Services"
            className={styles.image}
          />
        </picture>
      </div>
    </section>
  );
}
