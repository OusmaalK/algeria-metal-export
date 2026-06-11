// components/team/EthicsSection.tsx
'use client';

import { memo } from 'react';
import { ETHICS_ITEMS } from '@/constants/team';

interface EthicsSectionProps {
  t: any;
  isRTL: boolean;
}

export const EthicsSection = memo(({ t, isRTL }: EthicsSectionProps) => {
  return (
    <section className="bg-[#1e293b] rounded-2xl p-6 md:p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 border-l-4 border-orange-500 pl-4">
        {t?.team?.ethics_title || 'Notre Engagement'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ETHICS_ITEMS.map((item, idx) => (
          <div key={idx} className={`flex items-start gap-3 p-4 bg-[#0f172a] rounded-lg border border-gray-800 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <item.icon className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-base">
                {t?.team?.[item.titleKey] || item.defaultTitle}
              </h3>
              <p className="text-sm text-gray-400">
                {t?.team?.[item.descKey] || 'Description non disponible'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

EthicsSection.displayName = 'EthicsSection';