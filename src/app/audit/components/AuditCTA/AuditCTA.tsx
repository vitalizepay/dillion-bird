import Link from 'next/link';
import styles from './AuditCTA.module.css';

export default function AuditCTA() {
  return (
    <section className={styles.sec}>
      <p className={styles.label}>Get Started Today</p>
      <h2 className={styles.h2}>Ready for an Audit That<br /><em>Actually Helps Your Business?</em></h2>
      <p className={styles.sub}>
      Free, no-obligation consultation with a UAE audit specialist. Clear scope.<br></br> Fixed fee. Response guaranteed within 24 hours.
      </p>
      <div className={styles.acts}>
        <Link href="#contact" className={styles.btnPrimary}>Book Free Consultation</Link>
        <a href="https://wa.me/971585570593" target="_blank" rel="noopener" className={styles.btnOutline}>
        WhatsApp +971 585 570 593
        </a>
      </div>
    </section>
  );
}