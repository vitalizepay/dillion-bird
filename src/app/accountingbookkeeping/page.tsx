import type { Metadata } from 'next';
import ABKHero from './components/ABKHero/ABKHero';
import ABKTicker from './components/ABKTicker/ABKTicker'


export const metadata: Metadata = {
  title: 'Accounting & Book Keeping | Dillon & Bird',
  description: 'From daily bookkeeping and VAT filing to management accounts and CFO-level insights — Dillon & Bird gives UAE businesses a dedicated finance team without the overhead.',
};

export default function AccountingBookKeeping() {
  return (
    <>
      <ABKHero />
      <ABKTicker/>
    </>
  );
}