// src/app/home/components/HomeWhoWeAre/HomeWhoWeAre.tsx
import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./HomeWhoWeAre.module.css";

export default function HomeWhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img
          src="/Whoweare.png"
          alt="Team in a meeting room"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Who We Are?</h2>

        <p className={styles.text}>
          We are the architects of progress for GCC businesses — from agile
          startups to legacy family enterprises. Through strategic foresight
          and operational excellence, we deliver enduring value, enabling
          sustainable growth in a dynamic economic landscape.
        </p>

        <div className={styles.buttonContainer}>
          <Button
            text="Our Story"
            variant="primary"
            href="/our-story"
          />
        </div>
      </div>
    </section>
  );
}
