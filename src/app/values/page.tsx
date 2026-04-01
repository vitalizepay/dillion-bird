import type { Metadata } from 'next';
import ValuesHero from './components/ValuesHero/ValuesHero';
import ValuesStrip from './components/ValuesStrip/ValuesStrip';
import ValuesGrid from './components/ValuesGrid/ValuesGrid';
import ValuesPhilosophy from './components/ValuesPhilosophy/ValuesPhilosophy';
import ValuesCommitments from './components/ValuesCommitments/ValuesCommitments'; 
import ValuesRegion from './components/ValuesRegion/ValuesRegion';  
import ValuesCTA from './components/ValuesCTA/ValuesCTA';

export const metadata: Metadata = {
  title: "Values | Dillon & Bird",
  description: "Ready to grow? Dillon & Bird partners with ambitious businesses across the UAE and GCC to unlock sustainable, scalable growth through embedded advisory, strategic frameworks, and measurable results.",
};

export default function ValuesPage() {
  return (
    <>
      <ValuesHero />
      <ValuesStrip />
      <ValuesGrid />
      <ValuesPhilosophy />
      <ValuesCommitments />
      <ValuesRegion />
      <ValuesCTA />
    </>
  );
}