// components/request/RequestFeaturesGrid.tsx
'use client';

import { memo } from 'react';
import { REQUEST_FEATURE_GRID } from '@/constants/request';
import type { RequestFeaturesGridProps } from './types';

export const RequestFeaturesGrid = memo(({ t }: RequestFeaturesGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {REQUEST_FEATURE_GRID.map((item, index) => (
        <div key={index} className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
          <item.icon className="w-8 h-8 text-orange-500 mb-2" />
          <h4 className="font-bold text-xs whitespace-pre-line">{t.request_page[item.titleKey]}</h4>
          <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.request_page[item.descKey]}</p>
        </div>
      ))}
    </div>
  );
});

RequestFeaturesGrid.displayName = 'RequestFeaturesGrid';