import React from 'react';
import styles from './TechnologyConsultingHero.module.css';

export default function TechnologyConsultingHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Technology Consulting</h1>
        <p className={styles.subtitle}>
           Empowering your business with smart, scalable tech solutions that drive efficiency and innovation.
        </p>
      </div>
    </section>
  );
}
