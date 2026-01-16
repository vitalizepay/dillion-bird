// src/app/financialplanninginvestorservices/page.tsx
import React from 'react';
import TechnologyConsultingHero from './components/TechnologyConsultingHero/TechnologyConsultingHero';
import TechnologyConsultingSmartTechProgress from './components/TechnologyConsultingSmartTechProgress/TechnologyConsultingSmartTechProgress';
import TechnologyConsultingExpertise from './components/TechnologyConsultingExpertise/TechnologyConsultingExpertise';
import TechnologyConsultingWhatItMeans from './components/TechnologyConsultingWhatItMeans/TechnologyConsultingWhatItMeans';

export const metadata = {
  title: 'Technology Consulting | Dillon & Bird',
  description: 'Empowering your business with smart, scalable tech solutions that drive efficiency and innovation.',
};

export default function TechnologyConsultingPage() {
  return (
    <main className="technology-consulting-page">
      <TechnologyConsultingHero />
      <TechnologyConsultingSmartTechProgress />
      <TechnologyConsultingExpertise />
      <TechnologyConsultingWhatItMeans />
      {/* Add more components here */}
    </main>
  );
}
