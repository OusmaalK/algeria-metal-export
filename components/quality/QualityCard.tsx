// components/quality/QualityCard.tsx
'use client';

import { memo } from 'react';
import Image from 'next/image';
import type { QualityCardProps } from './types';

export const QualityCard = memo(({ t, card, index }: QualityCardProps) => {
  return (
    <div className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 text-orange-500">
            <card.icon className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold whitespace-pre-line">
            {t.quality_page[card.titleKey]}
          </h2>
        </div>
        <div className="relative h-48 bg-gray-800 mt-4">
          <Image src={card.image} alt={t.quality_page[card.titleKey]} fill className="object-cover" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">
          {t.quality_page[card.titleKey]}
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          {t.quality_page[card.descKey]}
        </p>
        <div className="space-y-2 text-sm">
          {card.tableRows.map((row: any, idx: number) => (
            <div key={idx} className="flex justify-between py-2 border-b border-gray-800 last:border-0">
              <span className="text-gray-400">{t.quality_page[row.labelKey]}</span>
              <span className="text-white">{t.quality_page[row.valueKey]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

QualityCard.displayName = 'QualityCard';