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
        {/*<svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="white"
            style={{ marginRight: '6px', flexShrink: 0 }}
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.956.537 3.784 1.47 5.35L2 22l4.789-1.453A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 12 2z" />
          </svg> */}
        WhatsApp +971 585 570 593
        </a>
      </div>
    </section>
  );
}