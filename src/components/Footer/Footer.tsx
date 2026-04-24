'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@lib/supabase';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail]     = useState('');
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error' | 'invalid'>('idle');

  const handleSubscribe = async () => {
    const trimmed = email.trim().toLowerCase();

    // Basic email validation
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('invalid');
      return;
    }

    setStatus('loading');

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: trimmed });

    if (error) {
      // Unique constraint violation = already subscribed
      if (error.code === '23505') {
        setStatus('success'); // treat as success silently
      } else {
        console.error('Subscribe error:', error.message);
        setStatus('error');
      }
    } else {
      setStatus('success');
      setEmail('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubscribe();
  };

  const statusMessage = {
    success: "You're subscribed! Welcome aboard.",
    error:   'Something went wrong. Please try again.',
    invalid: 'Please enter a valid email address.',
  }[status as 'success' | 'error' | 'invalid'] ?? null;

  return (
    <footer className={styles.footer}>

      {/* ── TOP FOOTER ── */}
      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.brandSection}>
          <div className={styles.logoRow}>
            <Image src="/logo.svg" alt="Dillon & Bird" width={28} height={28} />
            <span className={styles.brandName}>Dillon &amp; Bird</span>
          </div>
          <p className={styles.description}>
            Dillon &amp; Bird Partners is a UAE-based strategy consulting firm advising founders
            and enterprises on business strategy, market entry, structuring, and scalable growth
            across the GCC.
          </p>
          <a href="https://maps.app.goo.gl/yYS3mNKHXUdV7nDu6"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.addressLink}
> 
  <Image src="/googlemapsicon.svg" alt="Google Maps" width={20} height={20} />
  Address: 15th floor, Office Room No-15-28,Burjuman Business Tower,
  Al Mankhool, Dubai, UAE
</a>
          <div className={styles.socials}>
            <Link href="https://www.linkedin.com/company/dillon-bird/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/linkedinicon.svg" alt="LinkedIn" width={30} height={30} />
            </Link>
            <Link href="https://www.youtube.com/@Dillonbird6" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image src="/youtubeicon1.svg" alt="Instagram" width={30} height={30} />
            </Link>
          </div>
        </div>

        {/* OUR SERVICES */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Our Services</h4>
          <ul>
            <li><Link href="/companyformation">Company Formation</Link></li>
            <li><Link href="/auditservices">Audit Services</Link></li>
            <li><Link href="/accountingbookkeeping">Accounting &amp; Book Keeping</Link></li>
            <li><Link href="/cmoservices">CMO Services</Link></li>
            <li><Link href="/insolvencyliquidation">Insolvency Liquidation</Link></li>
            <li><Link href="/bankingservices">Banking Services</Link></li>
            <li><Link href="/partnership">Partnerships</Link></li>
            <li><Link href="/managementconsulting">Management Consulting</Link></li>
            <li><Link href="/corporateservices">Corporate Services</Link></li>
            <li><Link href="/businesssetup">Business Setup</Link></li>
            <li><Link href="/accountingfinancialservices">Accounting &amp; Financial Services</Link></li>
            <li><Link href="/financialplanninginvestorservices">Financial Planning &amp; Investor Services</Link></li>
            <li><Link href="/technologyconsulting">Technology Consulting</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/clientsuccess">Client Success</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className={styles.newsletter}>
          <h4 className={styles.sectionTitle}>Stay Updated</h4>
          <p className={styles.note}>
            Get the latest insights and opportunities from our team delivered to your inbox.
          </p>
          <div className={styles.inputRow}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => { setEmail(e.target.value); setStatus('idle'); }}
              onKeyDown={handleKeyDown}
              disabled={status === 'loading' || status === 'success'}
              aria-label="Email address for newsletter"
            />
            <button
              onClick={handleSubscribe}
              disabled={status === 'loading' || status === 'success'}
              aria-label="Subscribe to newsletter"
            >
              {status === 'loading' ? '…' : status === 'success' ? '✓' : 'Subscribe'}
            </button>
          </div>
          {statusMessage && (
            <p className={`${styles.statusMsg} ${styles[`status_${status}`]}`}>
              {statusMessage}
            </p>
          )}
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <span>© 2026. Dillon and Bird Consulting Partners. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <span>|</span>
            <Link href="/cookies">Cookie Policy</Link>
            <span>|</span>
            <button
        onClick={() => {
          localStorage.removeItem('db_cookie_consent');
          window.location.reload();
        }}
        className={styles.cookiePrefBtn}
      >
        Cookie Preferences
      </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
