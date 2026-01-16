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
  keywords: 'GCC consulting, Dubai business, strategic partnerships, management consulting, UAE company formation',
  authors: [{ name: 'Dillon & Bird' }],
  metadataBase: new URL('https://dilionbird.com'),
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dilionbird.com',
    title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
    description: 'Dillon & Bird is a premium consulting firm driving unprecedented growth and innovation across the GCC. Strategic partnerships, management consulting, and corporate services.',
    siteName: 'Dillon & Bird',
    images: [
      {
        url: 'https://storage.googleapis.com/gpt-engineer-file-uploads/RMEudFFF1oX2REUOr0q3qvNIpyJ3/social-images/social-1767890819384-DnB.jpg',
        width: 1200,
        height: 630,
        alt: 'Dillon & Bird',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    site: '@DillonAndBird',
    title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
    description: 'Dillon & Bird is a premium consulting firm driving unprecedented growth and innovation across the GCC. Strategic partnerships, management consulting, and corporate services.',
    images: ['https://storage.googleapis.com/gpt-engineer-file-uploads/RMEudFFF1oX2REUOr0q3qvNIpyJ3/social-images/social-1767890819384-DnB.jpg'],
    creator: '@DillonAndBird',
  },

  // Favicon
  icons: {
    icon: 'https://storage.googleapis.com/gpt-engineer-file-uploads/RMEudFFF1oX2REUOr0q3qvNIpyJ3/uploads/1767890738872-DnB.jpg',
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
