import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* TOP FOOTER */}
      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.brandSection}>
          <div className={styles.logoRow}>
            <Image src="/logo.svg" alt="Dillon & Bird" width={28} height={28} />
            <span className={styles.brandName}>Dillon & Bird</span>
          </div>

          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <div className={styles.socials}>
            <Image src="/linkedin.svg" alt="LinkedIn" width={18} height={18} />
            <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
          </div>
        </div>

        {/* OUR SERVICES */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Our Services</h4>
          <ul>
            <li><Link href="/partnership">Partnerships</Link></li>
            <li><Link href="/managementconsulting">Management Consulting</Link></li>
            <li><Link href="/corporateservices">Corporate Services</Link></li>
            <li><Link href="/companyformation">Company Formation</Link></li>
            <li><Link href="/accountingfinancialservices">Accounting & Financial Services</Link></li>
            <li><Link href="/financialplanninginvestorservices">Financial Planning & Investor Services</Link></li>
            <li><Link href="/technologyconsulting">Technology Consulting</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Company</h4>
          <ul>
            <li><Link href="/about">Who We Are</Link></li>
            <li><Link href="/casestudies/technologystartup">Technology Startup</Link></li>
            <li><Link href="/casestudies/retailbusiness">Retail Business</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className={styles.newsletter}>
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="subscribe to our news letter"
            />
            <button>Subscribe</button>
          </div>
          <p className={styles.note}>
            Stay updated with the latest insights and opportunities from our team.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <span>© 2024 Consulting Firm. All rights reserved.</span>

          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
