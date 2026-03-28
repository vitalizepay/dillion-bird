import React from 'react';
import styles from './CompanyFormationHero.module.css';

export default function CompanyFormationHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Company Formation</h1>
        <p className={styles.subtitle}>
          Fast, compliant company formation to launch your business seamlessly in the GCC.
        </p>
      </div>
    </section>
  );
}
