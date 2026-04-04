import styles from './LogisticsBody.module.css';

const steps = [
  {
    n: '01',
    title: 'Operations Process Mapping',
    desc: 'We spent three weeks shadowing the operations team across every shipment type, documenting every manual touchpoint, data transfer, and decision point. We identified 47 discrete manual tasks that were candidates for automation.',
  },
  {
    n: '02',
    title: 'Technology Architecture Design',
    desc: 'Rather than recommending an off-the-shelf TMS, we designed a lightweight integration layer connecting the existing legacy systems to a modern workflow automation platform — a fraction of the cost of a full system replacement.',
  },
  {
    n: '03',
    title: 'AI Document Processing Implementation',
    desc: "We implemented an AI-powered document processing module trained on the company's customs documentation formats. The system now reads, validates, and routes 94% of incoming shipping documents without human intervention.",
  },
  {
    n: '04',
    title: 'Client Portal Development',
    desc: 'We built a white-labelled client tracking portal — integrated with the automation layer — giving clients real-time shipment visibility and automated milestone notifications, eliminating the manual status update burden entirely.',
  },
  {
    n: '05',
    title: 'Staff Transition & Training',
    desc: 'We ran a structured four-week transition programme, redeploying six administrative staff to client-facing and business development roles — converting a cost centre into a growth investment.',
  },
];

const results = [
  { n: '50%',      label: 'Hours saved',          desc: 'Manual processing time per shipment dropped from an average of 4.2 hours to 2.1 hours — freeing 840 staff-hours per month.' },
  { n: 'AED 2.3M', label: 'Annual savings',        desc: 'Reduced penalty exposure (AED 720K), headcount efficiency (AED 980K), and error-related costs (AED 600K) combined to deliver AED 2.3M in annual savings.' },
  { n: '99.2%',    label: 'Document accuracy',     desc: 'AI-processed documents now achieve 99.2% accuracy vs. 91.4% under manual processing.' },
  { n: '2',        label: 'Clients retained',      desc: 'Both clients who had issued inadequacy notices renewed their contracts and cited the new portal as a differentiator.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'Freight & Logistics Operator' },
  { label: 'Location',  value: 'Sharjah, UAE' },
  { label: 'Sector',    value: 'Logistics' },
  { label: 'Duration',  value: '5 months' },
  { label: 'Services',  value: 'Technology Consulting · Operations' },
];

const sidebarOutcomes = [
  { label: 'Reduction in manual processing hours',    value: '50%' },
  { label: 'Annual operational savings',              value: 'AED 2.3M' },
  { label: 'Document accuracy rate post-automation',  value: '99.2%' },
];

export default function LogisticsBody() {
  return (
    <div className={styles.layout}>

      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            A mid-sized freight and logistics operator running 340+ active shipments per month
            was drowning in manual administration. Customs documentation, route planning, and
            client status reporting were all managed through WhatsApp groups and shared
            spreadsheets. The company was spending 60% of its operational headcount on tasks
            that should have been automated — and errors on high-value shipments were costing
            an average of AED 180,000 per quarter in penalties and delays.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>
            AED 180K per quarter in avoidable errors and penalties
          </h2>
          <p className={styles.bodyText}>The company had evaluated three off-the-shelf logistics management systems and found none that mapped cleanly to its specific combination of FCL, LCL, air freight, and cross-border trucking. The operations director had concluded that a custom solution was cost-prohibitive.</p>
          <p className={styles.bodyText}>Data lived in at least seven different places: WhatsApp, email, two Excel trackers, a legacy TMS, the customs authority portal, and individual team members&apos; WhatsApp groups. There was no single source of truth.</p>
          <p className={styles.bodyText}>The company&apos;s clients — primarily mid-market manufacturers — had begun requesting real-time shipment visibility that the company simply could not provide. Two clients had issued formal notices citing reporting inadequacy.</p>
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
            &ldquo;We thought we needed to replace our entire TMS and couldn&apos;t afford it.
            Dillon &amp; Bird showed us a smarter path — and the results have been
            extraordinary.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            — Operations Director, Freight &amp; Logistics Operator — Sharjah, UAE
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