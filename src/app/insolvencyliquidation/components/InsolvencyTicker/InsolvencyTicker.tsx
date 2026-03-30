'use client';
import { useEffect, useRef } from 'react';
import React from 'react';
import styles from './InsolvencyTicker.module.css';



const items = [
    'Voluntary Liquidation', 'Court-Supervised Wind-Down', 'Debt Restructuring',
    'Creditor Negotiation', 'Business Rescue', 'Free Zone Dissolution',
    'Director Liability Advice', 'Cross-Border Insolvency', 'Asset Protection',
    'Bankruptcy Advisory',
  ];

// Repeat enough times to always fill screen + loop seamlessly
const repeated = [...items, ...items, ...items, ...items];

export default function CFTicker() {
  const innerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const SPEED = 0.6; // px per frame — increase for faster

    const tick = () => {
      posRef.current -= SPEED;
      const halfWidth = el.scrollWidth / 2;
      // Reset when we've scrolled one full half (seamless loop)
      if (Math.abs(posRef.current) >= halfWidth) {
        posRef.current = 0;
      }
      el.style.transform = `translateX(${posRef.current}px)`;
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className={styles.ticker} aria-hidden="true">
      <span className={styles.label}>Our Services</span>
      <div className={styles.sep} />
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