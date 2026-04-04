'use client';
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import styles from './ClientSuccessGrid.module.css';

const cases = [
  {
    id: 1,
    href: '/clientsuccess/family-enterprise-restructuring',
    svc: 'financial-advisory',
    imp: 120,
    featured: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85&auto=format&fit=crop',
    tags: ['Family Enterprise', 'Financial Advisory', 'Restructuring'],
    metrics: [
      { n: 'AED 120M', l: 'Assets restructured & ring-fenced' },
      { n: '57%',      l: 'Reduction in holding costs YoY' },
      { n: '8 mo',     l: 'Mandate to full implementation' },
    ],
    title: 'Multi-generational family enterprise restructured for the next decade of GCC growth',
    label: 'The Challenge',
    desc: 'A second-generation UAE family group with interests across real estate, trading, and logistics faced unsustainable holding structures, fragmented governance, and exposure to regulatory changes under the new Corporate Tax regime.',
    client: 'Diversified Family Group',
    location: 'Dubai, UAE · Confidential',
    initials: 'FG',
    color: '#2563eb',
  },
  {
    id: 2,
    href: '/clientsuccess/european-saas-market-entry',
    svc: 'business-setup',
    imp: 42,
    featured: false,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
    tags: ['Technology', 'Business Setup'],
    metrics: [
      { n: '14',  l: 'Days to operational readiness' },
      { n: '42%', l: 'Lower setup cost vs. estimates' },
    ],
    title: 'European SaaS firm enters UAE market in 14 days without a local partner',
    label: 'The Challenge',
    desc: 'A Netherlands-based B2B SaaS company wanted to establish a UAE presence to serve a pipeline of enterprise clients. Previous attempts through generic PRO services had stalled for six months.',
    client: 'European SaaS Co.',
    location: 'Amsterdam → Dubai, UAE',
    initials: 'ES',
    color: '#2563eb',
  },
  {
    id: 3,
    href: '/clientsuccess/retail-gcc-expansion',
    svc: 'management-consulting',
    imp: 38,
    featured: false,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop',
    tags: ['Retail', 'Management Consulting'],
    metrics: [
      { n: '38%', l: 'Revenue increase in 12 months' },
      { n: '3',   l: 'New GCC markets entered' },
    ],
    title: 'UAE retailer scales into Saudi Arabia and Kuwait with a franchise-ready model',
    label: 'The Challenge',
    desc: 'A homegrown Dubai lifestyle brand with strong unit economics had failed two prior market-entry initiatives due to partner selection and operational complexity.',
    client: 'Lifestyle Retail Brand',
    location: 'Dubai, UAE',
    initials: 'LB',
    color: '#2563eb',
  },
  {
    id: 4,
    href: '/clientsuccess/healthcare-compliance',
    svc: 'audit',
    imp: 100,
    featured: false,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop',
    tags: ['Healthcare', 'Audit & Compliance'],
    metrics: [
      { n: '100%', l: 'Regulatory compliance achieved' },
      { n: '6 wk', l: 'Full remediation window' },
    ],
    title: 'Healthcare group achieves full UAE Corporate Tax compliance before Year 1 deadline',
    label: 'The Challenge',
    desc: 'A growing private healthcare operator with entities across three emirates had no consolidated accounting structure ahead of UAE Corporate Tax implementation.',
    client: 'Private Healthcare Group',
    location: 'Abu Dhabi, UAE',
    initials: 'HC',
    color: '#2563eb',
  },
  {
    id: 5,
    href: '/clientsuccess/logistics-ai-automation',
    svc: 'technology-consulting',
    imp: 50,
    featured: false,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop',
    tags: ['Logistics', 'Technology Consulting'],
    metrics: [
      { n: '50%',     l: 'Reduction in manual hours' },
      { n: 'AED 2.3M', l: 'Annual operational savings' },
    ],
    title: 'Logistics company cuts overhead by half with AI-led workflow automation',
    label: 'The Challenge',
    desc: 'A mid-size freight operator was managing customs documentation, route optimisation, and client reporting through spreadsheets and WhatsApp groups.',
    client: 'Freight & Logistics Operator',
    location: 'Sharjah, UAE',
    initials: 'LG',
    color: '#2563eb',
  },
  {
    id: 6,
    href: '/clientsuccess/real-estate-capital-raise',
    svc: 'financial-advisory',
    imp: 63,
    featured: false,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop',
    tags: ['Real Estate', 'Financial Advisory', 'Investor Services'],
    metrics: [
      { n: 'AED 45M', l: 'Institutional capital secured' },
      { n: '63%',     l: 'Improved debt-to-equity ratio' },
    ],
    title: 'Boutique developer secures AED 45M institutional backing for mixed-use project',
    label: 'The Challenge',
    desc: 'A boutique developer with a strong residential track record was struggling to close institutional funding for their first mixed-use scheme.',
    client: 'Boutique Developer',
    location: 'Ras Al Khaimah, UAE',
    initials: 'BD',
    color: '#2563eb',
  },
  {
    id: 7,
    href: '/clientsuccess/difc-consultancy-setup',
    svc: 'business-setup',
    imp: 35,
    featured: false,
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80&auto=format&fit=crop',
    tags: ['Professional Services', 'Business Setup', 'Banking'],
    metrics: [
      { n: '9', l: 'Working days, application to banking' },
      { n: '4', l: 'Multi-currency accounts opened' },
    ],
    title: 'Consultancy established, banked, and trading in DIFC within a single working week',
    label: 'The Challenge',
    desc: 'A senior partner leaving a Big 4 firm wanted to launch an independent practice in DIFC within weeks. Speed and discretion were both critical.',
    client: 'Independent Consultancy',
    location: 'DIFC, Dubai',
    initials: 'IC',
    color: '#2563eb',
  },
  {
    id: 8,
    href: '/clientsuccess/fb-ebitda-turnaround',
    svc: 'management-consulting',
    imp: 29,
    featured: false,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop',
    tags: ['F&B / Hospitality', 'Management Consulting'],
    metrics: [
      { n: '29%',  l: 'EBITDA margin improvement' },
      { n: '12 mo', l: 'Full transformation timeline' },
    ],
    title: 'F&B group turns around underperforming portfolio with 29% EBITDA improvement',
    label: 'The Challenge',
    desc: 'A multi-brand F&B operator with seven outlets across Dubai and Abu Dhabi was losing margin across three concepts. Leadership lacked unit-level profitability data.',
    client: 'Multi-Brand F&B Group',
    location: 'Dubai & Abu Dhabi, UAE',
    initials: 'MF',
    color: '#2563eb',
  },
  {
    id: 9,
    href: '/clientsuccess/ksa-manufacturing-vision',
    svc: 'financial-advisory',
    imp: 72,
    featured: false,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop',
    tags: ['Manufacturing', 'Financial Advisory', 'Vision 2030'],
    metrics: [
      { n: 'SAR 28M', l: 'Government grant funding secured' },
      { n: '72%',     l: 'Reduction in projected first-year losses' },
    ],
    title: 'UAE manufacturer wins SAR 28M in KSA Vision 2030 grants and builds a Saudi operation',
    label: 'The Challenge',
    desc: 'A UAE-based industrial manufacturer wanted to capitalise on Saudi Arabia\'s Vision 2030 localisation drive but lacked the regulatory knowledge and financial structuring required.',
    client: 'Industrial Manufacturer',
    location: 'UAE → Riyadh, Saudi Arabia',
    initials: 'IM',
    color: '#2563eb',
  },
];

const filters = [
  { label: 'All Stories',          value: 'all',                   count: 9 },
  { label: 'Financial Advisory',   value: 'financial-advisory',    count: 3 },
  { label: 'Business Setup',       value: 'business-setup',        count: 2 },
  { label: 'Management Consulting',value: 'management-consulting', count: 2 },
  { label: 'Technology',           value: 'technology-consulting', count: 1 },
  { label: 'Audit & Compliance',   value: 'audit',                 count: 1 },
];

export default function ClientSuccessGrid() {
  const [active, setActive] = useState('all');
  const [sort, setSort] = useState('default');

  const filtered = cases
    .filter(c => active === 'all' || c.svc === active)
    .sort((a, b) => sort === 'impact' ? b.imp - a.imp : 0);

  return (
    <section className={styles.sec}>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        {filters.map(f => (
          <button
            key={f.value}
            className={`${styles.filterBtn} ${active === f.value ? styles.filterBtnOn : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
            <span className={styles.filterCount}>{f.count}</span>
          </button>
        ))}
      </div>

      {/* Results bar */}
      <div className={styles.resultsBar}>
        <span className={styles.resultsLbl}>
          <strong>{filtered.length}</strong> client success {filtered.length === 1 ? 'story' : 'stories'}
        </span>
        <div className={styles.sortWrap}>
          <span>Sort by</span>
          <select
            className={styles.sortSelect}
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="default">Featured</option>
            <option value="impact">Highest Impact</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map(c => (
          <div className={`${styles.card} ${c.featured ? styles.cardFeatured : ''}`} key={c.id}>

            {/* Image */}
            <div className={styles.cardImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.title} loading="lazy" />
              <div className={styles.cardOverlay} />
              <div className={styles.imgTags}>
                <span className={styles.tagPrimary}>{c.tags[0]}</span>
                {c.tags.slice(1).map(t => (
                  <span className={styles.tagSecondary} key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className={styles.cardBody}>
                <div className={styles.metrics}>
                    {c.metrics.map((m, i) => (
                    <React.Fragment key={`${c.id}-${i}`}>
                        <div className={styles.metric}>
                        <span className={styles.metricN}>{m.n}</span>
                        <span className={styles.metricL}>{m.l}</span>
                        </div>
                        {i < c.metrics.length - 1 && <div className={styles.metricDiv} />}
                    </React.Fragment>
                    ))}
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{c.title}</h2>
                <p className={styles.cardLabel}>{c.label}</p>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            </div>

            {/* Footer */}
            <div className={styles.cardFoot}>
  <div className={styles.clientInfo}>
    <div className={styles.avatar} style={{ background: c.color }}>
      {c.initials}
    </div>
    <div>
      <p className={styles.clientName}>{c.client}</p>
      <p className={styles.clientLoc}>{c.location}</p>
    </div>
  </div>
  <Link
    href={c.href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.readLink}
  >
    Read Full Story
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
    </svg>
  </Link>
</div>

          </div>
        ))}
      </div>
    </section>
  );
}