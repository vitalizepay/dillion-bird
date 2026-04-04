import styles from './DifcBody.module.css';

const steps = [
  {
    n: '01',
    title: 'DIFC Structure Optimisation',
    desc: "We assessed the founder's planned service lines — financial advisory, transaction support, and expert witness work — and determined that a DIFC Prescribed Company structure was optimal: full foreign ownership, the right regulated activities, and a faster licensing pathway than a DIFC Authorised Firm.",
  },
  {
    n: '02',
    title: 'Application Pack Preparation',
    desc: 'We prepared the complete application pack in 48 hours — business plan, regulated activities schedule, financial projections, and all supporting documentation — designed to anticipate and pre-answer every standard DIFC Authority query.',
  },
  {
    n: '03',
    title: 'Accelerated DIFC Processing',
    desc: "Using our established DIFC relationships, we submitted a pre-reviewed application directly to the DIFC Authority's business development team. The licence was issued on Day 5.",
  },
  {
    n: '04',
    title: 'Multi-Bank KYC Pre-Qualification',
    desc: "Before the licence was issued, we prepared the founder's full KYC file and pre-introduced him to four banking partners with strong professional services practices. We ran parallel processes to ensure at least two accounts would be ready on Day 9.",
  },
  {
    n: '05',
    title: 'Operational Setup',
    desc: 'We coordinated VAT registration, professional indemnity insurance placement, and client contract templates — leaving the founder genuinely ready to invoice on Day 9.',
  },
];

const results = [
  { n: '9',       label: 'Days to first invoice',   desc: 'The practice was licensed, banked, insured, and invoicing in nine working days.' },
  { n: '4',       label: 'Bank accounts opened',    desc: 'GBP, EUR, USD, and AED accounts — enabling friction-free international billing from Day 1.' },
  { n: '3',       label: 'Clients signed',          desc: 'All three prospective clients signed within the first week of trading.' },
  { n: 'AED 2.8M', label: 'Year 1 revenue',         desc: 'The practice exceeded its first-year revenue target, validating the speed-to-market investment.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'Independent Advisory Firm' },
  { label: 'Location',  value: 'DIFC, Dubai' },
  { label: 'Sector',    value: 'Professional Services' },
  { label: 'Duration',  value: '9 working days' },
  { label: 'Services',  value: 'Business Setup · Banking Services' },
];

const sidebarOutcomes = [
  { label: 'Working days to first invoice', value: '9' },
  { label: 'Multi-currency bank accounts',  value: '4' },
  { label: 'Foreign ownership retained',    value: '100%' },
];

export default function DifcBody() {
  return (
    <div className={styles.layout}>

      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            When a senior partner resigned from a leading Big 4 firm to launch an independent
            financial advisory practice, they had a six-week non-compete window, three
            prospective clients ready to engage, and a clear conviction that they wanted to
            operate from DIFC. What they did not have was any understanding of how to set up
            in the UAE&apos;s most regulated financial centre — or any tolerance for the delays
            they had watched peers endure. They came to Dillon &amp; Bird on the day they
            handed in their notice.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>
            A six-week window, three clients waiting, and zero margin for delay
          </h2>
          <p className={styles.bodyText}>DIFC is the UAE&apos;s most prestigious — and most process-intensive — financial centre. Applications require detailed business plans, professional CVs, regulatory disclosures, and in some cases a regulatory interview. First-time applicants frequently experience 4–8 week processing delays due to incomplete submissions.</p>
          <p className={styles.bodyText}>The founder wanted multi-currency capabilities — GBP, EUR, and USD — from Day 1, to invoice international clients without conversion friction. UAE banks had significantly tightened their KYC for professional services firms post-2023, with several banks declining to open accounts for newly registered advisory practices.</p>
          <p className={styles.bodyText}>The founder&apos;s non-compete meant that any delay in becoming operational would compress the period during which the initial client pipeline could be converted — directly threatening first-year revenue.</p>
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
            &ldquo;I had watched colleagues take three months to set up in DIFC and still not
            have a bank account. Dillon &amp; Bird had me operational in nine days. I have no
            idea how they did it.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            — Founder, Independent Advisory Firm — DIFC, Dubai
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