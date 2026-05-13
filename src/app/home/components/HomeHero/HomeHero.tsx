'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import styles from './HomeHero.module.css';

const videos = [
  '/dubai-1.mp4',
  '/dubai-2.mp4',
  '/dubai-3.mp4',
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // When current changes, load and play the new video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [current]);

  const handleEnded = () => {
    setCurrent(prev => (prev + 1) % videos.length);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* Left Column - Content */}
        <div className={styles.leftContent}>
          <span className={styles.brand}>Dillon &amp; Bird</span>

          <h1 className={styles.heading}>
            Driving Unprecedented Growth and Innovation Across the GCC.
          </h1>

          <p className={styles.strategic}>
            Strategic Partnership | Sustainable Value | Future-Forward Solutions.
          </p>

          <p className={styles.description}>
            Dillon &amp; Bird: Your dedicated strategic partner in the GCC. We blend
            finance, tech, and marketing to unlock your growth.
          </p>

          <Link href="/letsgrow" target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Let&apos;s Grow
          </Link>
        </div>

        {/* Right Column - Videos */}
        <div className={styles.rightImage}>
          <video
            ref={videoRef}
            key={current}
            onEnded={handleEnded}
            autoPlay
            muted
            playsInline
            className={styles.video}
          >
            <source src={videos[current]} type="video/mp4" />
          </video>

          {/* Dot indicators */}
          <div className={styles.dots}>
            {videos.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Play video ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}