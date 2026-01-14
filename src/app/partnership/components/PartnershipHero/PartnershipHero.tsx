// src/app/about/components/AboutHero/AboutHero.tsx
import React from 'react';
import styles from './PartnershipHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Partnerships</h1>
        <p className={styles.subtitle}>
            Let’s build lasting partnerships that drive meaningful growth across the GCC.
        </p>
      </div>
    </section>
  );
}
