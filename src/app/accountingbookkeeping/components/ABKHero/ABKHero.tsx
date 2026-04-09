'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  
import { supabase } from '../../../../../lib/supabase';
import styles from './ABKHero.module.css';

interface FormData {
  firstName: string; lastName: string; companyName: string;
  email: string; phone: string; role: string;
  emirate: string; auditType: string;
  companySize: string; referralSource: string; message: string;
}

const initial: FormData = {
  firstName: '', lastName: '', companyName: '', email: '',
  phone: '', role: '', emirate: '', auditType: '',
  companySize: '', referralSource: '', message: '',
};

export default function ABKHero() {
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

    const { error } = await supabase.from('accounting_book_keeping_leads').insert({
      first_name: form.firstName,
      last_name: form.lastName,
      company_name: form.companyName || null,
      email: form.email,
      role: form.role || 'Not specified',
      phone: form.phone,
      emirate: form.emirate || 'Not specified',
      audit_type: form.auditType || 'Not specified',
      company_size: form.companySize || 'Not specified',
      referral_source: form.referralSource || 'Not specified',
      message: form.message,
      source_page: window.location.href,
    });
    if (error) { console.error(error); setStatus('error'); return; }

    const msgBody = `
AUDIT & ASSURANCE LEAD
===========================
Name              : ${form.firstName} ${form.lastName}
Company Name      : ${form.companyName || '—'}
Role              : ${form.role || '—'}
Email             : ${form.email}
Phone / WhatsApp  : ${form.phone}
Emirate           : ${form.emirate || '—'}
Service Type      : ${form.auditType || '—'}
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
        subject: `New Audit Enquiry — ${form.firstName} ${form.lastName}`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email, message: msgBody,
      }),
    });

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New Audit Enquiry — ${form.firstName} ${form.lastName}`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email,
        email: 'dinesh@dillonbird.com',
        message: msgBody,
      }),
    });

    router.push('/success?from=accountingbookkeeping');
  };

  return (
    <section className={styles.hero}>

      {/* ── LEFT ── */}
      <div className={styles.heroL}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          <span>UAE-Compliant Accounting & Bookkeeping</span>
        </div>

        <p className={styles.eyebrow}>Accounting & Financial Services · GCC</p>

        <h1 className={styles.h1}>
          Your Books.<br />
          Your Compliance.<br />
          <em>Completely Handled.</em>
        </h1>

        <p className={styles.body}>
          From daily bookkeeping and VAT filing to management accounts and CFO-level insights — Dillon & Bird gives UAE businesses a dedicated finance team without the overhead.
        </p>

        <div className={styles.acts}>
          <Link href="#contact" className={styles.btnPrimary}>→ Get a Free Assessment</Link>
          <Link href="#services" className={styles.btnOutline}>View Our Services</Link>
        </div>

        <div className={styles.pills}>
          {[
            { n: '100%', l: 'FTA Compliant' },
            { n: '24hr', l: 'Response Time' },
            { n: 'VAT', l: 'Filing Handled' },
            { n: 'GCC', l: 'Regional Expertise' },
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

        <h2 className={styles.formH}>Get Your Free Audit<br />Assessment</h2>

        <p className={styles.formSub}>
          A senior auditor will review your requirements and respond within 24 hours — no obligation.
        </p>

        <div className={styles.trustRow}>
          {['No Hidden Fees', '100% Confidential', 'FTA-Registered Team'].map(t => (
            <div className={styles.trustChip} key={t}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t}
            </div>
          ))}
        </div>

        {status === 'success' ? (
          <div className={styles.successBox}>
            ✔ Thank you — a senior auditor will be in touch within 24 hours.
          </div>
        ) : (
          <div className={styles.form}>

            {/* First + Last Name */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-fn">First Name</label>
                <input className={styles.input} id="au-fn" name="firstName" type="text"
                  placeholder="Sarah" autoComplete="given-name"
                  value={form.firstName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-ln">Last Name</label>
                <input className={styles.input} id="au-ln" name="lastName" type="text"
                  placeholder="Al Mansoori" autoComplete="family-name"
                  value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            {/* Work / Personal Email */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-em">Work / Personal Email *</label>
              <input className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                id="au-em" name="email" type="email" placeholder="you@company.com"
                autoComplete="email" value={form.email} onChange={handleChange} />
            </div>

            {/* Phone */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-ph">Phone / WhatsApp *</label>
              <input className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                id="au-ph" name="phone" type="tel" placeholder="+971 5X XXX XXXX"
                autoComplete="tel" value={form.phone} onChange={handleChange} />
            </div>

            {/* Company Name + Role */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-cn">Company Name</label>
                <input className={styles.input} id="au-cn" name="companyName" type="text"
                  placeholder="Your Company"
                  value={form.companyName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-role">Your Role</label>
                <input className={styles.input} id="au-role" name="role" type="text"
                  placeholder="CEO / CFO / Owner"
                  value={form.role} onChange={handleChange} />
              </div>
            </div>

            {/* Emirate */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-loc">
                Emirate <span className={styles.optional}>(Optional)</span>
              </label>
              <select className={styles.select} id="au-loc" name="emirate"
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

            {/* Service Type */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-type">Service Type</label>
              <select className={styles.select} id="au-type" name="auditType"
                value={form.auditType} onChange={handleChange}>
                <option value="">— Select a service —</option>
                <option>Internal Audit</option>
                <option>VAT Compliance Audit</option>
                <option>Corporate Tax Audit</option>
                <option>External Audit Readiness</option>
                <option>Financial Due Diligence</option>
                <option>Forensic Investigation</option>
                <option>Not Sure — Need Advice</option>
              </select>
            </div>

            {/* Company Size */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-size">Company Size</label>
              <select className={styles.select} id="au-size" name="companySize"
                value={form.companySize} onChange={handleChange}>
                <option value="">— Select —</option>
                <option>Sole Trader / Freelancer</option>
                <option>1–10 Employees</option>
                <option>11–50 Employees</option>
                <option>51–200 Employees</option>
                <option>200+ Employees</option>
              </select>
            </div>

            {/* How Did You Find Us */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-rf">How Did You Find Us?</label>
              <select className={styles.select} id="au-rf" name="referralSource"
                value={form.referralSource} onChange={handleChange}>
                <option value="">— Select —</option>
                <option>Google Search</option>
                <option>Google Ads</option>
                <option>LinkedIn</option>
                <option>Referral / Word of Mouth</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-msg">
                Additional Requirements <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea className={styles.textarea} id="au-msg" name="message"
                placeholder="Describe your audit scope, timeline or any specific concerns…"
                value={form.message} onChange={handleChange} />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please try again or WhatsApp us.</p>
            )}

            <button className={styles.submitBtn} onClick={handleSubmit} disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Get My Free Accounting Assessment →'}
            </button>

            <p className={styles.privacy}>
              By submitting you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.
              Your data is never sold or shared with third parties.
            </p>

            <div className={styles.waRow}>
            <img src="/whatsapplogo1.svg" alt="WhatsApp Icon" width={30} height={30} />
              <a href="https://wa.me/971585570593" target="_blank" rel="noopener">Chat on WhatsApp</a>
              <span className={styles.sep}>·</span>
              <a href="tel:+971585570593">+971 585 570 593</a>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}