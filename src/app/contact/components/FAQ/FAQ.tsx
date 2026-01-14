'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  id: number;
  question: string;
}

const faqItems: FAQItem[] = [
  { id: 1, question: 'What services do you offer?' },
  { id: 2, question: 'Can you assist with company formation in the UAE or other GCC countries?' },
  { id: 3, question: 'Do you help startups as well as large enterprises?' },
  { id: 4, question: 'How do I get started with your team?' },
  { id: 5, question: 'Are your accounting services compliant with local audit standards?' },
  { id: 6, question: 'Do you offer tailored technology solutions for businesses?' },
];

const answers: { [key: number]: string } = {
  1: 'We offer a comprehensive range of services including management consulting, corporate services, company formation, accounting & financial services, financial planning & investor services, and technology consulting.',
  2: 'Yes, we provide comprehensive company formation assistance in the UAE and across all GCC countries. Our team handles all legal and regulatory requirements.',
  3: 'Yes, we work with both emerging startups and established large enterprises. Our solutions are tailored to meet the unique needs of businesses at any stage of growth.',
  4: 'Getting started is simple. Contact us through our website or phone, and we\'ll schedule a consultation to understand your needs and discuss how we can help.',
  5: 'Yes, our accounting services fully comply with local audit standards and international best practices. We ensure all compliance requirements are met.',
  6: 'Yes, we offer tailored technology solutions designed specifically for your business requirements. Our tech consulting team works with you to implement the right solutions.',
};

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>Answer to Common Enquiries About Our Service</p>
      </div>

      {/* FAQ Grid */}
      <div className={styles.faqGrid}>
        {faqItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.faqItem} ${expandedId === item.id ? styles.expanded : ''}`}
          >
            <button
              className={styles.faqButton}
              onClick={() => toggleFAQ(item.id)}
              aria-expanded={expandedId === item.id}
            >
              <span className={styles.icon}>+</span>
              <span className={styles.question}>{item.question}</span>
            </button>

            {expandedId === item.id && (
              <div className={styles.answer}>{answers[item.id]}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
