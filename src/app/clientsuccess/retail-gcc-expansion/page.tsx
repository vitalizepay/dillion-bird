import type { Metadata } from 'next';
import RetailHero from './components/RetailHero/RetailHero';
import RetailBody from './components/RetailBody/RetailBody';
import RetailRelated from './components/RetailRelated/RetailRelated';
import RetailCTA from './components/RetailCTA/RetailCTA';

export const metadata: Metadata = {
  title: 'Retail GCC Expansion | Dillon & Bird Client Success',
  description: 'UAE retailer scales into Saudi Arabia and Kuwait with a franchise-ready model — a Dillon & Bird client success story.',
};

export default function RetailGCCExpansionPage() {
  return (
    <>
      <RetailHero />
      <RetailBody />
      <RetailRelated />
      <RetailCTA />
    </>
  );
}