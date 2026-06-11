// components/logistics/LogisticsMarkets.tsx
'use client';

import { memo } from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { LOGISTICS_MARKETS } from '@/constants/logistics';
import type { LogisticsMarketsProps } from './types';

export const LogisticsMarkets = memo(({ t, locale }: LogisticsMarketsProps) => {
  return (
    <div className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4">
        {t.logistics_page.markets_title}
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 relative h-64 bg-gray-100 rounded-lg overflow-hidden">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" alt="World Map" fill className="object-contain p-4" />
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {LOGISTICS_MARKETS.map((market, index) => (
            <div key={index} className={`p-4 rounded-xl bg-${market.color}-50 hover:bg-${market.color}-100 transition-all duration-300`}>
              <div className="flex items-center gap-2 mb-2">
                <Globe className={`w-5 h-5 text-${market.color}-600`} />
                <h4 className={`font-bold text-sm text-${market.color}-800`}>{t.logistics_page[market.regionKey]}</h4>
              </div>
              <ul className={`text-xs text-${market.color}-700 space-y-1`}>
                {market.countries.map((country) => (
                  <li key={country}>{country}</li>
                ))}
                <li className={`text-${market.color}-400`}>...</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

LogisticsMarkets.displayName = 'LogisticsMarkets';