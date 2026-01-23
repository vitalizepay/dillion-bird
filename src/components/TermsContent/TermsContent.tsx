import React from 'react';
import styles from './TermsContent.module.css';

export default function TermsContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Terms & Conditions</h1>
        <p className={styles.lastUpdated}>Last Updated: January 23, 2026</p>

        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.paragraph}>
            By accessing and using the Dillon & Bird website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <h2 className={styles.sectionTitle}>2. Services</h2>
          <p className={styles.paragraph}>
            Dillon & Bird provides strategic consulting, management consulting, corporate services, company formation, accounting services, financial planning, and technology consulting across the GCC region. Our services are subject to availability and may be modified or discontinued at any time.
          </p>

          <h2 className={styles.sectionTitle}>3. Client Obligations</h2>
          <p className={styles.paragraph}>
            As a client, you agree to:
          </p>
          <ul className={styles.list}>
            <li>Provide accurate and complete information</li>
            <li>Cooperate with our team and respond to requests in a timely manner</li>
            <li>Pay all fees and charges as agreed</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Maintain confidentiality of proprietary information shared by us</li>
          </ul>

          <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
          <p className={styles.paragraph}>
            All content, materials, methodologies, and deliverables created by Dillon & Bird remain our intellectual property unless explicitly transferred in writing. You may not reproduce, distribute, or create derivative works without our prior written consent.
          </p>

          <h2 className={styles.sectionTitle}>5. Confidentiality</h2>
          <p className={styles.paragraph}>
            We maintain strict confidentiality of all client information. Both parties agree to keep confidential information disclosed during the engagement private and not to disclose it to third parties without consent.
          </p>

          <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
          <p className={styles.paragraph}>
            To the maximum extent permitted by law, Dillon & Bird shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid for the specific service in question.
          </p>

          <h2 className={styles.sectionTitle}>7. Termination</h2>
          <p className={styles.paragraph}>
            Either party may terminate the engagement with written notice as specified in the service agreement. Upon termination, all outstanding fees become immediately due and payable.
          </p>

          <h2 className={styles.sectionTitle}>8. Governing Law</h2>
          <p className={styles.paragraph}>
            These Terms and Conditions are governed by the laws of the United Arab Emirates. Any disputes shall be resolved through arbitration in Dubai, UAE.
          </p>

          <h2 className={styles.sectionTitle}>9. Contact Information</h2>
          <p className={styles.paragraph}>
            For questions regarding these Terms and Conditions, please contact us at:
          </p>
          <p className={styles.paragraph}>
            Email: legal@dillonbird.com<br />
            Address: Meydan Hotel, Grandstand Building, 6th Floor, Al Meydan Road, Nad Al Sheba 1, Dubai, UAE
          </p>
        </div>
      </div>
    </section>
  );
}
