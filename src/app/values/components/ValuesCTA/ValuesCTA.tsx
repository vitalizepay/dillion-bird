import Link from 'next/link';
import styles from './ValuesCTA.module.css';

export default function ValuesCTA() {
  return (
    <section className={styles.sec}>
      <p className={styles.label}>Start the Conversation</p>
      <h2 className={styles.h2}>
        Ready to work with a partner<br />
        who truly Does More?
      </h2>
      <p className={styles.sub}>
        Explore how Dillon &amp; Bird&apos;s values translate into tangible results for
        your business across the GCC — from initial strategy to sustained growth.
      </p>
      <div className={styles.acts}>
        <Link href="/contact" target="_blank" rel="noopener" className={styles.btnPrimary}>
          Connect With Us →
        </Link>
        <Link href="/about" target="_blank" rel="noopener" className={styles.btnOutline}>
          Back To About Us
        </Link>
      </div>
    </section>
  );
}