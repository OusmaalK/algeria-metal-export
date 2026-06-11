// components/logistics/LogisticsHero.tsx
'use client';

import { memo } from 'react';
import type { LogisticsHeroProps } from './types';

export const LogisticsHero = memo(({ t }: LogisticsHeroProps) => {
  return (
    <div className="relative mb-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t.logistics_page.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            {t.logistics_page.hero_subtitle}
          </p>
        </div>
      </div>
    </div>
  );
});

LogisticsHero.displayName = 'LogisticsHero';