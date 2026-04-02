import Link from 'next/link';
import styles from './CareersCTA.module.css';

export default function CareersCTA() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>

        {/* Eyebrow with rule line */}
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <p className={styles.label}>Join the Team</p>
        </div>

        <h2 className={styles.h2}>
          The Best Work of Your Career <em>Starts Here.</em>
        </h2>
        <p className={styles.sub}>
          Exceptional talent creates its own opportunity at D&amp;B. If you believe
          you have something valuable to offer — we want to hear from you.
        </p>
        <div className={styles.acts}>
          <Link href="/carrers/openroles" className={styles.btnPrimary}>
            View All Open Roles →
          </Link>
          <Link href="/carrers/apply" className={styles.btnOutline}>
            Send Spontaneous Application
          </Link>
        </div>
      </div>
    </section>
  );
}