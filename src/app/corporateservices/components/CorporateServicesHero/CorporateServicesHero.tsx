import React from 'react';
import styles from './CorporateServicesHero.module.css';

export default function CorporateServicesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Corporate Services</h1>
        <p className={styles.subtitle}>
          Streamline your operations with our end-to-end corporate services tailored for growth in the GCC.
        </p>
      </div>
    </section>
  );
}
