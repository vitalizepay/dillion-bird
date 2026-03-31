import OurStoryHero from "./components/OurStoryHero/OurStoryHero";
import OurStoryJourney from "./components/OurStoryJourney/OurStoryJourney";
import OurStoryValues from "./components/OurStoryValues/OurStoryValues";
import OurStoryTeam from "./components/OurStoryTeam/OurStoryTeam";
import OurPeople from "../about/components/OurPeople/OurPeople";
import OurStoryCTA from "./components/OurStoryCTA/OurStoryCTA";

export default function LetsGrowPag() {
    return (
      <>
        <OurStoryHero />
        <OurStoryJourney />
        <OurStoryValues />
        <OurStoryTeam />
        <OurStoryCTA />
      </>
    );
  }