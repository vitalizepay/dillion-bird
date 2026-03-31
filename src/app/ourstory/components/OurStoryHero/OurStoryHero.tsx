import styles from './OurStoryHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.sec}>

      {/* LEFT — text content */}
      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Our Story</span>
        </div>
        <h1 className={styles.h1}>
          Built on <em>Conviction.</em><br />
          Driven by Results.
        </h1>
        <p className={styles.body}>
          Dillon &amp; Bird was founded on a simple but powerful belief: that businesses in
          the GCC deserved world-class strategic advice without the overhead, bureaucracy,
          or detachment of global consultancy giants.
        </p>
        <p className={styles.body}>
          What started as a boutique advisory practice in Dubai has grown into the
          GCC&apos;s most trusted integrated strategy partner — serving everyone from
          ambitious founders to multi-generational family enterprises across six markets.
        </p>
      </div>

      {/* RIGHT — image with accent bar and year badge */}
      <div className={styles.right}>
        <div className={styles.imgWrap}>
          <div className={styles.accentBar} />
          <img
            src="/Whoweare.png"
            alt="Dillon & Bird team in a strategy session"
            className={styles.img}
          />
          <div className={styles.badge}>
            <span className={styles.badgeYear}>2009</span>
            <span className={styles.badgeLabel}>Founded in Dubai</span>
          </div>
        </div>
      </div>

    </section>
  );
}