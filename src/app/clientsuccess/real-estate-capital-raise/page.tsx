import type { Metadata } from 'next';
import RealEstateHero from './components/RealEstateHero/RealEstateHero';
import RealEstateBody from './components/RealEstateBody/RealEstateBody';
import RealEstateRelated from './components/RealEstateRelated/RealEstateRelated';
import RealEstateCTA from './components/RealEstateCTA/RealEstateCTA';

export const metadata: Metadata = {
    title: 'Real Estate Capital Raise | Dillon & Bird Client Success',
    description: 'Boutique developer secures AED 45M institutional backing for mixed-use scheme in Ras Al Khaimah — a Dillon & Bird client success story.',
  };


export default function RealEstateCapitalPage() {
  return (
    <>
      <RealEstateHero />
      <RealEstateBody />
      <RealEstateRelated />
      <RealEstateCTA />
    </>
  );
}