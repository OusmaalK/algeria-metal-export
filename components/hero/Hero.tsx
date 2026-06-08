'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Truck, Warehouse, Globe, FileText, Send } from 'lucide-react';
import ContactModal from '../products/ContactModal'; // Import de votre nouveau composant de devis

interface HeroProps {
  t: any;
  locale: string;
}

export default function Hero({ t, locale }: HeroProps) {
  const isRTL = locale === 'ar';
  // État unique pour gérer l'ouverture de la modal de devis
  const [showContactModal, setShowContactModal] = useState(false);

  const features = [
    { icon: ShieldCheck, key: 'certified_quality', sub: 'ASTM / EN / ISO\n3.1 Certificate' },
    { icon: Truck, key: 'fast_shipping', sub: 'Mediterranean\nPorts' },
    { icon: Warehouse, key: 'large_capacity', sub: 'Consistent Supply\nBulk Orders' },
    { icon: Globe, key: 'global_reach', sub: 'Europe, MENA\nAsia & Africa' },
  ];

  return (
    <section className="relative bg-[#0f172a] text-white overflow-hidden min-h-[650px] flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/hero/fond.svg" 
          alt="Hero Background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Colonne Gauche : Contenu principal */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-orange-500 font-bold tracking-[0.3em] text-lg font-sans block">
              {t?.hero?.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.15] font-sans tracking-wide">
              {t?.hero?.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              {t?.hero?.subtitle}
            </p>

            {/* Features Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-700/50 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="w-12 h-12 text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-base">{t?.hero?.[feature.key]}</p>
                    <p className="text-gray-400 text-xs leading-tight whitespace-pre-line">{feature.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-[#f97316] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition inline-flex items-center justify-center shadow-lg shadow-orange-500/25 whitespace-nowrap gap-2"
              >
                {t?.hero?.rfq || 'Request Quotation'}
              </button>
              
              <button
                onClick={() => setShowContactModal(true)}
                className="border border-gray-500 hover:border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                {t?.hero?.catalogue || 'Download Catalogue'}
              </button>
            </div>
          </div>


            {/* Colonne Droite : STRATEGIC ADVANTAGE avec globe animé */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="backdrop-blur-sm bg-[#0f172a]/90 border border-orange-500/30 p-6 rounded-xl max-w-sm w-full text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>

                <h3 className="text-white font-bold text-lg mb-1 drop-shadow-md">
                {t?.strategic?.title || 'STRATEGIC ADVANTAGE'}
                </h3>
                <h4 className="text-xl font-bold mb-4 drop-shadow-md">
                {t?.strategic?.subtitle || 'Closer to Europe, Stronger Together'}
                </h4>
                <p className="text-gray-200 text-xs mb-4 drop-shadow-sm">
                {t?.strategic?.description || 'Reduced sea distance to Europe compared to Asia'}
                </p>

                {/* Globe avec taille réduite et traits plus fins */}
                <div className="flex flex-col items-center">
                <div className="animate-spin-slow">
                    <Globe className="w-40 h-40 text-orange-500 stroke-[1.5]" />
                </div>
                
                {/* Texte en dessous */}
                <div className="mt-4 text-center">
                    <div className="text-orange-500 font-bold text-3xl drop-shadow-md">
                    {t?.strategic?.percent || '50%'}
                    </div>
                    <div className="text-gray-200 text-[10px] text-center leading-tight drop-shadow-md">
                    {t?.strategic?.distance || 'UP TO\nSHORTER SEA DISTANCE'}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>

      {/* La Modal de Devis Professionnel */}
      {showContactModal && (
        <ContactModal 
          onClose={() => setShowContactModal(false)} 
          productTitle="Demande générale de catalogue / Devis" 
        />
      )}
    </section>
  );
}