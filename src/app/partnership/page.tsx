// src/app/partnership/page.tsx
import React from 'react';
import PartnershipHero from './components/PartnershipHero/PartnershipHero'; // Fixed typo
import CollaborateGrowth from './components/CollaborateGrowth/CollaborateGrowth';

export const metadata = {
  title: 'Partnerships | Dillon & Bird',
  description: 'Lets build lasting partnerships that drive meaningful growth across the GCC.',
};

export default function PartnershipPage() {
  return (
    <main className="partnership-page">
      <PartnershipHero />
      <CollaborateGrowth />
    </main>
  );
}
