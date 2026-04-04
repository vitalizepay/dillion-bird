import styles from './CaseRelated.module.css';
import Link from 'next/link';

const related = [
  {
    href: '/clientsuccess/difc-consultancy-setup',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80&auto=format&fit=crop',
    tag: 'Professional Services',
    title: 'DIFC Consultancy Setup',
    metric: '9',
    metricLabel: 'Working days to first invoice',
  },
  {
    href: '/clientsuccess/family-enterprise-restructuring',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
    tag: 'Family Enterprise',
    title: 'Family Enterprise Restructuring',
    metric: 'AED 120M',
    metricLabel: 'Assets restructured & ring-fenced',
  },
  {
    href: '/clientsuccess/ksa-manufacturing-vision',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop',
    tag: 'Manufacturing',
    title: 'KSA Vision 2030 Expansion',
    metric: 'SAR 28M',
    metricLabel: 'Government grant funding secured',
  },
];

export default function CaseRelated() {
  return (
    <section className={styles.sec}>
      <div className={styles.eyebrow}>
        <div className={styles.rule} />
        <span>More Success Stories</span>
      </div>
      <h2 className={styles.h2}>
        Similar challenges. <em>Similar results.</em>
      </h2>
      <p className={styles.sub}>
        Explore how Dillon &amp; Bird has delivered measurable impact across the GCC.
      </p>

      <div className={styles.grid}>
        {related.map(r => (
          <Link href={r.href} target="_blank" rel="noopener noreferrer" className={styles.card} key={r.title}>
            <div className={styles.cardImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.image} alt={r.title} loading="lazy" />
              <div className={styles.cardImgOverlay} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardTag}>{r.tag}</span>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardMetric}>
                Key result: <strong>{r.metric}</strong> {r.metricLabel}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}