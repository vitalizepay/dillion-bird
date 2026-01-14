// src/app/contact/page.tsx
import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import FAQ from './components/FAQ/FAQ';

export const metadata = {
  title: 'Contact Us | Dillon & Bird',
  description: 'Get in touch with Dillon & Bird. Reach out today — your next big move starts here.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
      <FAQ />
    </main>
  );
}
