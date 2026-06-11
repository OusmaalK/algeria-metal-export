// components/request/RequestHero.tsx
'use client';

import { memo } from 'react';
import type { RequestHeroProps } from './types';

export const RequestHero = memo(({ t }: RequestHeroProps) => {
  return (
    <div className="relative mb-12 text-center">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
        {t.request_page.title}
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        {t.request_page.hero_subtitle}
      </p>
    </div>
  );
});

RequestHero.displayName = 'RequestHero';