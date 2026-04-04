import styles from './FbBody.module.css';

const steps = [
  {
    n: '01',
    title: 'Unit-Level P&L Construction',
    desc: 'We spent the first six weeks building granular unit-level P&L statements for all seven outlets — allocating shared costs on a defensible basis and identifying the true four-wall contribution of each concept for the first time.',
  },
  {
    n: '02',
    title: 'Portfolio Rationalisation',
    desc: 'The unit P&L work confirmed that two outlets were structurally loss-making — not due to weak trading, but due to irrecoverable rent-to-revenue ratios. We modelled the impact of exit vs. renegotiation for each, and recommended exit of one and intensive landlord negotiation on the other.',
  },
  {
    n: '03',
    title: 'Centralised Procurement Implementation',
    desc: 'We consolidated the supply base from 34 to 11 preferred suppliers and established a centralised procurement function with weekly order cycles and par-level inventory management. We negotiated volume pricing agreements that delivered immediate cost reductions.',
  },
  {
    n: '04',
    title: 'Lease Renegotiation Programme',
    desc: 'We prepared detailed financial analysis of each property\'s contribution relative to market rental benchmarks and presented this to both landlords with a structured renegotiation proposal. Yas Mall agreed to a 22% reduction; Dubai Mall agreed to a 14% reduction.',
  },
  {
    n: '05',
    title: 'Management Information System',
    desc: 'We implemented a daily flash reporting system — giving the founders real-time visibility into each outlet\'s revenue, covers, average spend, and cost ratios. For the first time, decisions could be made on data rather than instinct.',
  },
];

const results = [
  { n: '29%',     label: 'EBITDA improvement',           desc: 'Group EBITDA increased from AED 2.1M to AED 6.3M — a 200% absolute improvement — within 12 months.' },
  { n: 'AED 4.2M', label: 'Annual uplift',               desc: 'The annualised EBITDA improvement from procurement, lease renegotiation, and portfolio rationalisation combined.' },
  { n: '22%',     label: 'Rent reduction (Yas)',          desc: 'Yas Mall lease renegotiated at 22% below the previous rate — the largest single cost reduction in the programme.' },
  { n: '2',       label: 'Loss-making concepts exited',   desc: 'One concept exited cleanly; one renegotiated to viability — removing AED 1.8M of annual EBITDA drag.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'Multi-Brand F&B Group' },
  { label: 'Location',  value: 'Dubai & Abu Dhabi, UAE' },
  { label: 'Sector',    value: 'F&B / Hospitality' },
  { label: 'Duration',  value: '12 months' },
  { label: 'Services',  value: 'Management Consulting · Operations' },
];

const sidebarOutcomes = [
  { label: 'EBITDA margin improvement',   value: '29%' },
  { label: 'Full transformation timeline', value: '12 mo' },
  { label: 'Annualised EBITDA uplift',    value: 'AED 4.2M' },
];

export default function FbBody() {
  return (
    <div className={styles.layout}>

      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            A multi-brand F&amp;B operator with seven outlets across Dubai and Abu Dhabi was
            generating AED 48M in annual revenue — but producing only AED 2.1M in EBITDA.
            Two of the seven concepts were loss-making. A third was breakeven. The founders
            knew the business was underperforming but had been unable to diagnose precisely
            why — or to make the difficult decisions that a clear diagnosis would demand.
            Dillon &amp; Bird was brought in to provide both.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>
            AED 48M in revenue, AED 2.1M in EBITDA — a structural problem, not a trading one
          </h2>
          <p className={styles.bodyText}>The business had no unit-level P&amp;L. Management accounts were produced at a group level only, making it impossible to determine which outlets were subsidising which. The founders suspected two outlets were loss-making but could not quantify the drag.</p>
          <p className={styles.bodyText}>Procurement was managed independently by each outlet manager. The group was purchasing from 34 different suppliers with no centralised negotiation, no volume discounting, and significant wastage from inconsistent ordering practices.</p>
          <p className={styles.bodyText}>The property portfolio included two leases — one in Dubai Mall and one in Abu Dhabi&apos;s Yas Mall — signed at pre-2020 rental rates that were now materially above market. Both landlords had been resistant to renegotiation.</p>
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
            &ldquo;For three years we thought it was a sales problem. Dillon &amp; Bird showed
            us it was a structure problem. Once we could see the real numbers, the decisions
            became obvious.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            — Managing Director, Multi-Brand F&amp;B Group — Dubai, UAE
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