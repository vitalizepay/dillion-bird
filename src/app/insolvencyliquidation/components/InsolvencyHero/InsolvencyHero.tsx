'use client';
import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../../../../lib/supabase';
import styles from './InsolvencyHero.module.css';

interface FormData {
  firstName: string; lastName: string; companyName: string;
  email: string; phone: string; emirate: string;
  serviceType: string; referralSource: string; message: string;
}

const initial: FormData = {
  firstName: '', lastName: '', companyName: '', email: '',
  phone: '', emirate: '', serviceType: '', referralSource: '', message: '',
};

export default function InsolvencyHero() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    const { error } = await supabase.from('insolvency_leads').insert({
      first_name:      form.firstName,
      last_name:       form.lastName,
      company_name:    form.companyName || null,
      email:           form.email,
      phone:           form.phone,
      emirate:         form.emirate || 'Not specified',
      service_type:    form.serviceType || 'Not specified',
      referral_source: form.referralSource || 'Not specified',
      message:         form.message,
      source_page:     window.location.href,
    });

    if (error) { console.error(error); setStatus('error'); return; }

    // 2. Email body
    const msgBody = `
INSOLVENCY LEAD
===========================
Name              : ${form.firstName} ${form.lastName}
Company Name      : ${form.companyName || '—'}
Email             : ${form.email}
Phone / WhatsApp  : ${form.phone}
Emirate           : ${form.emirate || '—'}
Service Type      : ${form.serviceType || '—'}
Referral Source   : ${form.referralSource || '—'}
Additional Notes  : ${form.message || '—'}
===========================
Submitted via: ${window.location.href}
    `.trim();

    // 3. Payload builder — each call goes to its own verified recipient
    const makePayload = (toEmail: string) => JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject:    `New Insolvency Enquiry — ${form.firstName} ${form.lastName}`,
      from_name:  `${form.firstName} ${form.lastName}`,
      replyto:    form.email,
      email:      toEmail,
      message:    msgBody,
    });

    // 4. Send to both emails in parallel — allSettled so one failure won't block the other
    const results = await Promise.allSettled([
      fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    makePayload('senthil@dillonbird.com'),
      }),
      fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    makePayload('praveen@dillonbird.com'),
      }),
    ]);

    results.forEach((result, i) => {
      if (result.status === 'rejected') {
        console.error(`web3forms send ${i} failed:`, result.reason);
      }
    });

    setStatus('success');
  };

  return (
    <section className={styles.hero}>

      {/* ── LEFT ─────────────────────────────────────── */}
      <div className={styles.heroL}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          <span>Confidential Enquiries Welcome · Dubai, UAE</span>
        </div>
        <p className={styles.eyebrow}>Bankruptcy · Liquidation · Insolvency · UAE &amp; GCC</p>
        <h1 className={styles.h1}>
          Close the Chapter.<br />
          Protect What<br />
          <em>Matters Most.</em>
        </h1>
        <p className={styles.body}>
          UAE-licensed insolvency advisors guiding businesses and individuals through voluntary
          liquidation, court-supervised wind-downs, debt restructuring and creditor negotiations
          — with full confidentiality and a clear path forward.
        </p>
        <div className={styles.acts}>
          <Link href="#contact" className={styles.btnPrimary}>
            Get Confidential Advice →
          </Link>
          <a
            href="https://wa.me/971585570593"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            WhatsApp Us Now
          </a>
        </div>
        <div className={styles.pills}>
          {[
            { n: 'UAE',  l: 'Licensed Advisors' },
            { n: '24hr', l: 'Confidential Response' },
            { n: '360°', l: 'End-to-End Advisory' },
          ].map(p => (
            <div className={styles.pill} key={p.n}>
              <span className={styles.pillN}>{p.n}</span>
              <span className={styles.pillL}>{p.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — FORM ─────────────────────────────── */}
      <div className={styles.heroR} id="contact">
        <div className={styles.formTag}>
          <div className={styles.formTagBar} />
          <span>Confidential · No Obligation</span>
        </div>
        <h2 className={styles.formH}>
          How Can We Help<br />Resolve Your Situation?
        </h2>
        <p className={styles.formSub}>
          Response within 24 hours. Your details are never shared.
        </p>
        <div className={styles.trustRow}>
          {['100% Confidential', 'Fixed Fees', 'Response in 24 hrs'].map(t => (
            <div className={styles.trustChip} key={t}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t}
            </div>
          ))}
        </div>

        {status === 'success' ? (
          <div className={styles.successBox}>
            ✔ Thank you — a senior consultant will be in touch within 24 hours.
          </div>
        ) : (
          <div className={styles.form}>

            {/* First + Last */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="in-fn">First Name</label>
                <input className={styles.input} id="in-fn" name="firstName" type="text"
                  placeholder="Ahmed" autoComplete="given-name"
                  value={form.firstName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="in-ln">Last Name</label>
                <input className={styles.input} id="in-ln" name="lastName" type="text"
                  placeholder="Al Mansoori" autoComplete="family-name"
                  value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            {/* Company */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="in-cn">
                Company Name <span className={styles.optional}>(Optional)</span>
              </label>
              <input className={styles.input} id="in-cn" name="companyName" type="text"
                placeholder="Your company (if applicable)"
                value={form.companyName} onChange={handleChange} />
            </div>

            {/* Email */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="in-em">Work / Personal Email *</label>
              <input
                className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                id="in-em" name="email" type="email"
                placeholder="you@company.com" autoComplete="email"
                value={form.email} onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="in-ph">Phone / WhatsApp *</label>
              <input
                className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                id="in-ph" name="phone" type="tel"
                placeholder="+971 5X XXX XXXX" autoComplete="tel"
                value={form.phone} onChange={handleChange}
              />
            </div>

            {/* Emirate + Service */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="in-loc">
                  Emirate <span className={styles.optional}>(Optional)</span>
                </label>
                <select className={styles.select} id="in-loc" name="emirate"
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
                <label className={styles.label} htmlFor="in-sv">Service Required</label>
                <select className={styles.select} id="in-sv" name="serviceType"
                  value={form.serviceType} onChange={handleChange}>
                  <option value="">— Select —</option>
                  <option>Voluntary Company Liquidation</option>
                  <option>Court-Supervised Liquidation</option>
                  <option>Debt Restructuring &amp; Workout</option>
                  <option>Creditor Negotiation</option>
                  <option>Business Rescue &amp; Turnaround</option>
                  <option>Cross-Border Insolvency</option>
                  <option>Not Sure — Need Advice</option>
                </select>
              </div>
            </div>

            {/* Referral */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="in-rf">How Did You Find Us?</label>
              <select className={styles.select} id="in-rf" name="referralSource"
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
              <label className={styles.label} htmlFor="in-msg">
                Brief Description <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea className={styles.textarea} id="in-msg" name="message"
                placeholder="Briefly describe your situation…"
                value={form.message} onChange={handleChange} />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again or WhatsApp us.
              </p>
            )}

            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting…' : 'Request Free Consultation →'}
            </button>

            <p className={styles.privacy}>
              Your details are confidential and never shared.{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>

            <div className={styles.waRow}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#25d366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.956.537 3.784 1.47 5.35L2 22l4.789-1.453A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 12 2z" />
              </svg>
              <a href="https://wa.me/971585570593" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
              <span className={styles.sep}>·</span>
              <a href="tel:+971585570593">+971 585 570 593</a>
            </div>

          </div>
        )}
      </div>

    </section>
  );
}