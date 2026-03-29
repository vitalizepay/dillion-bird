import type { Metadata } from 'next';
import "./globals.css";
import { Montserrat, Nunito_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CTASection from "@/components/CTASection/CTASection";
import Script from "next/script";

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
  twitter: {
    card: 'summary_large_image',
    site: '@DillonAndBird',
    title: 'Dillon & Bird | Strategic Consulting Partners in the GCC',
    description: 'Dillon & Bird is a premium consulting firm driving unprecedented growth and innovation across the GCC. Strategic partnerships, management consulting, and corporate services.',
    images: ['https://storage.googleapis.com/gpt-engineer-file-uploads/RMEudFFF1oX2REUOr0q3qvNIpyJ3/social-images/social-1767890819384-DnB.jpg'],
    creator: '@DillonAndBird',
  },
  icons: {
    icon: '/t-logo.png',
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

        {/* Google Tag Manager — as high as possible in <head> */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSSC8DJ9');`}
        </Script>
      </head>
      <body className={`${montserrat.variable} ${nunito.variable}`}>

        {/* Google Tag Manager (noscript) — immediately after <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSSC8DJ9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}