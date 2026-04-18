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

    // 1. Save to Supabase
    const { error } = await supabase.from('technology_consulting_leads').insert({
      first_name:      form.firstName,
      last_name:       form.lastName,
      company_name:    form.companyName || null,
      email:           form.email,
      role:            form.role || 'Not specified',
      phone:           form.phone,
      emirate:         form.emirate || 'Not specified',
      service_type:    form.serviceType || 'Not specified',
      company_size:    form.companySize || 'Not specified',
      referral_source: form.referralSource || 'Not specified',
      message:         form.message,
      source_page:     window.location.href,
    });
    if (error) { console.error(error); setStatus('error'); return; }

    // 2. Internal team email HTML
    const detailsHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; padding: 24px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 20px;">AI & Cloud Consulting Enquiry</h1>
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
            <tr><td style="padding: 8px 0; color: #555;">Company Size</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${form.companySize || '—'}</td></tr>
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
            We've received your ai & cloud consulting enquiry. A senior consultant will review
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
        `New AI & Cloud Consulting Enquiry — ${form.firstName} ${form.lastName}`,
        detailsHtml
      ),
    ]);

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
          From AI strategy and cloud migration to OpenShift deployments and on-premise
          infrastructure — Dillon &amp; Bird delivers enterprise technology consulting
          that moves the commercial needle, not just the technical one.
        </p>

        <div className={styles.acts}>
          <button onClick={scrollToContact} className={styles.btnPrimary}>
            → Get a Free Consultation
          </button>
          <button onClick={scrollToServices} className={styles.btnOutline}>
            View Our Services
          </button>
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
              <label className={styles.label} htmlFor="tc-fn">First Name *</label>
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
            <label className={styles.label} htmlFor="tc-type">Service Required</label>
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
              placeholder="Tell us about your requirement…"
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
      </div>
    </section>
  );
}