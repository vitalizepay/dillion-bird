// src/app/home/components/OurExpertise/OurExpertise.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import ExpertiseCard from "./components/ExpertiseCard";
import styles from "./OurExpertise.module.css";

const expertiseData = [
  {
    id: 1,
    image: "/expertise-businesssetup.png",
    imageDark: "/expertise-businesssetup-dark.png",
    title: "Business Setup",
    description: "End-to-end business setup solutions across the UAE and GCC.",
    buttonText: "Get Started",
    buttonHref: "/businesssetup",
  },
  {
    id: 2,
    image: "/expertise-corporate.png",
    imageDark: "/expertise-corporate-dark.png",
    title: "Corporate Services",
    description: "Focus on your business while we handle compliance and administration.",
    buttonText: "Streamline Now",
    buttonHref: "/corporateservices",
  },
  {
    id: 3,
    image: "/expertise-formation.png",
    imageDark: "/expertise-formation-dark.png",
    title: "Company Formation",
    description: "Fast, compliant company registration and licensing services.",
    buttonText: "Launch Here",
    buttonHref: "/companyformation",
  },
  {
    id: 4,
    image: "/expertise-management.png",
    imageDark: "/expertise-management-dark.png",
    title: "Management Consulting",
    description: "Strategic planning, operational excellence, and business transformation.",
    buttonText: "Plan Your Growth",
    buttonHref: "/managementconsulting",
  },
  {
    id: 5,
    image: "/expertise-strategic.png",
    imageDark: "/expertise-strategic-dark.png",
    title: "Strategic Partnership",
    description: "Building valuable partnerships that accelerate business growth.",
    buttonText: "Partner With Us",
    buttonHref: "/partnership",
  },
  {
    id: 6,
    image: "/expertise-financialplanning.png",
    imageDark: "/expertise-financialplanning-dark.png",
    title: "Financial Planning",
    description: "Smart financial strategies for sustainable business success.",
    buttonText: "Plan Ahead",
    buttonHref: "/financialplanninginvestorservices",
  },
  {
    id: 7,
    image: "/expertise-accounting.png",
    imageDark: "/expertise-accounting-dark.png",
    title: "Accounting & Bookkeeping",
    description: "Accurate bookkeeping and financial reporting for informed decisions.",
    buttonText: "Keep Books Clean",
    buttonHref: "/accountingbookkeeping",
  },
  {
    id: 8,
    image: "/expertise-audit.png",
    imageDark: "/expertise-audit-dark.png",
    title: "Audit Services",
    description: "Independent auditing to ensure transparency and regulatory compliance.",
    buttonText: "Request an Audit",
    buttonHref: "/audit",
  },
  {
    id: 9,
    image: "/expertise-banking.png",
    imageDark: "/expertise-banking-dark.png",
    title: "Banking Services",
    description: "Assistance with corporate bank account opening and banking solutions.",
    buttonText: "Open an Account",
    buttonHref: "/bankingservices",
  },
  {
    id: 10,
    image: "/expertise-insolvency.png",
    imageDark: "/expertise-insolvency-dark.png",
    title: "Insolvency & Liquidation",
    description: "Professional restructuring, liquidation, and business recovery support.",
    buttonText: "Get Advice",
    buttonHref: "/insolvencyliquidation",
  },
  {
    id: 11,
    image: "/expertise-cmo.png",
    imageDark: "/expertise-cmo-dark.png",
    title: "CMO Services",
    description: "Fractional Chief Marketing Officer services to drive brand growth and revenue.",
    buttonText: "Grow Your Brand",
    buttonHref: "/cmolanding",
  },
  {
    id: 12,
    image: "/expertise-aicloud.png",
    imageDark: "/expertise-aicloud-dark.png",
    title: "AI & Cloud Services",
    description: "AI automation, cloud transformation, and intelligent digital solutions.",
    buttonText: "Explore AI",
    buttonHref: "/aiandcloud",
  },
  {
    id: 13,
    image: "/expertise-techconsulting.png",
    imageDark: "/expertise-techconsulting-dark.png",
    title: "Technology Consulting",
    description: "Digital transformation, enterprise technology strategy, and IT consulting.",
    buttonText: "Modernise Now",
    buttonHref: "/technologyconsulting",
  },
];

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
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Last scroll position that still fills the viewport - stops us paging into empty space.
  const maxIndex = Math.max(0, expertiseData.length - visibleCount);
  // Derived rather than stored, so a resize that shrinks maxIndex can't strand us out of range.
  const activeIndex = Math.min(currentIndex, maxIndex);

  // Functional updates so rapid clicks queue up instead of collapsing into one step.
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const cur = Math.min(prev, maxIndex);
      return cur - 1 < 0 ? maxIndex : cur - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const cur = Math.min(prev, maxIndex);
      return cur + 1 > maxIndex ? 0 : cur + 1;
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
      index >= activeIndex &&
      index < activeIndex + visibleCount
    );
  };

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
            "--index": activeIndex,
            transform: `translateX(-${(activeIndex * 100) / visibleCount}%)`,
          } as React.CSSProperties}
        >
          {expertiseData.map((item, index) => (
            <div key={item.id} className={styles.cardWrapper}>
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
