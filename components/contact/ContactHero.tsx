// components/contact/ContactHero.tsx
'use client';

import { memo } from 'react';
import type { ContactHeroProps } from './types';

export const ContactHero = memo(({ t }: ContactHeroProps) => {
  return (
    <div className="relative mb-12 text-center">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
        {t.contact_page.title}
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        {t.contact_page.hero_subtitle}
      </p>
    </div>
  );
});

ContactHero.displayName = 'ContactHero';