'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
// Importation du composant modal
import ProductModal from './ProductModal';

interface ProductsProps {
  t: any;
  locale: string;
}

export default function Products({ t, locale }: ProductsProps) {
  const isRTL = locale === 'ar';

  // État pour suivre le produit sélectionné (null = modal fermé)
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const products = [
    { key: 'hms', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' },
    { key: 'shredded', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80' },
    { key: 'rebar', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80' },
    { key: 'cast_iron', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=400&q=80' },
  ];

  // Fonction pour ouvrir la modal en lui passant les traductions complètes du produit ciblé
  const handleOpenModal = (e: React.MouseEvent, key: string, image: string) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien '#'
    
    // On extrait l'objet de traduction complet configuré dans fr.json / en.json / ar.json
    const productTranslation = t?.products?.[key];
    
    if (productTranslation) {
      setSelectedProduct({
        ...productTranslation,
        image: image // On ajoute l'image de l'Unsplash au reste des données
      });
    }
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        
        {/* En-tête de section */}
        <div className={`flex justify-between items-end mb-8 border-b border-gray-100 pb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
            {t?.products?.title}
          </h2>
          
          <Link 
            href="#" 
            className={`text-sm font-bold text-[#0f172a] hover:text-orange-500 flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t?.products?.view_all}{' '}
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </Link>
        </div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.key} className="group">
              
              {/* Conteneur de l'image */}
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative w-full h-full">
                <Image
                  src={product.image}
                  alt={t?.products?.[product.key]?.title || 'Product'}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  loading="eager"
                />
              </div>
              
              {/* Textes et informations du produit */}
              <div className={`pt-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="font-bold text-sm mb-1">
                  {t?.products?.[product.key]?.title}
                  <br />
                  <span className="text-gray-500 font-normal">
                    {t?.products?.[product.key]?.subtitle}
                  </span>
                </h3>
                
                <p className="text-xs text-gray-600 mb-3 whitespace-pre-line">
                  {t?.products?.[product.key]?.description}
                </p>
                
                {/* Remplacement du comportement du bouton "VOIR LES SPÉCIFICATIONS" */}
                <button
                  onClick={(e) => handleOpenModal(e, product.key, product.image)}
                  className="inline-block border border-gray-300 hover:border-[#0f172a] px-4 py-1.5 text-[10px] font-bold tracking-wider transition text-center cursor-pointer bg-transparent"
                >
                  {t?.products?.[product.key]?.specs}
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 2. Affichage conditionnel de la Modal si un produit est sélectionné */}
      {selectedProduct && (
        <ProductModal 
                  product={selectedProduct}
                  locale={locale}
                  onClose={() => setSelectedProduct(null)} isOpen={false} t={undefined}        />
      )}
    </section>
  );
}