import styles from './CMOTestimonial.module.css';

export default function CMOTestimonial() {
  return (
    <blockquote className={styles.band}>
      <div className={styles.mark}>&ldquo;</div>
      <div>
        <p className={styles.text}>
        We don't just advise — we lead. With the accountability of a full-time CMO and the breadth of a strategic consultancy, Dillon &amp; Bird transforms how GCC businesses approach marketing.
        </p>
        <span className={styles.author}>Dillon & Bird &nbsp;·&nbsp; Fractional CMO Services  &nbsp;·&nbsp; Dubai, UAE</span>
      </div>
    </blockquote>
  );
}