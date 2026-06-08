'use client';

import Image from 'next/image';

export default function ProductModal({ product, locale, onClose }: any) {
  const isRTL = locale === 'ar';

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative overflow-hidden max-h-[90vh] overflow-y-auto"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* En-tête */}
        <div className="relative h-48 w-full bg-gray-200">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">✕</button>
        </div>

        {/* Contenu */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full uppercase">{product.type}</span>
          
          {/* C'est ici que le contenu manquait : on affiche full_description en priorité */}
          <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
            {product.full_description || product.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Applications */}
            <div>
              <h4 className="font-bold uppercase text-xs mb-4">{product.apps_title}</h4>
              <ul className="space-y-2">
                {product.apps?.map((app: string, idx: number) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="mr-2 text-orange-500">•</span> {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Spécifications */}
            <div>
              <h4 className="font-bold uppercase text-xs mb-4">{product.specs_title}</h4>
              <div className="space-y-3">
                {product.specs_list?.map((spec: any, idx: number) => (
                  <div key={idx} className="flex justify-between border-b pb-2">
                    <span className="text-xs text-gray-500">{spec.label}</span>
                    <span className="text-sm font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}