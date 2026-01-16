// src/app/companyformation/page.tsx
import React from 'react';
import CompanyFormationHero from './components/CompanyFormationHero/CompanyFormationHero';
import CompanyFormationLaunch from './components/CompanyFormationLaunch/CompanyFormationLaunch';
import CompanyFormationServices from './components/CompanyFormationServices/CompanyFormationServices';
import CompanyFormationCaseStudies from './components/CompanyFormationCaseStudies/CompanyFormationCaseStudies';
import CompanyFormationWhatItMeans from './components/CompanyFormationWhatItMeans/CompanyFormationWhatItMeans';

export const metadata = {
  title: 'Company Formation | Dillon & Bird',
  description: 'Fast, compliant company formation to launch your business seamlessly in the GCC.',
};

export default function CompanyFormationPage() {
  return (
    <main className="company-formation-page">
      <CompanyFormationHero />
      <CompanyFormationLaunch />
      <CompanyFormationServices />
      <CompanyFormationCaseStudies />
      <CompanyFormationWhatItMeans />
    </main>
  );
}
