// components/request/RequestProductSelection.tsx
'use client';

import { ChangeEvent, memo } from 'react';
import Image from 'next/image';
import { REQUEST_PRODUCTS } from '@/constants/request';
import type { RequestProductSelectionProps } from './types';

export const RequestProductSelection = memo(({ t, formData, handleProductChange }: RequestProductSelectionProps) => {
    function handleChange(event: ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">{t.request_page.section_products_title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
        {REQUEST_PRODUCTS.map((product) => (
          <div key={product.key} className="bg-[#0f172a] p-3 rounded-lg border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden relative">
                <Image src={product.image} alt={t.request_page[product.labelKey]} fill className="object-cover" />
              </div>
              <span className="text-sm font-bold">{t.request_page[product.labelKey]}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400">{t.request_page.quantity_label}</span>
              <input
                type="text"
                value={formData.products[product.key]?.quantity || ''}
                onChange={(e) => handleProductChange(product.key, e.target.value)}
                className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-2 py-1 text-white text-sm focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">{t.request_page.notes_label}</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={3}
          className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
        />
      </div>
    </div>
  );
});

RequestProductSelection.displayName = 'RequestProductSelection';