// components/logistics/LogisticsPorts.tsx
'use client';

import { memo } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { LOGISTICS_PORTS } from '@/constants/logistics';
import type { LogisticsPortsProps } from './types';

export const LogisticsPorts = memo(({ t }: LogisticsPortsProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4">{t.logistics_page.ports_title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LOGISTICS_PORTS.map((port, index) => (
          <div key={index} className="bg-[#1e293b] rounded-lg overflow-hidden border border-gray-800">
            <div className="relative h-48 bg-gray-800">
              <Image src={port.image} alt={t.logistics_page[port.nameKey]} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{t.logistics_page[port.nameKey]}</h3>
              <ul className="text-xs text-gray-400 space-y-1">
                {port.detailKeys.map((detailKey) => (
                  <li key={detailKey} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page[detailKey]}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-400">{t.logistics_page.main_products}: <span className="text-white">{t.logistics_page[port.productsKey]}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

LogisticsPorts.displayName = 'LogisticsPorts';