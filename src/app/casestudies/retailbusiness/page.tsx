import RetailBusinessCaseStudy from "./components/RetailBusinessCaseStudy/RetailBusinessCaseStudy";

export const metadata = {
  alternates: { canonical: '/casestudies/retailbusiness' },
  title: 'Retail Business Case Study | Dillon & Bird',
  description: 'Retail Business - Saudi Arabia',
};

export default function RetailBusinessPage() {
  return (
    <main>
      <RetailBusinessCaseStudy />
    </main>
  );
}
