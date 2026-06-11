// components/products/ProductsHero.tsx
'use client';

import { memo } from 'react';
import { ShieldCheck, FileCheck, Warehouse, Truck } from 'lucide-react';
import type { ProductsHeroProps } from './types';

export const ProductsHero = memo(({ t }: ProductsHeroProps) => {
  const features = [
    { icon: ShieldCheck, titleKey: 'consistent_quality', descKey: 'consistent_desc' },
    { icon: FileCheck, titleKey: 'certified_products', descKey: 'certified_desc' },
    { icon: Warehouse, titleKey: 'large_capacity', descKey: 'large_desc' },
    { icon: Truck, titleKey: 'customized_solutions', descKey: 'customized_desc' },
  ];

  return (
    <div className="relative mb-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t.products_page.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            {t.products_page.hero_subtitle}
          </p>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-2">
                <feature.icon className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="font-bold text-sm whitespace-pre-line">
                {t.products_page[feature.titleKey]}
              </h3>
              <p className="text-[10px] text-gray-400 whitespace-pre-line">
                {t.products_page[feature.descKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

ProductsHero.displayName = 'ProductsHero';