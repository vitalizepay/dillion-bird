'use client';

import Link from 'next/link';
import styles from './AuditWhyDB.module.css';

const pillars = [
  { n: '01', title: 'Deep UAE Regulatory Knowledge', desc: 'Expert mastery of FTA requirements, MoF Corporate Tax Law, CBUAE regulations, DIFC and ADGM frameworks, and free zone-specific obligations — not a generic international template applied to UAE.' },
  { n: '02', title: 'Fixed Fees — Agreed Before We Start', desc: "Every engagement is scoped and priced upfront. No hourly billing surprises. You know exactly what you're paying before we complete a single hour of work — budgets stay intact." },
  { n: '03', title: 'Investor & Lender Ready Reports', desc: 'Our reports are structured to satisfy institutional investors, private equity firms, commercial banks and regulatory bodies — not just management. Built to withstand third-party scrutiny.' },
  { n: '04', title: 'Every UAE Jurisdiction Covered', desc: 'DED mainland, DIFC, ADGM, DMCC, JAFZA and all major UAE free zones — handled by the same expert team. No referrals to third parties, no jurisdiction gaps, no coverage exceptions.' },
  { n: '05', title: 'Actionable Findings, Not Just Opinions', desc: 'Every finding comes with a practical, risk-rated recommendation your team can implement immediately. We turn the audit process into genuine business improvement, not just a compliance exercise.' },
];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function AuditWhyDB() {
  return (
    <section className={styles.sec}>
      <div className={styles.inner}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Why Dillon & Bird</span>
          </div>
          <h2 className={styles.h2}>UAE Audit Specialists.<br /><em>Not Generalists.</em></h2>

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

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.cardOffset} />
          <div className={styles.card}>
            <p className={styles.cardEyebrow}>Start Today</p>
            <h3 className={styles.cardHeading}>
              Free audit consultation.<br />
              <em>Response within 24 hours.</em>
            </h3>
            <p className={styles.cardBody}>
              Whether you&apos;re facing an FTA audit visit, need internal controls reviewed
              before fundraising, or want clarity on your UAE CT position — our team will
              give you a straight, expert answer.
            </p>
            <button onClick={scrollToContact} className={styles.btnPrimary}>
              Book Free Consultation →
            </button>
            <Link href="https://wa.me/971585570593" target="_blank" rel="noopener" className={styles.btnSecondary}>
  <img src="/whatsapplogo1.svg" alt="WhatsApp" width={20} height={20} />
  WhatsApp +971 585 570 593
</Link>
          </div>
        </div>

      </div>
    </section>
  );
}