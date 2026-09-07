'use client';
import { useState, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from './ApplyForm.module.css';
import { supabase } from '../../../../../../lib/supabase';
import TurnstileWidget from '../../../../../components/Turnstile/TurnstileWidget';

const SUPABASE_FUNCTION_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/functions/v1/send-email';

/* Team inbox for new applications, matching the other site forms */
const TEAM_RECIPIENTS = [
  'dinesh@dillonbird.com',
  'praveen@dillonbird.com',
  'senthil@dillonbird.com',
];

/* CV download links in the team email stay valid for 7 days */
const CV_LINK_TTL_SECONDS = 60 * 60 * 24 * 7;

const MAX_CV_BYTES = 10 * 1024 * 1024;
const MAX_PORTFOLIO_BYTES = 25 * 1024 * 1024;

const sendEmail = async (to: string[], subject: string, html: string, turnstileToken: string) => {
  await fetch(SUPABASE_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to, subject, html, turnstileToken }),
  });
};

/* Escape user-supplied values before they go into email HTML */
const esc = (v: string | null | undefined) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/* ── Job data ── */
const jobs: Record<number, { title: string; dept: string; location: string }> = {
  1: { title: 'Senior Strategy Associate',                    dept: 'Strategy & Growth',      location: 'Dubai, UAE'  },
  2: { title: 'Strategy Analyst — GCC Market Entry',          dept: 'Strategy & Growth',      location: 'Dubai, UAE'  },
  3: { title: 'Associate Director — Business Transformation', dept: 'Management Consulting',  location: 'Dubai, UAE'  },
  4: { title: 'Family Business Advisory Associate',           dept: 'Management Consulting',  location: 'Dubai, UAE'  },
  5: { title: 'Corporate Services Manager',                   dept: 'Corporate Services',     location: 'Dubai, UAE'  },
  6: { title: 'Accountant',                                   dept: 'Corporate Services',     location: 'Dubai, UAE'  },
  7: { title: 'Technology Analyst',                           dept: 'Technology',             location: 'Dubai, UAE'  },
  8: { title: 'Company Formation Specialist',                 dept: 'Company Formation',      location: 'Riyadh, KSA' },
};

const STEPS = ['Personal', 'Experience', 'Upload CV', 'Review'];

/* ── Form state type ── */
interface FormData {
  firstName: string; lastName: string; email: string; phone: string;
  location: string; nationality: string; linkedin: string; website: string;
  areaOfInterest: string; employmentType: string; preferredLocation: string; startDate: string;
  currentTitle: string; currentEmployer: string; experience: string; education: string;
  skills: string; languages: string; coverLetter: string; source: string; referral: string;
  cvFile: File | null; portfolioFile: File | null;
  consent1: boolean; consent2: boolean; consent3: boolean;
}

const INIT: FormData = {
  firstName: '', lastName: '', email: '', phone: '',
  location: '', nationality: '', linkedin: '', website: '',
  areaOfInterest: '', employmentType: 'full-time', preferredLocation: '', startDate: '',
  currentTitle: '', currentEmployer: '', experience: '', education: '',
  skills: '', languages: '', coverLetter: '', source: '', referral: '',
  cvFile: null, portfolioFile: null,
  consent1: false, consent2: false, consent3: false,
};

function fmtSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

export default function ApplyForm() {
  const params  = useSearchParams();
  const router  = useRouter();
  const jobId   = Number(params.get('jobId') ?? 0);
  const job     = jobs[jobId] ?? { title: 'Spontaneous / Open Application', dept: 'Dillon & Bird', location: 'Dubai, UAE' };

  const [step,        setStep]        = useState(1);
  const [done,        setDone]        = useState(false);
  const [form,        setForm]        = useState<FormData>(INIT);
  const [errors,      setErrors]      = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting,  setSubmitting]  = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileError, setTurnstileError] = useState(false);

  const cvRef = useRef<HTMLInputElement>(null);
  const pfRef = useRef<HTMLInputElement>(null);

  const set = (k: keyof FormData, v: unknown) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => { const n = { ...e }; delete n[k]; return n; });
  };

  /* ── Validation ── */
  const validate = (s: number): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 1) {
      if (!form.firstName.trim())    e.firstName      = 'Required';
      if (!form.lastName.trim())     e.lastName       = 'Required';
      if (!form.email.includes('@')) e.email          = 'Valid email required';
      if (!form.phone.trim())        e.phone          = 'Required';
      if (!form.areaOfInterest)      e.areaOfInterest = 'Select an area of interest';
    }
    if (s === 2) {
      if (!form.currentTitle.trim())    e.currentTitle    = 'Required';
      if (!form.currentEmployer.trim()) e.currentEmployer = 'Required';
      if (!form.experience)             e.experience      = 'Required';
      if (!form.coverLetter.trim() || form.coverLetter.length < 100)
        e.coverLetter = 'Please write at least 100 characters';
    }
    if (s === 3) {
      if (!form.cvFile)    e.cvFile   = 'Please upload your CV';
      if (!form.consent1)  e.consent1 = 'Required';
      if (!form.consent2)  e.consent2 = 'Required';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goStep = (n: number) => {
    if (n > step && !validate(step)) return;
    setStep(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Submit to Supabase ── */
  const submit = async () => {
    if (!validate(3)) return;

    if (!turnstileToken) { setTurnstileError(true); return; }
    setTurnstileError(false);

    setSubmitting(true);
    setSubmitError(null);

    try {
      /* Upload CV */
      let cvPath: string | null = null;
      if (form.cvFile) {
        const ext      = form.cvFile.name.split('.').pop();
        const filename = `cv_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: cvErr } = await supabase.storage
          .from('applications')
          .upload(`cvs/${filename}`, form.cvFile);
        if (cvErr) throw new Error(`CV upload failed: ${cvErr.message}`);
        cvPath = `cvs/${filename}`;
      }

      /* Upload Portfolio (optional) */
      let portfolioPath: string | null = null;
      if (form.portfolioFile) {
        const ext      = form.portfolioFile.name.split('.').pop();
        const filename = `pf_${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: pfErr } = await supabase.storage
          .from('applications')
          .upload(`portfolios/${filename}`, form.portfolioFile);
        if (pfErr) throw new Error(`Portfolio upload failed: ${pfErr.message}`);
        portfolioPath = `portfolios/${filename}`;
      }

      /* Insert application row */
      const { error: dbErr } = await supabase
        .from('job_applications')
        .insert({
          job_id:             jobId || null,
          job_title:          job.title,
          job_dept:           job.dept,
          job_location:       job.location,
          first_name:         form.firstName,
          last_name:          form.lastName,
          email:              form.email,
          phone:              form.phone,
          current_location:   form.location,
          nationality:        form.nationality,
          linkedin:           form.linkedin,
          website:            form.website,
          area_of_interest:   form.areaOfInterest,
          employment_type:    form.employmentType,
          preferred_location: form.preferredLocation,
          start_date:         form.startDate || null,
          current_title:      form.currentTitle,
          current_employer:   form.currentEmployer,
          experience:         form.experience,
          education:          form.education,
          skills:             form.skills,
          languages:          form.languages,
          cover_letter:       form.coverLetter,
          source:             form.source,
          referral:           form.referral,
          cv_path:            cvPath,
          portfolio_path:     portfolioPath,
          consent_data:       form.consent1,
          consent_accuracy:   form.consent2,
          consent_marketing:  form.consent3,
          status:             'received',
        });

      if (dbErr) throw new Error(`Submission failed: ${dbErr.message}`);

      /* The application is now saved. Everything below is best effort:
         a failed email must never lose a submission the candidate made. */
      try {
        let cvLink = '';
        if (cvPath) {
          const { data: signed } = await supabase.storage
            .from('applications')
            .createSignedUrl(cvPath, CV_LINK_TTL_SECONDS);
          if (signed?.signedUrl) cvLink = signed.signedUrl;
        }

        const applicant = `${form.firstName} ${form.lastName}`.trim();

        const row = (label: string, value: string) => `
          <tr>
            <td style="padding: 8px 0; color: #555; width: 180px; vertical-align: top;">${label}</td>
            <td style="padding: 8px 0; font-weight: 600; color: #111;">${esc(value) || '—'}</td>
          </tr>`;

        const teamHtml = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #2563eb; padding: 24px 32px;">
              <h1 style="color: #fff; margin: 0; font-size: 20px;">New Job Application</h1>
              <p style="color: #dbeafe; margin: 6px 0 0; font-size: 14px;">${esc(job.title)} · ${esc(job.dept)} · ${esc(job.location)}</p>
            </div>
            <div style="padding: 32px; background: #f7f9fc; border: 1px solid #c8d0e0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                ${row('Name', applicant)}
                ${row('Email', form.email)}
                ${row('Phone / WhatsApp', form.phone)}
                ${row('Current Location', form.location)}
                ${row('Nationality', form.nationality)}
                ${row('LinkedIn', form.linkedin)}
                ${row('Area of Interest', form.areaOfInterest)}
                ${row('Employment Type', form.employmentType)}
                ${row('Preferred Location', form.preferredLocation)}
                ${row('Earliest Start Date', form.startDate)}
                ${row('Current Title', form.currentTitle)}
                ${row('Current Employer', form.currentEmployer)}
                ${row('Total Experience', form.experience)}
                ${row('Education', form.education)}
                ${row('Skills', form.skills)}
                ${row('Languages', form.languages)}
                ${row('Source', form.source)}
                ${row('Referral', form.referral)}
                ${row('Marketing Consent', form.consent3 ? 'Yes' : 'No')}
              </table>

              <h2 style="font-size: 15px; color: #111; margin: 28px 0 8px;">Cover Letter</h2>
              <div style="font-size: 14px; color: #333; line-height: 1.7; white-space: pre-wrap; background: #fff; border: 1px solid #e2e8f0; padding: 16px;">${esc(form.coverLetter)}</div>

              ${cvLink
                ? `<p style="margin: 28px 0 0;">
                     <a href="${cvLink}" style="display: inline-block; background: #2563eb; color: #fff; text-decoration: none; padding: 12px 24px; font-weight: 600; font-size: 14px;">Download CV</a>
                   </p>
                   <p style="font-size: 12px; color: #888; margin: 10px 0 0;">This download link expires in 7 days. The file is also in the careers admin dashboard.</p>`
                : `<p style="font-size: 13px; color: #888; margin: 28px 0 0;">No CV file was attached to this application.</p>`}
              ${portfolioPath ? `<p style="font-size: 13px; color: #555; margin: 12px 0 0;">Portfolio uploaded: ${esc(portfolioPath)}</p>` : ''}
            </div>
            <div style="padding: 16px 32px; background: #fff; border: 1px solid #c8d0e0; border-top: none; font-size: 12px; color: #aaa;">
              Dillon &amp; Bird · UAE
            </div>
          </div>`;

        const confirmHtml = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #2563eb; padding: 24px 32px;">
              <h1 style="color: #fff; margin: 0; font-size: 20px;">Thank you, ${esc(form.firstName)}!</h1>
            </div>
            <div style="padding: 32px; background: #f7f9fc; border: 1px solid #c8d0e0;">
              <p style="font-size: 15px; color: #333; line-height: 1.7;">
                We've received your application for <strong>${esc(job.title)}</strong>${job.dept ? ` in ${esc(job.dept)}` : ''}.
              </p>
              <p style="font-size: 15px; color: #333; line-height: 1.7;">
                A member of our talent team will personally review it and respond within
                <strong>5 business days</strong>. If your background fits another opening
                more closely, we may come back to you about that instead.
              </p>
              <p style="font-size: 15px; color: #333; line-height: 1.7;">
                There is nothing further you need to do. If anything changes in the meantime,
                simply reply to this email.
              </p>
              <p style="font-size: 15px; color: #333; margin-top: 24px;">
                Warm regards,<br />
                <strong>The Dillon &amp; Bird Talent Team</strong>
              </p>
            </div>
            <div style="padding: 16px 32px; background: #fff; border: 1px solid #c8d0e0; border-top: none; font-size: 12px; color: #aaa;">
              Dillon &amp; Bird · UAE · <a href="https://dillonbird.com" style="color: #aaa;">dillonbird.com</a>
            </div>
          </div>`;

        await Promise.allSettled([
          sendEmail(
            [form.email],
            `We received your application — ${job.title}`,
            confirmHtml,
            turnstileToken
          ),
          sendEmail(
            TEAM_RECIPIENTS,
            `New Application — ${job.title} — ${applicant}`,
            teamHtml,
            turnstileToken
          ),
        ]);
      } catch (emailErr) {
        console.error('Application saved but notification email failed:', emailErr);
      }

      router.push(`/success?from=careers&role=${encodeURIComponent(job.title)}`);


    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const progress = `${(step / 4) * 100}%`;

  /* ── Review rows ── */
  const reviewRows = [
    { label: 'Full Name',           val: `${form.firstName} ${form.lastName}` },
    { label: 'Email',               val: form.email },
    { label: 'Phone',               val: form.phone },
    { label: 'Location',            val: form.location || '—' },
    { label: 'Nationality',         val: form.nationality || '—' },
    { label: 'LinkedIn',            val: form.linkedin || '—' },
    { label: 'Area of Interest',    val: form.areaOfInterest || '—' },
    { label: 'Employment Type',     val: form.employmentType },
    { label: 'Preferred Location',  val: form.preferredLocation || '—' },
    { label: 'Earliest Start Date', val: form.startDate || '—' },
    { label: 'Current Title',       val: form.currentTitle },
    { label: 'Current Employer',    val: form.currentEmployer },
    { label: 'Experience',          val: form.experience },
    { label: 'Education',           val: form.education || '—' },
    { label: 'Skills',              val: form.skills || '—' },
    { label: 'Languages',           val: form.languages || '—' },
    { label: 'CV',                  val: form.cvFile?.name ?? '—' },
    { label: 'Portfolio',           val: form.portfolioFile?.name ?? 'Not provided' },
    { label: 'Cover Letter',        val: form.coverLetter ? `${form.coverLetter.slice(0, 120)}…` : '—' },
    { label: 'Source',              val: form.source || '—' },
  ];

  const checklistItems = [
    { label: 'Personal information complete',  ok: !!(form.firstName && form.lastName && form.email && form.phone) },
    { label: 'Area of interest selected',      ok: !!form.areaOfInterest },
    { label: 'Professional background filled', ok: !!(form.currentTitle && form.currentEmployer && form.experience) },
    { label: 'Cover letter written',           ok: form.coverLetter.length >= 100 },
    { label: 'CV uploaded',                    ok: !!form.cvFile },
    { label: 'Data consent provided',          ok: form.consent1 && form.consent2 },
  ];

  const empTypes = [
    { val: 'full-time', label: 'Full-Time',  sub: 'Permanent'  },
    { val: 'part-time', label: 'Part-Time',  sub: 'Flexible'   },
    { val: 'contract',  label: 'Contract',   sub: 'Fixed-term' },
    { val: 'open',      label: 'Open',       sub: 'Any'        },
  ];

  /* ── Success screen ── */
  if (done) {
    return (
      <div className={styles.page}>
        <div className={styles.success}>
          <div className={styles.successRing}>
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
              <polyline points="6 18 14 26 30 10"/>
            </svg>
          </div>
          <h2 className={styles.successH}>Application <em>Received!</em></h2>
          <p className={styles.successP}>
            Thank you for applying to Dillon &amp; Bird. A member of our talent team will personally
            review your application and respond within <strong>5 business days</strong>.
          </p>
          <div className={styles.successActs}>
            <button className={styles.btnGold} onClick={() => router.push('/careers')}>Browse More Roles →</button>
            <button className={styles.btnOutline} onClick={() => router.push('/')}>Back to Careers Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>

      {/* ── TOP BANNER ── */}
      <div className={styles.top}>
        <div className={styles.topInner}>
          <div className={styles.topLeft}>
            <p className={styles.topEyebrow}>
              <span className={styles.topRule} />
              Join the Team
            </p>
            <h1 className={styles.topH1}>
              Your Application to <em>D&amp;B</em>
            </h1>
            <div className={styles.roleTag}>
              <div>
                <p className={styles.roleTagLabel}>Applying For</p>
                <p className={styles.roleTagTitle}>{job.title}</p>
                <p className={styles.roleTagSub}>{job.dept} · {job.location}</p>
              </div>
              <button className={styles.changeRole} onClick={() => router.push('/careers/openroles')}>
                Change Role
              </button>
            </div>
          </div>

          <div className={styles.pills}>
            {STEPS.map((label, i) => (
              <button
                key={i}
                className={`${styles.pill} ${step === i + 1 ? styles.pillActive : ''} ${step > i + 1 ? styles.pillDone : ''}`}
                onClick={() => step > i + 1 ? setStep(i + 1) : undefined}
                disabled={step <= i + 1 && step !== i + 1}
              >
                <span className={styles.pillN}>0{i + 1}</span>
                <span className={styles.pillL}>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className={styles.body}>

        {/* Progress bar */}
        <div className={styles.progTrack}>
          <div className={styles.progBar} style={{ width: progress }} />
        </div>

        {/* ═══ STEP 1 — Personal ═══ */}
        {step === 1 && (
          <div className={styles.stepWrap}>
            <Section title="Personal Information">
              <Row2>
                <Field label="First Name" req error={errors.firstName}>
                  <input className={`${styles.input} ${errors.firstName ? styles.inputErr : ''}`}
                    value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Ahmed" />
                </Field>
                <Field label="Last Name" req error={errors.lastName}>
                  <input className={`${styles.input} ${errors.lastName ? styles.inputErr : ''}`}
                    value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Al Mansouri" />
                </Field>
              </Row2>
              <Row2>
                <Field label="Email" req error={errors.email}>
                  <input className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                    type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@email.com" />
                </Field>
                <Field label="Phone / WhatsApp" req error={errors.phone}>
                  <input className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                    type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+971 50 000 0000" />
                </Field>
              </Row2>
              <Row2>
                <Field label="Current Location">
                  <input className={styles.input} value={form.location}
                    onChange={e => set('location', e.target.value)} placeholder="e.g. Dubai, UAE" />
                </Field>
                <Field label="Nationality">
                  <input className={styles.input} value={form.nationality}
                    onChange={e => set('nationality', e.target.value)} placeholder="e.g. British, Emirati…" />
                </Field>
              </Row2>
              <Row2>
                <Field label="LinkedIn Profile">
                  <input className={styles.input} type="url" value={form.linkedin}
                    onChange={e => set('linkedin', e.target.value)} placeholder="linkedin.com/in/yourname" />
                </Field>
                <Field label="Personal Website">
                  <input className={styles.input} type="url" value={form.website}
                    onChange={e => set('website', e.target.value)} placeholder="Optional" />
                </Field>
              </Row2>
            </Section>

            <Section title="Role Preferences">
              <Field label="Area of Interest" req error={errors.areaOfInterest}>
                <select className={`${styles.select} ${errors.areaOfInterest ? styles.inputErr : ''}`}
                  value={form.areaOfInterest} onChange={e => set('areaOfInterest', e.target.value)}>
                  <option value="">Select a practice area…</option>
                  <option value="Strategy & Growth">Strategy &amp; Growth</option>
                  <option value="Management Consulting">Management Consulting</option>
                  <option value="Corporate Services">Corporate Services</option>
                  <option value="Technology Consulting">Technology Consulting</option>
                  <option value="Company Formation">Company Formation</option>
                  <option value="Operations & Support">Operations &amp; Support</option>
                  <option value="Open">Open — Let D&amp;B Suggest</option>
                </select>
              </Field>

              <Field label="Employment Type">
                <div className={styles.radioGroup}>
                  {empTypes.map(et => (
                    <label key={et.val}
                      className={`${styles.radioOpt} ${form.employmentType === et.val ? styles.radioOptActive : ''}`}>
                      <input type="radio" name="empType" value={et.val}
                        checked={form.employmentType === et.val} onChange={() => set('employmentType', et.val)} />
                      <div>
                        <div className={styles.radioLabel}>{et.label}</div>
                        <div className={styles.radioSub}>{et.sub}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </Field>

              <Row2>
                <Field label="Preferred Location">
                  <select className={styles.select} value={form.preferredLocation}
                    onChange={e => set('preferredLocation', e.target.value)}>
                    <option value="">Select…</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Riyadh</option>
                    <option>Doha</option>
                    <option>Remote / Flexible</option>
                    <option>Open to Relocation</option>
                  </select>
                </Field>
                <Field label="Earliest Start Date">
                  <input className={styles.input} type="date" value={form.startDate}
                    onChange={e => set('startDate', e.target.value)} />
                </Field>
              </Row2>
            </Section>

            <div className={styles.nav}>
              <span />
              <button className={styles.btnNext} onClick={() => goStep(2)}>
                Next: Experience <ArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* ═══ STEP 2 — Experience ═══ */}
        {step === 2 && (
          <div className={styles.stepWrap}>
            <Section title="Professional Background">
              <Row2>
                <Field label="Current Job Title" req error={errors.currentTitle}>
                  <input className={`${styles.input} ${errors.currentTitle ? styles.inputErr : ''}`}
                    value={form.currentTitle} onChange={e => set('currentTitle', e.target.value)}
                    placeholder="e.g. Strategy Manager" />
                </Field>
                <Field label="Current Employer" req error={errors.currentEmployer}>
                  <input className={`${styles.input} ${errors.currentEmployer ? styles.inputErr : ''}`}
                    value={form.currentEmployer} onChange={e => set('currentEmployer', e.target.value)}
                    placeholder="e.g. McKinsey & Company" />
                </Field>
              </Row2>
              <Row2>
                <Field label="Total Experience" req error={errors.experience}>
                  <select className={`${styles.select} ${errors.experience ? styles.inputErr : ''}`}
                    value={form.experience} onChange={e => set('experience', e.target.value)}>
                    <option value="">Select…</option>
                    <option>Less than 1 year</option>
                    <option>1–2 years</option>
                    <option>2–4 years</option>
                    <option>4–7 years</option>
                    <option>7–12 years</option>
                    <option>12+ years</option>
                  </select>
                </Field>
                <Field label="Highest Education">
                  <select className={styles.select} value={form.education}
                    onChange={e => set('education', e.target.value)}>
                    <option value="">Select…</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>MBA</option>
                    <option>PhD / Doctorate</option>
                    <option>CFA / ACA / CPA</option>
                    <option>Other</option>
                  </select>
                </Field>
              </Row2>
              <Field label="Key Skills">
                <input className={styles.input} value={form.skills}
                  onChange={e => set('skills', e.target.value)}
                  placeholder="e.g. Financial modelling, Market entry strategy, Python… (comma-separated)" />
              </Field>
              <Field label="Languages Spoken">
                <input className={styles.input} value={form.languages}
                  onChange={e => set('languages', e.target.value)}
                  placeholder="e.g. English (Native), Arabic (Fluent), French (Conversational)" />
              </Field>
            </Section>

            <Section title="Cover Letter & Motivation">
              <Field label="Why Dillon & Bird?" req error={errors.coverLetter}>
                <textarea
                  className={`${styles.textarea} ${errors.coverLetter ? styles.inputErr : ''}`}
                  rows={7}
                  value={form.coverLetter}
                  onChange={e => set('coverLetter', e.target.value)}
                  placeholder="Tell us what draws you to D&B and what you'd bring to the team. (300–600 words recommended)"
                />
                <div className={styles.charCount}>{form.coverLetter.length} characters</div>
              </Field>
              <Row2>
                <Field label="How Did You Hear About Us?">
                  <select className={styles.select} value={form.source}
                    onChange={e => set('source', e.target.value)}>
                    <option value="">Select…</option>
                    <option>LinkedIn</option>
                    <option>D&B Employee Referral</option>
                    <option>Company Website</option>
                    <option>Job Board</option>
                    <option>University / Career Fair</option>
                    <option>Social Media</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Referral Name (if applicable)">
                  <input className={styles.input} value={form.referral}
                    onChange={e => set('referral', e.target.value)}
                    placeholder="Name of D&B employee who referred you" />
                </Field>
              </Row2>
            </Section>

            <div className={styles.nav}>
              <button className={styles.btnBack} onClick={() => goStep(1)}><ArrowLeft /> Back</button>
              <button className={styles.btnNext} onClick={() => goStep(3)}>Next: Upload CV <ArrowRight /></button>
            </div>
          </div>
        )}

        {/* ═══ STEP 3 — Upload CV ═══ */}
        {step === 3 && (
          <div className={styles.stepWrap}>
            <Section title="Upload Your CV / Resume" badge="Required">
              {!form.cvFile ? (
                <div
                  className={`${styles.dropZone} ${errors.cvFile ? styles.dropZoneErr : ''}`}
                  onClick={() => cvRef.current?.click()}
                >
                  <input ref={cvRef} type="file" accept=".pdf,.doc,.docx" className={styles.fileInput}
                    onChange={e => {
                      const f = e.target.files?.[0];
                      if (!f) return;
                      if (f.size > MAX_CV_BYTES) {
                        setErrors(er => ({ ...er, cvFile: `File is ${fmtSize(f.size)}. Maximum is 10 MB.` }));
                        e.target.value = '';
                        return;
                      }
                      set('cvFile', f);
                    }} />
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M26 4H10a3 3 0 00-3 3v30a3 3 0 003 3h24a3 3 0 003-3V16L26 4z"/>
                    <path d="M26 4v12h12M22 21v10M17 26l5-5 5 5"/>
                  </svg>
                  <p className={styles.dropTitle}>Drop your CV here, or click to browse</p>
                  <p className={styles.dropSub}>Accepted: PDF, DOC, DOCX · Maximum 10 MB</p>
                  <div className={styles.dropBtn}>
                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6.5 1v9M2 5l4.5-4.5L11 5"/><path d="M1 11h11"/>
                    </svg>
                    Choose File
                  </div>
                </div>
              ) : (
                <div className={styles.fileTag}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c4993a" strokeWidth="1.5">
                    <path d="M12 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V8L12 2z"/>
                    <path d="M12 2v6h6"/>
                  </svg>
                  <div>
                    <div className={styles.fileName}>{form.cvFile.name}</div>
                    <div className={styles.fileSize}>{fmtSize(form.cvFile.size)}</div>
                  </div>
                  <button className={styles.fileRemove} onClick={() => set('cvFile', null)}>✕ Remove</button>
                </div>
              )}
              {errors.cvFile && <p className={styles.errMsg}>{errors.cvFile}</p>}
            </Section>

            <Section title="Portfolio / Work Sample" badge="Optional">
              {!form.portfolioFile ? (
                <div className={styles.dropZone} style={{ padding: '32px 36px' }} onClick={() => pfRef.current?.click()}>
                  <input ref={pfRef} type="file" accept=".pdf,.ppt,.pptx,.doc,.docx,.zip" className={styles.fileInput}
                    onChange={e => {
                      const f = e.target.files?.[0];
                      if (!f) return;
                      if (f.size > MAX_PORTFOLIO_BYTES) {
                        setErrors(er => ({ ...er, portfolioFile: `File is ${fmtSize(f.size)}. Maximum is 25 MB.` }));
                        e.target.value = '';
                        return;
                      }
                      setErrors(er => { const n = { ...er }; delete n.portfolioFile; return n; });
                      set('portfolioFile', f);
                    }} />
                  <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="4" y="8" width="32" height="26" rx="2"/>
                    <path d="M4 16h32M14 8V5M26 8V5M20 22v7M16 26l4-4 4 4"/>
                  </svg>
                  <p className={styles.dropTitle}>Upload a portfolio, case study or work sample</p>
                  <p className={styles.dropSub}>PDF, PPT, PPTX, DOC, ZIP · Max 25 MB</p>
                  <div className={styles.dropBtn}>
                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6.5 1v9M2 5l4.5-4.5L11 5"/><path d="M1 11h11"/>
                    </svg>
                    Choose File
                  </div>
                </div>
              ) : (
                <div className={styles.fileTag}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#c4993a" strokeWidth="1.5">
                    <rect x="3" y="5" width="14" height="13" rx="1"/>
                    <path d="M7 5V4a3 3 0 016 0v1"/>
                  </svg>
                  <div>
                    <div className={styles.fileName}>{form.portfolioFile.name}</div>
                    <div className={styles.fileSize}>{fmtSize(form.portfolioFile.size)}</div>
                  </div>
                  <button className={styles.fileRemove} onClick={() => set('portfolioFile', null)}>✕ Remove</button>
                </div>
              )}
              {errors.portfolioFile && <p className={styles.errMsg}>{errors.portfolioFile}</p>}
            </Section>

            <Section title="Declarations">
              {[
                {
                  key: 'consent1' as const,
                  text: <>I consent to Dillon &amp; Bird processing my personal data and CV for recruitment purposes in accordance with their <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.link}>Privacy Policy</a>. My data will be retained for 12 months.</>,
                },
                {
                  key: 'consent2' as const,
                  text: 'I confirm all information in this application is accurate and complete to the best of my knowledge.',
                },
                {
                  key: 'consent3' as const,
                  text: 'I would like to receive updates about future D&B opportunities that match my profile. (Optional)',
                },
              ].map(c => (
                <label key={c.key} className={`${styles.consent} ${errors[c.key] ? styles.consentErr : ''}`}>
                  <input type="checkbox" checked={form[c.key]} onChange={e => set(c.key, e.target.checked)} />
                  <p>{c.text}</p>
                </label>
              ))}
              {(errors.consent1 || errors.consent2) && (
                <p className={styles.errMsg}>Please accept the required declarations to continue.</p>
              )}
            </Section>

            <div className={styles.nav}>
              <button className={styles.btnBack} onClick={() => goStep(2)}><ArrowLeft /> Back</button>
              <button className={styles.btnNext} onClick={() => goStep(4)}>Review Application <ArrowRight /></button>
            </div>
          </div>
        )}

        {/* ═══ STEP 4 — Review ═══ */}
        {step === 4 && (
          <div className={styles.stepWrap}>
            <Section title="Review Your Application">
              <div className={styles.reviewGrid}>
                {reviewRows.map((r, i) => (
                  <div key={i} className={styles.reviewRow}>
                    <span className={styles.reviewLabel}>{r.label}</span>
                    <span className={styles.reviewVal}>{r.val}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Pre-Submit Checklist">
              <div className={styles.checklist}>
                {checklistItems.map((c, i) => (
                  <div key={i} className={`${styles.checkItem} ${c.ok ? styles.checkOk : styles.checkNo}`}>
                    <span className={styles.checkIcon}>
                      {c.ok
                        ? <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 8 6 11 13 4"/></svg>
                        : <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l8 8M12 4l-8 8"/></svg>
                      }
                    </span>
                    {c.label}
                  </div>
                ))}
              </div>
              {checklistItems.some(c => !c.ok) && (
                <p className={styles.reviewWarn}>
                  ⚠ Some items are incomplete. You can still submit, or go back to complete them.
                </p>
              )}
            </Section>

            <Section title="Security Check">
              <TurnstileWidget
                onVerify={token => { setTurnstileToken(token); setTurnstileError(false); }}
                onExpire={() => setTurnstileToken('')}
              />
              {turnstileError && (
                <p className={styles.errMsg}>Please complete the security check before submitting.</p>
              )}
            </Section>

            {/* Submit nav + error */}
            <div className={styles.nav}>
              <button className={styles.btnBack} onClick={() => goStep(3)} disabled={submitting}>
                <ArrowLeft /> Back
              </button>
              <button
                className={styles.btnSubmit}
                onClick={submit}
                disabled={submitting}
              >
                {submitting ? 'Submitting…' : 'Submit Application →'}
              </button>
            </div>

            {submitError && (
              <div className={styles.submitErr}>
                ⚠ {submitError}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Layout helpers ── */
function Section({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHead}>
        <span>{title}</span>
        {badge && <span className={styles.sectionBadge}>{badge}</span>}
      </div>
      <div className={styles.sectionDivider} />
      <div className={styles.sectionBody}>{children}</div>
    </div>
  );
}

function Row2({ children }: { children: React.ReactNode }) {
  return <div className={styles.row2}>{children}</div>;
}

function Field({ label, req, error, children }: { label: string; req?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label.toUpperCase()} {req && <span className={styles.req}>*</span>}
      </label>
      {children}
      {error && <p className={styles.errMsg}>{error}</p>}
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 7h10M8 3l4 4-4 4"/>
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 7H2M6 3l-4 4 4 4"/>
    </svg>
  );
}