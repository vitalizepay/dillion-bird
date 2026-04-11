'use client';

import { useState } from 'react';
// import Link from 'next/link';
import styles from './TechWhyUs.module.css';

const tabs = [
  {
    label: 'AI Consulting, Not AI Outsourcing',
    title: 'Your Team Stays in Control',
    body: 'We embed alongside your people rather than replacing them. Every engagement is designed to build internal capability — so when we leave, your team understands what was built, why, and how to evolve it. The IP stays with you.',
    // cta: 'See How We Work',
    // action: 'process',
  },
  {
    label: 'Collaborative Partnership & Tailored Solutions',
    title: 'No Off-the-Shelf Templates',
    body: "Every client engagement starts with a blank page. We refuse to recycle generic frameworks because your business, your regulatory environment, and your competitive pressures are unique. Solutions are designed for your context — not adapted from someone else's.",
    // cta: 'View Our Process',
    // action: 'process',
  },
  {
    label: 'From Strategy Through Production Deployment',
    title: 'End-to-End Delivery',
    body: 'Many consultancies stop at the strategy deck. We stay until the system is live, the team is trained, and the metrics are moving. Our engagements are measured by operational outcomes — not deliverable documents.',
    // cta: 'See Client Results',
    // action: 'clientsuccess',
  },
  {
    label: 'Finding High-Impact Opportunities',
    title: 'Commercial Prioritisation First',
    body: 'We score every technology opportunity against commercial impact, implementation feasibility, and strategic alignment — ensuring your technology investment flows to the initiatives that will move revenue, margin, or operational efficiency.',
    // cta: 'Get a Free Assessment',
    // action: 'contact',
  },
  {
    label: 'OpenShift & On-Prem Expertise',
    title: 'Enterprise Infrastructure Specialists',
    body: "Unlike cloud-only consultancies, we bring deep OpenShift 4.x, Kubernetes, and on-premise infrastructure expertise. We design for your actual environment — whether that's fully cloud, fully on-prem, or a hybrid architecture that fits your security and compliance requirements.",
    // cta: 'Discuss Your Infrastructure',
    // action: 'contact',
  },
  {
    label: 'AI Discovery That Stays With You',
    title: 'Knowledge That Compounds',
    body: 'Our discovery workshops and assessments produce living documentation — strategic roadmaps, capability maps, and prioritised use-case libraries that your teams can reference for years. This intellectual capital becomes a permanent organisational asset.',
    // cta: 'Start a Discovery Sprint',
    // action: 'contact',
  },
];

export default function TechWhyUs() {
  const [active, setActive] = useState(0);

  // const scrollToProcess = () => {
  //   const el = document.getElementById('process');
  //   if (!el) return;
  //   const offset = 80;
  //   const top = el.getBoundingClientRect().top + window.scrollY - offset;
  //   window.scrollTo({ top, behavior: 'smooth' });
  // };

  // const scrollToContact = () => {
  //   const el = document.getElementById('contact');
  //   if (!el) return;
  //   const offset = 80;
  //   const top = el.getBoundingClientRect().top + window.scrollY - offset;
  //   window.scrollTo({ top, behavior: 'smooth' });
  // };

  // const renderCta = (tab: typeof tabs[0]) => {
  //   if (tab.action === 'clientsuccess') {
  //     return (
  //       <Link href="/clientsuccess" className={styles.tabCta}>
  //         {tab.cta} →
  //       </Link>
  //     );
  //   }
  //   if (tab.action === 'process') {
  //     return (
  //       <button onClick={scrollToProcess} className={styles.tabCta}>
  //         {tab.cta} →
  //       </button>
  //     );
  //   }
  //   return (
  //     <button onClick={scrollToContact} className={styles.tabCta}>
  //       {tab.cta} →
  //     </button>
  //   );
  // };

  return (
    <section className={styles.sec}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Why Dillon &amp; Bird</span>
          </div>
          <h2 className={styles.h2}>
            Why We&apos;re Your Technology<br />Consulting Partner
          </h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.tabList}>
            {tabs.map((t, i) => (
              <button
                key={t.label}
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            <h3 className={styles.tabTitle}>{tabs[active].title}</h3>
            <p className={styles.tabBody}>{tabs[active].body}</p>
            {/* {renderCta(tabs[active])} */}
          </div>
        </div>

      </div>
    </section>
  );
}