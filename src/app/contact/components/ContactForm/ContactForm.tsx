'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactForm.module.css';
import { supabase } from '../../../../../lib/supabase';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceRequired: string;
  hearAbout: string;
  message: string;
  agreePolicy: boolean;
}

interface FormErrors {
  firstName?: string;
  email?: string;
  phone?: string;
  company?: string;
  serviceRequired?: string;
  hearAbout?: string;
  message?: string;
  agreePolicy?: string;
}

const serviceOptions = [
  { value: '',                          label: '— Select a service —'              },
  { value: 'company-formation',         label: 'Company Formation'                 },
  { value: 'audit-services',            label: 'Audit Services'                    },
  { value: 'accounting-bookkeeping',    label: 'Accounting & Bookkeeping'          },
  { value: 'cmo-services',              label: 'CMO Services'                      },
  { value: 'insolvency-liquidation',    label: 'Insolvency Liquidation'            },
  { value: 'banking-services',          label: 'Banking Services'                  },
  { value: 'ai-cloud-services',         label: 'AI & Cloud Services'               },
  { value: 'management-consulting',     label: 'Management Consulting'             },
  { value: 'financial-advisory',        label: 'Financial Advisory'                },
  { value: 'consultation',              label: 'General Consultation'              },
  { value: 'partnership',               label: 'Partnership'                       },
  { value: 'other',                     label: 'Other'                             },
];

const hearAboutOptions = [
  { value: '',             label: '— Select —'      },
  { value: 'google',       label: 'Google Search'   },
  { value: 'google-ads',   label: 'Google Ads'      },
  { value: 'linkedin',     label: 'LinkedIn'        },
  { value: 'referral',     label: 'Referral / Word of Mouth' },
  { value: 'social-media', label: 'Social Media'   },
  { value: 'news',         label: 'News / Media'   },
  { value: 'other',        label: 'Other'           },
];

const INITIAL: FormData = {
  firstName: '', lastName: '', email: '', phone: '',
  company: '', serviceRequired: '', hearAbout: '', message: '', agreePolicy: false,
};

const SUPABASE_FUNCTION_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/functions/v1/send-email';

const sendEmail = async (to: string[], subject: string, html: string) => {
  await fetch(SUPABASE_FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to, subject, html }),
  });
};

export default function ContactForm() {
  const router = useRouter();

  const [formData,  setFormData]  = useState<FormData>(INITIAL);
  const [errors,    setErrors]    = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitErr, setSubmitErr] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const e: FormErrors = {};
    if (!formData.firstName.trim()) e.firstName = 'First name is required';
    if (!formData.email.trim())     e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                    e.email = 'Invalid email address';
    if (!formData.phone.trim())     e.phone = 'Phone is required';
    if (!formData.agreePolicy)      e.agreePolicy = 'You must agree to the privacy policy';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : value;
    setFormData(prev => ({ ...prev, [name]: fieldValue }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitErr(null);

    try {
      // 1. Save to Supabase
      const { error: dbError } = await supabase
        .from('contact_leads')
        .insert({
          name:             `${formData.firstName} ${formData.lastName}`.trim(),
          email:            formData.email.trim(),
          phone:            formData.phone.trim(),
          company:          formData.company.trim(),
          enquiry_type:     formData.serviceRequired,
          hear_about:       formData.hearAbout,
          message:          formData.message.trim(),
          source_page:      window.location.href,
          status:           'new',
        });

      if (dbError) throw new Error(`Database error: ${dbError.message}`);

      // 2. Internal team email HTML
      const detailsHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2563eb; padding: 24px 32px;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Contact Enquiry</h1>
          </div>
          <div style="padding: 32px; background: #f7f9fc; border: 1px solid #c8d0e0;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #555; width: 180px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${formData.firstName} ${formData.lastName}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;">Email</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${formData.email}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;">Phone / WhatsApp</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${formData.phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;">Company</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${formData.company || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;">Service Required</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${formData.serviceRequired || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;">How They Found Us</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${formData.hearAbout || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;">Additional Requirements</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${formData.message || '—'}</td></tr>
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
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Thank you, ${formData.firstName}!</h1>
          </div>
          <div style="padding: 32px; background: #f7f9fc; border: 1px solid #c8d0e0;">
            <p style="font-size: 15px; color: #333; line-height: 1.7;">
              We've received your enquiry. A senior consultant will review your requirements
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

      // 4. Send emails via Supabase Edge Function
      await Promise.allSettled([
        sendEmail(
          [formData.email],
          'We received your enquiry — Dillon & Bird',
          confirmHtml
        ),
        sendEmail(
          ['dinesh@dillonbird.com', 'praveen@dillonbird.com', 'senthil@dillonbird.com'],
          `New Contact Enquiry — ${formData.firstName} ${formData.lastName}`,
          detailsHtml
        ),
      ]);

      router.push('/success?from=contact');

    } catch (err) {
      setSubmitErr(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or WhatsApp us.'
      );
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.section}>

      {/* Hero */}
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Let&apos;s build something great together. Reach out today — your next big move starts here.
        </p>
      </div>

      {/* Form container */}
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          {/* First Name & Last Name */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text" id="firstName" name="firstName"
                placeholder="Sarah"
                value={formData.firstName} onChange={handleChange}
                className={`${styles.input} ${errors.firstName ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.firstName && <span className={styles.errorMessage}>{errors.firstName}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                type="text" id="lastName" name="lastName"
                placeholder="Al Mansoori"
                value={formData.lastName} onChange={handleChange}
                className={styles.input}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Work / Personal Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email" id="email" name="email"
                placeholder="you@company.com"
                value={formData.email} onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone / WhatsApp <span className={styles.required}>*</span>
              </label>
              <input
                type="tel" id="phone" name="phone"
                placeholder="+971 5X XXX XXXX"
                value={formData.phone} onChange={handleChange}
                className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
            </div>
          </div>

          {/* Company & Service Required */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Company Name
              </label>
              <input
                type="text" id="company" name="company"
                placeholder="Your Company"
                value={formData.company} onChange={handleChange}
                className={styles.input}
                disabled={isLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="serviceRequired" className={styles.label}>
                Service Required
              </label>
              <select
                id="serviceRequired" name="serviceRequired"
                value={formData.serviceRequired} onChange={handleChange}
                className={styles.select}
                disabled={isLoading}
              >
                {serviceOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* How Did You Find Us */}
          <div className={styles.formGroup}>
            <label htmlFor="hearAbout" className={styles.label}>
              How Did You Find Us
            </label>
            <select
              id="hearAbout" name="hearAbout"
              value={formData.hearAbout} onChange={handleChange}
              className={styles.select}
              disabled={isLoading}
            >
              {hearAboutOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Additional Requirements */}
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Additional Requirements
            </label>
            <textarea
              id="message" name="message"
              placeholder="Tell us about your requirements…"
              value={formData.message} onChange={handleChange}
              className={styles.textarea}
              disabled={isLoading}
            />
          </div>

          {/* Checkbox */}
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox" id="agreePolicy" name="agreePolicy"
              checked={formData.agreePolicy} onChange={handleChange}
              className={styles.checkbox} disabled={isLoading}
            />
            <label htmlFor="agreePolicy" className={styles.checkboxLabel}>
              I agree to the terms of the{' '}
              <a href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</a>
            </label>
            {errors.agreePolicy && (
              <span className={styles.errorMessage}>{errors.agreePolicy}</span>
            )}
          </div>

          {/* Submit error */}
          {submitErr && (
            <p className={styles.submitErrMsg}>⚠ {submitErr}</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending…' : 'Connect Now'}
          </button>

        </form>
      </div>
    </section>
  );
}