'use client';

import { useState } from 'react';
import Link from 'next/link';
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

export default function BankingHero() {
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

    const { error } = await supabase.from('banking_leads').insert({
      first_name: form.firstName, last_name: form.lastName,
      company_name: form.companyName || null,
      role: form.role || 'Not specified',
      email: form.email, phone: form.phone,
      emirate: form.emirate || 'Not specified',
      service_type: form.serviceType || 'Not specified',
      message: form.message,
      source_page: window.location.href,
    });
    if (error) { console.error(error); setStatus('error'); return; }

    const msgBody = `
BANKING ADVISORY LEAD
===========================
Name              : ${form.firstName} ${form.lastName}
Company Name      : ${form.companyName || '—'}
Role              : ${form.role || '—'}
Email             : ${form.email}
Phone / WhatsApp  : ${form.phone}
Emirate           : ${form.emirate || '—'}
Service Required  : ${form.serviceType || '—'}
Requirement       : ${form.message || '—'}
===========================
Submitted via: ${window.location.href}
    `.trim();

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New Banking Advisory Enquiry — ${form.firstName} ${form.lastName}`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email, message: msgBody,
      }),
    });

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New Banking Advisory Enquiry — ${form.firstName} ${form.lastName}`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email,
        email: 'dinesh@dillonbird.com',
        message: msgBody,
      }),
    });

    setStatus('success');
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
          From structuring complex debt facilities to managing multi-bank credit relationships across the UAE and GCC, Dillon &amp; Bird delivers independent banking advisory that puts your business interests first.
        </p>
        <div className={styles.acts}>
          <Link href="#contact" className={styles.btnPrimary}>Request Free Consultation →</Link>
          <Link href="#services" className={styles.btnOutline}>Our Services ↓</Link>
        </div>
        <div className={styles.pills}>
          {[
            { n: '15+', l: 'Years Experience' },
            { n: 'AED 2B+', l: 'Financing Facilitated' },
            { n: '30+', l: 'Banking Relationships' },
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
                <label className={styles.label} htmlFor="bk-fn">First Name</label>
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

            {/* Company + Role */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="bk-co">Company</label>
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

            {/* Message */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="bk-msg">
                Tell Us About Your Requirement <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea className={styles.textarea} id="bk-msg" name="message"
                placeholder="Brief overview of your financing need or challenge…"
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.956.537 3.784 1.47 5.35L2 22l4.789-1.453A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 12 2z" />
              </svg>
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