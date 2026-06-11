// components/products/ProductsFilters.tsx
'use client';

import { memo } from 'react';
import { Download, Grid, Layers, Package, Recycle, Box, FileText } from 'lucide-react';
import type { ProductsFiltersProps } from './types';

const FILTER_BUTTONS = [
  { key: 'all', label: 'all_products', icon: Grid },
  { key: 'ferrous', label: 'ferrous_scrap', icon: Layers },
  { key: 'non_ferrous', label: 'non_ferrous_scrap', icon: Package },
  { key: 'shredded', label: 'shredded_scrap', icon: Recycle },
  { key: 'foundry', label: 'foundry_scrap', icon: Box },
  { key: 'steel', label: 'steel_products', icon: FileText },
] as const;

export const ProductsFilters = memo(({ t, activeFilter, onFilterChange }: ProductsFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      {FILTER_BUTTONS.map((btn) => (
        <button
          key={btn.key}
          onClick={() => onFilterChange(btn.key)}
          className={`px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2 ${
            activeFilter === btn.key
              ? 'bg-orange-500 text-white'
              : 'border border-gray-600 hover:border-white text-gray-300 hover:text-white'
          }`}
        >
          <btn.icon className="w-4 h-4" />
          {t.products_page[btn.label]}
        </button>
      ))}
      <button className="border border-gray-600 hover:border-white px-4 py-2 rounded text-sm font-medium text-gray-300 hover:text-white transition flex items-center gap-2 ml-auto">
        <Download className="w-4 h-4" />
        {t.products_page.download_catalogue}
      </button>
    </div>
  );
});

ProductsFilters.displayName = 'ProductsFilters';