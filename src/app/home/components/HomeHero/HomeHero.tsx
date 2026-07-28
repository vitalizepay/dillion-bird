import Link from 'next/link';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* IMAGE BACKGROUND */}
        <div className={styles.rightImage}>
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
        </div>

        {/* CONTENT */}
        <div className={styles.leftContent}>
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

          <Link
            href="/letsgrow"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Let&apos;s Grow
          </Link>
        </div>

      </div>
    </section>
  );
}
