import type { Metadata } from 'next';
import FbHero from './components/FbHero/FbHero';
import FbBody from './components/FbBody/FbBody';
import FbRelated from './components/FbRelated/FbRelated';
import FbCTA from './components/FbCTA/FbCTA';

export const metadata: Metadata = {
  title: 'F&B EBITDA Turnaround | Dillon & Bird Client Success',
  description: 'Multi-brand F&B group achieves 29% EBITDA improvement through data-driven portfolio optimisation — a Dillon & Bird client success story.',
};

export default function FbTurnaroundPage() {
  return (
    <>
      <FbHero />
      <FbBody />
      <FbRelated />
      <FbCTA />
    </>
  );
}