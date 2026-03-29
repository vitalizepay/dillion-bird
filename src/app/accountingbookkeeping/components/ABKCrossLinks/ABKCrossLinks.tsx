import Link from 'next/link';
import styles from './ABKCrossLinks.module.css';

export default function ABKCrossLinks() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <p className={styles.label}>Also from Dillon &amp; Bird</p>
        <p className={styles.heading}>
          Need more than accounting? We cover the full business lifecycle.
        </p>
        <div className={styles.links}>
          <Link href="/company-formation" className={styles.chip}>
            Company Formation <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/management-consulting" className={styles.chip}>
            Management Consulting <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/investor-services" className={styles.chip}>
            Investor Services <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}