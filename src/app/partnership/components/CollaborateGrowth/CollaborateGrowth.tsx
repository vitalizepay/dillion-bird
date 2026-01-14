// src/app/about/components/OurGCCLegacy/OurGCCLegacy.tsx
'use client';

import React from 'react';
import styles from './CollaborateGrowth.module.css';

export default function OurGCCLegacy() {
  return (
    <section className={styles.section}>
      {/* Content - Left/Top */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span className={styles.headingBlack}>Collaborate for Growth.</span>
          <br />
          <span className={styles.headingBlue}>Do More!</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            In today's rapidly evolving GCC market, sustainable growth often hinges on the right strategic alliances. Dillon & Bird acts as your dedicated strategic partner, working collaboratively to identify and capitalize on opportunities for synergistic growth and enhanced operational efficiency.
          </p>

          <p className={styles.paragraph}>
            We go beyond traditional consulting. We embed ourselves within your organization, gaining a deep understanding of your core capabilities and strategic objectives. This allows us to co-create and implement tailored strategies that drive tangible improvements and unlock new avenues for expansion.
          </p>

        </div>
      </div>

      {/* Image - Right/Bottom */}
      <div className={styles.imageWrapper}>
        {/* Desktop & Mobile Image */}
        <picture>
          <source media="(min-width: 1025px)" srcSet="/partners-handshake.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/partners-handshake.png" />
          <source media="(max-width: 768px)" srcSet="/partners-handshake.png" />
          <img
            src="/partners-handshake.png"
            alt="Partners Handshake"
            className={styles.image}
          />
        </picture>
      </div>
    </section>
  );
}
