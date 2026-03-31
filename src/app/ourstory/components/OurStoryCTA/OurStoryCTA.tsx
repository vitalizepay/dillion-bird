import Link from 'next/link';
import styles from './OurStoryCTA.module.css';

export default function OurStoryCTA() {
  return (
    <section className={styles.sec}>
      <h2 className={styles.h2}>
        Want to Be Part of Our <em>Story</em>?
      </h2>
      <p className={styles.sub}>
        Every great business story deserves the right partners. Let&apos;s write
        the next chapter of yours — together.
      </p>
      <div className={styles.acts}>
        <Link href="/buildwithus" target="_blank" rel="noopener" className={styles.btnPrimary}>
          Build With Us →
        </Link>
        <Link href="/letsgrow" target="_blank" rel="noopener"  className={styles.btnOutline}>
          Let&apos;s Grow
        </Link>
      </div>
    </section>
  );
}