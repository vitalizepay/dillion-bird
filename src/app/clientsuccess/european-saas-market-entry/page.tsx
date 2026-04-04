import type { Metadata } from 'next';
import CaseHero from './components/CaseHero/CaseHero';
import CaseBody from './components/CaseBody/CaseBody';
import CaseRelated from './components/CaseRelated/CaseRelated';
import CaseCTA from './components/CaseCTA/CaseCTA';

export const metadata: Metadata = {
  title: 'SaaS UAE Market Entry | Dillon & Bird Client Success',
  description: 'European SaaS firm enters UAE market in 14 days without a local partner — a Dillon & Bird client success story.',
};

export default function SaasMarketEntryPage() {
  return (
    <>
      <CaseHero />
      <CaseBody />
      <CaseRelated />
      <CaseCTA />
    </>
  );
}