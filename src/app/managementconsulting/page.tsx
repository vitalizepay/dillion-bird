// src/app/managementconsulting/page.tsx
import React from 'react';
import ManagementHero from './components/ManagementHero/ManagementHero';
import StrategicGrowth from './components/StrategicGrowth/StrategicGrowth';
import ConsultingApproach from './components/ConsultingApproach/ConsultingApproach';
import ManagementWhatItMeans from './components/ManagementWhatItMeans/ManagementWhatItMeans';


export const metadata = {
  title: 'Management Consulting | Dillon & Bird',
  description: 'Transform your business with expert management consulting solutions across the GCC.',
};


export default function ManagementConsultingPage() {
  return (
    <main className="management-consulting-page">
      <ManagementHero />
      <StrategicGrowth />
      <ConsultingApproach />
      <ManagementWhatItMeans />

    </main>
  );
}
