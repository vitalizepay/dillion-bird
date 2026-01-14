// HomeHero.tsx
"use client";

import Image from "next/image";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Column - Content */}
        <div className={styles.leftContent}>
          <span className={styles.brand}>Dillon & Bird</span>

          <h1 className={styles.heading}>
            Driving Unprecedented Growth and Innovation Across the GCC.
          </h1>

          <p className={styles.strategic}>
            Strategic Partnership | Sustainable Value | Future-Forward Solutions.
          </p>

          <p className={styles.description}>
            Dillon & Bird: Your dedicated strategic partner in the GCC. We blend finance, tech, and marketing to unlock your growth.
          </p>

          <button className={styles.cta}>Lets Grow</button>
        </div>

        {/* Right Column - Image */}
        <div className={styles.rightImage}>
          <Image
            src="/pexels-skyb0y-3449351.png"
            alt="Building"
            fill
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
