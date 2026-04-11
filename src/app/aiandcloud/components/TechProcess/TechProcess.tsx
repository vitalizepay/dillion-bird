'use client';

import { useState } from 'react';
import styles from './TechProcess.module.css';

const steps = [
  {
    n: '01',
    title: 'Business Process Mapping',
    desc: 'We map your workflows, data flows, and decision points to understand where technology can deliver the greatest commercial impact — before writing a single line of code.',
  },
  {
    n: '02',
    title: 'Use Case Identification & Scoring',
    desc: 'Through collaborative workshops we identify, score, and prioritize technology use cases against feasibility and ROI — so investment flows to the highest-impact opportunities first.',
  },
  {
    n: '03',
    title: 'Proof of Concept',
    desc: 'Rapid prototyping validates assumptions with real data and real infrastructure, reducing risk before committing to full-scale development or deployment.',
  },
  {
    n: '04',
    title: 'Production Deployment',
    desc: 'Battle-tested solutions deployed with monitoring, CI/CD pipelines, security controls, and governance frameworks built in — not bolted on afterwards.',
  },
  {
    n: '05',
    title: 'Knowledge Transfer & Support',
    desc: 'We train your teams, document everything, and provide ongoing support — leaving you genuinely self-sufficient rather than dependent on external expertise indefinitely.',
  },
];

const stackCategories = [
  {
    label: 'AI & ML',
    chips: ['LangChain', 'OpenAI', 'Hugging Face', 'NLP', 'Computer Vision', 'Generative AI', 'RAG Pipelines', 'MLOps', 'Time Series', 'Anomaly Detection'],
  },
  {
    label: 'Cloud',
    chips: ['AWS', 'Azure', 'GCP', 'OpenStack', 'VMware', 'Hybrid Cloud', 'Cloud Migration', 'FinOps'],
  },
  {
    label: 'OpenShift & K8s',
    chips: ['OpenShift 4.x', 'Kubernetes', 'RHACM', 'Helm', 'Operators', 'Service Mesh', 'OCP GitOps', 'Quay'],
  },
  {
    label: 'DevSecOps',
    chips: ['ArgoCD', 'Tekton', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible', 'Vault', 'SonarQube'],
  },
  {
    label: 'Data & Databases',
    chips: ['PostgreSQL', 'Redis', 'Kafka', 'Elasticsearch', 'dbt', 'Airflow', 'Spark', 'Snowflake'],
  },
  {
    label: 'Frameworks',
    chips: ['Python', 'FastAPI', 'Node.js', 'React', 'Next.js', 'Docker', 'gRPC', 'REST APIs'],
  },
];

export default function TechProcess() {
  const [activeStack, setActiveStack] = useState(0);

  return (
    <section className={styles.sec} id="process">
      <div className={styles.inner}>

        {/* Process */}
        <div className={styles.half}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>How We Work</span>
          </div>
          <h2 className={styles.h2}>Our Consulting Process</h2>
          <p className={styles.sub}>
            A structured, repeatable delivery framework — built from hundreds of technology
            engagements across the GCC and beyond.
          </p>

          <div className={styles.steps}>
            {steps.map(s => (
              <div className={styles.step} key={s.n}>
                <div className={styles.stepN}>{s.n}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className={styles.half}>
          <div className={styles.eyebrow}>
            <div className={styles.rule} />
            <span>Technology Stack</span>
          </div>
          <h2 className={styles.h2}>Our Stack</h2>
          <p className={styles.sub}>
            We work with the tools your teams already use — and the platforms that enterprise
            GCC organisations need to be compliant, scalable, and secure.
          </p>

          {/* Category tabs */}
          <div className={styles.stackTabs}>
            {stackCategories.map((cat, i) => (
              <button
                key={cat.label}
                className={`${styles.stackTab} ${activeStack === i ? styles.stackTabActive : ''}`}
                onClick={() => setActiveStack(i)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Chips */}
          <div className={styles.stackGrid}>
            {stackCategories[activeStack].chips.map(t => (
              <div className={styles.stackChip} key={t}>{t}</div>
            ))}
          </div>

          {/* Why box */}
          <div className={styles.whyBox}>
            <div className={styles.whyTitle}>Why Dillon &amp; Bird for Technology?</div>
            <div className={styles.whyList}>
              {[
                'Consulting, not outsourcing — your team stays in control',
                'GCC regulatory and compliance expertise built in',
                'From strategy through to running production systems',
                'OpenShift & on-prem specialists alongside cloud expertise',
                'Transparent timelines and honest delivery estimates',
                'Knowledge that stays with you, not with us',
              ].map(w => (
                <div className={styles.whyItem} key={w}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}