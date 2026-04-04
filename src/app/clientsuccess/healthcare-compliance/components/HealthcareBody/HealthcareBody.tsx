import styles from './HealthcareBody.module.css';

const steps = [
  {
    n: '01',
    title: 'Emergency Financial Triage',
    desc: "In the first week, we deployed a team of three across the group's finance function. We mapped every entity, every intercompany relationship, and every revenue stream — producing a consolidated entity-level P&L for the first time in the group's history.",
  },
  {
    n: '02',
    title: 'Free Zone Qualifying Income Analysis',
    desc: "We undertook a detailed analysis of the two free zone entities' activities against the Qualifying Free Zone Person criteria. We determined that 78% of their income qualified — a significant and defensible tax saving versus the 9% headline rate.",
  },
  {
    n: '03',
    title: 'Transfer Pricing Documentation',
    desc: 'We drafted intercompany service agreements and a formal transfer pricing policy, pricing all management fees at arm\'s length using the Comparable Uncontrolled Price method. This eliminated the group\'s retroactive exposure.',
  },
  {
    n: '04',
    title: 'CT Return Preparation & Filing',
    desc: "With the structural work complete, we prepared the group's CT returns across all entities, calculated the payable tax, and filed with the FTA — with four days to spare before the deadline.",
  },
  {
    n: '05',
    title: 'Finance Team Training',
    desc: "We ran two full-day training sessions for the group's finance team on CT compliance, transfer pricing obligations, and the record-keeping requirements for future periods — leaving them self-sufficient going forward.",
  },
];

const results = [
  { n: '100%',   label: 'Compliance rate',         desc: 'All eight entities filed on time with zero deficiencies, penalties, or FTA follow-up queries.' },
  { n: '78%',    label: 'QFZP income qualified',   desc: 'The free zone income analysis delivered a tax rate of effectively 0% on the majority of free zone revenues — a material annual saving.' },
  { n: 'AED 0',  label: 'Penalties incurred',      desc: 'Despite the six-week window, the filing was accurate, complete, and submitted on time.' },
  { n: '4 days', label: 'Ahead of deadline',       desc: 'The entire remediation and filing process was completed with time to spare.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'Private Healthcare Group' },
  { label: 'Location',  value: 'Abu Dhabi, UAE' },
  { label: 'Sector',    value: 'Healthcare' },
  { label: 'Duration',  value: '6 weeks' },
  { label: 'Services',  value: 'Audit & Compliance · Tax Advisory' },
];

const sidebarOutcomes = [
  { label: 'Regulatory compliance achieved', value: '100%' },
  { label: 'Full remediation timeline',      value: '6 wk' },
  { label: 'Penalties or amendments',        value: 'AED 0' },
];

export default function HealthcareBody() {
  return (
    <div className={styles.layout}>

      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            When the UAE Federal Tax Authority confirmed that the first Corporate Tax filing
            window would open within eight weeks, a leading private healthcare group with eight
            facilities across Abu Dhabi and Al Ain had a serious problem. Their accounting
            systems were fragmented across three different software platforms, intercompany
            billing had never been formally structured, and their finance team had no
            experience with UAE CT. Dillon &amp; Bird was engaged the same week.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>
            Eight facilities, three accounting systems, six weeks to file
          </h2>
          <p className={styles.bodyText}>Each of the group&apos;s eight facilities had historically operated as a standalone cost centre with no consolidation framework. Revenue recognition policies differed between facilities, making consolidated P&amp;L production a multi-week manual exercise.</p>
          <p className={styles.bodyText}>The group had significant intercompany transactions — primarily management fees from the holding entity to operating subsidiaries — that had never been formally documented or priced at arm&apos;s length, creating transfer pricing exposure.</p>
          <p className={styles.bodyText}>Two of the eight entities were registered in Abu Dhabi free zones, where the CT treatment of qualifying income required specific structural analysis that the group&apos;s existing advisors were unable to provide.</p>
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
            &ldquo;The restructuring work they did for us was genuinely transformative.
            We now have a platform to build the next generation of this business on.
            We did not think that was achievable in this timeframe.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            — Group CFO, Private Healthcare Group — Abu Dhabi, UAE
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