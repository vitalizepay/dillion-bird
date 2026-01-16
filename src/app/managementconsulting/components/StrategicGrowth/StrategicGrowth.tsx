'use client';

import React from 'react';
import styles from './StrategicGrowth.module.css';

export default function StrategicGrowth() {
  return (
    <section className={styles.section}>
      {/* Content - Left/Top */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span className={styles.headingBlack}>Strategic Growth Defined.</span>
          <br />
          <span className={styles.headingBlue}>Do More!</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            Navigating the complexities of the GCC business landscape requires a clear and adaptable growth strategy. Dillon & Bird provides expert management consulting services designed to equip your organization with the strategic foresight and operational frameworks needed to achieve sustainable success.
          </p>
        </div>
      </div>

      {/* Image - Right/Bottom */}
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(min-width: 1025px)" srcSet="/management-team.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/management-team.png" />
          <source media="(max-width: 768px)" srcSet="/management-team.png" />
          <img
            src="/management-team.png"
            alt="Management Consulting Team"
            className={styles.image}
          />
        </picture>
      </div>
    </section>
  );
}
