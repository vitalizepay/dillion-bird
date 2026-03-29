import styles from './CFTestimonial.module.css';

export default function CFTestimonial() {
  return (
    <blockquote className={styles.band}>
      <div className={styles.mark}>&ldquo;</div>
      <div>
        <p className={styles.text}>
          Dillon &amp; Bird had our Free Zone licence issued within four working days. Their team
          handled every document, every authority interaction — we simply showed up to sign.
          Exceptional service for a first-time UAE business owner.
        </p>
        <span className={styles.author}>Faisal Al-Rashid &nbsp;·&nbsp; Founder, TradeNest FZE &nbsp;·&nbsp; Dubai</span>
        <div className={styles.pills}>
          {['Free Zone Setup', 'Investor Visa', 'Corporate Banking'].map(p => (
            <span className={styles.pill} key={p}>{p}</span>
          ))}
        </div>
      </div>
    </blockquote>
  );
}