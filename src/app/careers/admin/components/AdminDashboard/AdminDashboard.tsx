'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { supabase } from '../../../../../../lib/supabase';
import styles from './AdminDashboard.module.css';

/* ── Types ── */
interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience_required: string;
  deadline: string | null;
  overview: string;
  responsibilities: string;
  requirements: string;
  offer: string;
  featured: boolean;
  status: 'active' | 'paused' | 'closed';
  created_at: string;
}

interface Application {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  job_title: string;
  job_dept: string;
  area_of_interest: string;
  employment_type: string;
  experience: string;
  current_title: string;
  current_employer: string;
  cover_letter: string;
  cv_path: string | null;
  status: string;
}

const DEPTS = [
  'Strategy & Growth',
  'Management Consulting',
  'Corporate Services',
  'Technology',
  'Company Formation',
  'Operations & Support',
];

function timeAgo(dateStr: string) {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (diff === 0) return 'Just now';
  if (diff === 1) return '1 day ago';
  if (diff < 7) return `${diff} days ago`;
  if (diff < 14) return '1 week ago';
  if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
  return `${Math.floor(diff / 30)} months ago`;
}

const BLANK_JOB = {
  title: '', department: '', location: '', employment_type: 'Full-time',
  experience_required: '', deadline: '', overview: '',
  responsibilities: '', requirements: '', offer: '', featured: false,
};

/* ── Seed data — remove once Supabase is live ── */
const SEED_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Strategy Associate',
    department: 'Strategy & Growth',
    location: 'Dubai, UAE',
    employment_type: 'Full-time',
    experience_required: '4–7 years',
    deadline: null,
    featured: true,
    status: 'active',
    created_at: '2025-01-10T00:00:00Z',
    overview: "Join our strategy practice working directly with Partners on high-stakes client mandates across market entry, growth strategy, and business transformation for the GCC's most ambitious companies.",
    responsibilities:
      'Lead client workstreams from scoping through to final delivery\nManage and mentor Analysts across project engagements\nDevelop financial models, market analyses, and strategic frameworks\nBuild and maintain senior client relationships independently\nContribute to client proposals and business development initiatives',
    requirements:
      '4–7 years in strategy consulting, investment banking, or corporate strategy\nProven track record leading complex analytical workstreams\nStrong PowerPoint storytelling and Excel modelling skills\nGCC market experience strongly preferred\nArabic language skills an advantage',
    offer:
      'Competitive salary with annual performance bonus\nAED 8,000 personal learning & development budget\nGold-tier health insurance for you and your dependents\nPartner mentorship programme from day one\nHybrid and flexible working arrangements\nAnnual full-team international retreat',
  },
  {
    id: '2',
    title: 'Strategy Analyst — GCC Market Entry',
    department: 'Strategy & Growth',
    location: 'Dubai, UAE',
    employment_type: 'Full-time',
    experience_required: '0–2 years',
    deadline: null,
    featured: false,
    status: 'active',
    created_at: '2025-01-08T00:00:00Z',
    overview:
      'Support market entry mandates for international and regional clients targeting the GCC. Work alongside Senior Associates and Partners on research, modelling, and client presentations.',
    responsibilities:
      'Conduct primary and secondary market research\nBuild financial and scenario models in Excel\nPrepare client-ready PowerPoint presentations\nSupport due diligence and competitive analysis\nCoordinate with third-party vendors and data providers',
    requirements:
      '0–2 years in consulting, finance, or a strategy-adjacent role\nStrong analytical and quantitative skills\nProficiency in Excel and PowerPoint\nCuriosity and desire to learn in a fast-paced environment\nBachelor\'s degree from a leading university',
    offer:
      'Structured analyst training programme\nAED 5,000 personal learning & development budget\nHealth insurance for you and one dependent\nClear promotion pathway to Associate within 18 months\nHybrid working arrangements',
  },
  {
    id: '3',
    title: 'Associate Director — Business Transformation',
    department: 'Management Consulting',
    location: 'Dubai, UAE',
    employment_type: 'Full-time',
    experience_required: '7–12 years',
    deadline: null,
    featured: true,
    status: 'active',
    created_at: '2025-01-06T00:00:00Z',
    overview:
      'Lead large-scale business transformation mandates for government and private sector clients across the GCC. Drive operational excellence, change management, and digital enablement programmes.',
    responsibilities:
      'Own client engagement delivery from initiation to sign-off\nLead teams of 3–6 consultants across complex programmes\nDevelop and present executive-level recommendations to C-suite\nOversee business development and proposal efforts\nBuild long-term client relationships and identify expansion opportunities',
    requirements:
      '7–12 years in management consulting or corporate transformation\nExperience leading large, cross-functional teams\nProven track record in GCC public or private sector projects\nExceptional stakeholder management and communication skills\nMBA or equivalent advanced degree preferred',
    offer:
      'Market-leading compensation with equity participation\nAED 15,000 personal development budget\nPlatinum health insurance for entire family\nSeat at the leadership table with direct Partner access\nAnnual international leadership offsite',
  },
  {
    id: '4',
    title: 'Family Business Advisory Associate',
    department: 'Management Consulting',
    location: 'Dubai, UAE',
    employment_type: 'Full-time',
    experience_required: '2–5 years',
    deadline: null,
    featured: false,
    status: 'active',
    created_at: '2025-01-05T00:00:00Z',
    overview:
      'Work with established GCC family businesses on succession planning, governance frameworks, and professionalisation mandates. A highly specialised and relationship-driven practice.',
    responsibilities:
      'Conduct family business diagnostics and governance assessments\nDevelop tailored succession and ownership transition frameworks\nFacilitate family council workshops and governance meetings\nPrepare advisory reports and board-level presentations\nSupport relationship management with ultra-high-net-worth families',
    requirements:
      '2–5 years in advisory, family office, or wealth management\nUnderstanding of GCC family business dynamics\nStrong interpersonal skills and cultural sensitivity\nArabic language skills highly advantageous\nDiscretion and professional maturity in handling sensitive mandates',
    offer:
      'Unique access to GCC family business network\nAED 7,000 personal learning & development budget\nComprehensive health insurance\nFlexible working model\nAnnual bonus based on client outcomes',
  },
  {
    id: '5',
    title: 'Corporate Services Manager',
    department: 'Corporate Services',
    location: 'Dubai, UAE',
    employment_type: 'Full-time',
    experience_required: '3–6 years',
    deadline: null,
    featured: false,
    status: 'active',
    created_at: '2025-01-04T00:00:00Z',
    overview:
      'Manage the end-to-end delivery of corporate services for our client portfolio, including company formation, PRO services, and regulatory compliance across UAE free zones and mainland.',
    responsibilities:
      'Manage company formation and licensing processes\nOversee PRO and government relations activities\nCoordinate visa and residency applications for clients\nMaintain compliance calendars and renewal schedules\nLiaise with free zone authorities and government entities',
    requirements:
      '3–6 years in corporate services, PRO, or company formation\nDeep knowledge of UAE free zones and mainland setup requirements\nStrong government relations network\nProficiency in Arabic a significant advantage\nDetail-oriented with strong organisational skills',
    offer:
      'Competitive base salary\nAED 4,000 personal development budget\nHealth insurance\nStable and structured working environment\nOpportunity for senior team leadership',
  },
  {
    id: '6',
    title: 'Accountant',
    department: 'Corporate Services',
    location: 'Dubai, UAE',
    employment_type: 'Part-time',
    experience_required: '2–4 years',
    deadline: null,
    featured: false,
    status: 'active',
    created_at: '2025-01-03T00:00:00Z',
    overview:
      'Support the finance function with bookkeeping, VAT filing, and month-end close activities across a small portfolio of client entities. Ideal for an experienced accountant seeking flexible hours.',
    responsibilities:
      'Maintain accurate books across multiple client entities\nPrepare and file quarterly VAT returns with the FTA\nPerform monthly bank reconciliations\nSupport year-end audit preparation\nIssue client invoices and manage accounts receivable',
    requirements:
      '2–4 years in accounting or bookkeeping\nExperience with UAE VAT regulations\nProficiency in QuickBooks or Xero\nACCA, CPA, or equivalent qualification preferred\nHigh attention to detail and reliability',
    offer:
      'Flexible part-time hours (20–25 hrs/week)\nCompetitive hourly rate\nRemote-friendly arrangement\nOpportunity to transition to full-time',
  },
  {
    id: '7',
    title: 'Technology Analyst',
    department: 'Technology',
    location: 'Dubai, UAE',
    employment_type: 'Full-time',
    experience_required: '1–3 years',
    deadline: null,
    featured: false,
    status: 'active',
    created_at: '2025-01-02T00:00:00Z',
    overview:
      'Join our growing technology practice supporting digital transformation mandates for GCC clients. Work on technology strategy, vendor selection, and implementation oversight assignments.',
    responsibilities:
      'Support technology assessment and due diligence projects\nResearch and evaluate enterprise software and platform vendors\nAssist with IT strategy and roadmap development\nDocument business requirements and process flows\nCoordinate with client IT teams during implementation phases',
    requirements:
      '1–3 years in technology consulting or IT advisory\nUnderstanding of ERP, CRM, and cloud platforms\nStrong analytical and problem-solving skills\nExcellent written and verbal communication\nComputer science, IT, or engineering background preferred',
    offer:
      'Exposure to cutting-edge digital transformation projects\nAED 6,000 learning & development budget\nHealth insurance\nFlexible hybrid working\nFast-track career progression',
  },
  {
    id: '8',
    title: 'Company Formation Specialist',
    department: 'Company Formation',
    location: 'Riyadh, KSA',
    employment_type: 'Full-time',
    experience_required: '2–5 years',
    deadline: null,
    featured: false,
    status: 'active',
    created_at: '2025-01-01T00:00:00Z',
    overview:
      'Lead company setup and registration mandates for international and regional clients entering the Saudi market. Work across multiple legal structures and regulatory frameworks.',
    responsibilities:
      'Advise clients on optimal legal structures for KSA market entry\nManage end-to-end company registration with MISA and MOC\nCoordinate with notaries, chambers, and government portals\nPrepare and review all corporate documentation\nSupport post-formation compliance and ongoing corporate secretarial needs',
    requirements:
      '2–5 years in company formation or corporate services in KSA\nStrong knowledge of MISA, MOC, and Saudi regulatory frameworks\nArabic fluency essential\nProficiency with Maroof, Qiwa, and related government platforms\nHighly organised with excellent follow-through',
    offer:
      'Competitive KSA salary package\nHousing and transportation allowances\nAnnual flight allowance\nHealth insurance\nStrong growth opportunity as KSA practice expands',
  },
];

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function AdminDashboard() {
  const [tab,           setTab]           = useState<'jobs' | 'applications'>('jobs');
  const [jobs,          setJobs]          = useState<Job[]>(SEED_JOBS);
  const [applications,  setApplications]  = useState<Application[]>([]);
  const [loading,       setLoading]       = useState(true);
  const [modalOpen,     setModalOpen]     = useState(false);
  const [editJob,       setEditJob]       = useState<Job | null>(null);
  const [form,          setForm]          = useState(BLANK_JOB);
  const [saving,        setSaving]        = useState(false);
  const [formErr,       setFormErr]       = useState('');
  const [selectedApp,   setSelectedApp]   = useState<Application | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  /* ── Load data ── */
  const loadJobs = useCallback(async () => {
    const { data, error } = await supabase
      .from('job_listings')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error('loadJobs error:', error.message);
    // Only override seed data if Supabase returns real rows
    if (data && data.length > 0) setJobs(data);
  }, []);

  const loadApplications = useCallback(async () => {
    const { data, error } = await supabase
      .from('job_applications')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error('loadApplications error:', error.message);
    if (data) setApplications(data);
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await Promise.all([loadJobs(), loadApplications()]);
      setLoading(false);
    })();
  }, [loadJobs, loadApplications]);

  /* ── KPIs ── */
  const activeJobs = jobs.filter(j => j.status === 'active').length;
  const totalApps  = applications.length;
  const avgDays    = 5;
  const acceptance = 92;

  /* ── Open modal ── */
  const openCreate = () => {
    setEditJob(null);
    setForm(BLANK_JOB);
    setFormErr('');
    setModalOpen(true);
  };

  const openEdit = (job: Job) => {
    setEditJob(job);
    setForm({
      title:               job.title,
      department:          job.department,
      location:            job.location,
      employment_type:     job.employment_type,
      experience_required: job.experience_required ?? '',
      deadline:            job.deadline ?? '',
      overview:            job.overview ?? '',
      responsibilities:    job.responsibilities ?? '',
      requirements:        job.requirements ?? '',
      offer:               job.offer ?? '',
      featured:            job.featured ?? false,
    });
    setFormErr('');
    setModalOpen(true);
  };

  /* ── Save job — with error handling ── */
  const saveJob = async () => {
    if (!form.title.trim() || !form.department || !form.location.trim() || !form.overview.trim()) {
      setFormErr('Please fill in all required fields (Title, Department, Location, Overview).');
      return;
    }
    setSaving(true);
    setFormErr('');

    const payload = {
      title:               form.title.trim(),
      department:          form.department,
      location:            form.location.trim(),
      employment_type:     form.employment_type,
      experience_required: form.experience_required.trim(),
      deadline:            form.deadline || null,
      overview:            form.overview.trim(),
      responsibilities:    form.responsibilities.trim(),
      requirements:        form.requirements.trim(),
      offer:               form.offer.trim(),
      featured:            form.featured,
      status:              'active' as const,
    };

    let dbError = null;

    if (editJob) {
      const { error } = await supabase
        .from('job_listings')
        .update(payload)
        .eq('id', editJob.id);
      dbError = error;
    } else {
      const { error } = await supabase
        .from('job_listings')
        .insert(payload);
      dbError = error;
    }

    if (dbError) {
      setFormErr(`Save failed: ${dbError.message}`);
      setSaving(false);
      return;
    }

    await loadJobs();
    setSaving(false);
    setModalOpen(false);
  };

  /* ── Toggle status ── */
  const toggleStatus = async (job: Job) => {
    // If it's a seed job (string id like '1'), mutate local state only
    if (!job.id.includes('-')) {
      setJobs(prev =>
        prev.map(j => j.id === job.id
          ? { ...j, status: j.status === 'active' ? 'paused' : 'active' }
          : j
        )
      );
      return;
    }
    const next = job.status === 'active' ? 'paused' : 'active';
    const { error } = await supabase
      .from('job_listings')
      .update({ status: next })
      .eq('id', job.id);
    if (error) console.error('toggleStatus error:', error.message);
    await loadJobs();
  };

  /* ── Delete job ── */
  const deleteJob = async (id: string) => {
    // If it's a seed job, remove from local state only
    if (!id.includes('-')) {
      setJobs(prev => prev.filter(j => j.id !== id));
      setDeleteConfirm(null);
      return;
    }
    const { error } = await supabase
      .from('job_listings')
      .delete()
      .eq('id', id);
    if (error) console.error('deleteJob error:', error.message);
    setDeleteConfirm(null);
    await loadJobs();
  };

  /* ── Update application status ── */
  const updateAppStatus = async (id: string, status: string) => {
    await supabase.from('job_applications').update({ status }).eq('id', id);
    await loadApplications();
    if (selectedApp?.id === id) setSelectedApp(prev => prev ? { ...prev, status } : null);
  };

  const f = (k: keyof typeof BLANK_JOB, v: string | boolean) =>
    setForm(prev => ({ ...prev, [k]: v }));

  if (loading) {
    return (
      <div className={styles.loadWrap}>
        <div className={styles.spinner} />
        <p>Loading admin panel…</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>

      {/* ══ TOPBAR ══ */}
      <header className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-label="D&B logo">
            <rect width="32" height="32" rx="4" fill="#c4993a"/>
            <path d="M8 8h7c4.5 0 7.5 3 7.5 8s-3 8-7.5 8H8V8z" fill="#fff"/>
            <rect x="10" y="11" width="4" height="10" fill="#c4993a"/>
          </svg>
          <span className={styles.topbarTitle}>Careers Admin Panel — Dillon &amp; Bird</span>
        </div>
        <div className={styles.topbarRight}>
          <button className={styles.btnGold} onClick={openCreate}>+ Post New Job</button>
          <Link href="/careers" className={styles.btnOutline}>← Job Board</Link>
        </div>
      </header>

      <div className={styles.body}>

        {/* ══ KPI CARDS ══ */}
        <div className={styles.kpis}>
          {[
            { n: activeJobs,        label: 'Active Listings'      },
            { n: totalApps,         label: 'Applications'          },
            { n: `${avgDays}`,      label: 'Avg. Days to Respond'  },
            { n: `${acceptance}%`,  label: 'Offer Acceptance'      },
          ].map((k, i) => (
            <div className={styles.kpiCard} key={i}>
              <div className={styles.kpiN}>{k.n}</div>
              <div className={styles.kpiL}>{k.label}</div>
            </div>
          ))}
        </div>

        {/* ══ TABS ══ */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'jobs' ? styles.tabActive : ''}`}
            onClick={() => setTab('jobs')}
          >
            Job Listings
          </button>
          <button
            className={`${styles.tab} ${tab === 'applications' ? styles.tabActive : ''}`}
            onClick={() => setTab('applications')}
          >
            Applications ({totalApps})
          </button>
        </div>

        {/* ══ JOB LISTINGS TABLE ══ */}
        {tab === 'jobs' && (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Posted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.length === 0 && (
                  <tr>
                    <td colSpan={7} className={styles.emptyRow}>
                      No job listings yet. Click &quot;+ Post New Job&quot; to add one.
                    </td>
                  </tr>
                )}
                {jobs.map(j => (
                  <tr key={j.id}>
                    <td className={styles.titleCell}>
                      <span className={styles.jobName}>{j.title}</span>
                      {j.featured && <span className={styles.featBadge}>Featured</span>}
                    </td>
                    <td>{j.department}</td>
                    <td>{j.location}</td>
                    <td>{j.employment_type}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[`status_${j.status}`]}`}>
                        {j.status.toUpperCase()}
                      </span>
                    </td>
                    <td className={styles.postedCell}>{timeAgo(j.created_at)}</td>
                    <td>
                      <div className={styles.actions}>
                        <button className={styles.actEdit}   onClick={() => openEdit(j)}>Edit</button>
                        <button className={styles.actPause}  onClick={() => toggleStatus(j)}>
                          {j.status === 'active' ? 'Pause' : 'Activate'}
                        </button>
                        <button className={styles.actDelete} onClick={() => setDeleteConfirm(j.id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ══ APPLICATIONS TABLE ══ */}
        {tab === 'applications' && (
          <div className={styles.tableWrap}>
            {applications.length === 0 ? (
              <div className={styles.emptyApps}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#c8d0e0" strokeWidth="1.5">
                  <circle cx="20" cy="20" r="16"/>
                  <path d="M14 20h12M20 14v12"/>
                </svg>
                <p>No applications received yet.</p>
              </div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Applicant</th>
                    <th>Role Applied</th>
                    <th>Experience</th>
                    <th>Current Role</th>
                    <th>Status</th>
                    <th>Received</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map(a => (
                    <tr key={a.id} className={styles.appRow} onClick={() => setSelectedApp(a)}>
                      <td>
                        <div className={styles.applicantName}>{a.first_name} {a.last_name}</div>
                        <div className={styles.applicantEmail}>{a.email}</div>
                      </td>
                      <td>{a.job_title || a.area_of_interest || '—'}</td>
                      <td>{a.experience || '—'}</td>
                      <td>{a.current_title ? `${a.current_title}${a.current_employer ? `, ${a.current_employer}` : ''}` : '—'}</td>
                      <td>
                        <select
                          className={styles.statusSelect}
                          value={a.status}
                          onClick={e => e.stopPropagation()}
                          onChange={e => updateAppStatus(a.id, e.target.value)}
                        >
                          <option value="received">Received</option>
                          <option value="reviewing">Reviewing</option>
                          <option value="shortlisted">Shortlisted</option>
                          <option value="interview">Interview</option>
                          <option value="offered">Offered</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td className={styles.postedCell}>{timeAgo(a.created_at)}</td>
                      <td>
                        <button
                          className={styles.actEdit}
                          onClick={e => { e.stopPropagation(); setSelectedApp(a); }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {/* ══ POST / EDIT JOB MODAL ══ */}
      {modalOpen && (
        <div className={styles.overlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHead}>
              <h2>{editJob ? 'Edit Job Listing' : 'Post New Job Listing'}</h2>
              <button className={styles.modalClose} onClick={() => setModalOpen(false)}>✕</button>
            </div>
            <div className={styles.modalBody}>

              <div className={styles.row2}>
                <MField label="Job Title" req>
                  <input className={styles.fi} value={form.title}
                    onChange={e => f('title', e.target.value)}
                    placeholder="e.g. Senior Strategy Associate" />
                </MField>
                <MField label="Department" req>
                  <select className={styles.fi} value={form.department}
                    onChange={e => f('department', e.target.value)}>
                    <option value="">Select…</option>
                    {DEPTS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </MField>
              </div>

              <div className={styles.row2}>
                <MField label="Location" req>
                  <input className={styles.fi} value={form.location}
                    onChange={e => f('location', e.target.value)}
                    placeholder="e.g. Dubai, UAE" />
                </MField>
                <MField label="Employment Type">
                  <select className={styles.fi} value={form.employment_type}
                    onChange={e => f('employment_type', e.target.value)}>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </MField>
              </div>

              <div className={styles.row2}>
                <MField label="Experience Required">
                  <input className={styles.fi} value={form.experience_required}
                    onChange={e => f('experience_required', e.target.value)}
                    placeholder="e.g. 4–7 years" />
                </MField>
                <MField label="Application Deadline">
                  <input className={styles.fi} type="date" value={form.deadline ?? ''}
                    onChange={e => f('deadline', e.target.value)} />
                </MField>
              </div>

              <MField label="Role Overview" req>
                <textarea className={styles.fta} rows={4} value={form.overview}
                  onChange={e => f('overview', e.target.value)}
                  placeholder="Describe the role, its purpose, and why it exists at D&B…" />
              </MField>

              <MField label="Key Responsibilities (one per line)">
                <textarea className={styles.fta} rows={4} value={form.responsibilities}
                  onChange={e => f('responsibilities', e.target.value)}
                  placeholder={'Lead client engagements from scoping to delivery\nManage analyst team on deliverables\nBuild senior client relationships…'} />
              </MField>

              <MField label="Requirements (one per line)">
                <textarea className={styles.fta} rows={4} value={form.requirements}
                  onChange={e => f('requirements', e.target.value)}
                  placeholder={'4–7 years consulting experience\nStrong Excel & PowerPoint skills\nGCC market knowledge…'} />
              </MField>

              <MField label="What We Offer (one per line)">
                <textarea className={styles.fta} rows={3} value={form.offer}
                  onChange={e => f('offer', e.target.value)}
                  placeholder={'Competitive salary + bonus\nAED 8,000 L&D budget\nGold-tier health insurance…'} />
              </MField>

              <label className={styles.checkRow}>
                <input type="checkbox" checked={form.featured}
                  onChange={e => f('featured', e.target.checked)} />
                <span>Mark as Featured listing</span>
              </label>

              {formErr && <p className={styles.formErr}>{formErr}</p>}
            </div>

            <div className={styles.modalFoot}>
              <button className={styles.btnCancel} onClick={() => setModalOpen(false)}>Cancel</button>
              <button className={styles.btnSave} onClick={saveJob} disabled={saving}>
                {saving ? 'Saving…' : '✓ Save Listing'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ APPLICATION DETAIL MODAL ══ */}
      {selectedApp && (
        <div className={styles.overlay} onClick={() => setSelectedApp(null)}>
          <div className={styles.appModal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHead}>
              <h2>{selectedApp.first_name} {selectedApp.last_name}</h2>
              <button className={styles.modalClose} onClick={() => setSelectedApp(null)}>✕</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.appMeta}>
                <span>{selectedApp.email}</span>
                <span>·</span>
                <span>{selectedApp.phone}</span>
              </div>
              <div className={styles.appGrid}>
                {([
                  ['Role Applied',     selectedApp.job_title || selectedApp.area_of_interest],
                  ['Experience',       selectedApp.experience],
                  ['Current Title',    selectedApp.current_title],
                  ['Current Employer', selectedApp.current_employer],
                  ['Employment Type',  selectedApp.employment_type],
                  ['Received',         timeAgo(selectedApp.created_at)],
                ] as [string, string][]).filter(([, v]) => v).map(([l, v]) => (
                  <div key={l} className={styles.appField}>
                    <span className={styles.appFieldLabel}>{l}</span>
                    <span className={styles.appFieldVal}>{v}</span>
                  </div>
                ))}
              </div>

              {selectedApp.cover_letter && (
                <div className={styles.appSection}>
                  <p className={styles.appSectionTitle}>Cover Letter</p>
                  <p className={styles.appCover}>{selectedApp.cover_letter}</p>
                </div>
              )}

              {selectedApp.cv_path && (
                <div className={styles.appSection}>
                  <p className={styles.appSectionTitle}>CV / Documents</p>
                  <p className={styles.cvNote}>
                    CV stored at: <code>{selectedApp.cv_path}</code><br />
                    <small>Download via Supabase Storage dashboard or signed URL.</small>
                  </p>
                </div>
              )}

              <div className={styles.appSection}>
                <p className={styles.appSectionTitle}>Update Status</p>
                <div className={styles.statusBtns}>
                  {['received','reviewing','shortlisted','interview','offered','rejected'].map(s => (
                    <button
                      key={s}
                      className={`${styles.statusBtn} ${selectedApp.status === s ? styles.statusBtnActive : ''}`}
                      onClick={() => updateAppStatus(selectedApp.id, s)}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.modalFoot}>
              <button className={styles.btnCancel} onClick={() => setSelectedApp(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ══ DELETE CONFIRM ══ */}
      {deleteConfirm && (
        <div className={styles.overlay} onClick={() => setDeleteConfirm(null)}>
          <div className={styles.confirmModal} onClick={e => e.stopPropagation()}>
            <h3>Delete this listing?</h3>
            <p>This action cannot be undone. The job listing will be permanently removed.</p>
            <div className={styles.confirmActs}>
              <button className={styles.btnCancel} onClick={() => setDeleteConfirm(null)}>Cancel</button>
              <button className={styles.btnDelete} onClick={() => deleteJob(deleteConfirm)}>Yes, Delete</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/* ── Field wrapper ── */
function MField({ label, req, children }: { label: string; req?: boolean; children: React.ReactNode }) {
  return (
    <div className={styles.mfield}>
      <label className={styles.mlabel}>
        {label.toUpperCase()} {req && <span style={{ color: '#c4993a' }}>*</span>}
      </label>
      {children}
    </div>
  );
}