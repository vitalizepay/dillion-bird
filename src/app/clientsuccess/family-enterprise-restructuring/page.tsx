import type { Metadata } from 'next';
import FamilyHero from './components/FamilyHero/FamilyHero';
import FamilyBody from './components/FamilyBody/FamilyBody';
import FamilyRelated from './components/FamilyRelated/FamilyRelated';
import FamilyCTA from './components/FamilyCTA/FamilyCTA';

export const metadata: Metadata = {
  title: 'Family Enterprise Restructuring | Dillon & Bird Client Success',
  description: 'Multi-generational family enterprise restructured for the next decade of GCC growth — a Dillon & Bird client success story.',
};

export default function FamilyEnterprisePage() {
  return (
    <>
      <FamilyHero />
      <FamilyBody />
      <FamilyRelated />
      <FamilyCTA />
    </>
  );
}