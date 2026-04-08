import Link from 'next/link';
import styles from './TechCTA.module.css';

export default function TechCTA() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Start Your Journey</span>
          <div className={styles.rule} />
        </div>
        <h2 className={styles.h2}>
          Ready to transform your<br /><em>technology stack?</em>
        </h2>
        <p className={styles.sub}>
          Tell us about your challenge. A senior technology consultant will respond within 24 hours.
        </p>
        <div className={styles.acts}>
          <Link href="#contact" className={styles.btnPrimary}>
            Get a Free Consultation →
          </Link>
          <Link href="/clientsuccess" className={styles.btnOutline}>
            See Client Results
          </Link>
        </div>
      </div>
    </section>
  );
}