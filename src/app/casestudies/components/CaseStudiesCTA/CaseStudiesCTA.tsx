import Link from 'next/link';
import styles from './CaseStudiesCTA.module.css';

export default function OurStoryCTA() {
  return (
    <section className={styles.sec}>
      <h2 className={styles.h2}>
      Your Business. <em>Our Next</em> <br></br> Success Story.
      </h2>
      <p className={styles.sub}>
      We'd love to add your transformation to this page. Let&apos;s start with a conversation about where you are and where you want to go. 
      </p>
      <div className={styles.acts}>
        <Link href="/buildwithus" target="_blank" rel="noopener" className={styles.btnPrimary}>
          Start A Conversation →
        </Link>
        <Link href="/letsgrow" target="_blank" rel="noopener"  className={styles.btnOutline}>
          Let&apos;s Grow
        </Link>
      </div>
    </section>
  );
}