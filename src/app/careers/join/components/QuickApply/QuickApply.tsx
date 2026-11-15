'use client';

import { useState, useRef } from 'react';
import TurnstileWidget from '../../../../../components/Turnstile/TurnstileWidget';
import styles from './QuickApply.module.css';

const SUPABASE_FUNCTION_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/functions/v1/send-email';
const RECIPIENT = 'dinesh@dillonbird.com';

const ROLES = [
  {
    id: 'cloud',
    title: 'Cloud & Platform Lead',
    location: 'Dubai, UAE',
    desc: 'Design and run enterprise cloud and container platforms for GCC clients, from architecture through to production.',
  },
  {
    id: 'ai',
    title: 'AI & Automation Consultant',
    location: 'Dubai, UAE',
    desc: 'Take AI and automation work from use-case selection to governed, measurable delivery inside client operations.',
  },
  {
    id: 'open',
    title: 'General / Open Talent Pool',
    location: 'Dubai • Global delivery',
    desc: 'Strong consulting, engineering or advisory background but no role listed that fits? Introduce yourself here.',
  },
] as const;

const VALUES = [
  {
    title: 'Enterprise Impact',
    body: 'Work directly with decision-makers on problems that change how a business runs, rather than on isolated tickets.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: 'Modern Tech Stack',
    body: 'Cloud, containers, automation and applied AI, chosen because they suit the problem rather than because they are current.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    title: 'Growth & Agility',
    body: 'A small team, which means real ownership early and a short distance between your judgement and the client outcome.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" /><path d="m19 9-7-7-7 7" />
      </svg>
    ),
  },
];

const esc = (v: string) =>
  String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default function QuickApply() {
  const [roleId, setRoleId] = useState<string>(ROLES[0].id);
  const [name, setName] = useState('');
  const [code, setCode] = useState('+971');
  const [phone, setPhone] = useState('');
  const [years, setYears] = useState(5);
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [token, setToken] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const formRef = useRef<HTMLDivElement>(null);

  const role = ROLES.find(r => r.id === roleId) ?? ROLES[0];
  const yearsLabel = years >= 20 ? '20+ years' : years === 1 ? '1 year' : `${years} years`;

  const pickRole = (id: string) => {
    setRoleId(id);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const submit = async () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Please enter your name';
    if (!phone.trim()) e.phone = 'Please enter a contact number';
    if (!token) e.token = 'Please complete the security check';
    setErrors(e);
    if (Object.keys(e).length) return;

    setState('sending');

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0B192C; padding: 24px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">New Quick Application</h1>
          <p style="color: #93B4FF; margin: 6px 0 0; font-size: 14px;">${esc(role.title)} · ${esc(role.location)}</p>
        </div>
        <div style="padding: 32px; background: #F8FAFC; border: 1px solid #E2E8F0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #64748B; width: 150px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #0B192C;">${esc(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B;">Phone</td><td style="padding: 8px 0; font-weight: 600; color: #0B192C;">${esc(code)} ${esc(phone)}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B;">Experience</td><td style="padding: 8px 0; font-weight: 600; color: #0B192C;">${esc(yearsLabel)}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B;">Applying for</td><td style="padding: 8px 0; font-weight: 600; color: #0B192C;">${esc(role.title)}</td></tr>
          </table>
          ${note.trim()
            ? `<h2 style="font-size: 14px; color: #0B192C; margin: 26px 0 8px;">LinkedIn / Note</h2>
               <div style="font-size: 14px; color: #334155; line-height: 1.7; white-space: pre-wrap; background: #fff; border: 1px solid #E2E8F0; padding: 14px;">${esc(note)}</div>`
            : ''}
        </div>
        <div style="padding: 16px 32px; background: #fff; border: 1px solid #E2E8F0; border-top: none; font-size: 12px; color: #94A3B8;">
          Sent from the careers quick-apply form on dillonbird.com
        </div>
      </div>`;

    try {
      const res = await fetch(SUPABASE_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: [RECIPIENT],
          subject: `Quick Application - ${role.title} - ${name.trim()}`,
          html,
          turnstileToken: token,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState('done');
    } catch {
      setState('error');
    }
  };

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Careers at Dillon &amp; Bird</p>
          <h1 className={styles.heroTitle}>Build the future of enterprise cloud, AI and digital transformation</h1>
          <p className={styles.heroSub}>
            We work with businesses across the GCC on the problems that sit where strategy, finance
            and technology meet. If that is the work you want to be doing, we would like to hear from you.
          </p>
          <p className={styles.heroMeta}>
            Dubai <span className={styles.dot} /> Global delivery
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Why Dillon &amp; Bird</h2>
          <p className={styles.sectionLede}>
            A small consulting team working on enterprise-scale problems, which changes what the job
            actually feels like day to day.
          </p>
          <div className={styles.grid3}>
            {VALUES.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon} aria-hidden="true">{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLE SELECTOR */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Choose a role</h2>
          <p className={styles.sectionLede}>
            Select one and it fills in on the application below. No CV needed to start the conversation.
          </p>
          <div className={styles.roleGrid} role="group" aria-label="Select a role to apply for">
            {ROLES.map(r => {
              const active = r.id === roleId;
              return (
                <button
                  key={r.id}
                  type="button"
                  aria-pressed={active}
                  className={`${styles.roleCard} ${active ? styles.roleCardActive : ''}`}
                  onClick={() => pickRole(r.id)}
                >
                  {active && (
                    <span className={styles.check} aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 8 6.5 11.5 13 5" />
                      </svg>
                    </span>
                  )}
                  <h3 className={styles.roleTitle}>{r.title}</h3>
                  <p className={styles.roleLoc}>{r.location}</p>
                  <p className={styles.roleDesc}>{r.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK APPLY */}
      <section className={`${styles.section} ${styles.formWrap}`} style={{ paddingTop: 0 }} ref={formRef}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Quick apply</h2>
          <p className={styles.sectionLede}>
            Four fields. It goes straight to our hiring team, and a partner reads every one.
          </p>

          <div className={styles.card}>
            {state === 'done' ? (
              <div className={styles.done}>
                <div className={styles.doneRing}>
                  <svg width="26" height="26" viewBox="0 0 36 36" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 18 14 26 30 10" />
                  </svg>
                </div>
                <h3 className={styles.doneTitle}>Application sent</h3>
                <p className={styles.doneBody}>
                  Thank you, {name.trim().split(' ')[0]}. Your application for {role.title} has reached our
                  hiring team. If there is a fit we will be in touch to arrange a conversation.
                </p>
              </div>
            ) : (
              <>
                <div className={styles.applyingFor}>
                  <p className={styles.applyingLabel}>Applying for</p>
                  <p className={styles.applyingValue}>{role.title}</p>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="qa-name">
                    Full name <span className={styles.req}>*</span>
                  </label>
                  <input
                    id="qa-name"
                    className={`${styles.input} ${errors.name ? styles.inputErr : ''}`}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && <p className={styles.err}>{errors.name}</p>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="qa-phone">
                    Phone <span className={styles.req}>*</span>
                  </label>
                  <div className={styles.phoneRow}>
                    <input
                      className={`${styles.input} ${styles.code}`}
                      value={code}
                      onChange={e => setCode(e.target.value)}
                      aria-label="Country code"
                      inputMode="tel"
                    />
                    <input
                      id="qa-phone"
                      className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="50 000 0000"
                      type="tel"
                      autoComplete="tel-national"
                    />
                  </div>
                  {errors.phone && <p className={styles.err}>{errors.phone}</p>}
                </div>

                <div className={styles.field}>
                  <div className={styles.sliderHead}>
                    <label className={styles.label} htmlFor="qa-years" style={{ marginBottom: 0 }}>
                      Years of experience
                    </label>
                    <span className={styles.sliderVal}>{yearsLabel}</span>
                  </div>
                  <input
                    id="qa-years"
                    className={styles.slider}
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={years}
                    onChange={e => setYears(Number(e.target.value))}
                    aria-valuetext={yearsLabel}
                  />
                  <div className={styles.sliderScale}><span>0</span><span>20+</span></div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="qa-note">LinkedIn or a short note</label>
                  <textarea
                    id="qa-note"
                    className={styles.textarea}
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder="Paste your LinkedIn URL, or tell us in a line or two what you work on."
                  />
                </div>

                <div className={styles.turnstile}>
                  <TurnstileWidget
                    onVerify={t => { setToken(t); setErrors(p => { const n = { ...p }; delete n.token; return n; }); }}
                    onExpire={() => setToken('')}
                  />
                  {errors.token && <p className={styles.err}>{errors.token}</p>}
                </div>

                <button className={styles.submit} onClick={submit} disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending…' : 'Submit application to hiring team'}
                </button>

                {state === 'error' && (
                  <div className={styles.banner}>
                    That did not send. Please try again, or email us directly and we will pick it up.
                  </div>
                )}

                <p className={styles.note}>
                  Prefer to send a full CV and cover letter? Use our{' '}
                  <a href="/careers/apply" style={{ color: '#2563EB' }}>detailed application form</a>, or browse{' '}
                  <a href="/careers/openroles" style={{ color: '#2563EB' }}>current open roles</a>.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
