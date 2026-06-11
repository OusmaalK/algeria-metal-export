// components/products/ProductsGrid.tsx
'use client';

import { memo } from 'react';
import { ProductsGridItem } from './ProductsGridItem';
import type { ProductsGridProps } from './types';

export const ProductsGrid = memo(({ t, products }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {products.map((product) => (
        <ProductsGridItem key={product.id} t={t} product={product} />
      ))}
    </div>
  );
});

ProductsGrid.displayName = 'ProductsGrid';