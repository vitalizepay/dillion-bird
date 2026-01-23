// src/app/about/components/OurPeople/OurPeople.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './OurPeople.module.css';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedIn: string;
}

const baseTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Praveen',
    position: 'Managing Partner',
    image: '/team-praveen.png',
    linkedIn: 'https://linkedin.com/in/praveen',
  },
  {
    id: 2,
    name: 'Dinesh',
    position: 'Managing Partner',
    image: '/team-dinesh.jpg',
    linkedIn: 'https://linkedin.com/in/sarah',
  },
  {
    id: 3,
    name: 'Senthinathan',
    position: 'Senior Consultant Cloud and AI',
    image: '/team-senthil.jpeg',
    linkedIn: 'https://linkedin.com/in/fatima',
  },
  
];

const teamMembers = [...baseTeamMembers, ...baseTeamMembers, ...baseTeamMembers];

export default function OurPeople() {
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
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const baseCardCount = baseTeamMembers.length;

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

  const offset = (currentIndex * 100) / visibleCount;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our People</h2>
        
        <div className={styles.navigation}>
          <button 
            className={styles.navButton} 
            onClick={handlePrev}
            aria-label="Previous"
          >
            ←
          </button>
          <button 
            className={styles.navButton} 
            onClick={handleNext}
            aria-label="Next"
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
          {teamMembers.map((member, index) => (
            <div key={`${member.id}-${Math.floor(index / baseCardCount)}`} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={styles.image}
                  />
                  <div className={styles.overlay}></div>
                  <div className={styles.info}>
                    <h3 className={styles.name}>{member.name}</h3>
                    <p className={styles.position}>{member.position}</p>
                    <a 
                      href={member.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.linkedInLink}
                    >
                      <img src="/linkedlin-logo.png" alt="LinkedIn" className={styles.linkedInIcon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
