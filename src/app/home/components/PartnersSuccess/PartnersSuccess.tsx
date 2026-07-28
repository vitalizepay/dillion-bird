import Button from "@/components/Button/Button";
import styles from './PartnersSuccess.module.css';

export default function PartnersSuccess() {
  return (
    <section className={styles.section}>
      {/* Content Section - Left */}
      <div className={styles.content}>
        <h2 className={styles.title}>Partnering for Success</h2>

        <p className={styles.text}>
          Collaborating with visionary founders and established businesses to drive innovation across the GCC. Together, we transform ambition into scalable, lasting impact.
        </p>

        <div className={styles.buttonContainer}>
          <Button text="See Our Work" variant="primary" target="_blank" rel="noopener" href='/clientsuccess' />
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
