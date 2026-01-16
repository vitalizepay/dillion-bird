import HomeHero from "@/app/home/components/HomeHero/HomeHero";
import HomeWhoWeAre from "@/app/home/components/HomeWhoWeAre/HomeWhoWeAre";
import OurExpertise from "@/app/home/components/OurExpertise/OurExpertise";
import PartnersSuccess from "@/app/home/components/PartnersSuccess/PartnersSuccess";
import BuildingRelationships from "@/app/home/components/BuildingRelationships/BuildingRelationships";

export const metadata = {
  title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
  description: 'Dillon & Bird is a premium consulting firm driving unprecedented growth and innovation across the GCC. Strategic partnerships, management consulting, and corporate services.',
  keywords: 'consulting, GCC, strategic partnerships, business consulting',
  authors: [{ name: 'Dillon & Bird' }],
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dilionbird.com/',
    title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
    description: 'Dillon & Bird is a premium consulting firm driving unprecedented growth and innovation across the GCC. Strategic partnerships, management consulting, and corporate services.',
    images: [
      {
        url: 'https://dilionbird.com/logo.svg',
        width: 200,
        height: 200,
        alt: 'Dillon & Bird',
      },
    ],
    siteName: 'Dillon & Bird',
  },

  // Twitter
  twitter: {
    card: 'summary',
    title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
    description: 'Premium consulting firm driving growth and innovation across the GCC.',
    images: ['https://dilionbird.com/logo.svg'],
  },

  // LinkedIn
  metadataBase: new URL('https://dilionbird.com'),
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeWhoWeAre />
      <OurExpertise />
      <PartnersSuccess />
      <BuildingRelationships />
    </main>
  );
}
