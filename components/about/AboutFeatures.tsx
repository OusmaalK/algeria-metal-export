// components/about/AboutFeatures.tsx
'use client';

import { memo } from 'react';
import { ABOUT_FEATURES } from '@/constants/about';
import type { AboutFeaturesProps } from './types';

export const AboutFeatures = memo(({ t }: AboutFeaturesProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {ABOUT_FEATURES.map((feature, index) => (
        <div key={index} className="text-center">
          <h3 className="font-bold text-lg mb-2">{t.about_page[feature.titleKey]}</h3>
          <p className="text-sm text-gray-400">{t.about_page[feature.descKey]}</p>
        </div>
      ))}
    </div>
  );
});

AboutFeatures.displayName = 'AboutFeatures';