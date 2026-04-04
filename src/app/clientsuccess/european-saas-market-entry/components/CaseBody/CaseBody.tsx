import styles from './CaseBody.module.css';

const steps = [
  {
    n: '01',
    title: 'Jurisdiction Selection & Entity Design',
    desc: 'We assessed the company\'s revenue model, client profile, and ownership structure and recommended a DMCC free zone entity — providing 100% foreign ownership, no withholding tax on software revenues, and the fastest licence processing in the UAE.',
  },
  {
    n: '02',
    title: 'Accelerated Licence Processing',
    desc: 'Using our established relationships with DMCC authorities, we submitted a complete, pre-reviewed application pack on Day 1. The trade licence was issued on Day 6 — compared to the standard 10–15 working day timeline.',
  },
  {
    n: '03',
    title: 'Visa & Immigration Fast-Track',
    desc: 'We coordinated establishment card, investor visas, and Emirates ID applications concurrently — eliminating the sequential delays that typically extend timelines by 3–4 weeks.',
  },
  {
    n: '04',
    title: 'Banking Pre-Qualification',
    desc: 'Before the licence was even issued, we prepared the company\'s full KYC file and pre-introduced them to three banking partners with technology sector experience. Accounts were opened and operational by Day 14.',
  },
  {
    n: '05',
    title: 'Contract Activation Support',
    desc: 'We drafted the UAE-law service agreements and coordinated with the clients\' legal teams to ensure all three enterprise contracts were signed within the first week of trading.',
  },
];

const results = [
  { n: '14',   label: 'Days to full operation',   desc: 'From first conversation to a fully licensed, banked, and trading UAE entity in 14 working days.' },
  { n: '42%',  label: 'Below budget',              desc: 'The DMCC structure eliminated the local sponsor costs that the mainland approach would have required.' },
  { n: '3',    label: 'Contracts activated',       desc: 'All three enterprise contracts were signed and revenue-generating within the first week of operation.' },
  { n: '€1.2M', label: 'First-year UAE revenue',   desc: 'The company exceeded its UAE revenue target in Year 1, validating the speed-to-market investment.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'European SaaS Company' },
  { label: 'Location',  value: 'Amsterdam → Dubai, UAE' },
  { label: 'Sector',    value: 'Technology' },
  { label: 'Duration',  value: '14 working days' },
  { label: 'Services',  value: 'Business Setup · Banking Services' },
];

const sidebarOutcomes = [
  { label: 'Working days to operational readiness', value: '14' },
  { label: 'Lower setup cost vs. initial estimates', value: '42%' },
  { label: 'Enterprise contracts activated on Day 1', value: '4' },
];

export default function CaseBody() {
  return (
    <div className={styles.layout}>

      {/* ── MAIN CONTENT ── */}
      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            A Netherlands-based B2B SaaS company had three enterprise clients ready to sign
            UAE contracts — but no UAE entity to receive the revenue. A previous six-month
            attempt through a generic PRO services firm had left them with nothing but delays
            and mounting frustration. They came to Dillon &amp; Bird with a simple brief:
            make it happen, fast.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>Six months of stalled progress, three contracts at risk</h2>
          <p className={styles.bodyText}>The company&apos;s previous PRO service provider had submitted the licence application incorrectly, leading to rejection and a complete restart. The window to sign the enterprise contracts was closing — two of the three clients had internal year-end deadlines.</p>
          <p className={styles.bodyText}>The founding team had no regional contacts and no understanding of which UAE jurisdiction best suited a software-as-a-service model. They had been advised by their previous provider to establish on mainland Dubai, which would have created unnecessary local ownership complications.</p>
          <p className={styles.bodyText}>Banking for technology businesses had been significantly tightened post-2023. Without the right preparation, KYC processes at most UAE banks were taking 8–12 weeks — far beyond their timeline.</p>
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
            &ldquo;We had been trying to enter the UAE for eight months. Dillon &amp; Bird
            had us operational in two weeks. Their regional knowledge is genuinely
            unmatched.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>— CEO, European SaaS Company — Amsterdam</span>
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