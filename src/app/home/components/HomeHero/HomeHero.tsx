'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  const { scrollY } = useScroll();
  // Background drifts down while the copy lifts away - classic depth parallax.
  // Scroll-linked only, so without JS the hero simply renders static.
  const mediaY = useTransform(scrollY, [0, 900], [0, 110]);
  const copyY = useTransform(scrollY, [0, 900], [0, -58]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* IMAGE BACKGROUND */}
        <motion.div className={styles.rightImage} style={{ y: mediaY, scale: 1.04 }}>
          {/* Phones get a portrait crop - the landscape shot has to zoom ~4.7x
              to fill a tall viewport, which loses the skyline entirely. */}
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero-skyline-mobile.jpg" />
            <img
              className={styles.heroImg}
              src="/hero-skyline.jpg"
              alt="Dubai skyline"
            />
          </picture>
        </motion.div>

        {/* CONTENT - entrance is CSS-driven so the copy is never dependent on JS */}
        <motion.div className={styles.leftContent} style={{ y: copyY }}>
          <span className={styles.brand}>Dillon &amp; Bird</span>

          <h1 className={styles.heading}>
            Driving Unprecedented Growth and Innovation Across the GCC.
          </h1>

          <p className={styles.strategic}>
            Strategic Partnership | Sustainable Value | Future-Forward Solutions.
          </p>

          <p className={styles.description}>
            Dillon &amp; Bird: Your dedicated strategic partner in the GCC.
            We blend finance, tech, and marketing to unlock your growth.
          </p>

          <div className={styles.ctaWrap}>
            <Link
              href="/letsgrow"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Let&apos;s Grow
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
