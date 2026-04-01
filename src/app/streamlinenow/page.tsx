import type { Metadata } from 'next';
import StreamlineNowHero from "./components/StreamlineNowHero/StreamlineNowHero";
import StreamlineNowHandle from "./components/StreamlineNowHandle/StreamlineNowHandle";
import StreamlineNowWhy from "./components/StreamlineNowWhy/StreamlineNowWhy";
import StreamlineNowCTA from "./components/StreamlineNowCTA/StreamlineNowCTA";

export const metadata: Metadata = {
  title: "Streamline Now | Dillon & Bird",
  description: "Ready to grow? Dillon & Bird partners with ambitious businesses across the UAE and GCC to unlock sustainable, scalable growth through embedded advisory, strategic frameworks, and measurable results.",
};

export default function StreamlineNowPage() {
  return (
    <>
      <StreamlineNowHero />
      <StreamlineNowHandle />
      <StreamlineNowWhy />
      <StreamlineNowCTA />
    </>
  );
}