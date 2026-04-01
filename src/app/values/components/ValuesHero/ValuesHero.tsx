import Link from 'next/link';
import styles from './ValuesHero.module.css';

export default function ValuesHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Our Foundation</span>
        </div>
        <h1 className={styles.h1}>
          The principles<br />
          that drive us to<br />
          <em>Do More.</em>
        </h1>
        <p className={styles.desc}>
          Every partnership we build, every strategy we craft, every result we
          deliver — all of it flows from a set of values we hold without compromise.
        </p>
        <Link href="#values"  className={styles.btnPrimary}>
            Explore Our Values →
        </Link>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}