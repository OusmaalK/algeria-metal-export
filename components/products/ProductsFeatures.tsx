// components/products/ProductsFeatures.tsx
'use client';

import { memo } from 'react';
import { Box, Warehouse, ShieldCheck, FileCheck, CreditCard } from 'lucide-react';
import type { ProductsFeaturesProps } from './types';

const FEATURES_ITEMS = [
  { icon: Box, titleKey: 'packaging_options', descKey: 'packaging_options' },
  { icon: Warehouse, titleKey: 'monthly_capacity', descKey: 'monthly_capacity' },
  { icon: ShieldCheck, titleKey: 'quality_standard', descKey: 'quality_standard' },
  { icon: FileCheck, titleKey: 'inspection', descKey: 'inspection' },
  { icon: CreditCard, titleKey: 'payment_terms', descKey: 'payment_terms' },
] as const;

export const ProductsFeatures = memo(({ t }: ProductsFeaturesProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
      {FEATURES_ITEMS.map((item, index) => (
        <div key={index} className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
          <item.icon className="w-8 h-8 text-orange-500 mb-2" />
          <h4 className="font-bold text-xs whitespace-pre-line">
            {t.products_page[item.titleKey]?.title || item.titleKey}
          </h4>
          <p className="text-[10px] text-gray-400 whitespace-pre-line">
            {t.products_page[item.descKey]?.desc || 'Description'}
          </p>
        </div>
      ))}
    </div>
  );
});

ProductsFeatures.displayName = 'ProductsFeatures';