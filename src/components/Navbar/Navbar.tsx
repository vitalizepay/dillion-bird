'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [servicesArrow, setServicesArrow] = useState(false);
  const [blogsArrow, setBlogsArrow] = useState(false);

  const toggleAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  // Check if link is active
  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className={styles.header}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image src="/logo.svg" alt="Dillon & Bird" width={28} height={28} />
            <span>Dillon & Bird</span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className={styles.desktopNav}>
            <Link 
              href="/about" 
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
            >
              Who We Are
            </Link>

            {/* WHAT WE DO */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setServicesArrow(true)}
              onMouseLeave={() => setServicesArrow(false)}
            >
              <button 
                className={`${styles.trigger} ${
                  pathname.startsWith('/partnership') ||
                  pathname.startsWith('/managementconsulting') ||
                  pathname.startsWith('/corporateservices') ||
                  pathname.startsWith('/companyformation') ||
                  pathname.startsWith('/accountingfinancialservices') ||
                  pathname.startsWith('/financialplanninginvestorservices') ||
                  pathname.startsWith('/technologyconsulting')
                    ? styles.active 
                    : ''
                }`}
              >
                <span>What We Do</span>
                <svg
                  className={servicesArrow ? styles.rotate : ''}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              <div className={styles.menu}>
                <Link href="/partnership" className={styles.menuItem}>
                  Partnerships
                </Link>
                <Link href="/managementconsulting" className={styles.menuItem}>
                  Management Consulting
                </Link>
                <Link href="/corporateservices" className={styles.menuItem}>
                  Corporate Services
                </Link>
                <Link href="/companyformation" className={styles.menuItem}>
                  Company Formation
                </Link>
                <Link href="/accountingfinancialservices" className={styles.menuItem}>
                  Accounting & Financial Services
                </Link>
                <Link href="/financialplanninginvestorservices" className={styles.menuItem}>
                  Financial Planning & Investor Services
                </Link>
                <Link href="/technologyconsulting" className={styles.menuItem}>
                  Technology Consulting
                </Link>
              </div>
            </div>

            {/* BLOGS */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setBlogsArrow(true)}
              onMouseLeave={() => setBlogsArrow(false)}
            >
              <button 
                className={`${styles.trigger} ${
                  pathname.startsWith('/casestudies')
                    ? styles.active 
                    : ''
                }`}
              >
                <span>Case Studies</span>
                <svg
                  className={blogsArrow ? styles.rotate : ''}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              <div className={styles.menu}>
                <Link href="/casestudies/technologystartup" className={styles.menuItem}>
                  Technology Startup
                </Link>
                <Link href="/casestudies/retailbusiness" className={styles.menuItem}>
                  Retail Business
                </Link>
              </div>
            </div>

            <Link 
              href="/contact" 
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
            >
              Let's Connect
            </Link>
          </nav>

          {/* ================= PHONE ================= */}
          <div className={styles.phone}>
            <Image src="/uae-flag.svg" alt="UAE Flag" width={22} height={14} />
            <span className={styles.divider}></span>
            <span className={styles.phoneText}>+971 585 570 593</span>
          </div>

          {/* ================= HAMBURGER ================= */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE / TABLET ================= */}
      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobilePanel}>
            {/* Header */}
            <div className={styles.mobileHeader}>
              <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                <Image src="/logo.svg" alt="Dillon & Bird" width={24} height={24} />
                <span>Dillon & Bird</span>
              </Link>

              <button
                className={styles.closeBtn}
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Nav */}
            <nav className={styles.mobileNav}>
              <Link 
                href="/about"
                className={`${styles.mobileLink} ${isActive('/about') ? styles.active : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Who We Are
              </Link>

              {/* WHAT WE DO */}
              <div
                className={`${styles.mobileItem} ${
                  pathname.startsWith('/partnership') ||
                  pathname.startsWith('/managementconsulting') ||
                  pathname.startsWith('/corporateservices') ||
                  pathname.startsWith('/companyformation') ||
                  pathname.startsWith('/accountingfinancialservices') ||
                  pathname.startsWith('/financialplanninginvestorservices') ||
                  pathname.startsWith('/technologyconsulting')
                    ? styles.active 
                    : ''
                }`}
                onClick={() => toggleAccordion('services')}
              >
                <span>What We Do</span>
                <svg
                  className={`${styles.mobileArrow} ${
                    mobileAccordion === 'services' ? styles.rotate : ''
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>

              {mobileAccordion === 'services' && (
                <div className={styles.mobileSubmenu}>
                  <Link href="/partnership" onClick={() => setMobileOpen(false)}>
                    Partnerships
                  </Link>
                  <Link href="/managementconsulting" onClick={() => setMobileOpen(false)}>
                    Management Consulting
                  </Link>
                  <Link href="/corporateservices" onClick={() => setMobileOpen(false)}>
                    Corporate Services
                  </Link>
                  <Link href="/companyformation" onClick={() => setMobileOpen(false)}>
                    Company Formation
                  </Link>
                  <Link href="/accountingfinancialservices" onClick={() => setMobileOpen(false)}>
                    Accounting & Financial Services
                  </Link>
                  <Link href="/financialplanninginvestorservices" onClick={() => setMobileOpen(false)}>
                    Financial Planning & Investor Services
                  </Link>
                  <Link href="/technologyconsulting" onClick={() => setMobileOpen(false)}>
                    Technology Consulting
                  </Link>
                </div>
              )}

              {/* BLOGS */}
              <div
                className={`${styles.mobileItem} ${
                  pathname.startsWith('/casestudies')
                    ? styles.active 
                    : ''
                }`}
                onClick={() => toggleAccordion('blogs')}
              >
                <span>Case Studies</span>
                <svg
                  className={`${styles.mobileArrow} ${
                    mobileAccordion === 'blogs' ? styles.rotate : ''
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>

              {mobileAccordion === 'blogs' && (
                <div className={styles.mobileSubmenu}>
                  <Link href="/casestudies/technologystartup" onClick={() => setMobileOpen(false)}>
                    Technology Startup
                  </Link>
                  <Link href="/casestudies/retailbusiness" onClick={() => setMobileOpen(false)}>
                    Retail Business
                  </Link>
                </div>
              )}

              <Link 
                href="/contact"
                className={`${styles.mobileLink} ${isActive('/contact') ? styles.active : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Let's Connect
              </Link>
            </nav>

            {/* Phone */}
            <div className={styles.mobilePhone}>
              <Image src="/uae-flag.svg" alt="UAE Flag" width={26} height={18} />
              <span className={styles.divider}></span>
              <span className={styles.phoneText}>+971 585 570 593</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
