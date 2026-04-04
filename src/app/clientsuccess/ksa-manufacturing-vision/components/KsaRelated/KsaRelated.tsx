import Link from 'next/link';
import styles from './KsaRelated.module.css';

const related = [
  {
    href: '/clientsuccess/retail-gcc-expansion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop',
    tag: 'Retail',
    title: 'Retail GCC Expansion',
    metric: '38%',
    metricLabel: 'Revenue increase in 12 months',
  },
  {
    href: '/clientsuccess/real-estate-capital-raise',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop',
    tag: 'Real Estate',
    title: 'Real Estate Capital Raise',
    metric: 'AED 45M',
    metricLabel: 'Institutional capital secured',
  },
  {
    href: '/clientsuccess/european-saas-market-entry',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
    tag: 'Technology',
    title: 'SaaS UAE Market Entry',
    metric: '14',
    metricLabel: 'Working days to operational readiness',
  },
];

export default function KsaRelated() {
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
              <div className={styles.cardImgLine} />
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