import Link from 'next/link';
import styles from './AuditUrgency.module.css';

export default function AuditUrgency() {
  return (
    <div className={styles.band}>
      <p className={styles.txt}>
      🕐 FTA audit season is underway — don&apos;t wait until you receive a notice. Get your VAT compliance reviewed now.
      </p>
      <Link href="#contact" className={styles.cta}>Book Free Review →</Link>
    </div>
  );
}