import type { Metadata } from 'next';
import LogisticsHero from './components/LogisticsHero/LogisticsHero';
import LogisticsBody from './components/LogisticsBody/LogisticsBody';
import LogisticsRelated from './components/LogisticsRelated/LogisticsRelated';
import LogisticsCTA from './components/LogisticsCTA/LogisticsCTA';

export const metadata: Metadata = {
  title: 'Logistics AI Automation | Dillon & Bird Client Success',
  description: 'Freight operator cuts manual overhead by 50% with AI-led workflow automation — a Dillon & Bird client success story.',
};

export default function LogisticsAutomationPage() {
  return (
    <>
      <LogisticsHero />
      <LogisticsBody />
      <LogisticsRelated />
      <LogisticsCTA />
    </>
  );
}