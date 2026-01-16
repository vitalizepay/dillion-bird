// src/app/accountingfinancialservices/page.tsx
import React from 'react';
import AccountingFinancialServicesHero from './components/AccountingFinancialServicesHero/AccountingFinancialServicesHero';
import AccountingFinancialsConfidence from './components/AccountingFinancialsConfidence/AccountingFinancialsConfidence';
import AccountingFinancialServices from './components/AccountingFinancialServices/AccountingFinancialServices';
import AccountingFinancialServicesWhatItMeans from './components/AccountingFinancialServicesWhatItMeans/AccountingFinancialServicesWhatItMeans';

export const metadata = {
  title: 'Accounting & Financial Services | Dillon & Bird',
  description: 'Audit-ready, reliable financials that build trust and drive growth in the GCC.',
};

export default function AccountingFinancialServicesPage() {
  return (
    <main className="accounting-financial-services-page">
      <AccountingFinancialServicesHero />
      <AccountingFinancialsConfidence />
      <AccountingFinancialServices />
      <AccountingFinancialServicesWhatItMeans />
    </main>
  );
}
