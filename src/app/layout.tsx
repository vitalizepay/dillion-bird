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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${nunito.variable}`}>
        <Navbar />
        <main>{children}</main>
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
