import Link from 'next/link';
import styles from './AuditCrossLinks.module.css';

export default function AuditCrossLinks() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <p className={styles.label}>Also from Dillon &amp; Bird</p>
        <p className={styles.heading}>
        Accounting, company formation, insolvency advisory and more.
        </p>
        <div className={styles.links}>
          <Link href="/company-formation" className={styles.chip}>
            Accounting &amp; Finance <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/management-consulting" className={styles.chip}>
            Company Formation <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/investor-services" className={styles.chip}>
            Insolvency Advisory <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}