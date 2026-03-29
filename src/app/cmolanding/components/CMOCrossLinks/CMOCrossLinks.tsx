import Link from 'next/link';
import styles from './CMOCrossLinks.module.css';

export default function CMOCrossLinks() {
  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <p className={styles.label}>Explore the Full Website</p>
        <p className={styles.text}>Everything Dillon &amp; Bird offers — in one place.</p>
      </div>
      <div className={styles.actions}>
        <a href="https://dillonbird.com" target="_blank" rel="noopener" className={styles.btnPrimary}>
          Visit DillonBird.com{' \u2197'}
        </a>
        <a href="#contact" className={styles.btnOutline}>Contact Us</a>
      </div>
    </div>
  );
}