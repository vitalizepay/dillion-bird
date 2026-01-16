'use client';

import React from 'react';
import styles from './TechnologyConsultingSmartTechProgress.module.css';

export default function TechnologyConsultingSmartTechProgress() {
  return (
    <section className={styles.section}>
      {/* Content - Left */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span className={styles.headingBlack}>Smart Tech Progress.</span>
          <br />
          <span className={styles.headingBlue}>Do More!</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            In today's digital age, leveraging the right technology is crucial for achieving operational excellence and driving innovation. Dillon & Bird provides expert technology consulting services to help GCC businesses implement smart systems that enhance workflows and unlock new levels of efficiency.
          </p>
        </div>
      </div>

      {/* Image - Right */}
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(min-width: 1025px)" srcSet="/technology-consulting-smart-tech.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/technology-consulting-smart-tech-tab.png" />
          <source media="(max-width: 768px)" srcSet="/technology-consulting-smart-tech.png" />
          <img
            src="/technology-consulting-smart-tech.png"
            alt="Technology Consulting Smart Tech Progress"
            className={styles.image}
          />
        </picture>
      </div>
    </section>
  );
}
