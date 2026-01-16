// src/app/financialplanninginvestorservices/page.tsx
import React from 'react';
import FinancialPlanningInvestorServicesHero from './components/FinancialPlanningInvestorServicesHero/FinancialPlanningInvestorServicesHero';
import FinancialPlanningSecureGrow from './components/FinancialPlanningSecureGrow/FinancialPlanningSecureGrow';
import FinancialPlanningInvestorServices from './components/FinancialPlanningInvestorServices/FinancialPlanningInvestorServices';
import FinancialPlanningInvestorWhatItMeans from './components/FinancialPlanningInvestorWhatItMeans/FinancialPlanningInvestorWhatItMeans'

export const metadata = {
  title: 'Financial Planning & Investor Services | Dillon & Bird',
  description: 'Secure your future and attract investors with smart, strategic financial planning and advisory.',
};

export default function FinancialPlanningInvestorServicesPage() {
  return (
    <main className="financial-planning-investor-services-page">
      <FinancialPlanningInvestorServicesHero />
      <FinancialPlanningSecureGrow />
      <FinancialPlanningInvestorServices />
      <FinancialPlanningInvestorWhatItMeans />
      {/* Add more components here */}
    </main>
  );
}
