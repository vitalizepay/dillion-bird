import React from 'react';
import styles from './PrivacyPolicyContent.module.css';

export default function PrivacyPolicyContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: January 23, 2026</p>

        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.paragraph}>
            Dillon & Bird Consulting Partners ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p className={styles.paragraph}>
            We may collect the following types of information:
          </p>
          <ul className={styles.list}>
            <li>Personal identification information (name, email address, phone number, company name)</li>
            <li>Professional information (job title, business sector, company size)</li>
            <li>Communication data (emails, messages, inquiries)</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (pages visited, time spent, navigation patterns)</li>
          </ul>

          <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
          <p className={styles.paragraph}>
            We use your personal information for the following purposes:
          </p>
          <ul className={styles.list}>
            <li>To provide and improve our consulting services</li>
            <li>To respond to your inquiries and communicate with you</li>
            <li>To send you relevant business insights and updates (with your consent)</li>
            <li>To analyze and improve our website performance</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className={styles.sectionTitle}>4. Data Security</h2>
          <p className={styles.paragraph}>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className={styles.sectionTitle}>5. Data Sharing</h2>
          <p className={styles.paragraph}>
            We do not sell your personal data. We may share your information with:
          </p>
          <ul className={styles.list}>
            <li>Service providers who assist in our operations (under strict confidentiality agreements)</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>

          <h2 className={styles.sectionTitle}>6. Your Rights</h2>
          <p className={styles.paragraph}>
            Under applicable data protection laws, you have the right to:
          </p>
          <ul className={styles.list}>
            <li>Access your personal data</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className={styles.sectionTitle}>7. Cookies</h2>
          <p className={styles.paragraph}>
            Our website uses cookies to enhance your browsing experience. For more information, please see our Cookie Policy.
          </p>

          <h2 className={styles.sectionTitle}>8. Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
          </p>
          <p className={styles.paragraph}>
            Email: info@dillonbird.com<br />
            Address: Meydan Hotel, Grandstand Building, 6th Floor, Al Meydan Road, Nad Al Sheba 1, Dubai, UAE
          </p>
        </div>
      </div>
    </section>
  );
}
