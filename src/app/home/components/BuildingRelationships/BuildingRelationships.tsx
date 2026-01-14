// src/app/home/components/BuildingRelationships/BuildingRelationships.tsx
import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./BuildingRelationships.module.css";

export default function BuildingRelationships() {
  return (
    <section className={styles.section}>
      <div className={styles.accentBar}></div>

      <div className={styles.imageWrapper}>
        <img
          src="/handshake.png"
          alt="Building lasting relationships"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Building Lasting Relationships</h2>

        <p className={styles.text}>
          We are committed to supporting your long-term success by delivering
          sustainable strategies, reliable partnerships, and continuous value
          across every stage of your business journey. Our approach is built on
          trust, strategic foresight, and an unwavering focus on your
          growth—today and into the future.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="Build With Us" variant="primary" href="/build-with-us" />
        </div>
      </div>
    </section>
  );
}
