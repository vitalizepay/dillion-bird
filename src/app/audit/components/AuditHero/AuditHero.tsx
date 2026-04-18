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

const SUPABASE_FUNCTION_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/functions/v1/send-email';

const sendEmail = async (to: string[], subject: string, html: string) => {
  await fetch(SUPABASE_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to, subject, html }),
  });
};

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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

    // 1. Save to Supabase
    const { error } = await supabase.from('audit_leads').insert({
      first_name:      form.firstName,
      last_name:       form.lastName,
      company_name:    form.companyName || null,
      email:           form.email,
      phone:           form.phone,
      emirate:         form.emirate || 'Not specified',
      audit_type:      form.auditType || 'Not specified',
      referral_source: form.referralSource || 'Not specified',
      message:         form.message,
      source_page:     window.location.href,
    });
    if (error) { console.error(error); setStatus('error'); return; }

    // 2. Internal team email HTML
    const detailsHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; padding: 24px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">New Audit Enquiry</h1>
        </div>
        <div style="padding: 32px; background: #f7f9fc; border: 1px solid #c8d0e0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #555; width: 180px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.firstName} ${form.lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Company Name</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.companyName || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Email</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Phone / WhatsApp</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Emirate</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.emirate || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Service Required</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.auditType || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">How They Found Us</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.referralSource || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Additional Requirements</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.message || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Source Page</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${window.location.href}</td></tr>
          </table>
        </div>
        <div style="padding: 16px 32px; background: #fff; border: 1px solid #c8d0e0; border-top: none; font-size: 12px; color: #aaa;">
          Dillon &amp; Bird · UAE
        </div>
      </div>
    `;

    // 3. Confirmation email to user
    const confirmHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; padding: 24px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">Thank you, ${form.firstName}!</h1>
        </div>
        <div style="padding: 32px; background: #f7f9fc; border: 1px solid #c8d0e0;">
          <p style="font-size: 15px; color: #333; line-height: 1.7;">
            We've received your audit enquiry. A senior auditor will review your requirements
            and be in touch within <strong>24 hours</strong>.
          </p>
          <p style="font-size: 15px; color: #333; line-height: 1.7;">
            In the meantime, feel free to WhatsApp us at
            <a href="https://wa.me/971585570593" style="color: #2563eb;">+971 585 570 593</a>
            if you have any urgent questions.
          </p>
          <p style="font-size: 15px; color: #333; margin-top: 24px;">
            Warm regards,<br />
            <strong>The Dillon &amp; Bird Team</strong>
          </p>
        </div>
        <div style="padding: 16px 32px; background: #fff; border: 1px solid #c8d0e0; border-top: none; font-size: 12px; color: #aaa;">
          Dillon &amp; Bird · UAE · <a href="https://dillonbird.com" style="color: #aaa;">dillonbird.com</a>
        </div>
      </div>
    `;

    // 4. Send all emails via Supabase Edge Function
    await Promise.allSettled([
      sendEmail(
        [form.email],
        'We received your enquiry — Dillon & Bird',
        confirmHtml
      ),
      sendEmail(
        ['dinesh@dillonbird.com', 'praveen@dillonbird.com', 'senthil@dillonbird.com'],
        `New Audit Enquiry — ${form.firstName} ${form.lastName}`,
        detailsHtml
      ),
    ]);

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
          UAE-certified audit and assurance specialists delivering independent findings,
          FTA-ready compliance reviews and investor-grade due diligence — across mainland,
          DIFC, ADGM and every major UAE free zone. Fixed fees. Clear deliverables.
          24-hour response.
        </p>
        <div className={styles.acts}>
          <button onClick={scrollToContact} className={styles.btnPrimary}>
            Book Free Audit Consultation →
          </button>
          <a href="https://wa.me/971585570593" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
            <img src="/whatsapplogo1.svg" alt="WhatsApp" width={18} height={18} />
            WhatsApp Us Now
          </a>
        </div>
        <div className={styles.pills}>
          {[
            { n: 'FTA',   l: 'Registered' },
            { n: '24hr',  l: 'Response Time' },
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
                <label className={styles.label} htmlFor="au-ln">Last Name</label>
                <input className={styles.input} id="au-ln" name="lastName" type="text"
                  placeholder="Al Mansoori" autoComplete="family-name"
                  value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-cn">
                Company Name <span className={styles.optional}>(Optional)</span>
              </label>
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
                <label className={styles.label} htmlFor="au-loc">
                  Emirate <span className={styles.optional}>(Optional)</span>
                </label>
                <select className={styles.select} id="au-loc" name="emirate"
                  value={form.emirate} onChange={handleChange}>
                  <option value="">— Select —</option>
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras Al Khaimah</option>
                  <option>Fujairah</option>
                  <option>Umm Al Quwain</option>
                </select>
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="au-type">Service Required</label>
                <select className={styles.select} id="au-type" name="auditType"
                  value={form.auditType} onChange={handleChange}>
                  <option value="">— Select —</option>
                  <option>Internal Audit</option>
                  <option>VAT Compliance Audit</option>
                  <option>Corporate Tax Audit</option>
                  <option>External Audit Readiness</option>
                  <option>Financial Due Diligence</option>
                  <option>Forensic Investigation</option>
                  <option>Not Sure — Need Advice</option>
                </select>
              </div>
            </div>

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

            <div className={styles.fg}>
              <label className={styles.label} htmlFor="au-msg">
                Additional Requirements <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea className={styles.textarea} id="au-msg" name="message"
                placeholder="Tell us about your requirement…"
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
              <img src="/whatsapplogo1.svg" alt="WhatsApp" width={30} height={30} />
              <a href="https://wa.me/971585570593" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
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