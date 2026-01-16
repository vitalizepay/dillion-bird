import HomeHero from '@/app/home/components/HomeHero/HomeHero';
import HomeWhoWeAre from '@/app/home/components/HomeWhoWeAre/HomeWhoWeAre';
import OurExpertise from '@/app/home/components/OurExpertise/OurExpertise';
import PartnersSuccess from '@/app/home/components/PartnersSuccess/PartnersSuccess';
import BuildingRelationships from '@/app/home/components/BuildingRelationships/BuildingRelationships';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWhoWeAre />
      <OurExpertise />
      <PartnersSuccess />
      <BuildingRelationships />
    </>
  );
}
