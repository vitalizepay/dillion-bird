import { Suspense } from 'react';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

// Internal dashboard: must never be indexed or followed by search engines.
export const metadata = {
  alternates: { canonical: '/careers/admin' },
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminPage() {
  return (
    <Suspense fallback={<div style={{ padding: '60px', textAlign: 'center', color: '#888' }}>Loading admin panel…</div>}>
      <AdminDashboard />
    </Suspense>
  );
}