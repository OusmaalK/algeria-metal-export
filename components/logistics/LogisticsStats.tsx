// components/logistics/LogisticsStats.tsx
'use client';

import { memo } from 'react';
import { LOGISTICS_STATS } from '@/constants/logistics';
import type { LogisticsStatsProps } from './types';

export const LogisticsStats = memo(({ t }: LogisticsStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
      {LOGISTICS_STATS.map((stat, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="w-10 h-10 mb-3">
            <stat.icon className="w-10 h-10 text-orange-500" />
          </div>
          <h4 className="font-bold text-xl text-white">{stat.value}</h4>
          <p className="text-xs text-gray-400 whitespace-pre-line">{t.logistics_page[stat.labelKey]}</p>
        </div>
      ))}
    </div>
  );
});

LogisticsStats.displayName = 'LogisticsStats';