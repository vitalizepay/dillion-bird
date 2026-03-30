import styles from './InsolvencyCaseStudies.module.css';


export default function InsolvencyCaseStudies() {
  return (
    <section className={styles.sec}>
      <div className={styles.hdr}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Case Studies</span>
        </div>
        <h2 className={styles.h2}>
          Real Outcomes for <em>Real Situations</em>
        </h2>
      </div>
    </section>
  );
}