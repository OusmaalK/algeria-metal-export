// components/logistics/LogisticsProcess.tsx
'use client';

import { memo } from 'react';
import { ChevronRight } from 'lucide-react';
import { LOGISTICS_STEPS } from '@/constants/logistics';
import type { LogisticsProcessProps } from './types';

export const LogisticsProcess = memo(({ t }: LogisticsProcessProps) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4">
        {t.logistics_page.process_title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
        {LOGISTICS_STEPS.map((step, index) => (
          <div key={index} className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md">{index + 1}</div>
            <div className="mb-1 text-orange-500"><step.icon className="w-6 h-6" /></div>
            <h4 className="font-bold text-xs text-[#0f172a]">{t.logistics_page[step.titleKey]}</h4>
            <p className="text-[10px] text-gray-500">{t.logistics_page[step.descKey]}</p>
          </div>
        ))}
        <div className="flex items-center justify-center text-orange-300"><ChevronRight className="w-5 h-5 animate-pulse" /></div>
      </div>
    </div>
  );
});

LogisticsProcess.displayName = 'LogisticsProcess';