'use client';

import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const QualityPage: React.FC = () => {
  const { t } = useTranslation() as any;

  if (!t || Object.keys(t).length === 0) {
    return <div className="min-h-screen flex items-center justify-center bg-[#0a0f1d] text-white">Loading...</div>;
  }

  const steps = t.quality_page?.steps || [];
  const items = t.quality?.items || [];

  return (
    // Fond sombre correspondant au design global
    <div className="bg-[#0a0f1d] min-h-screen pb-20 text-gray-200">
      
      {/* HEADER SUPPRIMÉ - Section Hero conservée */}
      <section className="bg-[#101828] border-b border-gray-800 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {t.quality_page?.title}
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
          {t.quality_page?.hero_subtitle}
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-6 -mt-12">
        {/* STEPS : Style cartes épurées sur fond sombre */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((step: any, i: number) => (
            <div key={i} className="bg-[#1a2234] p-6 border border-gray-700 hover:border-orange-500 transition-all text-center">
              <div className="w-10 h-10 bg-orange-600 text-white rounded-none flex items-center justify-center mx-auto mb-4 font-bold">
                {i + 1}
              </div>
              <h3 className="font-bold text-white mb-2 uppercase text-sm tracking-wider">{step.title}</h3>
              <p className="text-xs text-gray-400">{step.desc}</p>
            </div>
          ))}
        </section>

        {/* CERTIFICATIONS : Style "Industrial" */}
        <section className="bg-[#101828] p-8 md:p-10 border border-gray-800 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-8 uppercase tracking-widest border-l-4 border-orange-600 pl-4">
            {t.quality?.title || "QUALITY & CERTIFICATIONS"}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {items.map((item: any, i: number) => (
              <div key={i} className="p-5 bg-[#0a0f1d] border border-gray-700 hover:bg-[#1a2234] transition-colors">
                <p className="font-bold text-white text-sm">{item.name}</p>
                <p className="text-[10px] text-orange-500 uppercase mt-1 tracking-tight">{item.description}</p>
              </div>
            ))}
          </div>

          <button className="bg-orange-600 text-white font-bold py-3 px-10 hover:bg-orange-700 transition shadow-lg uppercase text-sm tracking-widest">
            {t.quality_page?.download_btn || "Download Certification"}
          </button>
        </section>
      </main>
    </div>
  );
};

export default QualityPage;