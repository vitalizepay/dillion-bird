import styles from './ValuesStrip.module.css';

export default function ValuesStrip() {
  return (
    <div className={styles.strip}>
      <p className={styles.text}>
        &ldquo;Values are not what we say. They are what we do — consistently,
        under pressure, when no one is watching.&rdquo;
      </p>
      <span className={styles.tag}>Dillon &amp; Bird Philosophy</span>
    </div>
  );
}