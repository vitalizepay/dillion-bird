import styles from './StreamlineNowCTA.module.css';
import Link from 'next/link';

export default function StreamlineNowCTA() {
  return (
    <section className={styles.sec} id="contact">
      <div className={styles.content}>
        <h2 className={styles.h2}>
          Ready to <em>Streamline</em>?
        </h2>
        <p className={styles.sub}>
        Tell us about your business and we'll design a corporate services
        package that fits precisely — with transparent pricing from day one.
        </p>
      </div>

      <div className={styles.acts}>
        <Link href="/contact" target="_blank" rel="noopener"  className={styles.btnPrimary}>
          Get A Custom Quote →
        </Link>
      </div>
    </section>
  );
}