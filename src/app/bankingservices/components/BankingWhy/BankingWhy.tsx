import Link from 'next/link';
import styles from './BankingWhy.module.css';

const pillars = [
  { n: '01', title: 'Deep UAE Banking Relationships', desc: 'Established relationships with over 30 UAE and GCC banks, DFIs and specialist lenders — allowing us to approach the right institutions at the right level.' },
  { n: '02', title: '100% Independent, Fee-Based', desc: 'We earn no commissions from banks. Our fee-only model guarantees our advice is unbiased and aligned entirely with your objectives.' },
  { n: '03', title: 'Lender-Grade Documentation', desc: 'Our financial models and information memoranda are prepared to the standard banks expect, materially shortening credit approval timelines.' },
  { n: '04', title: 'Sector & Jurisdictional Expertise', desc: 'Deep experience across real estate, trading, manufacturing, hospitality and professional services — including DIFC, ADGM and all UAE free zones.' },
];

const stats = [
  { n: 'AED 2B', sup: '+', label: 'Total Financing Facilitated', desc: 'Across term loans, revolving facilities, project finance and trade lines for UAE businesses.' },
  { n: '30', sup: '+', label: 'Active Banking Relationships', desc: 'UAE, GCC and international correspondent banks across conventional and Islamic finance.' },
  { n: '95', sup: '%', label: 'Mandate Success Rate', desc: 'Of financing mandates result in successful drawdown or restructuring outcomes for clients.' },
  { n: '24', sup: 'hr', label: 'Initial Response Time', desc: 'Every enquiry is acknowledged and assessed within one business day by a senior advisor.' },
];

export default function BankingWhy() {
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
            Independent Advisors.<br />
            <em>Your</em> Interests. Always.
          </h2>
          <p className={styles.intro}>
            Unlike banks or their relationship managers, we have no product to sell. Our mandate
            is to secure the best possible financing terms for you — full stop.
          </p>

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

        {/* RIGHT — stats column */}
        <div className={styles.right}>
          {stats.map(s => (
            <div className={styles.stat} key={s.label}>
              <div className={styles.statN}>
                {s.n}<span className={styles.statSup}>{s.sup}</span>
              </div>
              <div className={styles.statLabel}>{s.label}</div>
              <p className={styles.statDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}