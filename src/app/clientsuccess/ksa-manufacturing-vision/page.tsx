import type { Metadata } from 'next';
import KsaHero from './components/KsaHero/KsaHero';
import KsaBody from './components/KsaBody/KsaBody';
import KsaRelated from './components/KsaRelated/KsaRelated';
import KsaCTA from './components/KsaCTA/KsaCTA';

export const metadata: Metadata = {
  title: 'KSA Vision 2030 Expansion | Dillon & Bird Client Success',
  description: 'UAE manufacturer wins SAR 28M in KSA Vision 2030 grants and builds a Saudi operation from zero — a Dillon & Bird client success story.',
};

export default function KsaManufacturingPage() {
  return (
    <>
      <KsaHero />
      <KsaBody />
      <KsaRelated />
      <KsaCTA />
    </>
  );
}