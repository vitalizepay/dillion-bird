import styles from './FamilyBody.module.css';

const steps = [
  {
    n: '01',
    title: 'Structural Audit & Exposure Mapping',
    desc: 'We began with a comprehensive audit of all nine entities — charting asset ownership, intercompany flows, related-party transactions, and regulatory exposure across each jurisdiction. This gave us and the family a complete picture of risk for the first time.',
  },
  {
    n: '02',
    title: 'Optimal Holding Architecture Design',
    desc: 'Drawing on our deep knowledge of DIFC foundations, mainland holding companies, and free zone structures, we designed a streamlined four-entity holding architecture that ring-fenced the family\'s core real estate assets, separated the trading operations, and created a clean succession pathway for the next generation.',
  },
  {
    n: '03',
    title: 'Transfer Pricing Documentation',
    desc: 'We drafted comprehensive transfer pricing policies and intercompany agreements, eliminating the group\'s exposure retroactively and establishing a compliant framework going forward. This was critical ahead of the first Corporate Tax filing.',
  },
  {
    n: '04',
    title: 'Governance Framework Implementation',
    desc: 'Working alongside the family, we designed a formal governance charter including a Family Constitution, advisory board structure, and decision-making protocols — giving institutional investors the transparency and accountability they require.',
  },
  {
    n: '05',
    title: 'Implementation & Banking Support',
    desc: 'We managed the full implementation process: entity registrations, licence amendments, bank account restructuring, and coordination with legal counsel — ensuring zero disruption to the group\'s active trading operations throughout.',
  },
];

const results = [
  { n: 'AED 120M', label: 'Assets restructured',          desc: 'All nine entities rationalised into a clean four-entity architecture with fully documented ownership and intercompany agreements.' },
  { n: '57%',      label: 'Reduction in holding costs',   desc: 'The new structure eliminated redundant licence fees, audit requirements, and intercompany complexity — delivering immediate and recurring savings.' },
  { n: '100%',     label: 'CT compliance achieved',       desc: 'The group filed its first Corporate Tax return with full confidence, with zero penalties or amendments required.' },
  { n: 'AED 45M',  label: 'Institutional capital unlocked', desc: 'Within six months of governance implementation, the group closed its first institutional co-investment partnership.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'Diversified Family Group' },
  { label: 'Location',  value: 'Dubai, UAE' },
  { label: 'Sector',    value: 'Family Enterprise' },
  { label: 'Duration',  value: '8 months' },
  { label: 'Services',  value: 'Financial Advisory · Restructuring' },
];

const sidebarOutcomes = [
  { label: 'Assets restructured & ring-fenced',   value: 'AED 120M' },
  { label: 'Reduction in annual holding costs',   value: '57%' },
  { label: 'Mandate to full implementation',      value: '8 mo' },
];

export default function FamilyBody() {
  return (
    <div className={styles.layout}>

      {/* ── MAIN ── */}
      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            A second-generation UAE-based family group with diversified interests across real
            estate, trading, and logistics came to Dillon &amp; Bird facing an existential
            challenge: a holding structure that had served them well for a decade had become
            a liability. The introduction of UAE Corporate Tax had fundamentally changed the
            economics of how they held and moved wealth.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>A legacy structure meeting a new regulatory reality</h2>
          <p className={styles.bodyText}>The family&apos;s assets were held across nine entities spanning mainland UAE, two free zones, and an offshore jurisdiction. Intercompany transactions had never been formally documented, creating significant transfer pricing exposure.</p>
          <p className={styles.bodyText}>Governance was informal — decisions were made by the founding patriarch with no documented decision-making framework, making the group increasingly unattractive to the institutional investors it now needed as growth partners.</p>
          <p className={styles.bodyText}>The group&apos;s accountants had flagged the Corporate Tax risk but lacked the capability to design a solution. Previous attempts to engage a Big 4 firm had stalled due to cost and cultural fit concerns.</p>
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
            &ldquo;Dillon &amp; Bird did not just give us a strategy document. They stayed
            until every recommendation was implemented and the numbers moved. That is a
            different kind of firm.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            — Managing Director, Diversified Family Group — Dubai, UAE
          </span>
        </div>

      </main>

      {/* ── SIDEBAR ── */}
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