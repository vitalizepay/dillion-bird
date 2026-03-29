import styles from './CFStructures.module.css';

const structures = [
  {
    name: 'Mainland LLC',
    sub: 'Trade anywhere in the UAE and GCC with full market access. Ideal for retail, services, and government contracts.',
    features: ['100% foreign ownership (since 2021)', 'Unlimited UAE market access', 'Eligible for government tenders', 'Any number of visas', 'Physical office required'],
    price: 'AED 12,500',
    featured: false,
  },
  {
    name: 'Free Zone Company',
    sub: 'Zero tax on profits, 100% repatriation, and a wide choice of 40+ zones. Perfect for tech, media, consultancy, and e-commerce.',
    features: ['0% corporate & personal tax', '100% foreign ownership', 'Full profit repatriation', 'Virtual office options available', 'Fast setup — as little as 5 days'],
    price: 'AED 8,500',
    featured: true,
  },
];

export default function CFStructures() {
  return (
    <section className={styles.sec} id="structures">
      <div className={styles.header}>
        <div>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>Choose Your Structure</span>
          </div>
          <h2 className={styles.h2}>Which UAE Entity<br />Is Right for <em>Your Business?</em></h2>
        </div>
        <p className={styles.desc}>We match you to the optimal structure based on your activity, ownership preferences, and growth ambitions.</p>
      </div>
      <div className={styles.grid}>
        {structures.map(s => (
          <div className={`${styles.card} ${s.featured ? styles.featured : ''}`} key={s.name}>
            {s.featured && <div className={styles.badge}>Most Popular</div>}
            <div className={styles.cardName}>{s.name}</div>
            <p className={styles.cardSub}>{s.sub}</p>
            <ul className={styles.list}>
              {s.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <div className={styles.price}>Starting from <strong>{s.price}</strong></div>
          </div>
        ))}
      </div>
    </section>
  );
}