// components/team/CtaSection.tsx
'use client';

import { memo } from 'react';

interface CtaSectionProps {
  t: any;
  locale: string;
  isRTL: boolean;
}

export const CtaSection = memo(({ t, locale, isRTL }: CtaSectionProps) => {
  return (
    <section className="bg-[#1e293b] rounded-2xl p-8 border border-gray-700 text-center">
      <h3 className="text-xl font-bold mb-2">
        {t?.team?.cta_title || 'Envie d’échanger avec nos experts ?'}
      </h3>
      <p className="text-gray-400 mb-4">
        {t?.team?.cta_subtitle || 'Réponse sous 24h'}
      </p>
      <a
        href={`/${locale}/contact`}
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-md transition"
      >
        {t?.team?.cta_button || 'Contactez notre équipe'}
      </a>
    </section>
  );
});

CtaSection.displayName = 'CtaSection';