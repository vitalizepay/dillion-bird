'use client';
import { useState } from 'react';
import styles from './CFFAQ.module.css';

const faqs = [
  { q: 'How long does company formation take in the UAE?', a: 'Free Zone companies can be formed in as little as 3–5 working days once all documents are in order. Mainland LLCs typically take 7–10 days. Offshore structures are usually 5–7 days.' },
  { q: 'Can a foreigner own 100% of a UAE company?', a: 'Yes. Since amendments to the Commercial Companies Law in 2021, foreign nationals can hold 100% ownership of mainland LLCs across most business activities — without requiring a UAE national sponsor.' },
  { q: 'What is the minimum capital required to set up a company in Dubai?', a: 'There is no mandated minimum share capital for most Free Zone and Mainland LLCs. Some regulated activities have their own capital requirements set by the relevant regulator.' },
  { q: 'Do I need to be physically present in Dubai to form a company?', a: 'For most Free Zone structures, the entire formation can be completed remotely. Mainland LLCs and visa applications typically require a brief visit to Dubai.' },
  { q: 'Which Free Zone is best for my business?', a: 'There are 40+ Free Zones in the UAE. DMCC suits commodities and trading; DIFC/ADGM for financial services; Dubai Internet City for tech and media; RAKEZ for cost-conscious startups.' },
  { q: 'What does corporate tax mean for my UAE company?', a: 'The UAE introduced a 9% federal corporate tax in June 2023, applicable to taxable income exceeding AED 375,000. Qualifying Free Zone entities can benefit from 0% on qualifying income.' },
];

export default function CFFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={styles.sec} id="faq">
      <div className={styles.header}>
        <div className={styles.eyebrow}><span className={styles.rule} /><span>Common Questions</span></div>
        <h2 className={styles.h2}>Frequently Asked Questions</h2>
        <p className={styles.desc}>Everything you need to know about setting up a company in the UAE.</p>
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