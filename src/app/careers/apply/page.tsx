import { Suspense } from 'react';
import ApplyForm from './components/ApplyForm/ApplyForm';

export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ApplyForm />
    </Suspense>
  );
}