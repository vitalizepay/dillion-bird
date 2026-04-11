import Link from 'next/link';
import styles from './BuildWithUsCTA.module.css';

export default function BuildWithUsCTA() {
  return (
    <section className={styles.sec}>

      {/* LEFT — content */}
      <div className={styles.left}>
        <h2 className={styles.h2}>
          Let&apos;s Shape the Future<br />
          of Your Business.
        </h2>
        <p className={styles.sub}>
          Connect with our UAE headquarters. Whether you&apos;re an emerging startup
          or an established enterprise, the first conversation is always on us.
        </p>

        {/* Contact info row */}
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <span className={styles.contactLabel}>Call Us</span>
            <a href="tel:+971585570593" className={styles.contactValue}>+971 585 570 593</a>
          </div>
          <div className={styles.divider} />
          <div className={styles.contact}>
            <span className={styles.contactLabel}>Email Us</span>
            <a href="mailto:hello@dillonbird.com" className={styles.contactValue}>hello@dillonbird.com</a>
          </div>
          <div className={styles.divider} />
          <div className={styles.contact}>
            <span className={styles.contactLabel}>Visit Us</span>
            <span className={styles.contactValue}>Meydan Hotel, Dubai</span>
          </div>
        </div>
      </div>

      {/* RIGHT — buttons */}
      <div className={styles.acts}>
        <Link href="/contact" target="_blank" rel="noopener" className={styles.btnPrimary}>
          Send Us a Message →
        </Link>
        <Link href="/clientsuccess" target="_blank" rel="noopener" className={styles.btnOutline}>
          See Our Work First
        </Link>
      </div>

    </section>
  );
}