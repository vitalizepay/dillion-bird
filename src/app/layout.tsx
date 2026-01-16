import type { Metadata } from 'next';
import "./globals.css";
import { Montserrat, Nunito_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTASection from "@/components/CTASection/CTASection";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-montserrat",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
  description: 'Dillon & Bird is a premium consulting firm driving unprecedented growth and innovation across the GCC. Strategic partnerships, management consulting, and corporate services.',
  keywords: 'consulting, GCC, strategic partnerships, business consulting, management consulting',
  authors: [{ name: 'Dillon & Bird' }],
  metadataBase: new URL('https://dilionbird.com'),
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dilionbird.com',
    title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
    description: 'Dillon & Bird is a premium consulting firm driving unprecedented growth and innovation across the GCC. Strategic partnerships, management consulting, and corporate services.',
    images: [
      {
        url: '/logo.png',
        width: 200,
        height: 200,
        alt: 'Dillon & Bird Logo',
      },
    ],
    siteName: 'Dillon & Bird',
  },

  // Twitter
  twitter: {
    card: 'summary',
    title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
    description: 'Dillon & Bird is a premium consulting firm driving unprecedented growth and innovation across the GCC. Strategic partnerships, management consulting, and corporate services.',
    images: ['/logo.png'],
    creator: '@dilionbird',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.variable} ${nunito.variable}`}>
        <Navbar />
        <main>{children}</main>
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
