// components/logistics/LogisticsShipping.tsx
'use client';

import { memo } from 'react';
import { SHIPPING_ITEMS } from '@/constants/logistics';
import type { LogisticsShippingProps } from './types';

export const LogisticsShipping = memo(({ t }: LogisticsShippingProps) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4">
        {t.logistics_page.shipping_title}
      </h2>
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {SHIPPING_ITEMS.map((item, index) => (
          <div key={index} className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-0">
            <div className="p-3 bg-linear-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
              <item.icon className="w-4 h-4 text-orange-500" /> {t.logistics_page[item.labelKey]}
            </div>
            <div className="col-span-2 p-3 text-sm text-gray-600">{t.logistics_page[item.valueKey]}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

LogisticsShipping.displayName = 'LogisticsShipping';