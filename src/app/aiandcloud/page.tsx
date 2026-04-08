import type { Metadata } from 'next';
import TechHero from './components/TechHero/TechHero';
import TechServices from './components/TechServices/TechServices';
import TechWhyUs from './components/TechWhyUs/TechWhyUs';
import TechProcess from './components/TechProcess/TechProcess';
import TechBenefits from './components/TechBenefits/TechBenefits';
import TechIndustries from './components/TechIndustries/TechIndustries';
import TechCTA from './components/TechCTA/TechCTA';

export const metadata: Metadata = {
  title: 'Technology Consulting | Dillon & Bird',
  description: 'AI, Cloud, OpenShift & On-Prem consulting for modern enterprises across the GCC. Dillon & Bird delivers measurable technology outcomes.',
};

export default function TechnologyConsultingPage() {
  return (
    <>
      <TechHero />
      <TechServices />
      <TechWhyUs />
      <TechProcess />
      <TechBenefits />
      <TechIndustries />
      <TechCTA />
    </>
  );
}