import type { Metadata } from 'next';
import OurStoryHero from "./components/OurStoryHero/OurStoryHero";
import OurStoryJourney from "./components/OurStoryJourney/OurStoryJourney";
import OurStoryValues from "./components/OurStoryValues/OurStoryValues";
import OurStoryTeam from "./components/OurStoryTeam/OurStoryTeam";
import OurStoryCTA from "./components/OurStoryCTA/OurStoryCTA";

export const metadata: Metadata = {
  title: 'Our Story | Dillon & Bird',
  description: 'Founded in Dubai in 2009, Dillon & Bird has grown into the GCC\'s most trusted integrated strategy partner. Discover the journey, values, and team behind 200+ business transformations across six markets.',
};

export default function OurStoryPage() {
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