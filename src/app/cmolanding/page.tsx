import type { Metadata } from 'next';
import CMOHero from './components/CMOHero/CMOHero';
import CMOTicker  from './components/CMOTicker/CMOTicker';
import CMOMetrics from './components/CMOMetrics/CMOMetrics';
import CMOServices from './components/CMOServices/CMOServices';
import CMOApproach from './components/CMOApproach/CMOApproach';
import CMOWhy from './components/CMOWhy/CMOWhy';
import CMOProcess from './components/CMOProcess/CMOProcess';
import CMOTestimonial from './components/CMOTestimonial/CMOTestimonial';
import CMOCTA from './components/CMOCTA/CMOCTA';


export const metadata: Metadata = {
  title: 'Fractional CMO Services in UAE | Dillon & Bird',
  description:
    'Embed a senior Fractional Chief Marketing Officer into your GCC business. Enterprise-grade marketing strategy, digital execution, MarTech and go-to-market leadership — at a fraction of the full-time cost.',
};

export default function FractionalCMOPage() {
  return (
    <main>
      <CMOHero />
      <CMOTicker />
      <CMOMetrics />
      <CMOServices />
      <CMOApproach />
      <CMOWhy />
      <CMOProcess />
      <CMOTestimonial />
      <CMOCTA />
    </main>
  );
}