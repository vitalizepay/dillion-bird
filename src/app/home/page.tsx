import HomeHero from "./components/HomeHero/HomeHero";
import HomeWhoWeAre from "./components/HomeWhoWeAre/HomeWhoWeAre";
import OurExpertise from "./components/OurExpertise/OurExpertise";
import PartnersSuccess from "./components/PartnersSuccess/PartnersSuccess"
import BuildingRelationships from "./components/BuildingRelationships/BuildingRelationships";

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
