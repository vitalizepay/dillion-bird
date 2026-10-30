import HomeHero from "./components/HomeHero/HomeHero";
import HomeWhoWeAre from "./components/HomeWhoWeAre/HomeWhoWeAre";
import OurExpertise from "./components/OurExpertise/OurExpertise";
import PartnersSuccess from "./components/PartnersSuccess/PartnersSuccess"
import BuildingRelationships from "./components/BuildingRelationships/BuildingRelationships";

export const metadata = {
  title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
  description: 'Dillon & Bird is a UAE consulting firm working across strategy, corporate services, finance and technology for businesses in the GCC.',
  alternates: { canonical: '/home' },
};

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
