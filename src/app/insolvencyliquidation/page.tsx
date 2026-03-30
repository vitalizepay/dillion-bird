import InsolvencyHero from "./components/InsolvencyHero/InsolvencyHero";
import InsolvencyTicker from "./components/InsolvencyTicker/InsolvencyTicker"
import InsolvencyServices from "./components/InsolvencyServices/InsolvencyServices";
import InsolvencyProcess from "./components/InsolvencyProcess/InsolvencyProcess";
import InsolvencyTesttimonial from "./components/InsolvencyTestimonial/InsolvencyTestimonial"
import InsolvencyWhy from "./components/InsolvencyWhy/InsolvencyWhy";
import InsolvencyCaseStudies from "./components/InsolvencyCaseStudies/InsolvencyCaseStudies";
import InsolvencyCTA from "./components/InsolvencyCTA/InsolvencyCTA";
import InsolvencyCrossLinks from "./components/InsolvencyCrossLinks/InsolvencyCrossLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Insolvency Liquidation | Dillon & Bird',
    description:
      'UAE-licensed insolvency advisors guiding businesses and individuals through voluntary liquidation, court-supervised wind-downs, debt restructuring and creditor negotiations — with full confidentiality and a clear path forward.',
  };

export default function InsolvencyPage() {
  return (
    <>
      <InsolvencyHero />
      <InsolvencyTicker />
      <InsolvencyServices />
      <InsolvencyProcess />
      <InsolvencyTesttimonial />
      <InsolvencyWhy />
      <InsolvencyCaseStudies />
      <InsolvencyCTA />
      <InsolvencyCrossLinks />
   
    </>
  );
}