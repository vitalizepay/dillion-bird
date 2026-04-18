'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../lib/supabase';
import styles from './BankingHero.module.css';

interface FormData {
  firstName: string; lastName: string; companyName: string;
  role: string; email: string; phone: string;
  emirate: string; serviceType: string; message: string;
}

const initial: FormData = {
  firstName: '', lastName: '', companyName: '', role: '',
  email: '', phone: '', emirate: '', serviceType: '', message: '',
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

const scrollToServices = () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
};

export default function BankingHero() {
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
    const { error } = await supabase.from('banking_leads').insert({
      first_name:   form.firstName,
      last_name:    form.lastName,
      company_name: form.companyName || null,
      role:         form.role || 'Not specified',
      email:        form.email,
      phone:        form.phone,
      emirate:      form.emirate || 'Not specified',
      service_type: form.serviceType || 'Not specified',
      message:      form.message,
      source_page:  window.location.href,
    });
    if (error) { console.error(error); setStatus('error'); return; }

    // 2. Internal team email HTML
    const detailsHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; padding: 24px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">New Banking Advisory Enquiry</h1>
        </div>
        <div style="padding: 32px; background: #f7f9fc; border: 1px solid #c8d0e0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #555; width: 180px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.firstName} ${form.lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Company Name</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.companyName || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Role</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.role || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Email</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.email}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Phone / WhatsApp</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Emirate</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.emirate || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Service Required</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.serviceType || '—'}</td></tr>
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
            We've received your banking advisory enquiry. A senior specialist will review
            your requirements and be in touch within <strong>24 hours</strong>.
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
        `New Banking Advisory Enquiry — ${form.firstName} ${form.lastName}`,
        detailsHtml
      ),
    ]);

    router.push('/success?from=bankingservices');
  };

  return (
    <section className={styles.hero}>

      {/* LEFT */}
      <div className={styles.heroL}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          <span>UAE Banking Advisory Specialists</span>
        </div>
        <p className={styles.eyebrow}>Banking &amp; Financing Services</p>
        <h1 className={styles.h1}>
          Strategic Banking<br />
          Advisory for <em>Growth</em><br />
          &amp; Resilience
        </h1>
        <p className={styles.body}>
          From structuring complex debt facilities to managing multi-bank credit relationships
          across the UAE and GCC, Dillon &amp; Bird delivers independent banking advisory
          that puts your business interests first.
        </p>
        <div className={styles.acts}>
          <button onClick={scrollToContact} className={styles.btnPrimary}>
            Request Free Consultation →
          </button>
          <button onClick={scrollToServices} className={styles.btnOutline}>
            Our Services ↓
          </button>
        </div>
        <div className={styles.pills}>
          {[
            { n: '15+',    l: 'Years Experience' },
            { n: 'AED 2B+', l: 'Financing Facilitated' },
            { n: '30+',    l: 'Banking Relationships' },
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
          <span>Banking Advisory</span>
        </div>
        <h2 className={styles.formH}>Speak to a<br />Banking Specialist</h2>
        <p className={styles.formSub}>
          Free initial consultation · Response within 24 hours · Confidential
        </p>
        <div className={styles.trustRow}>
          {['Free Consultation', '100% Confidential', 'Response in 24 hrs'].map(t => (
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
            ✔ Thank you — a banking specialist will be in touch within 24 hours.
          </div>
        ) : (
          <div className={styles.form}>

            {/* First + Last Name */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="bk-fn">First Name *</label>
                <input className={styles.input} id="bk-fn" name="firstName" type="text"
                  placeholder="Ahmed" autoComplete="given-name"
                  value={form.firstName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="bk-ln">Last Name</label>
                <input className={styles.input} id="bk-ln" name="lastName" type="text"
                  placeholder="Al Mansouri" autoComplete="family-name"
                  value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            {/* Work Email */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="bk-em">Work / Personal Email *</label>
              <input className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                id="bk-em" name="email" type="email" placeholder="ahmed@company.ae"
                autoComplete="email" value={form.email} onChange={handleChange} />
            </div>

            {/* Phone */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="bk-ph">Phone / WhatsApp *</label>
              <input className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                id="bk-ph" name="phone" type="tel" placeholder="+971 50 000 0000"
                autoComplete="tel" value={form.phone} onChange={handleChange} />
            </div>

            {/* Company Name + Role */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="bk-co">Company Name</label>
                <input className={styles.input} id="bk-co" name="companyName" type="text"
                  placeholder="Your Company" autoComplete="organization"
                  value={form.companyName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="bk-ro">Your Role</label>
                <input className={styles.input} id="bk-ro" name="role" type="text"
                  placeholder="CFO / Finance Director"
                  value={form.role} onChange={handleChange} />
              </div>
            </div>

            {/* Emirate + Service Required */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="bk-loc">
                  Emirate <span className={styles.optional}>(Optional)</span>
                </label>
                <select className={styles.select} id="bk-loc" name="emirate"
                  value={form.emirate} onChange={handleChange}>
                  <option value="">— Select —</option>
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
                <label className={styles.label} htmlFor="bk-sv">Service Required</label>
                <select className={styles.select} id="bk-sv" name="serviceType"
                  value={form.serviceType} onChange={handleChange}>
                  <option value="">— Select —</option>
                  <option>Debt Financing Advisory</option>
                  <option>Loan / Credit Facility Restructuring</option>
                  <option>Bank Credit Relationship Management</option>
                  <option>Project Financing &amp; Feasibility</option>
                  <option>Financial Modelling &amp; Projections</option>
                  <option>Trade Financing Advisory</option>
                  <option>Multiple / Not Sure Yet</option>
                </select>
              </div>
            </div>

            {/* Additional Requirements */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="bk-msg">
                Additional Requirements <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea className={styles.textarea} id="bk-msg" name="message"
                placeholder="Tell us about your requirement…"
                value={form.message} onChange={handleChange} />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please try again or WhatsApp us.</p>
            )}

            <button className={styles.submitBtn} onClick={handleSubmit} disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Request Free Consultation →'}
            </button>

            <p className={styles.privacy}>
              By submitting you agree to our <Link href="/privacy-policy">Privacy Policy</Link>.
              Your information is kept strictly confidential.
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