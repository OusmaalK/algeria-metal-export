// components/team/StatsSection.tsx
'use client';

import { memo } from 'react';
import { STAT_ITEMS } from '@/constants/team';

interface StatsSectionProps {
  t: any;
  isRTL: boolean;
}

export const StatsSection = memo(({ t, isRTL }: StatsSectionProps) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {STAT_ITEMS.map((item, idx) => (
        <div key={idx} className="bg-[#1e293b] p-4 rounded-xl border border-gray-800 hover:border-orange-500 transition-colors">
          <item.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold">{item.value}</div>
          <div className="text-xs text-gray-400">
            {t?.team?.[item.statKey] || item.defaultLabel}
          </div>
        </div>
      ))}
    </section>
  );
});

StatsSection.displayName = 'StatsSection';