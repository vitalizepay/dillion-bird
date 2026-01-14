'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

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
  { value: '', label: '-Select-' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'support', label: 'Support' },
  { value: 'other', label: 'Other' },
];

const hearAboutOptions = [
  { value: '', label: '-Select-' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'referral', label: 'Referral' },
  { value: 'search', label: 'Search Engine' },
  { value: 'news', label: 'News/Media' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: '',
    hearAbout: '',
    message: '',
    agreePolicy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.enquiryType) newErrors.enquiryType = 'Enquiry type is required';
    if (!formData.hearAbout) newErrors.hearAbout = 'Please select how you heard about us';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.agreePolicy) newErrors.agreePolicy = 'You must agree to the privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);

          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              enquiryType: '',
              hearAbout: '',
              message: '',
              agreePolicy: false,
            });
            setSubmitted(false);
          }, 2000);
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className={styles.section}>
      {/* Hero Section - Outside grey box */}
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Let's build something great together. Reach out today — your next big move starts here.
        </p>
      </div>

      {/* Form Container - Grey box */}
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name & Email Row */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
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
                type="email"
                id="email"
                name="email"
                placeholder="example@company.com"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>
          </div>

          {/* Phone & Company Row */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+11 000 000 000"
                value={formData.phone}
                onChange={handleChange}
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
                type="text"
                id="company"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
                className={`${styles.input} ${errors.company ? styles.error : ''}`}
                disabled={isLoading}
              />
              {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
            </div>
          </div>

          {/* Enquiry Type & How Did You Hear Row */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="enquiryType" className={styles.label}>
                Enquiry Type <span className={styles.required}>*</span>
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className={`${styles.select} ${errors.enquiryType ? styles.error : ''}`}
                disabled={isLoading}
              >
                {enquiryTypeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.enquiryType && <span className={styles.errorMessage}>{errors.enquiryType}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="hearAbout" className={styles.label}>
                How Did You Hear About Us <span className={styles.required}>*</span>
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className={`${styles.select} ${errors.hearAbout ? styles.error : ''}`}
                disabled={isLoading}
              >
                {hearAboutOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
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
              id="message"
              name="message"
              placeholder="Leave us a Message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
              disabled={isLoading}
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
          </div>

          {/* Checkbox */}
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="agreePolicy"
              name="agreePolicy"
              checked={formData.agreePolicy}
              onChange={handleChange}
              className={styles.checkbox}
              disabled={isLoading}
            />
            <label htmlFor="agreePolicy" className={styles.checkboxLabel}>
              I agree to the terms of the{' '}
              <a href="/privacy-policy" className={styles.privacyLink}>
                Privacy Policy
              </a>
            </label>
            {errors.agreePolicy && <span className={styles.errorMessage}>{errors.agreePolicy}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`${styles.submitButton} ${submitted ? styles.success : ''} ${
              isLoading ? styles.loading : ''
            }`}
            disabled={submitted || isLoading}
          >
            {submitted ? 'Message Sent!' : isLoading ? 'Sending...' : 'Connect Now'}
          </button>
        </form>
      </div>
    </section>
  );
}
