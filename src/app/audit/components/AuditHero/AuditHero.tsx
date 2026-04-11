'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../lib/supabase';
import styles from './AuditHero.module.css';

interface FormData {
  firstName: string; lastName: string; companyName: string;
  email: string; phone: string; emirate: string;
  auditType: string; referralSource: string; message: string;
}

const initial: FormData = {
  firstName: '', lastName: '', companyName: '', email: '',
  phone: '', emirate: '', auditType: '', referralSource: '', message: '',
};

export default function AuditHero() {
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

    const { error } = await supabase.from('audit_leads').insert({
      first_name: form.firstName, last_name: form.lastName,
      company_name: form.companyName || null, email: form.email,
      phone: form.phone, emirate: form.emirate || 'Not specified',
      audit_type: form.auditType || 'Not specified',
      referral_source: form.referralSource || 'Not specified',
      message: form.message, source_page: window.location.href,
    });
    if (error) { console.error(error); setStatus('error'); return; }

    const msgBody = `
AUDIT & ASSURANCE LEAD
===========================
Name              : ${form.firstName} ${form.lastName}
Company Name      : ${form.companyName || '—'}
Email             : ${form.email}
Phone / WhatsApp  : ${form.phone}
Emirate           : ${form.emirate || '—'}
Audit Type        : ${form.auditType || '—'}
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
        replyto: form.email, email: 'dinesh@dillonbird.com', message: msgBody,
      }),
    });

    router.push('/success?from=audit');
  };

  return (
    <section className={styles.hero}>
      {/* LEFT */}
      <div className={styles.heroL}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          <span>Accepting Audit Enquiries · Dubai, UAE</span>
        </div>
        <p className={styles.eyebrow}>Internal Audit · VAT Audit · Due Diligence · Forensic</p>
        <h1 className={styles.h1}>
          Audit That Builds<br />
          Confidence. Reports<br />
          Investors <em>Trust.</em>
        </h1>
        <p className={styles.body}>
          UAE-certified audit and assurance specialists delivering independent findings, FTA-ready compliance reviews and investor-grade due diligence — across mainland, DIFC, ADGM and every major UAE free zone. Fixed fees. Clear deliverables. 24-hour response.
        </p>
        <div className={styles.acts}>
          <Link href="#contact" className={styles.btnPrimary}>Book Free Audit Consultation →</Link>
          <a href="https://wa.me/971585570593"
  target="_blank"
  rel="noopener"
  className={styles.btnOutline}
>
  <img src="/whatsapplogo1.svg" alt="WhatsApp" width={22} height={22} />
  WhatsApp Us Now
</a>
        </div>
        <div className={styles.pills}>
          {[
            { n: 'FTA', l: 'Registered' },
            { n: '24hr', l: 'Response Time' },
            { n: 'Fixed', l: 'Fee Engagements' },
          ].map(p => (
            <div className={styles.pill} key={p.n}>
              <span className={styles.pillN}>{p.n}</span>
              <span className={styles.pillL}>{p.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — FORM */}
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
          {['Fixed Fees', '100% Confidential', 'Response in 24 hrs'].map(t => (
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
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-fn">First Name *</label>
                <input className={styles.input} id="au-fn" name="firstName" type="text"
                  placeholder="Sarah" autoComplete="given-name"
                  value={form.firstName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-ln">Last Name *</label>
                <input className={styles.input} id="au-ln" name="lastName" type="text"
                  placeholder="Al Mansoori" autoComplete="family-name"
                  value={form.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-cn">Company Name <span className={styles.optional}>(Optional)</span></label>
              <input className={styles.input} id="au-cn" name="companyName" type="text"
                placeholder="e.g. TradeNest FZE"
                value={form.companyName} onChange={handleChange} />
            </div>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-em">Work / Personal Email *</label>
              <input className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                id="au-em" name="email" type="email" placeholder="you@company.com"
                autoComplete="email" value={form.email} onChange={handleChange} />
            </div>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-ph">Phone / WhatsApp *</label>
              <input className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                id="au-ph" name="phone" type="tel" placeholder="+971 5X XXX XXXX"
                autoComplete="tel" value={form.phone} onChange={handleChange} />
            </div>
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-loc">Emirate <span className={styles.optional}>(Optional)</span></label>
                <select className={styles.select} id="au-loc" name="emirate" value={form.emirate} onChange={handleChange}>
                  <option value="">— Select —</option>
                  <option>Dubai</option><option>Abu Dhabi</option><option>Sharjah</option>
                  <option>Ajman</option><option>Ras Al Khaimah</option>
                  <option>Fujairah</option><option>Umm Al Quwain</option>
                </select>
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-type">Audit Type</label>
                <select className={styles.select} id="au-type" name="auditType" value={form.auditType} onChange={handleChange}>
                  <option value="">— Select —</option>
                  <option>Internal Audit</option><option>VAT Compliance Audit</option>
                  <option>Corporate Tax Audit</option><option>External Audit Readiness</option>
                  <option>Financial Due Diligence</option><option>Forensic Investigation</option>
                  <option>Not Sure — Need Advice</option>
                </select>
              </div>
            </div>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-rf">How Did You Find Us?</label>
              <select className={styles.select} id="au-rf" name="referralSource" value={form.referralSource} onChange={handleChange}>
                <option value="">— Select —</option>
                <option>Google Search</option><option>Google Ads</option>
                <option>LinkedIn</option><option>Referral / Word of Mouth</option><option>Other</option>
              </select>
            </div>
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-msg">Additional Requirements <span className={styles.optional}>(Optional)</span></label>
              <textarea className={styles.textarea} id="au-msg" name="message"
                placeholder="Describe your audit scope, timeline or any specific concerns…"
                value={form.message} onChange={handleChange} />
            </div>
            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please try again or WhatsApp us.</p>
            )}
            <button className={styles.submitBtn} onClick={handleSubmit} disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Request My Free Audit →'}
            </button>
            <p className={styles.privacy}>
              By submitting you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.
              Your data is never sold or shared with third parties.
            </p>
            <div className={styles.waRow}>
            <img src="/whatsapplogo1.svg" alt="WhatsApp Icon" width={30} height={30} />
              <a href="https://wa.me/971585570593" target="_blank" rel="noopener">Chat on WhatsApp</a>
              <span className={styles.sep}>·</span>
              <a href="tel:+971585570593" style={{ pointerEvents: 'none' }}>
  +971 585 570 593
</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}