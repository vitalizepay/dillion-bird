// src/app/home/components/OurExpertise/components/ExpertiseCard.tsx
"use client";

import { useState } from "react";
import Button from "@/components/Button/Button";
import styles from "./ExpertiseCard.module.css";

type ExpertiseCardProps = {
  image: string;
  imageDark: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  isVisible: boolean;
};

export default function ExpertiseCard({
  image,
  imageDark,
  title,
  description,
  buttonText,
  buttonHref,
  isVisible,
}: ExpertiseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Show light image if visible, dark if off-screen or hovered
  const currentImage = (!isVisible || isHovered) ? imageDark : image;

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={currentImage}
        alt={title}
        className={styles.image}
      />
      <div className={styles.overlay} />

      {/* Reveals on hover, ported from the landing-page prototype */}
      <svg
        className={styles.hoverIcon}
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.buttonContainer}>
          <Button
            text={buttonText}
            variant="primary"
            href={buttonHref}
          />
        </div>
      </div>
    </div>
  );
}
