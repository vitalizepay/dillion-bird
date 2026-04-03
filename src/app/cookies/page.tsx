import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy | Dillon & Bird',
  description: 'Learn how Dillon & Bird uses cookies and similar technologies on our website.',
};

export default function CookiesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <div className={styles.rule} />
          <span>Legal</span>
        </div>
        <h1 className={styles.h1}>Cookie Policy</h1>
        <p className={styles.updated}>Last updated: January 2025</p>

        <div className={styles.body}>

          <section className={styles.sec}>
            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.</p>
          </section>

          <section className={styles.sec}>
            <h2>Cookie Categories We Use</h2>

            <div className={styles.catCard}>
              <div className={styles.catCardHead}>
                <span className={styles.catCardName}>Essential Cookies</span>
                <span className={styles.alwaysOn}>Always On</span>
              </div>
              <p>These cookies are required for the website to function and cannot be switched off. They are usually set in response to actions you take such as setting your privacy preferences, logging in, or filling in forms.</p>
            </div>

            <div className={styles.catCard}>
              <div className={styles.catCardHead}>
                <span className={styles.catCardName}>Analytics Cookies</span>
                <span className={styles.optional}>Optional</span>
              </div>
              <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website over time.</p>
            </div>

            <div className={styles.catCard}>
              <div className={styles.catCardHead}>
                <span className={styles.catCardName}>Marketing Cookies</span>
                <span className={styles.optional}>Optional</span>
              </div>
              <p>These cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our marketing campaigns.</p>
            </div>
          </section>

          <section className={styles.sec}>
            <h2>Cookies We Use</h2>
            <div className={styles.table}>
              <div className={styles.tableHead}>
                <span>Cookie</span>
                <span>Category</span>
                <span>Purpose</span>
                <span>Duration</span>
              </div>
              {[
                { name: 'db_cookie_consent', cat: 'Essential',  purpose: 'Stores your cookie consent preference',     duration: '1 year' },
                { name: '_ga',               cat: 'Analytics',  purpose: 'Google Analytics — distinguishes users',    duration: '2 years' },
                { name: '_gid',              cat: 'Analytics',  purpose: 'Google Analytics — session identifier',     duration: '24 hours' },
                { name: '_gtm',              cat: 'Essential',  purpose: 'Google Tag Manager — tag management',       duration: 'Session' },
                { name: '_fbp',              cat: 'Marketing',  purpose: 'Facebook Pixel — ad tracking',              duration: '3 months' },
              ].map(c => (
                <div className={styles.tableRow} key={c.name}>
                  <span className={styles.cookieName}>{c.name}</span>
                  <span className={
                    c.cat === 'Essential' ? styles.tagEssential :
                    c.cat === 'Analytics' ? styles.tagAnalytics :
                    styles.tagMarketing
                  }>{c.cat}</span>
                  <span>{c.purpose}</span>
                  <span>{c.duration}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.sec}>
            <h2>Your Choices</h2>
            <p>When you first visit our website, you will be shown a cookie banner with three options:</p>
            <ul>
              <li><strong>Accept All</strong> — enables all cookie categories including analytics and marketing.</li>
              <li><strong>Essential Only</strong> — enables only the cookies required for the site to function.</li>
              <li><strong>Decline All</strong> — disables all non-essential cookies.</li>
            </ul>
            <p>You can change your preference at any time by clicking the <strong>Cookies</strong> button in the bottom-left corner of any page.</p>
          </section>

          <section className={styles.sec}>
            <h2>Managing Cookies in Your Browser</h2>
            <p>You can also control cookies directly through your browser settings:</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge" target="_blank" rel="noopener">Microsoft Edge</a></li>
            </ul>
          </section>

          <section className={styles.sec}>
            <h2>Third-Party Services</h2>
            <p>We use Google Analytics and Google Tag Manager on our website. These services may set their own cookies subject to their respective privacy policies. We also use Facebook Pixel for marketing attribution when marketing cookies are accepted.</p>
          </section>

          <section className={styles.sec}>
            <h2>Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.</p>
          </section>

          <section className={styles.sec}>
            <h2>Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at <a href="mailto:hello@dillonbird.com">hello@dillonbird.com</a></p>
          </section>

        </div>
      </div>
    </main>
  );
}