// components/team/ValuesSection.tsx
'use client';

import { memo } from 'react';
import { VALUE_ITEMS } from '@/constants/team';

interface ValuesSectionProps {
  t: any;
  isRTL: boolean;
}

export const ValuesSection = memo(({ t, isRTL }: ValuesSectionProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {VALUE_ITEMS.map((item, idx) => (
        <div key={idx} className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 text-center hover:border-orange-500 transition-colors">
          <item.icon className="w-12 h-12 text-orange-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg">
            {t?.team?.[item.titleKey] || item.defaultTitle}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            {t?.team?.[item.descKey] || 'Description non disponible'}
          </p>
        </div>
      ))}
    </section>
  );
});

ValuesSection.displayName = 'ValuesSection';