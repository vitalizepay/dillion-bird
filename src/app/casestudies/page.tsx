import type { Metadata } from 'next';
import CaseStudiesHero from "./components/CaseStudiesHero/CaseStudiesHero"
import CaseStudiesFeatured from "./components/CaseStudiesFeatured/CaseStudiesFeatured"
import CaseStudiesContent from "./components/CaseStudiesContent/CaseStudiesContent"
import CaseStudiesCTA from "./components/CaseStudiesCTA/CaseStudiesCTA"

export const metadata: Metadata = {
  title: "Case Studies | Dillon & Bird",
  description: "Ready to grow? Dillon & Bird partners with ambitious businesses across the UAE and GCC to unlock sustainable, scalable growth through embedded advisory, strategic frameworks, and measurable results.",
};

export default function CaseStudies() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesFeatured />
      <CaseStudiesContent />
      <CaseStudiesCTA />
    </>
  );
}