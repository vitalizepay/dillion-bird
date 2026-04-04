import styles from './RealEstateBody.module.css';

const steps = [
  {
    n: '01',
    title: 'Financial Model Rebuild',
    desc: "We rebuilt the financial model from first principles — separating the three revenue streams, applying market-standard assumptions for each, stress-testing against RAK market absorption rates, and correcting the three structural errors. The new model was bank-ready on Day 1.",
  },
  {
    n: '02',
    title: 'Institutional Narrative Development',
    desc: "We developed a comprehensive investor narrative that contextualised the RAK market opportunity, positioned the developer's residential track record as evidence of execution capability, and addressed the mixed-use risk questions proactively.",
  },
  {
    n: '03',
    title: 'Lender Introduction Programme',
    desc: 'Drawing on our relationships with UAE institutional lenders and private credit funds, we ran a structured introduction programme — presenting the project to seven qualified capital sources over four weeks.',
  },
  {
    n: '04',
    title: 'Term Sheet Negotiation',
    desc: "We received three term sheets and negotiated on behalf of the developer — focusing on LTV, drawdown schedule, and interest coverage covenants. The final terms improved the developer's equity return by 18% vs. the first term sheet received.",
  },
  {
    n: '05',
    title: 'Closing Coordination',
    desc: 'We managed the full legal and documentation process through to financial close — coordinating between the developer, lender, legal counsel, and RAK municipality.',
  },
];

const results = [
  { n: 'AED 45M', label: 'Capital secured',      desc: 'Full construction financing for the AED 180M GDV project secured at competitive pricing from a UAE-based institutional lender.' },
  { n: '63%',     label: 'D/E improvement',       desc: 'The final capital structure achieved a 63% improvement in the debt-to-equity ratio vs. the developer\'s initial assumptions.' },
  { n: '18%',     label: 'Return uplift',          desc: 'Negotiated term improvements delivered an 18% uplift in projected equity IRR vs. the first term sheet.' },
  { n: '3',       label: 'Term sheets received',  desc: 'Three competing term sheets — creating genuine negotiating leverage for the first time.' },
];

const sidebarDetails = [
  { label: 'Client',    value: 'Boutique Property Developer' },
  { label: 'Location',  value: 'Ras Al Khaimah, UAE' },
  { label: 'Sector',    value: 'Real Estate' },
  { label: 'Duration',  value: '9 months' },
  { label: 'Services',  value: 'Financial Advisory · Investor Services' },
];

const sidebarOutcomes = [
  { label: 'Institutional capital secured',       value: 'AED 45M' },
  { label: 'Improvement in debt-to-equity ratio', value: '63%' },
  { label: 'GDV of project funded',               value: 'AED 180M' },
];

export default function RealEstateBody() {
  return (
    <div className={styles.layout}>

      <main className={styles.main}>

        {/* Overview */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.lead}>
            A boutique property developer with three successful residential completions in
            Ras Al Khaimah had secured the land for their first mixed-use scheme — a 220-unit
            development combining residential, retail, and hospitality uses. Despite the track
            record and a genuinely attractive RAK location, every institutional lender they
            approached declined at the information memorandum stage. Dillon &amp; Bird was
            brought in to find out why — and to fix it.
          </p>
        </div>

        <div className={styles.divider} />

        {/* Challenge */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>The Challenge</div>
          <h2 className={styles.sectionTitle}>A good project with an incoherent story</h2>
          <p className={styles.bodyText}>The developer&apos;s information memorandum had been prepared internally. The financial model projected healthy returns but contained three material modelling errors that any institutional analyst would identify immediately — undermining confidence in everything that followed.</p>
          <p className={styles.bodyText}>The development&apos;s mixed-use nature required the financial model to address three distinct revenue streams — residential sales, retail leasing, and a serviced apartment component — but the document treated them as a single undifferentiated cash flow.</p>
          <p className={styles.bodyText}>The developer had no formal relationships with institutional capital sources. They had been cold-approaching lenders through their personal network, an approach that carries implicit reputational risk for projects of this scale.</p>
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
            &ldquo;We had been turned down three times. Dillon &amp; Bird rebuilt our story
            from the ground up — and within four months we had three institutions competing
            to fund us.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            — CEO, Boutique Property Developer — Ras Al Khaimah, UAE
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