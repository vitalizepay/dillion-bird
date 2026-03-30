import Link from 'next/link';
import styles from './InsolvencyWhy.module.css';

const pillars = [
  { n: '01', title: 'UAE Insolvency Law Specialists', desc: 'Deep expertise in Federal Decree-Law 9/2016, Law 19/2019, DIFC and ADGM insolvency regimes — not generic business advisors applying international templates to UAE.' },
  { n: '02', title: 'Absolute Confidentiality', desc: 'All enquiries and engagements are handled with strict confidentiality. Your situation remains private at every stage of the process — from first call to final clearance.' },
  { n: '03', title: 'Mainland, Free Zone & Offshore', desc: 'Full coverage across DED, DMCC, DIFC, ADGM, JAFZA and all major UAE free zones — onshore and offshore entities handled with equal expertise by the same team.' },
  { n: '04', title: 'Fixed Transparent Fees', desc: 'No surprise invoices. Fees are agreed upfront so you can plan with certainty even when finances are under pressure. No hourly billing, no scope creep.' },
  { n: '05', title: 'End-to-End Case Management', desc: 'One dedicated advisor manages your entire case from first call to final clearance certificate — no handoffs, no confusion, no gaps in accountability.' },
];

export default function InsolvencyWhy() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>

        {/* LEFT — heading + pillars */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Why Dillon &amp; Bird</span>
          </div>
          <h2 className={styles.h2}>
            UAE Insolvency Specialists.<br />
            <em>Not Generalists.</em>
          </h2>

          <div className={styles.pillars}>
            {pillars.map(p => (
              <div className={styles.pillar} key={p.n}>
                <span className={styles.pN}>{p.n}</span>
                <div>
                  <div className={styles.pTitle}>{p.title}</div>
                  <div className={styles.pDesc}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — card pushed down with offset */}
        <div className={styles.right}>
          <div className={styles.cardOffset} />
          <div className={styles.card}>
            <p className={styles.cardEyebrow}>Ready to Talk?</p>
            <h3 className={styles.cardHeading}>
              Confidential consultation.<br />
              <em>Response within 24 hours.</em>
            </h3>
            <p className={styles.cardBody}>
              Whether you need to close a company, restructure debt or understand your options — our team will give you a clear, honest assessment with complete confidentiality.
            </p>
            <Link href="#contact" className={styles.btnPrimary}>
              Get Free Consultation →
            </Link>
            <a href="https://wa.me/971585570593" target="_blank" rel="noopener" className={styles.btnSecondary}>
              WhatsApp +971 585 570 593
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}