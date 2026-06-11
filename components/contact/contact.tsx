// components/contact/ContactPage.tsx
'use client';

import { memo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ContactHero } from './ContactHero';
import { ContactInfoCard } from './ContactInfoCard';
import { ContactVisitCard } from './ContactVisitCard';
import { ContactFeaturesGrid } from './ContactFeaturesGrid';
import { ContactCta } from './ContactCta';

const ContactPage = memo(() => {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <ContactHero t={t} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ContactInfoCard t={t} />
          <ContactVisitCard t={t} />
        </div>
        <ContactFeaturesGrid t={t} />
        <ContactCta t={t} />
      </main>
    </div>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;