'use client';

import React from 'react';
import styles from './FinancialPlanningSecureGrow.module.css';

export default function FinancialPlanningSecureGrow() {
  return (
    <section className={styles.section}>
      {/* Image - Left */}
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(min-width: 1025px)" srcSet="/financial-planning-secure-grow-web.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/financial-planning-secure-grow-tablet.png" />
          <source media="(max-width: 768px)" srcSet="/financial-planning-secure-grow-web.png" />
          <img
            src="/financial-planning-secure-grow-web.png"
            alt="Secure and Grow"
            className={styles.image}
          />
        </picture>
      </div>

      {/* Content - Right */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span className={styles.headingBlack}>Secure and Grow.</span>
          <br />
          <span className={styles.headingBlue}>Do More!</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            Achieving your long-term financial goals and attracting the right investors requires strategic planning and a deep understanding of the GCC investment landscape. Dillon & Bird offers tailored financial planning and investor services to help you secure your future and fuel your growth.
          </p>
        </div>
      </div>
    </section>
  );
}
