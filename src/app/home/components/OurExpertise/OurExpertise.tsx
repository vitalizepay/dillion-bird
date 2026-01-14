// src/app/home/components/OurExpertise/OurExpertise.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import ExpertiseCard from "./components/ExpertiseCard";
import styles from "./OurExpertise.module.css";

const baseExpertiseData = [
  {
    id: 1,
    image: "/expertise-strategic.png",
    imageDark: "/expertise-strategic-dark.png",
    title: "Strategic Partnership",
    description: "Collaborative growth and the efficiency.",
    buttonText: "Partner With Us",
    buttonHref: "/partnership",
  },
  {
    id: 2,
    image: "/expertise-management.png",
    imageDark: "/expertise-management-dark.png",
    title: "Management Consulting",
    description: "Clear growth strategy, smooth transformation",
    buttonText: "Plan Your Growth",
    buttonHref: "/consulting",
  },
  {
    id: 3,
    image: "/expertise-corporate.png",
    imageDark: "/expertise-corporate-dark.png",
    title: "Corporate Services",
    description: "Focus on core business, we handle the rest.",
    buttonText: "Streamline Now",
    buttonHref: "/services",
  },
  {
    id: 4,
    image: "/expertise-formation.png",
    imageDark: "/expertise-formation-dark.png",
    title: "Company Formation",
    description: "Fast, compliant startup launches in the GCC.",
    buttonText: "Launch Here",
    buttonHref: "/formation",
  },
];

const expertiseData = [...baseExpertiseData, ...baseExpertiseData, ...baseExpertiseData];

export default function OurExpertise() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef(0);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const baseCardCount = baseExpertiseData.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      let newIndex = prev - 1;
      if (newIndex < 0) {
        newIndex = baseCardCount - 1;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      let newIndex = prev + 1;
      if (newIndex >= baseCardCount) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchStart = touchStartRef.current;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  const isCardVisible = (index: number) => {
    return (
      index >= currentIndex &&
      index < currentIndex + visibleCount
    );
  };

  const offset = (currentIndex * 100) / visibleCount;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Our Expertise</h2>
        <div className={styles.arrows}>
          <button
            onClick={handlePrev}
            className={styles.arrowBtn}
            type="button"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className={styles.arrowBtn}
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div
        className={styles.carousel}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.cardsContainer}
          style={{
            transform: `translateX(-${offset}%)`,
          }}
        >
          {expertiseData.map((item, index) => (
            <div key={`${item.id}-${Math.floor(index / baseCardCount)}`} className={styles.cardWrapper}>
              <ExpertiseCard
                image={item.image}
                imageDark={item.imageDark}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                buttonHref={item.buttonHref}
                isVisible={isCardVisible(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
