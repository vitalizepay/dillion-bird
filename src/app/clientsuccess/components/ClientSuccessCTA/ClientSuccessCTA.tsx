import Link from 'next/link';
import styles from './ClientSuccessCTA.module.css';

export default function ClientSuccessCTA() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Start Your Story</span>
          <div className={styles.rule} />
        </div>
        <h2 className={styles.h2}>
          Your success story<br />starts with a <em>conversation.</em>
        </h2>
        <p className={styles.sub}>
          Whether you are entering the GCC, restructuring for growth, or navigating
          complexity — we have done it before, and we will do it with you.
        </p>
        <div className={styles.acts}>
          <Link href="/contact" className={styles.btnPrimary}>
            Connect With Us →
          </Link>
          <Link href="/ourstory" className={styles.btnOutline}>
            Our Approach
          </Link>
        </div>
      </div>
    </section>
  );
}