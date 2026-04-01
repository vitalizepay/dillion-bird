import styles from './PlanYourGrowthCTA.module.css';
import Link from 'next/link';

export default function PlanYourGrowthCTA() {
  return (
    <section className={styles.sec} id="contact">
      <div className={styles.content}>
        <h2 className={styles.h2}>
          Ready to <em>Plan Your Growth</em>?
        </h2>
        <p className={styles.sub}>
          A 60-minute strategy session with a senior D&B advisor is the most
          valuable meeting you'll have this year. Let's find a time.
        </p>
      </div>

      <div className={styles.acts}>
        <Link href="/buildwithus" target="_blank" rel="noopener"  className={styles.btnPrimary}>
          Book a Strategy Session →
        </Link>
      </div>
    </section>
  );
}