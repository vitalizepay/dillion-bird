import type { Metadata } from 'next';
import CareersHero from './components/CareersHero/CareersHero';
import CareersTicker from './components/CareersTicker/CareersTicker';
import CareersWhyJoin from './components/CareersWhyJoin/CareersWhyJoin';
import CareersBenefits from './components/CareersBenefits/CareersBenefits';
import CareersTrack from './components/CareersTrack/CareersTrack';
import CareersProcess from './components/CareersProcess/CareersProcess';
import CareersCTA from './components/CareersCTA/CareersCTA';


export const metadata: Metadata = {
  title: "Careers Home | Dillon & Bird",
  description: "Ready to grow? Dillon & Bird partners with ambitious businesses across the UAE and GCC to unlock sustainable, scalable growth through embedded advisory, strategic frameworks, and measurable results.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersTicker />
      <CareersWhyJoin />
      <CareersBenefits />
      <CareersTrack />
      <CareersProcess />
      <CareersCTA />

    </>
  );
}