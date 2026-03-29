'use client';
import { useState } from 'react';
import styles from './AuditFAQ.module.css';

const faqs = [
  { q: 'Do I need an internal audit if I already have an external auditor?', a: 'Yes — and the two serve very different purposes. Your external auditor provides an opinion on whether your financial statements are fairly presented. Internal audit goes deeper: it evaluates whether your controls, processes and risk management are actually working day-to-day. Many UAE businesses only discover significant control weaknesses when an investor, lender or regulator asks questions. Internal audit catches these issues before they become expensive problems.' },
  { q: "I've received an FTA audit notice — how quickly can you help?", a: "Immediately. We respond to all enquiries within 24 hours and can mobilise a VAT compliance team within 48 hours of engagement. We've successfully managed dozens of FTA audit visits and know exactly what documentation the FTA expects, what questions they ask and how to prepare your team to respond confidently. The earlier you contact us after receiving a notice, the more options you have." },
  { q: 'How much does an audit engagement cost?', a: 'All our engagements are quoted at a fixed fee agreed before we begin. There are no hourly billing surprises and no scope creep without your explicit approval. Fee levels depend on entity type, number of transactions, number of entities in scope and the specific audit objectives. After a free scoping call — which takes around 30 minutes — we provide a written proposal with a fixed price. Most small-to-mid business internal audits start from AED 12,000.' },
  { q: 'Can you audit free zone companies (DIFC, ADGM, DMCC, JAFZA)?', a: 'Yes — we cover all UAE jurisdictions including DED mainland, DIFC, ADGM, DMCC, JAFZA, DAFZA and all other major UAE free zones. Our team has deep knowledge of the specific regulatory requirements, reporting obligations and authority relationships within each jurisdiction. You work with the same senior team regardless of where your entity is registered.' },
  { q: "We're raising capital — will your audit report satisfy investors?", a: 'Our audit and due diligence reports are specifically structured to meet the requirements of institutional investors, PE firms, family offices and commercial lenders active in the GCC. We understand what investors look for, what flags will cause concern and how to present findings in a way that builds rather than undermines confidence. Several of our clients have cited our pre-fundraise audit as directly contributing to faster close timelines and better terms.' },
];

export default function AuditFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={styles.sec} id="faq">
      <div className={styles.header}>
        <div className={styles.eyebrow}><span className={styles.rule} /><span>Common Questions</span></div>
        <h2 className={styles.h2}>Everything You Need <br/> to Know About <em>Our Audit Services</em></h2>
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