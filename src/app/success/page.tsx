'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import styles from './Success.module.css';

const MESSAGES: Record<string, { heading: string; sub: string; cta: string; ctaHref: string }> = {
  audit: {
    heading: "We've received your Audit enquiry.",
    sub: 'One of our senior audit professionals will review your submission and reach out within 1–2 business days.',
    cta: 'Back to Audit Services',
    ctaHref: '/audit',
  },
  companyformation: {
    heading: "Your Company Formation request is in.",
    sub: "Our company formation team will be in touch shortly to guide you through the next steps.",
    cta: 'Back to Company Formation',
    ctaHref: '/companyformation',
  },
  accountingbookkeeping: {
    heading: "Thanks for your Accounting enquiry.",
    sub: 'A member of our accounting team will contact you within 1–2 business days.',
    cta: 'Back to Accounting & Bookkeeping',
    ctaHref: '/accountingbookkeeping',
  },
  accountingfinancialservices: {
    heading: "We've got your Financial Services request.",
    sub: 'Our financial services team will be in touch with you shortly.',
    cta: 'Back to Financial Services',
    ctaHref: '/accountingfinancialservices',
  },
  financialplanninginvestorservices: {
    heading: "Your Investor Services enquiry is submitted.",
    sub: 'A specialist from our financial planning team will reach out within 1–2 business days.',
    cta: 'Back to Investor Services',
    ctaHref: '/financialplanninginvestorservices',
  },
  managementconsulting: {
    heading: "Your Management Consulting enquiry is received.",
    sub: 'One of our consultants will be in touch to discuss your requirements.',
    cta: 'Back to Management Consulting',
    ctaHref: '/managementconsulting',
  },
  corporateservices: {
    heading: "Your Corporate Services request is confirmed.",
    sub: 'Our corporate services team will contact you within 1–2 business days.',
    cta: 'Back to Corporate Services',
    ctaHref: '/corporateservices',
  },
  businesssetup: {
    heading: "Your Business Setup enquiry is with us.",
    sub: 'A business setup specialist will be in touch to walk you through your options.',
    cta: 'Back to Business Setup',
    ctaHref: '/businesssetup',
  },
  technologyconsulting: {
    heading: "We've received your Technology Consulting request.",
    sub: 'Our technology team will review your needs and get back to you shortly.',
    cta: 'Back to Technology Consulting',
    ctaHref: '/technologyconsulting',
  },
  cmolanding: {
    heading: "Your CMO Services enquiry is submitted.",
    sub: 'Our CMO team will reach out within 1–2 business days to discuss how we can support your growth.',
    cta: 'Back to CMO Services',
    ctaHref: '/cmolanding',
  },
  insolvencyliquidation: {
    heading: "Your Insolvency enquiry has been received.",
    sub: 'Our insolvency specialists treat all enquiries with strict confidentiality and will be in touch promptly.',
    cta: 'Back to Insolvency & Liquidation',
    ctaHref: '/insolvencyliquidation',
  },
  bankingservices: {
    heading: "Thanks for your Banking Services enquiry.",
    sub: 'A member of our banking team will contact you within 1–2 business days.',
    cta: 'Back to Banking Services',
    ctaHref: '/bankingservices',
  },
  partnership: {
    heading: "Your Partnership enquiry is received.",
    sub: 'Our partnerships team will review your message and get back to you shortly.',
    cta: 'Back to Partnerships',
    ctaHref: '/partnership',
  },
  contact: {
    heading: "Message received. Thank you.",
    sub: "We'll get back to you within 1–2 business days.",
    cta: 'Back to Home',
    ctaHref: '/',
  },
  careers: {
    heading: "Your application has been submitted.",
    sub: "A member of our talent team will personally review your application and respond within 5 business days.",
    cta: 'View Open Roles',
    ctaHref: '/careers/openroles',
  },
};

const DEFAULT = {
  heading: "Your enquiry has been submitted.",
  sub: "Thank you for reaching out. A member of our team will be in touch within 1–2 business days.",
  cta: 'Back to Home',
  ctaHref: '/',
};

function SuccessContent() {
  const params = useSearchParams();
  const from   = params.get('from') ?? '';
  const role   = params.get('role') ?? '';

  const base = MESSAGES[from] ?? DEFAULT;
  const msg  = (from === 'careers' && role)
    ? { ...base, heading: `Your application for ${role} has been submitted.` }
    : base;

  return (
    <div className={styles.page}>
      <div className={styles.card}>

        {/* Animated tick */}
        <div className={styles.iconWrap}>
          <svg className={styles.circle} viewBox="0 0 52 52">
            <circle className={styles.circleBg}   cx="26" cy="26" r="24" />
            <circle className={styles.circleRing} cx="26" cy="26" r="24" />
            <path   className={styles.tick} d="M14 26l8 8 16-16" />
          </svg>
        </div>

        <p className={styles.tag}>Submission Confirmed</p>
        <h1 className={styles.heading}>{msg.heading}</h1>
        <p className={styles.sub}>{msg.sub}</p>

        <div className={styles.divider} />

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="10" r="8"/>
              <path d="M10 6v4l2.5 2.5"/>
            </svg>
            <span>
              Response within{' '}
              <strong>{from === 'careers' ? '5 business days' : '1–2 business days'}</strong>
            </span>
          </div>
          <div className={styles.infoItem}>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.5 6.5l7.5 5 7.5-5M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"/>
            </svg>
            <span>Check your inbox — <strong>a confirmation email is on its way</strong></span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={msg.ctaHref} className={styles.btnPrimary}>
            {msg.cta}
          </Link>
          <Link href="/" className={styles.btnGhost}>
            Go to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}