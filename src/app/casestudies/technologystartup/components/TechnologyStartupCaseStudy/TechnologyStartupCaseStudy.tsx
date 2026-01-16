'use client';

import React from 'react';
import styles from './TechnologyStartupCaseStudy.module.css';

export default function TechnologyStartupCaseStudy() {
  return (
    <section className={styles.section}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src="/technology-startup-case.png"
          alt="Technology Startup"
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>Technology Startup</h1>
        <p className={styles.subtitle}>Abu Dhabi Global Market (ADGM), UAE</p>

        {/* Challenge Section */}
        <div className={styles.section_block}>
          <h2 className={styles.sectionTitle}>Challenge</h2>
          <p className={styles.sectionContent}>
            A technology startup with innovative AI solutions wanted to establish a presence in the UAE to access the wider GCC market. They chose ADGM for its favorable regulatory environment but needed guidance on the specific requirements and processes for company formation within the free zone.
          </p>
        </div>

        {/* Our Approach Section */}
        <div className={styles.section_block}>
          <h2 className={styles.sectionTitle}>Our Approach</h2>
          <p className={styles.sectionIntro}>
            Dillon & Bird provided comprehensive support, including
          </p>
          <ul className={styles.bulletList}>
            <li>
              <span className={styles.bulletTitle}>ADGM Company Registration:</span>
              <span className={styles.bulletContent}>
                We handled all aspects of the company registration process within ADGM, ensuring compliance with their regulations.
              </span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Licensing and Visa Processing:</span>
              <span className={styles.bulletContent}>
                We assisted with obtaining the necessary licenses and processing visas for the startup's team.
              </span>
            </li>
            <li>
              <span className={styles.bulletTitle}>Office Setup Support:</span>
              <span className={styles.bulletContent}>
                We provided guidance on setting up their office space and operational infrastructure within ADGM.
              </span>
            </li>
          </ul>
        </div>

        {/* Impact Section */}
        <div className={styles.section_block}>
          <h2 className={styles.sectionTitle}>Impact</h2>
          <p className={styles.sectionContent}>
            The technology startup successfully established its ADGM presence within 4 weeks, allowing them to quickly begin operations and pursue their growth strategy in the GCC.
          </p>
        </div>
      </div>
    </section>
  );
}
