import styles from './ValuesRegion.module.css';

const stats = [
  { n: 'GCC', label: 'Regional Focus' },
  { n: '3',   label: 'Core Disciplines' },
  { n: 'I',   label: 'Standard of Care' },
  { n: '∞',   label: 'Commitment to You' },
];

export default function ValuesRegion() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>GCC at Our Core</span>
          </div>
          <h2 className={styles.h2}>
            Rooted in the region.<br />
            Built for its future.
          </h2>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <p className={styles.highlight}>
            The Gulf is not a market we entered. It is the home from which we think.
          </p>
          <p className={styles.body}>
            Our values are not generic consulting principles imported from elsewhere.
            They were formed in — and are continuously sharpened by — the unique rhythms
            of the GCC. We understand the weight of family enterprise legacies, the pace
            of sovereign-driven transformation, the nuances of cross-border structuring,
            and the ambitions of founders building the region&apos;s next generation of
            great companies.
          </p>
          <p className={styles.body}>
            This contextual depth is inseparable from who we are. It shapes our questions,
            our recommendations, and our relationships in ways that generic expertise
            simply cannot replicate.
          </p>

          {/* Stats 2×2 */}
          <div className={styles.stats}>
            {stats.map(s => (
              <div className={styles.stat} key={s.label}>
                <span className={styles.statN}>{s.n}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}