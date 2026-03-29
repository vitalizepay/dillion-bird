import type { Metadata } from 'next';
import AuditHero from './components/AuditHero/AuditHero';
import AuditTrustStrip from './components/AuditTrustStrip/AuditTrustStrip';
import AuditTicker from './components/AuditTicker/AuditTicker';
import AuditStatBand from './components/AuditStatBand/AuditStatBand';
import AuditServices from './components/AuditServices/AuditServices';
import AuditUrgency from './components/AuditUrgency/AuditUrgency';
import AuditProcess from './components/AuditProcess/AuditProcess';
import AuditTestimonial from './components/AuditTestimonial/AuditTestimonial';
import AuditWhyDB from './components/AuditWhyDB/AuditWhyDB';
import AuditCaseStudies from './components/AuditCaseStudies/AuditCaseStudies';
import AuditFAQ from './components/AuditFAQ/AuditFAQ';
import AuditCTA from './components/AuditCTA/AuditCTA';

export const metadata: Metadata = {
  title: 'Audit Services | Dillon & Bird',
  description: 'UAE-certified audit & assurance services — internal audit, VAT audit, corporate tax audit, financial due diligence & forensic investigations. Free consultation.',
  openGraph: {
    title: 'Audit & Assurance Services UAE | Dillon & Bird',
    description: 'Independent audit and assurance experts helping UAE businesses achieve compliance and financial clarity.',
    url: 'https://dillonbird.com/audit',
    type: 'website',
  },
  alternates: { canonical: 'https://dillonbird.com/audit' },
};

export default function AuditPage() {
  return (
    <>
      <AuditHero />
      <AuditTrustStrip />
      <AuditTicker />
      <AuditStatBand />
      <AuditServices />
      <AuditUrgency />
      <AuditProcess />
      <AuditTestimonial />
      <AuditWhyDB />
      <AuditCaseStudies />
      <AuditFAQ />
      <AuditCTA />
    </>
  );
}