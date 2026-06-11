// components/hero/HeroFeatures.tsx
'use client';

import { memo } from 'react';
import { HERO_FEATURES } from '@/constants/hero';

interface HeroFeaturesProps {
  t: any;
}

export const HeroFeatures = memo(({ t }: HeroFeaturesProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-700/50 mt-6">
      {HERO_FEATURES.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <feature.icon className="w-12 h-12 text-orange-500 shrink-0" />
          <div>
            <p className="font-bold text-base">{t?.hero?.[feature.key]}</p>
            <p className="text-gray-400 text-xs leading-tight whitespace-pre-line">{feature.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

HeroFeatures.displayName = 'HeroFeatures';