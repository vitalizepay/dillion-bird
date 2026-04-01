import type { Metadata } from 'next';
import GrowHero from "./components/GrowHero/GrowHero";
import GrowFramework from "./components/GrowFramework/GrowFramework";
import GrowResults from "./components/GrowResults/GrowResults";
import GrowCTA from "./components/GrowCTA/GrowCTA";

export const metadata: Metadata = {
  title: "Let's Grow | Dillon & Bird",
  description: "Ready to grow? Dillon & Bird partners with ambitious businesses across the UAE and GCC to unlock sustainable, scalable growth through embedded advisory, strategic frameworks, and measurable results.",
};

export default function LetsGrowPage() {
  return (
    <>
      <GrowHero />
      <GrowFramework />
      <GrowResults />
      <GrowCTA />
    </>
  );
}