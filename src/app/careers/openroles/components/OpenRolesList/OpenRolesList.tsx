'use client';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import styles from './OpenRolesList.module.css';

/* ══════════════════════════════════════
   JOB DATA
══════════════════════════════════════ */
const jobs = [
  {
    id: 1,
    title: 'Senior Strategy Associate',
    dept: 'strategy',
    location: 'dubai',
    type: 'full-time',
    exp: '4–7 years',
    posted: '2025-01-10',
    featured: true,
    about: "Join our strategy practice working directly with Partners on high-stakes client mandates across market entry, growth strategy, and business transformation for the GCC's most ambitious companies.",
    responsibilities: [
      'Lead client workstreams from scoping through to final delivery',
      'Manage and mentor Analysts across project engagements',
      'Develop financial models, market analyses, and strategic frameworks',
      'Build and maintain senior client relationships independently',
      'Contribute to client proposals and business development initiatives',
    ],
    requirements: [
      '4–7 years in strategy consulting, investment banking, or corporate strategy',
      'Proven track record leading complex analytical workstreams',
      'Strong PowerPoint storytelling and Excel modelling skills',
      'GCC market experience strongly preferred',
      'Arabic language skills an advantage',
    ],
    offer: [
      'Competitive salary with annual performance bonus',
      'AED 8,000 personal learning & development budget',
      'Gold-tier health insurance for you and your dependents',
      'Partner mentorship programme from day one',
      'Hybrid and flexible working arrangements',
      'Annual full-team international retreat',
    ],
  },
  {
    id: 2,
    title: 'Strategy Analyst — GCC Market Entry',
    dept: 'strategy',
    location: 'dubai',
    type: 'full-time',
    exp: '0–2 years',
    posted: '2025-01-08',
    featured: false,
    about: 'Support market entry mandates for international and regional clients targeting the GCC. Work alongside Senior Associates and Partners on research, modelling, and client presentations.',
    responsibilities: [
      'Conduct primary and secondary market research',
      'Build financial and scenario models in Excel',
      'Prepare client-ready PowerPoint presentations',
      'Support due diligence and competitive analysis',
      'Coordinate with third-party vendors and data providers',
    ],
    requirements: [
      '0–2 years in consulting, finance, or a strategy-adjacent role',
      'Strong analytical and quantitative skills',
      'Proficiency in Excel and PowerPoint',
      'Curiosity and desire to learn in a fast-paced environment',
      "Bachelor's degree from a leading university",
    ],
    offer: [
      'Structured analyst training programme',
      'AED 5,000 personal learning & development budget',
      'Health insurance for you and one dependent',
      'Clear promotion pathway to Associate within 18 months',
      'Hybrid working arrangements',
    ],
  },
  {
    id: 3,
    title: 'Associate Director — Business Transformation',
    dept: 'consulting',
    location: 'dubai',
    type: 'full-time',
    exp: '7–12 years',
    posted: '2025-01-06',
    featured: true,
    about: 'Lead large-scale business transformation mandates for government and private sector clients across the GCC. Drive operational excellence, change management, and digital enablement programmes.',
    responsibilities: [
      'Own client engagement delivery from initiation to sign-off',
      'Lead teams of 3–6 consultants across complex programmes',
      'Develop and present executive-level recommendations to C-suite',
      'Oversee business development and proposal efforts',
      'Build long-term client relationships and identify expansion opportunities',
    ],
    requirements: [
      '7–12 years in management consulting or corporate transformation',
      'Experience leading large, cross-functional teams',
      'Proven track record in GCC public or private sector projects',
      'Exceptional stakeholder management and communication skills',
      'MBA or equivalent advanced degree preferred',
    ],
    offer: [
      'Market-leading compensation with equity participation',
      'AED 15,000 personal development budget',
      'Platinum health insurance for entire family',
      'Seat at the leadership table with direct Partner access',
      'Annual international leadership offsite',
    ],
  },
  {
    id: 4,
    title: 'Family Business Advisory Associate',
    dept: 'consulting',
    location: 'dubai',
    type: 'full-time',
    exp: '2–5 years',
    posted: '2025-01-05',
    featured: false,
    about: 'Work with established GCC family businesses on succession planning, governance frameworks, and professionalisation mandates. A highly specialised and relationship-driven practice.',
    responsibilities: [
      'Conduct family business diagnostics and governance assessments',
      'Develop tailored succession and ownership transition frameworks',
      'Facilitate family council workshops and governance meetings',
      'Prepare advisory reports and board-level presentations',
      'Support relationship management with ultra-high-net-worth families',
    ],
    requirements: [
      '2–5 years in advisory, family office, or wealth management',
      'Understanding of GCC family business dynamics',
      'Strong interpersonal skills and cultural sensitivity',
      'Arabic language skills highly advantageous',
      'Discretion and professional maturity in handling sensitive mandates',
    ],
    offer: [
      'Unique access to GCC family business network',
      'AED 7,000 personal learning & development budget',
      'Comprehensive health insurance',
      'Flexible working model',
      'Annual bonus based on client outcomes',
    ],
  },
  {
    id: 5,
    title: 'Corporate Services Manager',
    dept: 'corporate',
    location: 'dubai',
    type: 'full-time',
    exp: '3–6 years',
    posted: '2025-01-04',
    featured: false,
    about: 'Manage the end-to-end delivery of corporate services for our client portfolio, including company formation, PRO services, and regulatory compliance across UAE free zones and mainland.',
    responsibilities: [
      'Manage company formation and licensing processes',
      'Oversee PRO and government relations activities',
      'Coordinate visa and residency applications for clients',
      'Maintain compliance calendars and renewal schedules',
      'Liaise with free zone authorities and government entities',
    ],
    requirements: [
      '3–6 years in corporate services, PRO, or company formation',
      'Deep knowledge of UAE free zones and mainland setup requirements',
      'Strong government relations network',
      'Proficiency in Arabic a significant advantage',
      'Detail-oriented with strong organisational skills',
    ],
    offer: [
      'Competitive base salary',
      'AED 4,000 personal development budget',
      'Health insurance',
      'Stable and structured working environment',
      'Opportunity for senior team leadership',
    ],
  },
  {
    id: 6,
    title: 'Accountant',
    dept: 'corporate',
    location: 'dubai',
    type: 'part-time',
    exp: '2–4 years',
    posted: '2025-01-03',
    featured: false,
    about: 'Support the finance function with bookkeeping, VAT filing, and month-end close activities across a small portfolio of client entities. Ideal for an experienced accountant seeking flexible hours.',
    responsibilities: [
      'Maintain accurate books across multiple client entities',
      'Prepare and file quarterly VAT returns with the FTA',
      'Perform monthly bank reconciliations',
      'Support year-end audit preparation',
      'Issue client invoices and manage accounts receivable',
    ],
    requirements: [
      '2–4 years in accounting or bookkeeping',
      'Experience with UAE VAT regulations',
      'Proficiency in QuickBooks or Xero',
      'ACCA, CPA, or equivalent qualification preferred',
      'High attention to detail and reliability',
    ],
    offer: [
      'Flexible part-time hours (20–25 hrs/week)',
      'Competitive hourly rate',
      'Remote-friendly arrangement',
      'Opportunity to transition to full-time',
    ],
  },
  {
    id: 7,
    title: 'Technology Analyst',
    dept: 'technology',
    location: 'dubai',
    type: 'full-time',
    exp: '1–3 years',
    posted: '2025-01-02',
    featured: false,
    about: 'Join our growing technology practice supporting digital transformation mandates for GCC clients. Work on technology strategy, vendor selection, and implementation oversight assignments.',
    responsibilities: [
      'Support technology assessment and due diligence projects',
      'Research and evaluate enterprise software and platform vendors',
      'Assist with IT strategy and roadmap development',
      'Document business requirements and process flows',
      'Coordinate with client IT teams during implementation phases',
    ],
    requirements: [
      '1–3 years in technology consulting or IT advisory',
      'Understanding of ERP, CRM, and cloud platforms',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication',
      'Computer science, IT, or engineering background preferred',
    ],
    offer: [
      'Exposure to cutting-edge digital transformation projects',
      'AED 6,000 learning & development budget',
      'Health insurance',
      'Flexible hybrid working',
      'Fast-track career progression',
    ],
  },
  {
    id: 8,
    title: 'Company Formation Specialist',
    dept: 'formation',
    location: 'riyadh',
    type: 'full-time',
    exp: '2–5 years',
    posted: '2025-01-01',
    featured: false,
    about: 'Lead company setup and registration mandates for international and regional clients entering the Saudi market. Work across multiple legal structures and regulatory frameworks.',
    responsibilities: [
      'Advise clients on optimal legal structures for KSA market entry',
      'Manage end-to-end company registration with MISA and MOC',
      'Coordinate with notaries, chambers, and government portals',
      'Prepare and review all corporate documentation',
      'Support post-formation compliance and ongoing corporate secretarial needs',
    ],
    requirements: [
      '2–5 years in company formation or corporate services in KSA',
      'Strong knowledge of MISA, MOC, and Saudi regulatory frameworks',
      'Arabic fluency essential',
      'Proficiency with Maroof, Qiwa, and related government platforms',
      'Highly organised with excellent follow-through',
    ],
    offer: [
      'Competitive KSA salary package',
      'Housing and transportation allowances',
      'Annual flight allowance',
      'Health insurance',
      'Strong growth opportunity as KSA practice expands',
    ],
  },
];

/* ══════════════════════════════════════
   LABEL MAPS
══════════════════════════════════════ */
const deptLabels: Record<string, string> = {
  strategy:   'Strategy & Growth',
  consulting: 'Management Consulting',
  corporate:  'Corporate Services',
  technology: 'Technology',
  formation:  'Company Formation',
};

const locationLabels: Record<string, string> = {
  dubai:       'Dubai, UAE',
  riyadh:      'Riyadh, KSA',
  'abu dhabi': 'Abu Dhabi, UAE',
};

const typeLabels: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
};

/* ══════════════════════════════════════
   TYPES
══════════════════════════════════════ */
interface Job {
  id: number;
  title: string;
  dept: string;
  location: string;
  type: string;
  exp: string;
  posted: string;
  featured: boolean;
  about: string;
  responsibilities: string[];
  requirements: string[];
  offer: string[];
}

interface Props {
  searchQuery?: string;
}

/* ══════════════════════════════════════
   HELPERS
══════════════════════════════════════ */
function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return '1 day ago';
  if (diff < 7) return `${diff} days ago`;
  if (diff < 14) return '1 week ago';
  if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
  return `${Math.floor(diff / 30)} months ago`;
}

function DeptIcon({ dept }: { dept: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {dept === 'strategy' || dept === 'consulting' ? (
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      ) : dept === 'technology' ? (
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </>
      ) : (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </>
      )}
    </svg>
  );
}

/* ══════════════════════════════════════
   COMPONENT
══════════════════════════════════════ */
export default function OpenRolesList({ searchQuery = '' }: Props) {
  const router = useRouter();

  const [deptFilters,     setDeptFilters]     = useState<string[]>([]);
  const [locationFilters, setLocationFilters] = useState<string[]>([]);
  const [typeFilters,     setTypeFilters]     = useState<string[]>([]);
  const [sort,            setSort]            = useState('new');
  const [activeJob,       setActiveJob]       = useState<Job | null>(null);

  const toggle = (val: string, state: string[], setter: (v: string[]) => void) =>
    setter(state.includes(val) ? state.filter(x => x !== val) : [...state, val]);

  const filtered = useMemo(() => {
    let list = jobs.filter(j => {
      const q = searchQuery.toLowerCase();
      const matchQ = !q || j.title.toLowerCase().includes(q) ||
        j.dept.toLowerCase().includes(q) || j.location.toLowerCase().includes(q);
      const matchD = !deptFilters.length     || deptFilters.includes(j.dept);
      const matchL = !locationFilters.length || locationFilters.includes(j.location);
      const matchT = !typeFilters.length     || typeFilters.includes(j.type);
      return matchQ && matchD && matchL && matchT;
    });

    if (sort === 'dept')      list = [...list].sort((a, b) => a.dept.localeCompare(b.dept));
    else if (sort === 'loc')  list = [...list].sort((a, b) => a.location.localeCompare(b.location));
    else                      list = [...list].sort((a, b) => b.posted.localeCompare(a.posted));

    return list;
  }, [searchQuery, deptFilters, locationFilters, typeFilters, sort]);

  const clearAll = () => { setDeptFilters([]); setLocationFilters([]); setTypeFilters([]); };

  const countByDept = (d: string) => jobs.filter(j => j.dept === d).length;
  const countByLoc  = (l: string) => jobs.filter(j => j.location === l).length;
  const countByType = (t: string) => jobs.filter(j => j.type === t).length;

  /* Navigate to apply form with job ID */
  const goApply = (jobId: number) => {
    router.push(`/careers/apply?jobId=${jobId}`);
  };

  return (
    <div className={styles.body}>
      <div className={styles.layout}>

        {/* ══════════════════════════════════
            SIDEBAR
        ══════════════════════════════════ */}
        <aside className={styles.sidebar}>

          {/* Department */}
          <div className={styles.filterBox}>
            <div className={styles.filterHead}>
              <span>Department</span>
              <button className={styles.clearBtn} onClick={() => setDeptFilters([])}>Clear</button>
            </div>
            {Object.keys(deptLabels).map(d => (
              <label className={styles.opt} key={d}>
                <input
                  type="checkbox"
                  checked={deptFilters.includes(d)}
                  onChange={() => toggle(d, deptFilters, setDeptFilters)}
                />
                <span>{deptLabels[d]}</span>
                <span className={styles.count}>{countByDept(d)}</span>
              </label>
            ))}
          </div>

          {/* Location */}
          <div className={styles.filterBox}>
            <div className={styles.filterHead}>
              <span>Location</span>
              <button className={styles.clearBtn} onClick={() => setLocationFilters([])}>Clear</button>
            </div>
            {Object.keys(locationLabels).map(l => (
              <label className={styles.opt} key={l}>
                <input
                  type="checkbox"
                  checked={locationFilters.includes(l)}
                  onChange={() => toggle(l, locationFilters, setLocationFilters)}
                />
                <span>{locationLabels[l]}</span>
                <span className={styles.count}>{countByLoc(l)}</span>
              </label>
            ))}
          </div>

          {/* Type */}
          <div className={styles.filterBox}>
            <div className={styles.filterHead}>
              <span>Type</span>
              <button className={styles.clearBtn} onClick={() => setTypeFilters([])}>Clear</button>
            </div>
            {Object.keys(typeLabels).map(t => (
              <label className={styles.opt} key={t}>
                <input
                  type="checkbox"
                  checked={typeFilters.includes(t)}
                  onChange={() => toggle(t, typeFilters, setTypeFilters)}
                />
                <span>{typeLabels[t]}</span>
                <span className={styles.count}>{countByType(t)}</span>
              </label>
            ))}
          </div>

          {/* Spontaneous CTA */}
          <button className={styles.spontBtn} onClick={() => router.push('/careers/apply')}>
            Can&apos;t find your role?<br />Apply spontaneously →
          </button>

        </aside>

        {/* ══════════════════════════════════
            MAIN LIST
        ══════════════════════════════════ */}
        <main className={styles.main}>

          {/* Top bar */}
          <div className={styles.listBar}>
            <span className={styles.countLbl}>
              {filtered.length} Role{filtered.length !== 1 ? 's' : ''} Found
            </span>
            <div className={styles.sortWrap}>
              <span>Sort by:</span>
              <select
                className={styles.sortSelect}
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                <option value="new">Newest First</option>
                <option value="dept">Department</option>
                <option value="loc">Location</option>
              </select>
            </div>
          </div>

          {/* Job cards */}
          {filtered.length > 0 ? (
            <div className={styles.list}>
              {filtered.map(j => (
                <div
                  className={styles.jobCard}
                  key={j.id}
                  onClick={() => setActiveJob(j)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setActiveJob(j)}
                >
                  {/* Left */}
                  <div className={styles.jobLeft}>
                    <div className={styles.jobIconWrap}>
                      <DeptIcon dept={j.dept} />
                    </div>
                    <div className={styles.jobInfo}>
                      <div className={styles.jobTopRow}>
                        <span className={styles.deptLabel}>{deptLabels[j.dept]}</span>
                        {j.featured && <span className={styles.featuredTag}>Featured</span>}
                        <span className={styles.typeTag}>{typeLabels[j.type]}</span>
                      </div>
                      <h3 className={styles.jobTitle}>{j.title}</h3>
                      <div className={styles.jobMeta}>
                        <span className={styles.metaItem}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          {locationLabels[j.location]}
                        </span>
                        <span className={styles.metaDot}>·</span>
                        <span className={styles.metaItem}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2"/>
                            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                          </svg>
                          {typeLabels[j.type]}
                        </span>
                        <span className={styles.metaDot}>·</span>
                        <span className={styles.metaItem}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          {j.exp} experience
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className={styles.jobRight}>
                    <span className={styles.postedAgo}>{timeAgo(j.posted)}</span>
                    <button
                      className={styles.applyBtn}
                      onClick={e => { e.stopPropagation(); goApply(j.id); }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#c8d0e0" strokeWidth="1.5">
                <circle cx="20" cy="20" r="16"/>
                <path d="M14 20h12M20 14v12"/>
              </svg>
              <p>
                No roles match your filters.{' '}
                <button className={styles.clearLink} onClick={clearAll}>
                  Clear all filters
                </button>{' '}
                or apply spontaneously.
              </p>
            </div>
          )}

        </main>
      </div>

      {/* ══════════════════════════════════
          JOB DETAIL DRAWER
      ══════════════════════════════════ */}
      {activeJob && (
        <div
          className={styles.overlay}
          onClick={() => setActiveJob(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Job details: ${activeJob.title}`}
        >
          <div
            className={styles.drawer}
            onClick={e => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className={styles.drawerHead}>
              <div>
                <p className={styles.drawerDept}>{deptLabels[activeJob.dept]}</p>
                <h2 className={styles.drawerTitle}>{activeJob.title}</h2>
                <div className={styles.drawerMeta}>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {locationLabels[activeJob.location]}
                  </span>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2"/>
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                    </svg>
                    {typeLabels[activeJob.type]}
                  </span>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {activeJob.exp} experience
                  </span>
                </div>
              </div>
              <button
                className={styles.closeX}
                onClick={() => setActiveJob(null)}
                aria-label="Close job details"
              >
                ✕
              </button>
            </div>

            {/* Drawer body — scrollable */}
            <div className={styles.drawerBody}>

              <DrawerSection title="About the Role">
                <p className={styles.drawerText}>{activeJob.about}</p>
              </DrawerSection>

              <DrawerSection title="Key Responsibilities">
                <ul className={styles.drawerList}>
                  {activeJob.responsibilities.map((r, i) => (
                    <li key={i}>
                      <span className={styles.arrow}>→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </DrawerSection>

              <DrawerSection title="What We're Looking For">
                <ul className={styles.drawerList}>
                  {activeJob.requirements.map((r, i) => (
                    <li key={i}>
                      <span className={styles.arrow}>→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </DrawerSection>

              <DrawerSection title="What We Offer">
                <ul className={styles.drawerList}>
                  {activeJob.offer.map((o, i) => (
                    <li key={i}>
                      <span className={styles.arrow}>→</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </DrawerSection>

            </div>

            {/* Drawer footer */}
            <div className={styles.drawerFoot}>
              <button
                className={styles.drawerApply}
                onClick={() => goApply(activeJob.id)}
              >
                Apply for This Role →
              </button>
              <button
                className={styles.drawerClose}
                onClick={() => setActiveJob(null)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

/* ── Sub-component ── */
function DrawerSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.drawerSection}>
      <h4 className={styles.drawerSectionTitle}>{title}</h4>
      <div className={styles.drawerDivider} />
      {children}
    </div>
  );
}