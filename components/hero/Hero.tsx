// components/hero/Hero.tsx
'use client';

import { useState, memo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import ContactModal from '../products/ContactModal';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { StrategicAdvantage } from './StrategicAdvantage';

const Hero = memo(() => {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section className="relative bg-[#0f172a] text-white overflow-hidden min-h-162.5 flex items-center">
      <HeroBackground src="/static/fond.svg" alt="Hero Background" />
      
      <div className="container mx-auto px-6 relative z-10 pt-10 pb-20">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRTL ? 'direction-rtl' : ''}`}>
          <HeroContent t={t} onOpenModal={() => setShowContactModal(true)} />
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <StrategicAdvantage t={t} />
          </div>
        </div>
      </div>

      {showContactModal && (
        <ContactModal 
          onClose={() => setShowContactModal(false)} 
          productTitle="Demande générale de catalogue / Devis" 
        />
      )}
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;