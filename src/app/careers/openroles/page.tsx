// page.tsx — server component for metadata
import type { Metadata } from 'next';
import OpenRolesClient from './OpenRolesClient';

export const metadata: Metadata = {
  title: 'Careers Open Roles | Dillon & Bird',
  description: 'Ready to grow? Dillon & Bird partners with ambitious businesses across the UAE and GCC to unlock sustainable, scalable growth through embedded advisory, strategic frameworks, and measurable results.',
};

export default function OpenRolesPage() {
  return <OpenRolesClient />;
}