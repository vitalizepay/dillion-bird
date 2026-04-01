import styles from './BuildWithUsHero.module.css';

export default function BuildWithUsHero() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Build With Us</span>
        </div>
        <h1 className={styles.h1}>
          Let&apos;s Build<br />
          Something <em>Extraordinary</em><br />
          Together.
        </h1>
        <p className={styles.desc}>
          Whether you&apos;re a founder with a vision, an enterprise seeking transformation,
          or a business ready to enter the GCC — we&apos;re the partner you&apos;ve been
          looking for. Conversations are free. Breakthroughs are priceless.
        </p>
        <div className={styles.acts}>
          <a href="tel:+971585570593" className={styles.btnPrimary}>
            Call Us Now: +971 585 570 593
          </a>
          <a href="mailto:hello@dillonbird.com" className={styles.btnOutline}>
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}