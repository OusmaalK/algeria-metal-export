// components/about/AboutFeaturesGrid.tsx
'use client';

import { memo } from 'react';
import { ABOUT_FEATURE_GRID } from '@/constants/about';
import type { AboutFeaturesGridProps } from './types';

export const AboutFeaturesGrid = memo(({ t }: AboutFeaturesGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {ABOUT_FEATURE_GRID.map((item, index) => (
        <div key={index} className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
          <item.icon className="w-8 h-8 text-orange-500 mb-2" />
          <h4 className="font-bold text-xs whitespace-pre-line">{t.about_page[item.titleKey]}</h4>
          <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.about_page[item.descKey]}</p>
        </div>
      ))}
    </div>
  );
});

AboutFeaturesGrid.displayName = 'AboutFeaturesGrid';