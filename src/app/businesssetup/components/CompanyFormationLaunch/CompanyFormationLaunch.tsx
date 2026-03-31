'use client';

import React from 'react';
import styles from './CompanyFormationLaunch.module.css';

export default function CompanyFormationLaunch() {
  return (
    <section className={styles.section}>
      {/* Image - Left */}
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(min-width: 1025px)" srcSet="/company-formation-launch.png" />
          <source media="(max-width: 1024px) and (min-width: 769px)" srcSet="/company-formation-launch.png" />
          <source media="(max-width: 768px)" srcSet="/company-formation-launch.png" />
          <img
            src="/company-formation-launch.png"
            alt="Launch in GCC"
            className={styles.image}
          />
        </picture>
      </div>

      {/* Content - Right (Desktop) / Top (Tablet & Mobile) */}
      <div className={styles.content}>
        <h2 className={styles.heading}>
          <span className={styles.headingBlack}>Launch in GCC.</span>
          <br />
          <span className={styles.headingBlue}>Do More!</span>
        </h2>

        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            Ready to establish your presence in the dynamic GCC market? Dillon & Bird provides a seamless and efficient company formation service, guiding you through every step of the process to ensure a fast and compliant launch.
          </p>

          <p className={styles.paragraph}>
            We understand the intricacies of company registration across the various jurisdictions within the GCC. Our expert team handles the complexities, allowing you to focus on building your business.
          </p>
        </div>
      </div>
    </section>
  );
}
