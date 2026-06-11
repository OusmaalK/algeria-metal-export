// components/local-market/LocalMarketCard.tsx
'use client';

import { memo, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface LocalMarketCardProps {
  t: any;
  item: any;
  isRTL: boolean;
  index: number;
}

export const LocalMarketCard = memo(({ t, item, isRTL, index }: LocalMarketCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Extraire le nom de la clé sans le préfixe
  const titleKey = item.titleKey.split('.')[1];
  const descKey = item.descKey.split('.')[1];
  const altKey = item.altKey.split('.')[1];

  // Contenu détaillé (5 lignes) pour chaque carte
  const getDetailContent = (key: string) => {
    switch(key) {
      case 'anchor_title':
        return t?.local_market?.anchor_detail || 
          "Notre implantation en Algérie nous permet d'anticiper les fluctuations du marché local. Nous entretenons des relations privilégiées avec les collecteurs et les sites de stockage à travers le pays, garantissant un approvisionnement stable et de qualité.";
      case 'leadership_title':
        return t?.local_market?.leadership_detail || 
          "Nous prenons des décisions stratégiques pour structurer la filière métallurgique algérienne. Notre leadership se manifeste par une veille constante, des investissements ciblés et un accompagnement personnalisé des acteurs locaux.";
      case 'mastery_title':
        return t?.local_market?.mastery_detail || 
          "Notre maîtrise du domaine couvre l'ensemble de la chaîne de valeur : de la collecte à l'export, en passant par le contrôle qualité et la logistique. Une expertise reconnue par nos partenaires internationaux.";
      default:
        return "Contenu détaillé non disponible.";
    }
  };

  return (
    <div className="group relative bg-[#1e293b] rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]">
      <div className="relative h-64 md:h-72 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={t?.local_market?.[altKey] || `Image ${index + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-6">
        <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
            <item.icon className="w-5 h-5 text-orange-500" />
          </div>
          <h3 className="font-bold text-lg group-hover:text-orange-500 transition-colors">
            {t?.local_market?.[titleKey] || `Bloc ${index + 1}`}
          </h3>
        </div>
        
        {/* Description courte */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {t?.local_market?.[descKey] || 'Description du bloc'}
        </p>
        
        {/* Bouton Détails */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-orange-500 font-medium text-sm hover:text-orange-400 transition-colors"
        >
          {isOpen ? 'Masquer les détails' : 'Voir les détails'}
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        {/* Contenu détaillé (5 lignes) */}
        {isOpen && (
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <p className="text-gray-300 text-sm leading-relaxed">
              {getDetailContent(titleKey)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

LocalMarketCard.displayName = 'LocalMarketCard';