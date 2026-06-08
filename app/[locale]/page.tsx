'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Stats from '@/components/stats/Stats';
import Products from '@/components/products/Products';
import Logistics from '@/components/logistics/Logistics';
import Quality from '@/components/quality/Quality';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const { t, locale, changeLanguage } = useTranslation();

  // 🛡️ Sécurité cruciale : Bloque le rendu tant que l'objet n'est pas chargé de manière asynchrone
  if (!t || Object.keys(t).length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#f97316]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header t={t} locale={locale} changeLanguage={changeLanguage} />
      
      {/* Distribution propre des variables de langues et de direction (RTL/LTR) */}
      <Hero t={t} locale={locale} />
      
      <Stats t={t} locale={locale} />
      
      <Products t={t} locale={locale} />
      
      <Logistics t={t} locale={locale} />
      
      <Quality t={t} locale={locale} />
      
      <Footer t={t} locale={locale} />
    </div>
  );
}