import type { Metadata } from 'next';
import ClientSuccessHero from './components/ClientSuccessHero/ClientSuccessHero';
import ClientSuccessStrip from './components/ClientSuccessStrip/ClientSuccessStrip';
import ClientSuccessGrid from './components/ClientSuccessGrid/ClientSuccessGrid';
import ClientSuccessTestimonials from './components/ClientSuccessTestimonials/ClientSuccessTestimonials';
import ClientSuccessProcess from './components/ClientSuccessProcess/ClientSuccessProcess';
import ClientSuccessCTA from './components/ClientSuccessCTA/ClientSuccessCTA';

export const metadata: Metadata = {
    title: 'Client Success | Dillon & Bird Client Success',
    description: 'Proven results across the GCC. Explore how Dillon & Bird has delivered measurable, lasting impact for businesses across the region.',
};

export default function ClientSuccessPage() {
  return (
    <>
      <ClientSuccessHero />
      <ClientSuccessStrip />
      <ClientSuccessGrid />
      <ClientSuccessTestimonials />
      <ClientSuccessProcess />
      <ClientSuccessCTA />
    </>
  );
}