import Link from 'next/link';
import styles from './FamilyCTA.module.css';

export default function FamilyCTA() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Start Your Story</span>
          <div className={styles.rule} />
        </div>
        <h2 className={styles.h2}>
          Ready to become our next <em>success story?</em>
        </h2>
        <p className={styles.sub}>
          Tell us about your challenge. We will tell you how we can help.
        </p>
        <div className={styles.acts}>
          <Link href="/contact" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Connect With Us →
          </Link>
          <Link href="/clientsuccess" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
            All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}