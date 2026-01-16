// src/app/corporateservices/page.tsx
import React from 'react';
import CorporateServicesHero from './components/CorporateServicesHero/CorporateServicesHero';
import FocusOnCore from './components/FocusOnCore/FocusOnCore';
import CorporateServicesEncompass from './components/CorporateServicesEncompass/CorporateServicesEncompass';
import CorporateServicesWhatItMeans from './components/CorporateServicesWhatItMeans/CorporateServicesWhatItMeans';

export const metadata = {
  title: 'Corporate Services | Dillon & Bird',
  description: 'Streamline your operations with our end-to-end corporate services tailored for growth in the GCC.',
};

export default function CorporateServicesPage() {
  return (
    <main className="corporate-services-page">
      <CorporateServicesHero />
      <FocusOnCore />
      <CorporateServicesEncompass />
      <CorporateServicesWhatItMeans />
      {/* Add more components here */}
    </main>
  );
}
