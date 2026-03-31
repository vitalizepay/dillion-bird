import styles from './BankingQuote.module.css';

export default function BankingQuote() {
  return (
    <blockquote className={styles.band}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.rule} />
          <span>Our Philosophy</span>
        </div>
        <p className={styles.text}>
          &ldquo;In banking negotiations, the advisor who understands both the client&apos;s
          business and the bank&apos;s credit appetite wins the room. We sit on your side
          of the table — always.&rdquo;
        </p>
        <p className={styles.author}>— Dillon &amp; Bird Banking Advisory Team</p>
      </div>
      <div className={styles.mark}>&ldquo;</div>
    </blockquote>
  );
}