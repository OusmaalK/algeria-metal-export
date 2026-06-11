// components/about/AboutCta.tsx
'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import type { AboutCtaProps } from './types';

export const AboutCta = memo(({ t }: AboutCtaProps) => {
  return (
    <div className="bg-[#1e293b] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-orange-500 p-3 rounded-full">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{t.about_page.cta_title}</h3>
          <p className="text-sm text-gray-400">{t.about_page.cta_subtitle}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
          {t.about_page.cta_btn1}
        </Link>
        <Link href="#" className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
          <MessageCircle className="w-4 h-4" /> {t.about_page.cta_btn2}
        </Link>
      </div>
    </div>
  );
});

AboutCta.displayName = 'AboutCta';