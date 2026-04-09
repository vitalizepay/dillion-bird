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
          <Link href="/companyformation" target="_blank" rel="noopener" className={styles.chip}>
            Company Formation <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/bankingservices" target="_blank" rel="noopener" className={styles.chip}>
            Banking Services <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/audit" target="_blank" rel="noopener" className={styles.chip}>
            Audit Services <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}