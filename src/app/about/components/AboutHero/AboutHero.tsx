// src/app/about/components/AboutHero/AboutHero.tsx
import React from 'react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>
          Driving the future of business in the GCC with bold strategy, smart tech, and trusted expertise.
        </p>
      </div>
    </section>
  );
}
