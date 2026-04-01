import type { Metadata } from 'next';
import PlanYourGrowthHero from "./components/PlanYourGrowthHero/PlanYourGrowthHero";
import PlanYourGrowthAreas from "./components/PlanYourGrowthAreas/PlanYourGrowthAreas";
import PlanYourGrowthMethod from "./components/PlanYourGrowthMethod/PlanYourGrowthMethod";
import PlanYourGrowthCTA from "./components/PlanYourGrowthCTA/PlanYourGrowthCTA";


export const metadata: Metadata = {
  title: "Plan Your Growth | Dillon & Bird",
  description: "Ready to grow? Dillon & Bird partners with ambitious businesses across the UAE and GCC to unlock sustainable, scalable growth through embedded advisory, strategic frameworks, and measurable results.",
};

export default function PlanYourGrowthPage() {
  return (
    <>
      <PlanYourGrowthHero />
      <PlanYourGrowthAreas />
      <PlanYourGrowthMethod />
      <PlanYourGrowthCTA />
    </>
  );
}