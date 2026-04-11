'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../../../lib/supabase';
import styles from './CMOHero.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  emirate: string;
  cmoService: string;
  referralSource: string;
  message: string;
}

const initial: FormData = {
  firstName: '', lastName: '', companyName: '',
  email: '', phone: '', emirate: '',
  cmoService: '', referralSource: '', message: '',
};

const pills = [
  { n: '5',   l: 'CMO\nPillars' },
  { n: 'GCC', l: 'Regional\nExpertise' },
  { n: 'E2E', l: 'Strategy to\nExecution' },
];

const trustItems = ['No Long-Term Lock-in', '100% Confidential', 'Response in 24 hrs'];

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToServices = () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
};

export default function CMOHero() {
  const router = useRouter();
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

    const { error } = await supabase.from('cmo_leads').insert({
      first_name:      form.firstName,
      last_name:       form.lastName,
      company_name:    form.companyName || null,
      email:           form.email,
      phone:           form.phone,
      emirate:         form.emirate || 'Not specified',
      cmo_service:     form.cmoService || 'Not specified',
      referral_source: form.referralSource || 'Not specified',
      message:         form.message,
      source_page:     window.location.href,
    });

    if (error) { console.error(error); setStatus('error'); return; }

    const msgBody = `
FRACTIONAL CMO LEAD
===========================
Name             : ${form.firstName} ${form.lastName}
Company          : ${form.companyName || '—'}
Email            : ${form.email}
Phone / WhatsApp : ${form.phone}
Emirate          : ${form.emirate || '—'}
CMO Service      : ${form.cmoService || '—'}
Referral Source  : ${form.referralSource || '—'}
Marketing Goal   : ${form.message || '—'}
===========================
Submitted via: ${window.location.href}
    `.trim();

    const web3Payload = (toEmail?: string) => ({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: `New CMO Enquiry — ${form.firstName} ${form.lastName}`,
      from_name: `${form.firstName} ${form.lastName}`,
      replyto: form.email,
      ...(toEmail ? { email: toEmail } : {}),
      message: msgBody,
    });

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(web3Payload()),
    });

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(web3Payload('dinesh@dillonbird.com')),
    });

    router.push('/success?from=cmolanding');
  };

  return (
    <section className={styles.hero}>

      {/* ══ LEFT ══ */}
      <div className={styles.heroL}>
        <div className={styles.badge}>
          <div className={styles.badgeDot} />
          <span>Now Accepting Fractional CMO Engagements · GCC</span>
        </div>

        <p className={styles.eyebrow}>Do More!</p>

        <h1 className={styles.h1}>
          Senior Marketing<br />
          Leadership,<br />
          <em>Without the Overhead.</em>
        </h1>

        <p className={styles.body}>
          Dillon &amp; Bird embeds a Fractional Chief Marketing Officer directly
          into your business — delivering enterprise-grade strategy, digital
          execution, MarTech, and go-to-market leadership at a fraction of the
          full-time cost.
        </p>

        <div className={styles.acts}>
          <button onClick={scrollToContact} className={styles.btnPrimary}>
            → Request a Free CMO Consultation
          </button>
          <button onClick={scrollToServices} className={styles.btnOutline}>
            Explore All 5 Service Areas
          </button>
        </div>

        <div className={styles.pills}>
          {pills.map(p => (
            <div className={styles.pill} key={p.n}>
              <span className={styles.pillN}>{p.n}</span>
              <span className={styles.pillL} style={{ whiteSpace: 'pre-line' }}>
                {p.l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ RIGHT — FORM ══ */}
      <div className={styles.heroR} id="contact">
        <div className={styles.formTag}>
          <div className={styles.formTagBar} />
          <span>Free Discovery Call</span>
        </div>

        <h2 className={styles.formH}>
          What marketing challenge<br />can we solve together?
        </h2>
        <p className={styles.formSub}>
          A senior GCC consultant responds within 24 hours — no cost, no commitment.
        </p>

        <div className={styles.trustRow}>
          {trustItems.map(t => (
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

            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="cmo-fn">First Name</label>
                <input className={styles.input} id="cmo-fn" name="firstName"
                  type="text" placeholder="John" autoComplete="given-name"
                  value={form.firstName} onChange={handleChange} />
              </div>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="cmo-ln">Last Name</label>
                <input className={styles.input} id="cmo-ln" name="lastName"
                  type="text" placeholder="Smith" autoComplete="family-name"
                  value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cmo-co">
                Company <span className={styles.optional}>(Optional)</span>
              </label>
              <input className={styles.input} id="cmo-co" name="companyName"
                type="text" placeholder="Your Company" autoComplete="organization"
                value={form.companyName} onChange={handleChange} />
            </div>

            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cmo-em">Work Email *</label>
              <input
                className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                id="cmo-em" name="email" type="email"
                placeholder="john@company.com" autoComplete="email"
                value={form.email} onChange={handleChange} />
            </div>

            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cmo-ph">Phone / WhatsApp *</label>
              <input
                className={`${styles.input} ${errors.phone ? styles.inputErr : ''}`}
                id="cmo-ph" name="phone" type="tel"
                placeholder="+971 5X XXX XXXX" autoComplete="tel"
                value={form.phone} onChange={handleChange} />
            </div>

            <div className={styles.frow}>
              <div className={styles.fg}>
                <label className={styles.label} htmlFor="cmo-loc">
                  Emirate <span className={styles.optional}>(Optional)</span>
                </label>
                <select className={styles.select} id="cmo-loc" name="emirate"
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
                <label className={styles.label} htmlFor="cmo-svc">Area of Interest</label>
                <select className={styles.select} id="cmo-svc" name="cmoService"
                  value={form.cmoService} onChange={handleChange}>
                  <option value="">— Select —</option>
                  <option>Marketing Strategy Development</option>
                  <option>Digital Marketing Strategy</option>
                  <option>Performance Marketing &amp; Analytics</option>
                  <option>Marketing Technology (MarTech)</option>
                  <option>Go-To-Market Strategy</option>
                  <option>Full Fractional CMO Engagement</option>
                </select>
              </div>
            </div>

            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cmo-rf">How Did You Find Us?</label>
              <select className={styles.select} id="cmo-rf" name="referralSource"
                value={form.referralSource} onChange={handleChange}>
                <option value="">— Select —</option>
                <option>LinkedIn</option>
                <option>Google Search</option>
                <option>Google Ads</option>
                <option>Referral / Word of Mouth</option>
                <option>dillonbird.com</option>
                <option>Event / Conference</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.fg}>
              <label className={styles.label} htmlFor="cmo-msg">
                Your Marketing Goal{' '}
                <span className={styles.optional}>(Optional)</span>
              </label>
              <textarea className={styles.textarea} id="cmo-msg" name="message"
                placeholder="Describe your biggest marketing challenge or goal…"
                value={form.message} onChange={handleChange} />
            </div>

            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again or WhatsApp us.
              </p>
            )}

            <button className={styles.submitBtn} onClick={handleSubmit}
              disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting…' : 'Request Free CMO Consultation →'}
            </button>

            <p className={styles.privacy}>
              By submitting you agree to our{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>.
              Your details are confidential and never shared.
            </p>

            <div className={styles.waRow}>
  <img src="/whatsapplogo1.svg" alt="WhatsApp" width={30} height={30} />
  <a href="https://wa.me/971585570593?text=Hi%2C%20I%27m%20interested%20in%20a%20Fractional%20CMO%20consultation" target="_blank" rel="noopener noreferrer">
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