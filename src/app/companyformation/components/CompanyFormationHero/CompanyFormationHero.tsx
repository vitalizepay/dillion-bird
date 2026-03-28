'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../../../../lib/supabase';
import styles from './CompanyFormationHero.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  structure: string;
  businessActivity: string;
  referralSource: string;
  message: string;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  structure: '',
  businessActivity: '',
  referralSource: '',
  message: '',
};

export default function CompanyFormationHero() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async () => {
    const newErrors: Partial<Record<keyof FormData, boolean>> = {};
    if (!form.email || !form.email.includes('@')) newErrors.email = true;
    if (!form.phone) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');

    const { error } = await supabase.from('company_formation_leads').insert({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      structure: form.structure || 'Not specified',
      business_activity: form.businessActivity,
      referral_source: form.referralSource || 'Not specified',
      message: form.message,
      source_page: window.location.href,
    });

    if (error) {
      console.error(error);
      setStatus('error');
      return;
    }

    setStatus('success');
  };

  return (
    <section className={styles.hero}>
      {/* LEFT SIDE */}
      <div className={styles.heroL}>
        <div className={styles.heroBadge}>
          <div className={styles.badgeDot} />
          <span>UAE's Trusted Company Formation Consultants</span>
        </div>
        <div className={styles.heroEyebrow}>Company Formation · UAE &amp; GCC</div>
        <h1 className={styles.heroH1}>
          Launch Your UAE Business<br />
          <em>in as Little as 5 Days.</em>
        </h1>
        <p className={styles.heroBody}>
          Mainland or Free Zone — we handle everything from trade licence and visa applications
          to corporate banking and compliance. One expert team, zero hassle.
        </p>
        <div className={styles.heroActs}>
          <Link href="#contact" className={styles.btnP}>Start My Company →</Link>
          <Link href="#process" className={styles.btnG}>See How It Works</Link>
        </div>
        <div className={styles.heroPills}>
          {[
            { n: '5', l: 'Day\nFormation' },
            { n: '500+', l: 'Companies\nFormed' },
            { n: '40+', l: 'Free Zones\nAvailable' },
            { n: '100%', l: 'Foreign\nOwnership' },
          ].map((p) => (
            <div className={styles.pill} key={p.n}>
              <span className={styles.pillN}>{p.n}</span>
              <span className={styles.pillL}>{p.l}</span>
            </div>
          ))}
        </div>
        <div className={styles.urgency}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Free consultations available this week — limited slots remaining</span>
        </div>
      </div>

      {/* RIGHT SIDE — FORM */}
      <div className={styles.heroR} id="contact">
        <div className={styles.fpTag}>
          <div className={styles.fpTagBar} />
          <span>Free Consultation</span>
        </div>
        <h2 className={styles.fpH}>Get Your Free Company<br />Formation Assessment</h2>
        <p className={styles.fpSub}>
          A senior consultant will review your requirements and respond within 24 hours — no obligation.
        </p>

        <div className={styles.formTrust}>
          {['No Hidden Fees', '100% Confidential', 'Response in 24 hrs'].map((t) => (
            <div className={styles.ftChip} key={t}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t}
            </div>
          ))}
        </div>

        {status === 'success' ? (
          <div className={styles.fOk}>
            ✔ Thank you — a senior consultant will be in touch within 24 hours.
          </div>
        ) : (
          <div className={styles.form}>
            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.fl} htmlFor="f-fn">First Name *</label>
                <input className={styles.fi} id="f-fn" name="firstName" type="text"
                  placeholder="Sarah" autoComplete="given-name"
                  value={form.firstName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.fl} htmlFor="f-ln">Last Name *</label>
                <input className={styles.fi} id="f-ln" name="lastName" type="text"
                  placeholder="Al Mansoori" autoComplete="family-name"
                  value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="f-em">Work / Personal Email *</label>
              <input
                className={`${styles.fi} ${errors.email ? styles.err : ''}`}
                id="f-em" name="email" type="email"
                placeholder="you@company.com" autoComplete="email"
                value={form.email} onChange={handleChange} />
            </div>

            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="f-ph">Phone / WhatsApp *</label>
              <input
                className={`${styles.fi} ${errors.phone ? styles.err : ''}`}
                id="f-ph" name="phone" type="tel"
                placeholder="+971 5X XXX XXXX" autoComplete="tel"
                value={form.phone} onChange={handleChange} />
            </div>

            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="f-st">Structure Required</label>
              <select className={styles.fs} id="f-st" name="structure"
                value={form.structure} onChange={handleChange}>
                <option value="">— Select structure —</option>
                <option>Mainland LLC</option>
                <option>Free Zone Company</option>
                <option>Branch of Foreign Company</option>
                <option>Not Sure — Need Advice</option>
              </select>
            </div>

            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="f-act">Business Activity</label>
              <input className={styles.fi} id="f-act" name="businessActivity" type="text"
                placeholder="e.g. E-commerce, Consulting, Trading…"
                value={form.businessActivity} onChange={handleChange} />
            </div>

            <div className={styles.fg}>
              <label className={styles.fl} htmlFor="f-rf">How Did You Find Us?</label>
              <select className={styles.fs} id="f-rf" name="referralSource"
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
              <label className={styles.fl} htmlFor="f-msg">Additional Requirements</label>
              <textarea className={styles.fta} id="f-msg" name="message"
                placeholder="Visa quota, banking setup, any other details…"
                value={form.message} onChange={handleChange} />
            </div>

            {status === 'error' && (
              <p style={{ color: '#e53935', fontSize: '12px' }}>
                Something went wrong. Please try again or WhatsApp us.
              </p>
            )}

            <button className={styles.fBtn} onClick={handleSubmit}
              disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Get My Free Consultation →'}
            </button>

            <p className={styles.fpPriv}>
              By submitting you agree to our{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>.
              Your data is never sold or shared with third parties.
            </p>

            <div className={styles.fpWa}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 2C6.477 2 2 6.477 2 12c0 1.956.537 3.784 1.47 5.35L2 22l4.789-1.453A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 12 2z" />
              </svg>
              <a href="https://wa.me/971585570593" target="_blank" rel="noopener">Chat on WhatsApp</a>
              <span className={styles.fpWaSep}>·</span>
              <a href="tel:+971585570593">+971 585 570 593</a>
              <span className={styles.fpWaSep}>·</span>
              <span style={{ fontSize: '11px', color: 'var(--g400)' }}>Available Sun–Thu 9am–6pm GST</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}