// components/about/AboutHero.tsx
'use client';

import { memo } from 'react';
import type { AboutHeroProps } from './types';

export const AboutHero = memo(({ t }: AboutHeroProps) => {
  return (
    <div className="relative mb-12 text-center">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
        {t.about_page.title}
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        {t.about_page.hero_subtitle}
      </p>
    </div>
  );
});

AboutHero.displayName = 'AboutHero';