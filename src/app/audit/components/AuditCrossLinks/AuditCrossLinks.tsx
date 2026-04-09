import Link from 'next/link';
import styles from './AuditCrossLinks.module.css';

export default function AuditCrossLinks() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <p className={styles.label}>Also from Dillon &amp; Bird</p>
        <p className={styles.heading}>
        Banking Services, company formation, insolvency Liquidation and more.
        </p>
        <div className={styles.links}>
          <Link href="/bankingservices" target="_blank" rel="noopener" className={styles.chip}>
          Banking Services <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/companyformation" target="_blank" rel="noopener" className={styles.chip}>
            Company Formation <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/insolvencyliquidation" target="_blank" rel="noopener" className={styles.chip}>
            Insolvency Liquidation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}