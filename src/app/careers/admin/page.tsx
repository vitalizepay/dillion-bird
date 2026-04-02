import { Suspense } from 'react';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

export default function AdminPage() {
  return (
    <Suspense fallback={<div style={{ padding: '60px', textAlign: 'center', color: '#888' }}>Loading admin panel…</div>}>
      <AdminDashboard />
    </Suspense>
  );
}