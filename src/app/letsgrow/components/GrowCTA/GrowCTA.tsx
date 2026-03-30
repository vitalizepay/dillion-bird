import styles from './GrowCTA.module.css';
import Link from 'next/link';

export default function GrowCTA() {
  return (
    <section className={styles.sec} id="contact">
      <div className={styles.content}>
        <h2 className={styles.h2}>
          Ready to <em>Grow</em>?
        </h2>
        <p className={styles.sub}>
          Let's have an honest conversation about where your business is today
          and where it could be. No obligation, no pitch — just clarity.
        </p>
      </div>

      <div className={styles.acts}>
        <Link href="https://dillonbird.com/contact" target="_blank" rel="noopener"  className={styles.btnPrimary}>
          Start a Conversation →
        </Link>
      </div>
    </section>
  );
}