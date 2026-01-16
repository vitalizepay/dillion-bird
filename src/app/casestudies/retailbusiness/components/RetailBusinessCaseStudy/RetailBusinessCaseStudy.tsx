'use client';

import React from 'react';
import styles from './RetailBusinessCaseStudy.module.css';

export default function RetailBusinessCaseStudy() {
  return (
    <section className={styles.section}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src="/retail-business-case.png"
          alt="Retail Business"
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>Retail Business</h1>
        <p className={styles.subtitle}>Saudi Arabia</p>

        {/* Challenge Section */}
        <div className={styles.section_block}>
          <h2 className={styles.sectionTitle}>Challenge</h2>
          <p className={styles.sectionContent}>
            A retail business specializing in sustainable products aimed to enter the Saudi Arabian market. They needed assistance with navigating the company formation process for mainland operations, understanding the local ownership requirements, and obtaining the necessary permits and licenses.
          </p>
        </div>

        {/* Our Approach Section */}
        <div className={styles.section_block}>
          <h2 className={styles.sectionTitle}>Our Approach</h2>
          <p className={styles.sectionIntro}>
            Dillon & Bird offered tailored support, including:
          </p>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.bulletTitle}>Mainland Company Formation:</span>
              <span className={styles.bulletContent}>
                We managed the establishment of their mainland company, ensuring compliance with Saudi Arabian company law and regulations.
              </span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Local Partner Facilitation:</span>
              <span className={styles.bulletContent}>
                We assisted in identifying and facilitating the establishment of a partnership with a suitable Saudi Arabian national, meeting the local ownership requirements.
              </span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Permits and Licenses:</span>
              <span className={styles.bulletContent}>
                We handled the application and acquisition of all necessary permits and licenses for their retail operations.
              </span>
            </li>
          </ul>
        </div>

        {/* Impact Section */}
        <div className={styles.section_block}>
          <h2 className={styles.sectionTitle}>Impact</h2>
          <p className={styles.sectionContent}>
            The retail business successfully launched its operations in Saudi Arabia within 3 months, establishing a strong foundation for their expansion in the region.
          </p>
        </div>
      </div>
    </section>
  );
}
