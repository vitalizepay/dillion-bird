import React from 'react';
import styles from './CookiePolicyContent.module.css';

export default function CookiePolicyContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Cookie Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: January 23, 2026</p>

        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>1. What Are Cookies</h2>
          <p className={styles.paragraph}>
            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
          </p>

          <h2 className={styles.sectionTitle}>2. Types of Cookies We Use</h2>
          
          <h3 className={styles.subTitle}>Essential Cookies</h3>
          <p className={styles.paragraph}>
            These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
          </p>

          <h3 className={styles.subTitle}>Performance Cookies</h3>
          <p className={styles.paragraph}>
            These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve the website's performance.
          </p>

          <h3 className={styles.subTitle}>Functional Cookies</h3>
          <p className={styles.paragraph}>
            These cookies allow the website to remember choices you make (such as your language or region) and provide enhanced, personalized features.
          </p>

          <h3 className={styles.subTitle}>Analytics Cookies</h3>
          <p className={styles.paragraph}>
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience.
          </p>

          <h2 className={styles.sectionTitle}>3. Third-Party Cookies</h2>
          <p className={styles.paragraph}>
            We may use third-party services such as Google Analytics that place cookies on your device. These third parties have their own privacy policies governing the use of cookies.
          </p>

          <h2 className={styles.sectionTitle}>4. Managing Cookies</h2>
          <p className={styles.paragraph}>
            You can control and manage cookies in several ways:
          </p>
          <ul className={styles.list}>
            <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
            <li>Opt-out tools: Use third-party opt-out tools for analytics cookies</li>
            <li>Cookie preferences: Adjust your preferences through our cookie consent banner</li>
          </ul>
          <p className={styles.paragraph}>
            Please note that disabling certain cookies may impact the functionality of our website.
          </p>

          <h2 className={styles.sectionTitle}>5. Updates to This Policy</h2>
          <p className={styles.paragraph}>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
          </p>

          <h2 className={styles.sectionTitle}>6. Contact Us</h2>
          <p className={styles.paragraph}>
            If you have questions about our use of cookies, please contact us at:
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
