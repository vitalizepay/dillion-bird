// src/app/about/components/AboutHero/AboutHero.tsx
import React from 'react';
import styles from './ManagementHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Management Consulting</h1>
        <p className={styles.subtitle}>
           Unlock smarter strategies and seamless transformations to drive measurable business success.
        </p>
      </div>
    </section>
  );
}
