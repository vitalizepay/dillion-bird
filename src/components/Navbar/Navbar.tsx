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
  const [careersArrow, setCareersArrow] = useState(false);

  const toggleAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  const isActive = (href: string) => pathname === href;

  const isServicesActive =
    pathname.startsWith('/partnership') ||
    pathname.startsWith('/managementconsulting') ||
    pathname.startsWith('/corporateservices') ||
    pathname.startsWith('/businesssetup') ||
    pathname.startsWith('/companyformation') ||
    pathname.startsWith('/accountingfinancialservices') ||
    pathname.startsWith('/financialplanninginvestorservices') ||
    pathname.startsWith('/technologyconsulting') ||
    pathname.startsWith('/audit') ||
    pathname.startsWith('/accountingbookkeeping') ||
    pathname.startsWith('/cmolanding') ||
    pathname.startsWith('/insolvencyliquidation') ||
    pathname.startsWith('/bankingservices');
  const isCareersActive = pathname.startsWith('/careers');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.svg" alt="Dillon & Bird" width={28} height={28} />
            <span>Dillon & Bird</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className={styles.desktopNav}>
            <Link
              href="/about"
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
            >
              About Us
            </Link>

            {/* OUR SERVICES */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setServicesArrow(true)}
              onMouseLeave={() => setServicesArrow(false)}
            >
              <button className={`${styles.trigger} ${isServicesActive ? styles.active : ''}`}>
                <span>Our Services</span>
                <svg className={servicesArrow ? styles.rotate : ''} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              <div className={styles.menu}>
                <Link href="/companyformation" className={styles.menuItem}>Company Formation</Link>
                <Link href="/audit" className={styles.menuItem}>Audit Services</Link>
                <Link href="/accountingbookkeeping" className={styles.menuItem}>Accounting & Book Keeping</Link>
                <Link href="/cmolanding" className={styles.menuItem}>CMO Services</Link>
                <Link href="/insolvencyliquidation" className={styles.menuItem}>Insolvency Liquidation</Link>
                <Link href="/bankingservices" className={styles.menuItem}>Banking Services</Link>
                <Link href="/partnership" className={styles.menuItem}>Partnerships</Link>
                <Link href="/managementconsulting" className={styles.menuItem}>Management Consulting</Link>
                <Link href="/corporateservices" className={styles.menuItem}>Corporate Services</Link>
                <Link href="/businesssetup" className={styles.menuItem}>Business Setup</Link>
                <Link href="/accountingfinancialservices" className={styles.menuItem}>Accounting & Financial Services</Link>
                <Link href="/financialplanninginvestorservices" className={styles.menuItem}>Financial Planning & Investor Services</Link>
                <Link href="/technologyconsulting" className={styles.menuItem}>Technology Consulting</Link>
              </div>
            </div>

            {/* CASE STUDIES */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setBlogsArrow(true)}
              onMouseLeave={() => setBlogsArrow(false)}
            >
              <button
                className={`${styles.trigger} ${pathname.startsWith('/casestudies') ? styles.active : ''}`}
              >
                <span>Case Studies</span>
                <svg className={blogsArrow ? styles.rotate : ''} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              <div className={styles.menu}>
                <Link href="/casestudies/technologystartup" className={styles.menuItem}>Technology Startup</Link>
                <Link href="/casestudies/retailbusiness" className={styles.menuItem}>Retail Business</Link>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <Link
              href="/clientsuccess"
              className={`${styles.navLink} ${isActive('/clientsuccess') ? styles.active : ''}`}
            >
              Client Success
            </Link>

            {/* CAREERS ← new */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setCareersArrow(true)}
              onMouseLeave={() => setCareersArrow(false)}
            >
              <button className={`${styles.trigger} ${isCareersActive ? styles.active : ''}`}>
                <span>Careers</span>
                <svg className={careersArrow ? styles.rotate : ''} viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              <div className={styles.menu}>
                <Link href="/careers" className={styles.menuItem}>Home</Link>
                <Link href="/careers/openroles" className={styles.menuItem}>Open Roles</Link>
                <Link href="/careers/apply" className={styles.menuItem}>Apply</Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
            >
              Let's Connect
            </Link>
          </nav>

          {/* PHONE */}
          <div className={styles.phone}>
            <Image src="/uae-flag.svg" alt="UAE Flag" width={22} height={14} />
            <span className={styles.divider}></span>
            <span className={styles.phoneText}>+971 585 570 593</span>
          </div>

          {/* HAMBURGER */}
          <button className={styles.hamburger} onClick={() => setMobileOpen(true)}>☰</button>
        </div>
      </header>

      {/* MOBILE */}
      {mobileOpen && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobilePanel}>
            <div className={styles.mobileHeader}>
              <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                <Image src="/logo.svg" alt="Dillon & Bird" width={24} height={24} />
                <span>Dillon & Bird</span>
              </Link>
              <button className={styles.closeBtn} onClick={() => setMobileOpen(false)}>✕</button>
            </div>

            <nav className={styles.mobileNav}>
              <Link
                href="/about"
                className={`${styles.mobileLink} ${isActive('/about') ? styles.active : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>

              {/* OUR SERVICES */}
              <div
                className={`${styles.mobileItem} ${isServicesActive ? styles.active : ''}`}
                onClick={() => toggleAccordion('services')}
              >
                <span>Our Services</span>
                <svg
                  className={`${styles.mobileArrow} ${mobileAccordion === 'services' ? styles.rotate : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>

              {mobileAccordion === 'services' && (
                <div className={styles.mobileSubmenu}>
                  <Link href="/companyformation" onClick={() => setMobileOpen(false)}>Company Formation</Link>
                  <Link href="/audit" onClick={() => setMobileOpen(false)}>Audit Services</Link>
                  <Link href="/accountingbookkeeping" onClick={() => setMobileOpen(false)}>Accounting & Book Keeping</Link>
                  <Link href="/cmolanding" onClick={() => setMobileOpen(false)}>CMO Services</Link>
                  <Link href="/insolvencyliquidation" onClick={() => setMobileOpen(false)}>Insolvency Liquidation</Link>
                  <Link href="/bankingservices" onClick={() => setMobileOpen(false)}>Banking Services</Link>
                  <Link href="/partnership" onClick={() => setMobileOpen(false)}>Partnerships</Link>
                  <Link href="/managementconsulting" onClick={() => setMobileOpen(false)}>Management Consulting</Link>
                  <Link href="/corporateservices" onClick={() => setMobileOpen(false)}>Corporate Services</Link>
                  <Link href="/businesssetup" onClick={() => setMobileOpen(false)}>Business Setup</Link>
                  <Link href="/accountingfinancialservices" onClick={() => setMobileOpen(false)}>Accounting & Financial Services</Link>
                  <Link href="/financialplanninginvestorservices" onClick={() => setMobileOpen(false)}>Financial Planning & Investor Services</Link>
                  <Link href="/technologyconsulting" onClick={() => setMobileOpen(false)}>Technology Consulting</Link>
                </div>
              )}

              {/* CASE STUDIES */}
              <div
                className={`${styles.mobileItem} ${pathname.startsWith('/casestudies') ? styles.active : ''}`}
                onClick={() => toggleAccordion('blogs')}
              >
                <span>Case Studies</span>
                <svg
                  className={`${styles.mobileArrow} ${mobileAccordion === 'blogs' ? styles.rotate : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>

              {mobileAccordion === 'blogs' && (
                <div className={styles.mobileSubmenu}>
                  <Link href="/casestudies/technologystartup" onClick={() => setMobileOpen(false)}>Technology Startup</Link>
                  <Link href="/casestudies/retailbusiness" onClick={() => setMobileOpen(false)}>Retail Business</Link>
                </div>
              )}

              <Link
                href="/clientsuccess"
                className={`${styles.mobileLink} ${isActive('/clientsuccess') ? styles.active : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                Client Success
              </Link>

              {/* CAREERS ← new */}
              <div
                className={`${styles.mobileItem} ${isCareersActive ? styles.active : ''}`}
                onClick={() => toggleAccordion('careers')}
              >
                <span>Careers</span>
                <svg
                  className={`${styles.mobileArrow} ${mobileAccordion === 'careers' ? styles.rotate : ''}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>

              {mobileAccordion === 'careers' && (
                <div className={styles.mobileSubmenu}>
                  <Link href="/careers" onClick={() => setMobileOpen(false)}>Home</Link>
                  <Link href="/careers/openroles" onClick={() => setMobileOpen(false)}>Open Roles</Link>
                  <Link href="/careers/apply" onClick={() => setMobileOpen(false)}>Apply</Link>
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