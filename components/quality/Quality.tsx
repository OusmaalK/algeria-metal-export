'use client';

import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface QualityProps {
  t: any;
  locale: string;
}

export default function Quality({ t, locale }: QualityProps) {
  const isRTL = locale === 'ar';

  return (
    <section id="quality" className="py-5 bg-white">
      <div className="container mx-auto px-6">
        
        {/* En-tête */}
        <div className={`flex justify-between items-end mb-8 border-b border-gray-100 pb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
            {t?.quality?.title}
          </h2>
          
          <Link 
            href={`/${locale}/quality`} 
            className={`text-sm font-bold text-[#0f172a] hover:text-orange-500 flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t?.quality?.view_all}{' '}
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </Link>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
          {t?.quality?.items?.map((item: any, index: number) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center bg-gray-50 transition-colors">
                <span className="text-[10px] font-bold text-gray-400 p-1 text-center">
                  {item?.name}
                </span>
              </div>
              <p className="text-xs font-bold text-[#0f172a]">
                {item?.name}
              </p>
              <p className="text-[10px] text-gray-500 leading-relaxed max-w-[150px]">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}