import styles from './AuditTrustStrip.module.css';

const items = [
  {
    label: 'FTA-Registered Advisors',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: 'Fixed-Fee Engagements',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    label: '24-Hour Response Guarantee',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    label: 'Mainland · Free Zone · DIFC · ADGM',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    label: 'Dedicated Senior Auditor',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

export default function AuditTrustStrip() {
  return (
    <div className={styles.strip}>
      {items.map(item => (
        <div className={styles.item} key={item.label}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}