import styles from './ClientSuccessStrip.module.css';

export default function ClientSuccessStrip() {
  return (
    <div className={styles.strip}>
      <p className={styles.quote}>
        &ldquo;The measure of our work is not the strategy we deliver — it is the growth our clients achieve.&rdquo;
      </p>
      <span className={styles.attr}>Dillon &amp; Bird · Dubai, UAE</span>
    </div>
  );
}