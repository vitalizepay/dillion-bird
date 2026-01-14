"use client";

import styles from "./CTASection.module.css";
import Button from "@/components/Button/Button";

export default function CTASection() {
  return (
    <section className={styles.cta}>
      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Let's Shape the Future of Your Business in the GCC
        </h1>

        <p className={styles.description}>
          <span>
            Connect with our UAE headquarters to explore tailored partnership opportunities.
          </span>
          <span>
            Whether you're an emerging startup or an established enterprise, we're here to collaborate and drive impactful growth across the region.
          </span>
        </p>

        <Button
          text="Contact Us"
          variant="secondary"
          href="/contact"    // TODO: Add contact page link
          type="button"
        />
      </div>
    </section>
  );
}
