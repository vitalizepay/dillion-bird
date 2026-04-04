import styles from './RetailBody.module.css';

const steps = [
  {
    n: '01',
    title: 'Market Sizing & Opportunity Mapping',
    desc: 'We built a bottom-up market model for lifestyle retail in KSA and Kuwait, segmenting by demographics, mall footfall data, and competitive positioning. This gave the founders their first data-driven view of where the brand could realistically win.',
  },
  {
    n: '02',
    title: 'Franchise-Ready Operations Manual',
    desc: 'We spent four weeks in the Dubai flagship documenting every operational process — from daily opening procedures to staff training, inventory management, and visual merchandising standards. The result: a 120-page operations manual that any capable partner could execute against.',
  },
  {
    n: '03',
    title: 'Partner Screening & Due Diligence',
    desc: 'We ran a structured partner identification process across both markets, screening 22 candidates against financial strength, retail experience, real estate relationships, and cultural alignment. We shortlisted three in KSA and two in Kuwait for the founders to meet.',
  },
  {
    n: '04',
    title: 'Franchise Agreement Structuring',
    desc: "We designed a franchise agreement framework that protected the brand's IP, set clear operational KPIs, and included step-in rights — giving the founders genuine recourse if standards slipped, without killing the relationship.",
  },
  {
    n: '05',
    title: 'Pilot Launch & Performance Review',
    desc: 'We supported the first KSA launch in Riyadh Park Mall, including staff training, opening week operations, and a 90-day performance review against the model we had built — confirming the expansion thesis before Kuwait was activated.',
  },
];

const results = [
  { n: '38%',   label: 'Revenue growth',        desc: 'Group revenue increased 38% in the 12 months following the first franchise signing, driven by GCC royalty income and strengthened UAE performance.' },
  { n: '3',     label: 'Markets entered',        desc: 'KSA (Riyadh), Kuwait City, and a surprise Abu Dhabi flagship — all operational within the 12-month window.' },
  { n: '120pp', label: 'Operations manual',      desc: 'A franchise-ready operations manual that the business now owns permanently as a scalable asset.' },
  { n: '2×',    label: 'Partner pipeline',       desc: 'Following the successful Riyadh launch, the brand received unsolicited franchise enquiries from Bahrain and Oman.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'Lifestyle Retail Brand' },
  { label: 'Location',  value: 'Dubai, UAE' },
  { label: 'Sector',    value: 'Retail' },
  { label: 'Duration',  value: '12 months' },
  { label: 'Services',  value: 'Management Consulting · Market Entry' },
];

const sidebarOutcomes = [
  { label: 'Revenue increase in 12 months',         value: '38%' },
  { label: 'New GCC markets entered',               value: '3' },
  { label: 'Unit contribution margin vs. Year 1',   value: '2×' },
];

export default function RetailBody() {
  return (
    <div className={styles.layout}>

      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            A Dubai-born lifestyle retail brand with six strong-performing outlets had twice
            tried — and twice failed — to expand into Saudi Arabia and Kuwait. Both attempts
            had collapsed at the partner selection stage. The founders were beginning to
            question whether GCC expansion was possible without sacrificing brand control.
            Dillon &amp; Bird was brought in to answer that question definitively.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>Two failed expansions and a brand at risk of stagnation</h2>
          <p className={styles.bodyText}>Both prior expansion attempts had been driven by opportunistic franchise enquiries rather than structured market analysis. The first partner in KSA lacked the retail operations experience the brand required. The second had the experience but demanded contractual terms that would have effectively transferred brand control.</p>
          <p className={styles.bodyText}>The brand had no documented operations manual, no franchise disclosure framework, and no financial model robust enough to negotiate from. Every conversation with potential partners started from a position of weakness.</p>
          <p className={styles.bodyText}>The founders were emotionally invested in a specific mall location in Riyadh that their gut told them was right — but they had no data to substantiate it or to use as a benchmark for evaluating alternative sites.</p>
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
            &ldquo;We had tried this twice before and failed. Dillon &amp; Bird gave us the
            structure, the discipline, and the regional insight to finally make it work.
            The difference was night and day.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            — Co-Founder, Lifestyle Retail Brand — Dubai, UAE
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