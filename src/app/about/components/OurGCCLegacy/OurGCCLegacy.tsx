// src/app/about/components/OurGCCLegacy/OurGCCLegacy.tsx
'use client';

import React from 'react';
import styles from './OurGCCLegacy.module.css';

export default function OurGCCLegacy() {
  return (
    <section className={styles.section}>
      {/* Content - Left/Top */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span className={styles.headingBlack}>Our GCC Legacy.</span>
          <br />
          <span className={styles.headingBlue}>Do More!</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            Dillon & Bird was founded on a clear vision: to be the catalyst for unprecedented growth and sustainable innovation for businesses across the Gulf Cooperation Council. From ambitious startups to established family enterprises, we understand the unique opportunities and challenges of this dynamic region.
          </p>

          <p className={styles.paragraph}>
            Our journey began with a deep understanding of the interconnectedness of finance, technology, and strategic marketing. We recognized that true progress requires a holistic approach, one that integrates these critical pillars to unlock lasting value.
          </p>

          <p className={styles.paragraph}>
            More than just consultants, we are your dedicated strategic partners. We invest time in understanding your unique aspirations, challenges, and the specific nuances of the GCC market. Our team comprises seasoned experts with deep regional knowledge and a proven track record of delivering tangible results.
          </p>

          <p className={styles.paragraph}>
            We are driven by a commitment to operational excellence and guided by strategic foresight. We believe in building long-term relationships based on trust, transparency, and a shared commitment to your success.
          </p>
        </div>
      </div>

      {/* Image - Right/Bottom */}
      <div className={styles.imageWrapper}>
        {/* Desktop & Mobile Image */}
        <picture>
          <source media="(min-width: 1025px)" srcSet="/about-team.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/about-team-tablet.png" />
          <source media="(max-width: 768px)" srcSet="/about-team.png" />
          <img
            src="/about-team.png"
            alt="Our team working together"
            className={styles.image}
          />
        </picture>
      </div>
    </section>
  );
}
