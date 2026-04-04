import styles from './KsaBody.module.css';

const steps = [
  {
    n: '01',
    title: 'IKTVA Baseline Assessment & Gap Analysis',
    desc: 'We conducted a comprehensive IKTVA baseline assessment, scoring the company against all 14 criteria categories. The initial score was 28% — below the 30% threshold required for grant eligibility. We identified the specific actions needed to reach 35% within 90 days.',
  },
  {
    n: '02',
    title: 'Saudi Entity Structuring',
    desc: "We designed a Saudi Limited Liability Company structure that maximised IKTVA scores through appropriate local equity participation while preserving the UAE parent's operational and financial control. We managed the full Commercial Registration process in Riyadh.",
  },
  {
    n: '03',
    title: 'SIDF Grant Application',
    desc: 'We prepared the complete SIDF grant application — financial model, business plan, IKTVA compliance documentation, and market feasibility study — in Saudi-standard format. The SAR 28M grant was approved within the standard 14-week review period.',
  },
  {
    n: '04',
    title: 'SASO Certification Management',
    desc: 'We managed the SASO product certification process for eight product lines — coordinating with Saudi testing laboratories and the SASO authority to achieve approval for all eight products within the required window.',
  },
  {
    n: '05',
    title: 'Operational Launch Support',
    desc: 'We supported the recruitment of the local management team, the establishment of the Riyadh manufacturing facility, and the first Saudi customer contract negotiations — including government procurement protocols.',
  },
];

const results = [
  { n: 'SAR 28M', label: 'Grant secured',              desc: 'Full SIDF grant approval — covering 40% of the capital investment required for the Saudi manufacturing facility.' },
  { n: '72%',     label: 'First-year loss reduction',   desc: 'The grant funding transformed the Year 1 economics, reducing projected first-year losses by 72% vs. the unfunded scenario.' },
  { n: '35%',     label: 'IKTVA score achieved',        desc: 'From an initial 28% to a qualifying 35% IKTVA score — unlocking grant eligibility within 90 days.' },
  { n: '8',       label: 'SASO certifications',         desc: 'All eight product lines certified for Saudi market sale — generating first Saudi revenue in Month 7.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'Industrial Manufacturer' },
  { label: 'Location',  value: 'UAE → Riyadh, Saudi Arabia' },
  { label: 'Sector',    value: 'Manufacturing' },
  { label: 'Duration',  value: '11 months' },
  { label: 'Services',  value: 'Financial Advisory · Market Entry · Vision 2030' },
];

const sidebarOutcomes = [
  { label: 'Government grant funding secured',          value: 'SAR 28M' },
  { label: 'Reduction in projected first-year losses',  value: '72%' },
  { label: 'Full compliance achieved',                  value: 'IKTVA' },
];

export default function KsaBody() {
  return (
    <div className={styles.layout}>

      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            Saudi Arabia&apos;s Vision 2030 industrial localisation programme represented a
            once-in-a-generation opportunity for UAE-based manufacturers — but capturing that
            opportunity required a level of regulatory sophistication, financial structuring
            expertise, and government relationship management that most manufacturers simply
            did not have in-house. One UAE industrial manufacturer came to Dillon &amp; Bird
            with a clear ambition: enter the Kingdom, qualify for the government incentive
            programme, and build a profitable Saudi operation. They had 11 months to make
            it work.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>
            A transformative opportunity — with a demanding qualification framework
          </h2>
          <p className={styles.bodyText}>The Saudi Industrial Development Fund (SIDF) and the Ministry of Industry&apos;s grant programmes require applicants to demonstrate IKTVA (In-Kingdom Total Value Add) compliance — a complex scoring framework that most non-Saudi manufacturers had never encountered. The company had no idea where they stood against the IKTVA criteria.</p>
          <p className={styles.bodyText}>The grant application process required audited financials, a detailed business plan compliant with Saudi accounting standards, and a local entity registration — all of which needed to be in place before the application window closed. The company had none of these.</p>
          <p className={styles.bodyText}>The manufacturer&apos;s product line included components subject to Saudi Standards, Metrology and Quality Organization (SASO) certification requirements. Without SASO approval, no revenue could legally flow — making the investment entirely speculative until certification was secured.</p>
        </div>

        <div className={styles.divider} />

        {/* Approach */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Our Approach</div>
          <h2 className={styles.sectionTitle}>A structured path from problem to outcome</h2>
          <div className={styles.steps}>
            {steps.map(s => (
              <div className={styles.step} key={s.n}>
                <div className={styles.stepN}>{s.n}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Results */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Results</div>
          <h2 className={styles.sectionTitle}>Measurable impact — delivered on time</h2>
          <div className={styles.resultsGrid}>
            {results.map(r => (
              <div className={styles.resultBox} key={r.label}>
                <span className={styles.resultN}>{r.n}</span>
                <span className={styles.resultLabel}>{r.label}</span>
                <p className={styles.resultDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className={styles.quote}>
          <p className={styles.quoteText}>
            &ldquo;We knew the opportunity was there but had no idea how to navigate the
            system. Dillon &amp; Bird made the complexity disappear. The grant alone paid
            for years of advisory fees.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            — CEO, Industrial Manufacturer — UAE
          </span>
        </div>

      </main>

      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBox}>
          <div className={styles.sidebarTitle}>Engagement Details</div>
          {sidebarDetails.map(d => (
            <div className={styles.sidebarItem} key={d.label}>
              <span>{d.label}</span>
              <span className={styles.sidebarVal}>{d.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.sidebarBox}>
          <div className={styles.sidebarTitle}>Key Outcomes</div>
          {sidebarOutcomes.map(o => (
            <div className={styles.sidebarItem} key={o.label}>
              <span>{o.label}</span>
              <span className={styles.sidebarOutcomeVal}>{o.value}</span>
            </div>
          ))}
        </div>

        <a href="/contact" target="_blank" rel="noopener noreferrer" className={styles.sidebarCTA}>
          Discuss Your Challenge →
        </a>
      </aside>

    </div>
  );
}