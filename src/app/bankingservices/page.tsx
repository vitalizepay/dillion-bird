import type { Metadata } from 'next';
import BankingHero from './components/BankingHero/BankingHero';
import BankingTicker from './components/BankingTicker/BankingTicker';
import BankingServices from './components/BankingServices/BankingServices';
import BankingProcess from './components/BankingProcess/BankingProcess';
import BankingQuote from './components/BankingQuote/BankingQuote';
import BankingWhy from './components/BankingWhy/BankingWhy';
import BankingCTA from './components/BankingCTA/BankingCTA';
import BankingSectors from './components/BankingSectors/BankingSectors';
import BankingCrossLinks from './components/BankingCrossLinks/BankingCrossLinks';

export const metadata: Metadata = {
  title: 'Banking Services | Dillon & Bird',
  description: 'From structuring complex debt facilities to managing multi-bank credit relationships across the UAE and GCC, Dillon &amp; Bird delivers independent banking advisory that puts your business interests first.',
  openGraph: {
    title: 'Audit & Assurance Services UAE | Dillon & Bird',
    description: 'From structuring complex debt facilities to managing multi-bank credit relationships across the UAE and GCC, Dillon &amp; Bird delivers independent banking advisory that puts your business interests first.',
    url: 'https://dillonbird.com/bankingservices',
    type: 'website',
  },
  alternates: { canonical: 'https://dillonbird.com/bankingservices' },
};

export default function BankingPage() {
  return (
    <>
      <BankingHero />
      <BankingTicker />
      <BankingServices />
      <BankingProcess />
      <BankingQuote />
      <BankingWhy />
      <BankingSectors />
      <BankingCTA />
      <BankingCrossLinks />
      
    </>
  );
}