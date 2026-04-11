'use client';

import styles from './ABKWhy.module.css';

const pillars = [
  {
    n: '01',
    name: 'FTA-Registered Tax Agents',
    desc: 'Our team holds FTA accreditation — we file VAT returns, manage audits, and correspond with the authority directly on your behalf.',
  },
  {
    n: '02',
    name: 'Fixed Monthly Fees',
    desc: 'No hourly billing surprises. You receive a clear scope and fixed monthly cost before we start — and it never changes without your agreement.',
  },
  {
    n: '03',
    name: 'Dedicated Named Accountant',
    desc: 'You speak to the same senior accountant every time — not a call centre. They know your business and respond within one business day.',
  },
  {
    n: '04',
    name: 'Multi-Software Expertise',
    desc: 'We work natively in Xero, QuickBooks, Zoho Books, Sage, SAP and Oracle — no forced migrations, no disruption to your existing workflow.',
  },
  {
    n: '05',
    name: 'GCC Regulatory Knowledge',
    desc: 'UAE Corporate Tax, VAT, ESR, UBO, DIFC/ADGM reporting — our team stays current so you stay compliant across every jurisdiction you operate in.',
  },
];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function ABKWhy() {
  return (
    <section className={styles.sec}>
      <div className={styles.grid}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.rule} />
            <span>Why Dillon &amp; Bird</span>
          </div>
          <h2 className={styles.h2}>The Finance Partner<br />Your Business<em> Deserves</em></h2>
          <p className={styles.desc}>
            We&apos;re not a generic bookkeeping bureau. We&apos;re a boutique advisory firm
            that combines chartered accounting rigour with strategic thinking — so your
            numbers don&apos;t just balance, they drive decisions.
          </p>
          <button onClick={scrollToContact} className={styles.btn}>
            Get My Free Assessment →
          </button>
        </div>

        {/* RIGHT */}
        <div className={styles.pillars}>
          {pillars.map((p) => (
            <div className={styles.pillar} key={p.n}>
              <span className={styles.pillarN}>{p.n}</span>
              <div className={styles.pillarContent}>
                <div className={styles.pillarName}>{p.name}</div>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}