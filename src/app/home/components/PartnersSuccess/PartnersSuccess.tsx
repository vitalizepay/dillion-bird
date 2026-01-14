'use client';

import React from 'react';
import Image from 'next/image';
import Button from "@/components/Button/Button";
import styles from './PartnersSuccess.module.css';

interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
}

const partnerLogos: PartnerLogo[] = [
  {
    id: 1,
    name: 'Washmen',
    logo: '/washmen.svg',
  },
  {
    id: 2,
    name: 'Sarwa',
    logo: '/sarwa.svg',
  },
  {
    id: 3,
    name: 'Kitopi',
    logo: '/kitopi.svg',
  },
];

export default function PartnersSuccess() {
  return (
    <section className={styles.section}>
      {/* Content Section - Left */}
      <div className={styles.content}>
        <h2 className={styles.title}>Partnering for Success</h2>

        <p className={styles.text}>
          Collaborating with visionary founders and established businesses to drive innovation across the GCC. Clients like Washmen, Kitopi, and Sarwa. Together, we transform ambition into scalable, lasting impact.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="See Our Work" variant="primary" />
        </div>

        {/* Partner Logos */}
        <div className={styles.logosContainer}>
          {partnerLogos.map((partner) => (
            <div key={partner.id} className={styles.logoWrapper}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={60}
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Section - Right (Single Image) */}
      <div className={styles.imageWrapper}>
        <img
          src="/office-large.png"
          alt="Partner office workspace"
          className={styles.image}
        />
      </div>
    </section>
  );
}
