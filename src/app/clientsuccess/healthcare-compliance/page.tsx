import type { Metadata } from 'next';
import HealthcareHero from './components/HealthcareHero/HealthcareHero';
import HealthcareBody from './components/HealthcareBody/HealthcareBody';
import HealthcareRelated from './components/HealthcareRelated/HealthcareRelated';
import HealthcareCTA from './components/HealthcareCTA/HealthcareCTA';

export const metadata: Metadata = {
  title: 'Healthcare Tax Compliance | Dillon & Bird Client Success',
  description: 'Healthcare group achieves full UAE Corporate Tax compliance before Year 1 deadline — a Dillon & Bird client success story.',
};

export default function HealthcareCompliancePage() {
  return (
    <>
      <HealthcareHero />
      <HealthcareBody />
      <HealthcareRelated />
      <HealthcareCTA />
    </>
  );
}