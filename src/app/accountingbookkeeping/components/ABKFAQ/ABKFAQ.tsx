'use client';
import { useState } from 'react';
import styles from './ABKFAQ.module.css';

const faqs = [
  { q: 'Do I legally need to keep accounting records in the UAE?', a: 'Yes. UAE Commercial Companies Law requires all companies to maintain proper books of accounts for a minimum of five years. Free Zone authorities have additional record-keeping obligations. Since the introduction of UAE Corporate Tax (June 2023), businesses must also maintain financial statements sufficient to support their CT returns — making professional bookkeeping essential, not optional.' },
  { q: 'When do I need to register for VAT in the UAE?', a: 'VAT registration is mandatory when your taxable supplies and imports exceed AED 375,000 in any 12-month period. Voluntary registration is possible above AED 187,500. Failing to register on time can result in FTA penalties of up to AED 20,000. We can assess your threshold and handle registration within days.' },
  { q: 'How does UAE Corporate Tax affect my business?', a: 'The UAE federal corporate tax of 9% applies to taxable income above AED 375,000 for financial years starting on or after 1 June 2023. Free Zone entities with qualifying income may benefit from 0% CT if they meet substance requirements. We review your structure, determine your applicable rate, and file your returns accurately and on time.' },
  { q: 'Can you take over from my current accountant or clean up backlog?', a: 'Absolutely. We handle transitions smoothly — collecting data from your previous provider, auditing the records, and correcting any discrepancies. If you have months or years of unreconciled books, our catch-up accounting service brings everything current before we move to a regular monthly cycle. Many clients come to us in exactly this situation.' },
  { q: 'What accounting software do you use?', a: "We work across all major cloud platforms — Xero, QuickBooks Online, Zoho Books, Sage, SAP Business One and Oracle NetSuite. If you already use a particular system, we work within it. If you're starting fresh, we'll recommend and set up the best fit for your size and industry. You always retain full access to your own data." },
  { q: 'How much does outsourced accounting cost?', a: 'Our fees are fixed monthly retainers scaled to your transaction volume and service scope. Bookkeeping-only packages start from AED 1,200/month; full-service packages including VAT, payroll and management accounts typically range from AED 2,500–6,000/month depending on company complexity. We provide a detailed, no-obligation quote within 24 hours of your enquiry.' },
];

export default function CFFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={styles.sec} id="faq">
      <div className={styles.header}>
        <div className={styles.eyebrow}><span className={styles.rule} /><span>FAQs</span></div>
        <h2 className={styles.h2}>Frequently Asked Questions</h2>
        <p className={styles.desc}>Everything UAE businesses ask before getting started with outsourced accounting.</p>
      </div>
      <div className={styles.list}>
        {faqs.map((f, i) => (
          <div className={`${styles.item} ${open === i ? styles.itemOpen : ''}`} key={i}>
            <button className={styles.q} onClick={() => setOpen(open === i ? null : i)}>
              <span className={styles.qText}>{f.q}</span>
              <div className={styles.icon}>
                <div className={styles.iconBar} />
              </div>
            </button>
            <div className={styles.a}>{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}