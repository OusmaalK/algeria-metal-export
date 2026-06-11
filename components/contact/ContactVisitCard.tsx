// components/contact/ContactVisitCard.tsx
'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2 } from 'lucide-react';
import type { ContactVisitCardProps } from './types';

export const ContactVisitCard = memo(({ t }: ContactVisitCardProps) => {
  return (
    <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Building2 className="w-8 h-8 text-orange-500" />
        <h2 className="text-2xl font-bold">{t.contact_page.card2_title}</h2>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        {t.contact_page.card2_desc}
      </p>

      <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
          alt="Headquarters"
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-[#0f172a]/80 px-2 py-1 text-[10px] text-white">
          {t.contact_page.card2_badge}
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between py-2 border-b border-gray-700">
          <span className="text-gray-400">{t.contact_page.card2_hours_label}</span>
          <span className="text-white">{t.contact_page.card2_hours_value}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-700">
          <span className="text-gray-400">{t.contact_page.card2_closed_label}</span>
          <span className="text-white">{t.contact_page.card2_closed_value}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-700">
          <span className="text-gray-400">{t.contact_page.card2_parking_label}</span>
          <span className="text-white">{t.contact_page.card2_parking_value}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-400">{t.contact_page.card2_accessibility_label}</span>
          <span className="text-white">{t.contact_page.card2_accessibility_value}</span>
        </div>
      </div>
    </div>
  );
});

ContactVisitCard.displayName = 'ContactVisitCard';