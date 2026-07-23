import type { Metadata } from 'next';
import NewHero from './components/NewHero/NewHero';
import HomeWhoWeAre from '@/app/home/components/HomeWhoWeAre/HomeWhoWeAre';
import OurExpertise from '@/app/home/components/OurExpertise/OurExpertise';
import PartnersSuccess from '@/app/home/components/PartnersSuccess/PartnersSuccess';
import BuildingRelationships from '@/app/home/components/BuildingRelationships/BuildingRelationships';

export const metadata: Metadata = {
  title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
  robots: { index: false, follow: true },
};

export default function NewPage() {
  return (
    <>
      <NewHero />
      <HomeWhoWeAre />
      <OurExpertise />
      <PartnersSuccess />
      <BuildingRelationships />
    </>
  );
}
