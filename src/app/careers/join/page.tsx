import type { Metadata } from 'next';
import QuickApply from './components/QuickApply/QuickApply';

export const metadata: Metadata = {
  title: 'Join Dillon & Bird | Cloud, AI and Consulting Careers in Dubai',
  description:
    'Apply in under a minute. Cloud, AI and enterprise consulting roles at Dillon & Bird in Dubai, with global delivery across the GCC.',
  alternates: { canonical: '/careers/join' },
  openGraph: {
    title: 'Join Dillon & Bird | Cloud, AI and Consulting Careers in Dubai',
    description:
      'Apply in under a minute. Cloud, AI and enterprise consulting roles at Dillon & Bird in Dubai.',
    type: 'website',
    url: 'https://dillonbird.com/careers/join',
    images: ['/og-image.png'],
  },
};

export default function CareersJoinPage() {
  return <QuickApply />;
}
