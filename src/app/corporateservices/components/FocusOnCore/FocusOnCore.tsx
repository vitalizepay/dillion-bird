'use client';

import React from 'react';
import styles from './FocusOnCore.module.css';

export default function FocusOnCore() {
  return (
    <section className={styles.section}>
      {/* Image - Left (Desktop only) */}
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(min-width: 1025px)" srcSet="/focus-on-core.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/focus-on-core.png" />
          <source media="(max-width: 768px)" srcSet="/focus-on-core.png" />
          <img
            src="/focus-on-core.png"
            alt="Focus on Core"
            className={styles.image}
          />
        </picture>
      </div>

      {/* Content - Right (Desktop) / Top (Tablet & Mobile) */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span className={styles.headingBlack}>Focus on Core.</span>
          <br />
          <span className={styles.headingBlue}>Do More!</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            Focus on your core business. Dillon & Bird's comprehensive suite of corporate services is designed to streamline your non-core operations, allowing you to dedicate your resources and energy to driving growth and innovation within the GCC.
          </p>
        </div>
      </div>
    </section>
  );
}
