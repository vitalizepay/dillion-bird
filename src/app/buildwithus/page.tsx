import type { Metadata } from 'next';
import BuildWithUsHero from "./components/BuildWithUsHero/BuildWithUsHero";
import BuildWithUsOfferings from "./components/BuildWithUsOfferings/BuildWithUsOfferings";
import BuildWithUsPartners from "./components/BuildWithUsPartners/BuildWithUsPartners";
import BuildWithUsCTA from "./components/BuildWithUsCTA/BuildWithUsCTA";

export const metadata: Metadata = {
  title: 'Build With Us | Dillon & Bird',
  description: 'Partner with Dillon & Bird to build something extraordinary. From retained advisory to project-based mandates — we embed ourselves in your business and deliver results across the UAE and GCC.',
};

export default function BuildWithUs() {
  return (
    <>
      <BuildWithUsHero />
      <BuildWithUsOfferings />
      <BuildWithUsPartners />
      <BuildWithUsCTA />
    </>
  );
}