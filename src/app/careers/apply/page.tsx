import { Suspense } from 'react';
import ApplyForm from './components/ApplyForm/ApplyForm';

export const metadata = {
  title: 'Apply | Careers at Dillon & Bird',
  description: 'Apply to join Dillon & Bird. Submit your CV and application for consulting, corporate services, finance and technology roles in the UAE.',
  alternates: { canonical: '/careers/apply' },
};

export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ApplyForm />
    </Suspense>
  );
}