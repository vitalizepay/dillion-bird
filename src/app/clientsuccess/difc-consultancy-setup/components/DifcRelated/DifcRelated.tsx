import Link from 'next/link';
import styles from './DifcRelated.module.css';

const related = [
  {
    href: '/clientsuccess/european-saas-market-entry',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
    tag: 'Technology',
    title: 'SaaS UAE Market Entry',
    metric: '14',
    metricLabel: 'Working days to operational readiness',
  },
  {
    href: '/clientsuccess/healthcare-compliance',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop',
    tag: 'Healthcare',
    title: 'Healthcare Tax Compliance',
    metric: '100%',
    metricLabel: 'Regulatory compliance achieved',
  },
  {
    href: '/clientsuccess/family-enterprise-restructuring',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
    tag: 'Family Enterprise',
    title: 'Family Enterprise Restructuring',
    metric: 'AED 120M',
    metricLabel: 'Assets restructured & ring-fenced',
  },
];

export default function DifcRelated() {
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