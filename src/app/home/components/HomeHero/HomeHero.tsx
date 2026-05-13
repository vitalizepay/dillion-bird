'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './HomeHero.module.css';

const videos = [
  '/dubai-1.mp4',
  '/dubai-2.mp4',
  '/dubai-3.mp4',
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Play active video only
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === current) {
        video.currentTime = 0;

        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [current]);

  // When video ends → next
  const handleVideoEnd = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* VIDEO BACKGROUND */}
        <div className={styles.rightImage}>
          {videos.map((video, index) => (
            <video
              key={index}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              className={`${styles.video} ${
                index === current ? styles.activeVideo : ''
              }`}
              muted
              playsInline
              preload="auto"
              onEnded={index === current ? handleVideoEnd : undefined}
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
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

        {/* DOTS */}
        <div className={styles.dots}>
          {videos.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${
                i === current ? styles.dotActive : ''
              }`}
              onClick={() => setCurrent(i)}
              aria-label={`Play video ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}