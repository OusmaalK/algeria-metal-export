// components/about/AboutCard.tsx
'use client';

import { memo } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import type { AboutCardProps } from './types';

export const AboutCard = memo(({ t, card }: AboutCardProps) => {
  return (
    <div className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300">
      <div className="relative h-48 bg-gray-800">
        <Image src={card.image} alt={t.about_page[card.titleKey]} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{t.about_page[card.titleKey]}</h3>
        <p className="text-sm text-gray-400 mb-4">{t.about_page[card.descKey]}</p>
        <ul className="space-y-1 text-xs text-gray-400">
          {card.items.map((item: any, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>{t.about_page[item.itemKey]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

AboutCard.displayName = 'AboutCard';