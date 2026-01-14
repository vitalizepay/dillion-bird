// src/app/about/page.tsx
import React from 'react';
import AboutHero from './components/AboutHero/AboutHero';
import OurGCCLegacy from './components/OurGCCLegacy/OurGCCLegacy';
import VisionMission from './components/VisionMission/VisionMission';
import DrivingPhilosophy from './components/DrivingPhilosophy/DrivingPhilosophy.';
import WhatItMeans from './components/WhatItMeans/WhatItMeans';
import OurPeople from './components/OurPeople/OurPeople';


export const metadata = {
  title: 'About Us | Dillon & Bird',
  description: 'Driving the future of business in the GCC with bold strategy, smart tech, and trusted expertise. Learn about our legacy and commitment to your success.',
  keywords: ['About Dillon & Bird', 'GCC Business Consulting', 'Strategic Partners UAE', 'Business Growth GCC'],
  openGraph: {
    title: 'About Us | Dillon & Bird',
    description: 'Driving the future of business in the GCC with bold strategy, smart tech, and trusted expertise.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Our GCC Legacy Section */}
      <OurGCCLegacy />
      <VisionMission />
      <DrivingPhilosophy />
      <WhatItMeans />
      <OurPeople />
      {/* Add more sections here as needed */}
    </main>
  );
}
