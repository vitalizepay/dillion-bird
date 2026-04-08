'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../lib/supabase';
import styles from './TechHero.module.css';

interface FormData {
  firstName: string; lastName: string; companyName: string;
  email: string; phone: string; role: string;
  emirate: string; serviceType: string;
  companySize: string; referralSource: string; message: string;
}

const initial: FormData = {
  firstName: '', lastName: '', companyName: '', email: '',
  phone: '', role: '', emirate: '', serviceType: '',
  companySize: '', referralSource: '', message: '',
};

export default function TechHero() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async () => {
    const errs: Partial<Record<keyof FormData, boolean>> = {};
    if (!form.email || !form.email.includes('@')) errs.email = true;
    if (!form.phone) errs.phone = true;
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');

    const { error } = await supabase.from('technology_consulting_leads').insert({
      first_name: form.firstName,
      last_name: form.lastName,
      company_name: form.companyName || null,
      email: form.email,
      role: form.role || 'Not specified',
      phone: form.phone,
      emirate: form.emirate || 'Not specified',
      service_type: form.serviceType || 'Not specified',
      company_size: form.companySize || 'Not specified',
      referral_source: form.referralSource || 'Not specified',
      message: form.message,
      source_page: window.location.href,
    });
    if (error) { console.error(error); setStatus('error'); return; }

    const msgBody = `
TECHNOLOGY CONSULTING LEAD
===========================
Name              : ${form.firstName} ${form.lastName}
Company Name      : ${form.companyName || '—'}
Role              : ${form.role || '—'}
Email             : ${form.email}
Phone / WhatsApp  : ${form.phone}
Emirate           : ${form.emirate || '—'}
Service Type      : ${form.serviceType || '—'}
Company Size      : ${form.companySize || '—'}
Referral Source   : ${form.referralSource || '—'}
Additional Notes  : ${form.message || '—'}
===========================
Submitted via: ${window.location.href}
    `.trim();

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New Technology Consulting Enquiry — ${form.firstName} ${form.lastName}`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email, message: msgBody,
      }),
    });

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New Technology Consulting Enquiry — ${form.firstName} ${form.lastName}`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email,
        email: 'dinesh@dillonbird.com',
        message: msgBody,
      }),
    });

    router.push('/success?from=technologyconsulting');
  };

  return (
    <section className={styles.hero}>

      {/* ── LEFT ── */}
      <div className={styles.heroL}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          <span>AI · Cloud · OpenShift · On-Prem</span>
        </div>

        <p className={styles.eyebrow}>Technology Consulting · GCC</p>

        <h1 className={styles.h1}>
          Technology That<br />
          Drives Real<br />
          <em>Business Outcomes.</em>
        </h1>

        <p className={styles.body}>
          From AI strategy and cloud migration to OpenShift deployments and on-premise infrastructure — Dillon &amp; Bird delivers enterprise technology consulting that moves the commercial needle, not just the technical one.
        </p>

        <div className={styles.acts}>
          <Link href="#contact" className={styles.btnPrimary}>→ Get a Free Consultation</Link>
          <Link href="#services" className={styles.btnOutline}>View Our Services</Link>
        </div>

        <div className={styles.pills}>
          {[
            { n: '200+', l: 'Projects Delivered' },
            { n: '50+',  l: 'Enterprise Clients' },
            { n: '95%',  l: 'Client Retention' },
            { n: '8+',   l: 'Years of Excellence' },
          ].map(p => (
            <div className={styles.pill} key={p.n}>
              <span className={styles.pillN}>{p.n}</span>
              <span className={styles.pillL}>{p.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — FORM ── */}
      <div className={styles.heroR} id="contact">
        <div className={styles.formTag}>
          <div className={styles.formTagBar} />
          <span>Free Consultation</span>
        </div>

        <h2 className={styles.formH}>Get Your Free Technology<br />Assessment</h2>

        <p className={styles.formSub}>
          A senior technology consultant will review your requirements and respond within 24 hours — no obligation.
        </p>

        <div className={styles.trustRow}>
          {['No Hidden Fees', '100% Confidential', 'GCC-Experienced Team'].map(t => (
            <div className={styles.trustChip} key={t}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t}
            </div>
          ))}
        </div>

        <div className={styles.form}>

          <div className={styles.frow}>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="tc-fn">First Name</label>
              <input className={styles.input} id="tc-fn" name="firstName" type="text"
                placeholder="Sarah" autoComplete="given-name"
                value={form.firstName} onChange={handleChange} />
            </div>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="tc-ln">Last Name</label>
              <input className={styles.input} id="tc-ln" name="lastName" type="text"
                placeholder="Al Mansoori" autoComplete="family-name"
                value={form.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.fg}>
            <label className={styles.label} htmlFor="tc-em">Work / Personal Email *</label>
            <input className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
              id="tc-em" name="email" type="email" placeholder="you@company.com"
              autoComplete="email" value={form.email} onChange={handleChange} />
          </div>

          <div className={styles.fg}>
            <label className={styles.label} htmlFor="tc-ph">Phone / WhatsApp *</label>
            <input className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
              id="tc-ph" name="phone" type="tel" placeholder="+971 5X XXX XXXX"
              autoComplete="tel" value={form.phone} onChange={handleChange} />
          </div>

          <div className={styles.frow}>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="tc-cn">Company Name</label>
              <input className={styles.input} id="tc-cn" name="companyName" type="text"
                placeholder="Your Company"
                value={form.companyName} onChange={handleChange} />
            </div>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="tc-role">Your Role</label>
              <input className={styles.input} id="tc-role" name="role" type="text"
                placeholder="CEO / CTO / IT Head"
                value={form.role} onChange={handleChange} />
            </div>
          </div>

          <div className={styles.fg}>
            <label className={styles.label} htmlFor="tc-loc">
              Emirate <span className={styles.optional}>(Optional)</span>
            </label>
            <select className={styles.select} id="tc-loc" name="emirate"
              value={form.emirate} onChange={handleChange}>
              <option value="">— Select Emirate —</option>
              <option>Dubai</option>
              <option>Abu Dhabi</option>
              <option>Sharjah</option>
              <option>Ajman</option>
              <option>Ras Al Khaimah</option>
              <option>Fujairah</option>
              <option>Umm Al Quwain</option>
              <option>Not Sure — Need Advice</option>
            </select>
          </div>

          <div className={styles.fg}>
            <label className={styles.label} htmlFor="tc-type">Service Type</label>
            <select className={styles.select} id="tc-type" name="serviceType"
              value={form.serviceType} onChange={handleChange}>
              <option value="">— Select a service —</option>
              <option>AI Consulting & Strategy</option>
              <option>Generative AI Development</option>
              <option>Cloud Migration (AWS / Azure / GCP)</option>
              <option>OpenShift / Kubernetes Deployment</option>
              <option>On-Premise Infrastructure</option>
              <option>DevSecOps & CI/CD Pipelines</option>
              <option>Data Engineering & Analytics</option>
              <option>Workflow Automation</option>
              <option>Technology Due Diligence</option>
              <option>Not Sure — Need Advice</option>
            </select>
          </div>

          <div className={styles.fg}>
            <label className={styles.label} htmlFor="tc-size">Company Size</label>
            <select className={styles.select} id="tc-size" name="companySize"
              value={form.companySize} onChange={handleChange}>
              <option value="">— Select —</option>
              <option>Sole Trader / Freelancer</option>
              <option>1–10 Employees</option>
              <option>11–50 Employees</option>
              <option>51–200 Employees</option>
              <option>200+ Employees</option>
            </select>
          </div>

          <div className={styles.fg}>
            <label className={styles.label} htmlFor="tc-rf">How Did You Find Us?</label>
            <select className={styles.select} id="tc-rf" name="referralSource"
              value={form.referralSource} onChange={handleChange}>
              <option value="">— Select —</option>
              <option>Google Search</option>
              <option>Google Ads</option>
              <option>LinkedIn</option>
              <option>Referral / Word of Mouth</option>
              <option>Other</option>
            </select>
          </div>

          <div className={styles.fg}>
            <label className={styles.label} htmlFor="tc-msg">
              Additional Requirements <span className={styles.optional}>(Optional)</span>
            </label>
            <textarea className={styles.textarea} id="tc-msg" name="message"
              placeholder="Describe your technology challenge, timeline or any specific requirements…"
              value={form.message} onChange={handleChange} />
          </div>

          {status === 'error' && (
            <p className={styles.errorMsg}>Something went wrong. Please try again or WhatsApp us.</p>
          )}

          <button className={styles.submitBtn} onClick={handleSubmit} disabled={status === 'loading'}>
            {status === 'loading' ? 'Submitting…' : 'Get My Free Technology Assessment →'}
          </button>

          <p className={styles.privacy}>
            By submitting you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.
            Your data is never sold or shared with third parties.
          </p>

          <div className={styles.waRow}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#25d366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.956.537 3.784 1.47 5.35L2 22l4.789-1.453A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 12 2z" />
            </svg>
            <a href="https://wa.me/971585570593" target="_blank" rel="noopener">Chat on WhatsApp</a>
            <span className={styles.sep}>·</span>
            <a href="tel:+971585570593">+971 585 570 593</a>
          </div>

        </div>
      </div>
    </section>
  );
}