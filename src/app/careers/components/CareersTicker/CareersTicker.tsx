'use client';
import { useEffect, useRef } from 'react';
import React from 'react';
import styles from './CareersTicker.module.css';

const items = [
  'Excellence',
  'Integrity First',
  'Impact Over Output',
  'GCC-Native Thinking',
  'Ownership Mindset',
  'No Politics. Just Results.',
  'Relentless Curiosity',
];

const repeated = [...items, ...items, ...items, ...items];

export default function CareersTicker() {
  const innerRef = useRef<HTMLDivElement>(null);
  const animRef  = useRef<number | null>(null);
  const posRef   = useRef(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const SPEED = 0.6;
    const tick = () => {
      posRef.current -= SPEED;
      const halfWidth = el.scrollWidth / 2;
      if (Math.abs(posRef.current) >= halfWidth) posRef.current = 0;
      el.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        <div className={styles.inner} ref={innerRef}>
          {repeated.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span className={styles.dot}>·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}