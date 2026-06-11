// components/hero/HeroContent.tsx
'use client';

import { memo } from 'react';
import { FileText } from 'lucide-react';
import { HeroFeatures } from './HeroFeatures';

interface HeroContentProps {
  t: any;
  onOpenModal: () => void;
}

export const HeroContent = memo(({ t, onOpenModal }: HeroContentProps) => {
  return (
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

      <HeroFeatures t={t} />

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
          onClick={onOpenModal}
          className="bg-[#f97316] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition inline-flex items-center justify-center shadow-lg shadow-orange-500/25 whitespace-nowrap gap-2"
        >
          {t?.hero?.rfq || 'Request Quotation'}
        </button>
        <button
          onClick={onOpenModal}
          className="border border-gray-500 hover:border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition inline-flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <FileText className="w-4 h-4" />
          {t?.hero?.catalogue || 'Download Catalogue'}
        </button>
      </div>
    </div>
  );
});

HeroContent.displayName = 'HeroContent';