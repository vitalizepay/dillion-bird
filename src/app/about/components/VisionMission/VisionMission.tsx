// src/app/about/components/VisionMission/VisionMission.tsx
import React from 'react';
import styles from './VisionMission.module.css';

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      
      <div className={styles.container}>
        {/* Vision Box - Left (TEXT ON TOP, IMAGE BELOW) */}
        <div className={styles.visionBox}>
          <div className={styles.textContent}>
            <div className={styles.labelWrapper}>
              <h3 className={styles.label}>Our Vision</h3>
              <img src="/blue-line-vision.png" alt="" className={styles.blueLine} />
            </div>
            
            <h2 className={styles.heading}>Driving GCC Innovation</h2>
            
            <p className={styles.description}>
              To be the premier catalyst for transformative growth and innovation across the GCC,
              empowering businesses to achieve their highest aspirations
            </p>
          </div>
          
          <div className={styles.imageWrapper}>
            <img 
              src="/vision-businessman.png" 
              alt="Our Vision" 
              className={styles.boxImage}
            />
          </div>
        </div>

        {/* Mission Box - Right (IMAGE ON TOP, TEXT BELOW) */}
        <div className={styles.missionBox}>
          <div className={styles.imageWrapper}>
            <img 
              src="/mission-building.png" 
              alt="Our Mission" 
              className={styles.boxImage}
            />
          </div>
          
          <div className={styles.textContent}>
            <div className={styles.labelWrapper}>
              <h3 className={styles.label}>Our Mission</h3>
              <img src="/blue-line-mission.png" alt="" className={styles.blueLine} />
            </div>
            
            <h2 className={styles.heading}>Integrated Expertise. Lasting Impact.</h2>
            
            <p className={styles.description}>
              To provide strategic, integrated solutions in finance, technology, and marketing,
              delivering sustainable value and future-forward results through deep regional
              expertise and collaborative partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
