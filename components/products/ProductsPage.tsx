// components/products/ProductsPage.tsx
'use client';

import { useState, memo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { PRODUCTS } from '@/constants/products';
import { ProductsHero } from './ProductsHero';
import { ProductsFilters } from './ProductsFilters';
import { ProductsGrid } from './ProductsGrid';
import { ProductsFeatures } from './ProductsFeatures';
import { ProductsCta } from './ProductsCta';

const ProductsPage = memo(() => {
  const { t, locale } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  if (!t.products_page) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Erreur de traduction</h1>
          <p className="text-gray-400">La clé 'products_page' est manquante dans les fichiers de traduction.</p>
          <p className="text-sm text-gray-500">Vérifiez le fichier : data/translations/{locale}.ts</p>
        </div>
      </div>
    );
  }

  const filteredProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <ProductsHero t={t} />
        <ProductsFilters t={t} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <ProductsGrid t={t} products={filteredProducts} />
        <ProductsFeatures t={t} />
        <ProductsCta t={t} />
      </main>
    </div>
  );
});

ProductsPage.displayName = 'ProductsPage';

export default ProductsPage;