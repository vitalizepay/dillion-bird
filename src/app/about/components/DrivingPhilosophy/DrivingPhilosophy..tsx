// src/app/about/components/DrivingPhilosophy/DrivingPhilosophy.tsx
import React from 'react';
import styles from './DrivingPhilosophy.module.css';

export default function DrivingPhilosophy() {
  return (
    <section className={styles.section}>
      {/* Content - Left */}
      <div className={styles.content}>
        <h2 className={styles.heading}>Do More: Our Driving Philosophy</h2>
        
        <p className={styles.description}>
          "Do More!" isn't just our tagline; it's the core of our philosophy. It reflects our unwavering commitment
          to go beyond the expected, to relentlessly pursue better outcomes for our clients, and to continuously
          innovate in our approach. We believe in pushing boundaries, seeking new possibilities, and empowering
          businesses across the GCC to achieve more than they ever thought possible. This spirit of "Do More!"
          permeates every aspect of our work, from the initial consultation to the long-term strategic partnership.
        </p>
      </div>

      {/* Image - Right */}
      <div className={styles.imageWrapper}>
        <img
          src="/blue-rectangle.png"
          alt=""
          className={styles.blueAccent}
        />
        <img
          src="/chess-philosophy.png"
          alt="Our Driving Philosophy"
          className={styles.image}
        />
      </div>
    </section>
  );
}
