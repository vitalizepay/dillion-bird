// src/app/partnership/page.tsx
import React from 'react';
import PartnershipHero from './components/PartnershipHero/PartnershipHero'; // Fixed typo
import CollaborateGrowth from './components/CollaborateGrowth/CollaborateGrowth';
import PartnershipApproach from './components/PartnershipApproach/PartnershipApproach';
import PartnershipWhatItMeans from './components/PartnershipWhatItMeans/PartnershipWhatItMeans';

export const metadata = {
  title: 'Partnerships | Dillon & Bird',
  description: 'Lets build lasting partnerships that drive meaningful growth across the GCC.',
};

export default function PartnershipPage() {
  return (
    <main className="partnership-page">
      <PartnershipHero />
      <CollaborateGrowth />
      <PartnershipApproach />
      <PartnershipWhatItMeans />
    </main>
  );
}
