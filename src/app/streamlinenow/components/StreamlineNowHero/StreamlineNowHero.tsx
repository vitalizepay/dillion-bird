import Link from 'next/link';
import styles from './StreamlineNowHero.module.css';

export default function StreamlineNowHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Corporate Services</span>
        </div>
        <h1 className={styles.h1}>
          Focus on What<br />
          Matters. <em>We&apos;ll Handle</em><br />
          the Rest.
        </h1>
        <p className={styles.desc}>
          Running a business in the UAE and GCC means navigating complex compliance,
          accounting, governance, and regulatory requirements. We take that burden
          off your plate — completely and seamlessly.
        </p>
        <div className={styles.acts}>
          <Link href="/buildwithus" target="_blank" rel="noopener" className={styles.btnPrimary}>
            Streamline My Business →
          </Link>
          <Link href="/companyformation" target="_blank" rel="noopener" className={styles.btnOutline}>
            Company Formation
          </Link>
        </div>
      </div>
    </section>
  );
}