import type { Metadata } from 'next';
import ABKHero from './components/ABKHero/ABKHero';
import ABKTicker from './components/ABKTicker/ABKTicker'
import ABKServices from './components/ABKServices/ABKServices'
import ABKProcess from './components/ABKProcess/ABKProcess'
import ABKTestimonial from './components/ABKTestimonial/ABKTestimonial';
import ABKWhy from './components/ABKWhy/ABKWhy';
import ABKFAQ from './components/ABKFAQ/ABKFAQ';
import ABKCTA from './components/ABKCTA/ABKCTA';
import ABKCrossLinks from './components/ABKCrossLinks/ABKCrossLinks';

export const metadata: Metadata = {
  title: 'Accounting & Book Keeping | Dillon & Bird',
  description: 'From daily bookkeeping and VAT filing to management accounts and CFO-level insights — Dillon & Bird gives UAE businesses a dedicated finance team without the overhead.',
};

export default function AccountingBookKeeping() {
  return (
    <>
      <ABKHero />
      <ABKTicker/>
      <ABKServices/>
      <ABKProcess/>
      <ABKTestimonial/>
      <ABKWhy/>
      <ABKFAQ/>
      <ABKCTA/>
      <ABKCrossLinks/>
    </>
  );
}