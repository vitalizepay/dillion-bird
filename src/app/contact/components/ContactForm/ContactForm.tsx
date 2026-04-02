'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactForm.module.css';
import { supabase } from '../../../../../lib/supabase';;

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  enquiryType: string;
  hearAbout: string;
  message: string;
  agreePolicy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  enquiryType?: string;
  hearAbout?: string;
  message?: string;
  agreePolicy?: string;
}

const enquiryTypeOptions = [
  { value: '',             label: '-Select-'    },
  { value: 'consultation', label: 'Consultation' },
  { value: 'partnership',  label: 'Partnership'  },
  { value: 'support',      label: 'Support'      },
  { value: 'other',        label: 'Other'        },
];

const hearAboutOptions = [
  { value: '',           label: '-Select-'      },
  { value: 'social-media', label: 'Social Media' },
  { value: 'referral',   label: 'Referral'      },
  { value: 'search',     label: 'Search Engine' },
  { value: 'news',       label: 'News/Media'    },
  { value: 'other',      label: 'Other'         },
];

const INITIAL: FormData = {
  name: '', email: '', phone: '', company: '',
  enquiryType: '', hearAbout: '', message: '', agreePolicy: false,
};

export default function ContactForm() {
  const router = useRouter();

  const [formData,  setFormData]  = useState<FormData>(INITIAL);
  const [errors,    setErrors]    = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitErr, setSubmitErr] = useState<string | null>(null);

  /* ── Validation ── */
  const validateForm = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim())    e.name = 'Name is required';
    if (!formData.email.trim())   e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  e.email = 'Invalid email address';
    if (!formData.phone.trim())   e.phone = 'Phone is required';
    if (!formData.company.trim()) e.company = 'Company is required';
    if (!formData.enquiryType)    e.enquiryType = 'Enquiry type is required';
    if (!formData.hearAbout)      e.hearAbout = 'Please select how you heard about us';
    if (!formData.message.trim()) e.message = 'Message is required';
    if (!formData.agreePolicy)    e.agreePolicy = 'You must agree to the privacy policy';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ── Field change ── */
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

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitErr(null);

    try {
      /* 1 — Supabase insert */
      const { error: dbError } = await supabase
        .from('contact_leads')
        .insert({
          name:         formData.name.trim(),
          email:        formData.email.trim(),
          phone:        formData.phone.trim(),
          company:      formData.company.trim(),
          enquiry_type: formData.enquiryType,
          hear_about:   formData.hearAbout,
          message:      formData.message.trim(),
          source_page:  window.location.href,
          status:       'new',
        });

      if (dbError) throw new Error(`Database error: ${dbError.message}`);

      /* 2 — Web3Forms notification email */
      const msgBody = `
CONTACT FORM LEAD
===========================
Name           : ${formData.name}
Email          : ${formData.email}
Phone          : ${formData.phone}
Company        : ${formData.company}
Enquiry Type   : ${formData.enquiryType}
How They Found : ${formData.hearAbout}
Message        : ${formData.message}
===========================
Submitted via: ${window.location.href}
      `.trim();

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject:    `New Contact Enquiry — ${formData.name} (${formData.enquiryType})`,
          from_name:  formData.name,
          replyto:    formData.email,
          message:    msgBody,
        }),
      });

      /* Also CC dinesh@ */
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject:    `New Contact Enquiry — ${formData.name} (${formData.enquiryType})`,
          from_name:  formData.name,
          replyto:    formData.email,
          email:      'dinesh@dillonbird.com',
          message:    msgBody,
        }),
      });

      /* 3 — Redirect to success page */
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

          {/* Name & Email */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text" id="name" name="name"
                placeholder="Your name"
                value={formData.name} onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email" id="email" name="email"
                placeholder="example@company.com"
                value={formData.email} onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>
          </div>

          {/* Phone & Company */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                type="tel" id="phone" name="phone"
                placeholder="+971 50 000 0000"
                value={formData.phone} onChange={handleChange}
                className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Company Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text" id="company" name="company"
                placeholder="Company name"
                value={formData.company} onChange={handleChange}
                className={`${styles.input} ${errors.company ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
            </div>
          </div>

          {/* Enquiry Type & How Did You Hear */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="enquiryType" className={styles.label}>
                Enquiry Type <span className={styles.required}>*</span>
              </label>
              <select
                id="enquiryType" name="enquiryType"
                value={formData.enquiryType} onChange={handleChange}
                className={`${styles.select} ${errors.enquiryType ? styles.error : ''}`}
                disabled={isLoading}
              >
                {enquiryTypeOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {errors.enquiryType && <span className={styles.errorMessage}>{errors.enquiryType}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="hearAbout" className={styles.label}>
                How Did You Hear About Us <span className={styles.required}>*</span>
              </label>
              <select
                id="hearAbout" name="hearAbout"
                value={formData.hearAbout} onChange={handleChange}
                className={`${styles.select} ${errors.hearAbout ? styles.error : ''}`}
                disabled={isLoading}
              >
                {hearAboutOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {errors.hearAbout && <span className={styles.errorMessage}>{errors.hearAbout}</span>}
            </div>
          </div>

          {/* Message */}
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message" name="message"
              placeholder="Leave us a message…"
              value={formData.message} onChange={handleChange}
              className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
              disabled={isLoading}
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
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