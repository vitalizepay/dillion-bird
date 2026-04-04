import type { Metadata } from 'next';
import DifcHero from './components/DifcHero/DifcHero';
import DifcBody from './components/DifcBody/DifcBody';
import DifcRelated from './components/DifcRelated/DifcRelated';
import DifcCTA from './components/DifcCTA/DifcCTA';

export const metadata: Metadata = {
  title: 'DIFC Consultancy Setup | Dillon & Bird Client Success',
  description: 'Independent consultancy established, banked, and trading in DIFC within nine working days — a Dillon & Bird client success story.',
};

export default function DifcConsultancyPage() {
  return (
    <>
      <DifcHero />
      <DifcBody />
      <DifcRelated />
      <DifcCTA />
    </>
  );
}