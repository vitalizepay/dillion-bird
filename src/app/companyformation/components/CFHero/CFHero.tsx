'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../lib/supabase';
import styles from './CFHero.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  emirate: string;
  structure: string;
  businessActivity: string;
  referralSource: string;
  message: string;
}

const initialForm: FormData = {
  firstName: '', lastName: '', companyName: '', email: '', phone: '',
  emirate: '', structure: '', businessActivity: '', referralSource: '', message: '',
};

export default function CFHero() {
  const router = useRouter()
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async () => {
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    if (!form.email || !form.email.includes('@')) newErrors.email = true;
    if (!form.phone) newErrors.phone = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setStatus('loading');

    // 1. Save to Supabase
    const { error } = await supabase.from('company_formation_leads').insert({
      first_name: form.firstName,
      last_name: form.lastName,
      company_name: form.companyName || null,
      email: form.email,
      phone: form.phone,
      emirate: form.emirate || 'Not specified',
      structure: form.structure || 'Not specified',
      business_activity: form.businessActivity,
      referral_source: form.referralSource || 'Not specified',
      message: form.message,
      source_page: window.location.href,
    });

    if (error) { console.error(error); setStatus('error'); return; }

    // 2. Send email via Web3Forms to both recipients
    const w3res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New Company Formation Enquiry — ${form.firstName} ${form.lastName}`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email,
        message: `
NEW COMPANY FORMATION LEAD
===========================

Name              : ${form.firstName} ${form.lastName}
Company Name      : ${form.companyName || '—'}
Email             : ${form.email}
Phone / WhatsApp  : ${form.phone}
Emirate           : ${form.emirate || '—'}
Structure         : ${form.structure || '—'}
Business Activity : ${form.businessActivity || '—'}
Referral Source   : ${form.referralSource || '—'}

Additional Notes  :
${form.message || '—'}

===========================
Submitted via: ${window.location.href}
        `.trim(),
      }),
    });

    if (!w3res.ok) console.error('Web3Forms error:', await w3res.text());

    // 3. Send to second recipient separately
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: `New Company Formation Enquiry — ${form.firstName} ${form.lastName}`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email,
        email: 'praveen@dillonbird.com',
        message: `
NEW COMPANY FORMATION LEAD
===========================

Name              : ${form.firstName} ${form.lastName}
Company Name      : ${form.companyName || '—'}
Email             : ${form.email}
Phone / WhatsApp  : ${form.phone}
Emirate           : ${form.emirate || '—'}
Structure         : ${form.structure || '—'}
Business Activity : ${form.businessActivity || '—'}
Referral Source   : ${form.referralSource || '—'}

Additional Notes  :
${form.message || '—'}

===========================
Submitted via: ${window.location.href}
        `.trim(),
      }),
    });

    router.push('/success?from=companyformation');
  };

  return (
    <section className={styles.hero}>
      {/* LEFT */}
      <div className={styles.heroL}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          <span>UAE's Trusted Company Formation Consultants</span>
        </div>
        <p className={styles.eyebrow}>Company Formation · UAE &amp; GCC</p>
        <h1 className={styles.h1}>
          Launch Your UAE <br /> Business
          <em> in as Little <br /> as 5 Days.</em>
        </h1>
        <p className={styles.body}>
          Mainland or Free Zone — we handle everything from trade licence and visa
          applications to corporate banking and compliance. One expert team, zero hassle.
        </p>
        <div className={styles.acts}>
          <Link href="#contact" className={styles.btnPrimary}>Start My Company →</Link>
          <Link href="#process" className={styles.btnOutline}>See How It Works</Link>
        </div>
        <div className={styles.pills}>
          {[
            { n: '5', l: 'Day Formation' },
            { n: '500+', l: 'Companies Formed' },
            { n: '40+', l: 'Free Zones' },
            { n: '100%', l: 'Foreign Ownership' },
          ].map(p => (
            <div className={styles.pill} key={p.n}>
              <span className={styles.pillN}>{p.n}</span>
              <span className={styles.pillL}>{p.l}</span>
            </div>
          ))}
        </div>
        <div className={styles.urgency}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Free consultations available this week — limited slots remaining</span>
        </div>
      </div>

      {/* RIGHT — FORM */}
      <div className={styles.heroR} id="contact">
        <div className={styles.formTag}>
          <div className={styles.formTagBar} />
          <span>Free Consultation</span>
        </div>
        <h2 className={styles.formH}>Get Your Free Company<br />Formation Assessment</h2>
        <p className={styles.formSub}>
          A senior consultant will review your requirements and respond within 24 hours — no obligation.
        </p>
        <div className={styles.trustRow}>
          {['No Hidden Fees', '100% Confidential', 'Response in 24 hrs'].map(t => (
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
            ✔ Thank you — a senior consultant will be in touch within 24 hours.
          </div>
        ) : (
          <div className={styles.form}>

            {/* First + Last Name */}
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="cf-fn">First Name *</label>
                <input className={styles.input} id="cf-fn" name="firstName" type="text"
                  placeholder="Sarah" autoComplete="given-name"
                  value={form.firstName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="cf-ln">Last Name *</label>
                <input className={styles.input} id="cf-ln" name="lastName" type="text"
                  placeholder="Al Mansoori" autoComplete="family-name"
                  value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            {/* Company Name — optional */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cf-cn">
                Company Name <span className={styles.optional}>(Optional)</span>
              </label>
              <input className={styles.input} id="cf-cn" name="companyName" type="text"
                placeholder="e.g. TradeNest FZE"
                value={form.companyName} onChange={handleChange} />
            </div>

            {/* Emirate — optional */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cf-em-loc">
                Emirate <span className={styles.optional}>(Optional)</span>
              </label>
              <select className={styles.select} id="cf-em-loc" name="emirate"
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

            {/* Email */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cf-em">Work / Personal Email *</label>
              <input className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                id="cf-em" name="email" type="email" placeholder="you@company.com"
                autoComplete="email" value={form.email} onChange={handleChange} />
            </div>

            {/* Phone */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cf-ph">Phone / WhatsApp *</label>
              <input className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                id="cf-ph" name="phone" type="tel" placeholder="+971 5X XXX XXXX"
                autoComplete="tel" value={form.phone} onChange={handleChange} />
            </div>

            {/* Structure */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cf-st">Structure Required</label>
              <select className={styles.select} id="cf-st" name="structure"
                value={form.structure} onChange={handleChange}>
                <option value="">— Select structure —</option>
                <option>Mainland LLC</option>
                <option>Free Zone Company</option>
                <option>Branch of Foreign Company</option>
                <option>Consulting</option>
                <option>Not Sure — Need Advice</option>
              </select>
            </div>

            {/* Business Activity */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cf-act">Business Activity</label>
              <input className={styles.input} id="cf-act" name="businessActivity" type="text"
                placeholder="e.g. E-commerce, Consulting, Trading…"
                value={form.businessActivity} onChange={handleChange} />
            </div>

            {/* Referral */}
            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cf-rf">How Did You Find Us?</label>
              <select className={styles.select} id="cf-rf" name="referralSource"
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
              <label className={styles.label} htmlFor="cf-msg">Additional Requirements</label>
              <textarea className={styles.textarea} id="cf-msg" name="message"
                placeholder="Visa quota, banking setup, any other details…"
                value={form.message} onChange={handleChange} />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>Something went wrong. Please try again or WhatsApp us.</p>
            )}

            <button className={styles.submitBtn} onClick={handleSubmit} disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Get My Free Consultation →'}
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