import type { Metadata } from 'next';
import CFHero from './components/CFHero/CFHero';
import CFTicker from './components/CFTicker/CFTicker';
import CFStructures from './components/CFStructures/CFStructures';
import CFProcess from './components/CFProcess/CFProcess';
import CFTestimonial from './components/CFTestimonial/CFTestimonial';
import CFWhy from './components/CFWhy/CFWhy';
import CFFAQ from './components/CFFAQ/CFFAQ';

export const metadata: Metadata = {
  title: 'Company Formation UAE — Start in 5 Days | Dillon & Bird',
  description: 'Form your company in the UAE in as little as 5 days. Mainland, Free Zone & Offshore — licences, visas, banking, and compliance handled end to end.',
};

export default function CompanyFormationPage() {
  return (
    <>
      <CFHero />
      <CFTicker />
      <CFStructures />
      <CFProcess />
      <CFTestimonial />
      <CFWhy />
      <CFFAQ />
    </>
  );
}