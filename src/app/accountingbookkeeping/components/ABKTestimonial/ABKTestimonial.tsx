import styles from './ABKTestimonial.module.css';

export default function ABKTestimonial() {
  return (
    <blockquote className={styles.band}>
      <div className={styles.mark}>&ldquo;</div>
      <div>
        <p className={styles.text}>
          Dillon &amp; Bird completely transformed our finance function. They cleaned up 18 months of backlog, registered us for VAT, and now deliver clean management accounts on the 5th of every month. We finally understand our own numbers.
        </p>
        <span className={styles.author}>Rania Khalil &nbsp;·&nbsp; Co-Founder, Nouri Collective FZE  &nbsp;·&nbsp; Dubai</span>
        <div className={styles.pills}>
          {['Bookkeeping', 'VAT Filing', 'Management Accounts'].map(p => (
            <span className={styles.pill} key={p}>{p}</span>
          ))}
        </div>
      </div>
    </blockquote>
  );
}