// components/quality/QualityHero.tsx
'use client';

import { memo } from 'react';
import { QUALITY_HERO_ITEMS } from '@/constants/quality';
import type { QualityHeroProps } from './types';

export const QualityHero = memo(({ t }: QualityHeroProps) => {
  return (
    <div className="relative mb-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t.quality_page.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            {t.quality_page.hero_subtitle}
          </p>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {QUALITY_HERO_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
              <div className="w-10 h-10 mb-2">
                <item.icon className="w-10 h-10 text-orange-500" />
              </div>
              <h4 className="font-bold text-sm whitespace-pre-line">
                {t.quality_page[item.titleKey]}
              </h4>
              <p className="text-[10px] text-gray-400 whitespace-pre-line">
                {t.quality_page[item.descKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

QualityHero.displayName = 'QualityHero';