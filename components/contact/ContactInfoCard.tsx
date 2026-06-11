// components/contact/ContactInfoCard.tsx
'use client';

import { memo } from 'react';
import Link from 'next/link';
import { Globe, Mail, Phone, Star, MapPin, Calendar } from 'lucide-react';
import type { ContactInfoCardProps } from './types';

export const ContactInfoCard = memo(({ t }: ContactInfoCardProps) => {
  return (
    <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Globe className="w-8 h-8 text-orange-500" />
        <h2 className="text-2xl font-bold">{t.contact_page.card1_title}</h2>
      </div>
      <p className="text-sm text-gray-400 mb-6">
        {t.contact_page.card1_desc}
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
          <span className="text-sm font-bold text-gray-400">{t.contact_page.card1_email_label}</span>
          <div className="flex items-center gap-2 text-sm text-white">
            <Mail className="w-4 h-4 text-orange-500" />
            contact@algeriametal.dz
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
          <span className="text-sm font-bold text-gray-400">{t.contact_page.card1_phone_label}</span>
          <div className="flex items-center gap-2 text-sm text-white">
            <Phone className="w-4 h-4 text-orange-500" />
            +213 (0) 23 456 789
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
          <span className="text-sm font-bold text-gray-400">{t.contact_page.card1_emergency_label}</span>
          <div className="flex items-center gap-2 text-sm text-white">
            <Star className="w-4 h-4 text-orange-500" />
            +213 (0) 770 123 456
          </div>
        </div>
        <div className="flex items-start justify-between pt-2">
          <span className="text-sm font-bold text-gray-400">{t.contact_page.card1_address_label}</span>
          <div className="flex items-start gap-2 text-sm text-white text-right">
            <MapPin className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
            <span>{t.contact_page.card1_address}</span>
          </div>
        </div>
      </div>

      <Link
        href="#"
        className="mt-6 block w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md font-bold text-sm tracking-wide transition text-center"
      >
        <Calendar className="w-4 h-4 inline-block mr-2" />
        {t.contact_page.card1_btn}
      </Link>
    </div>
  );
});

ContactInfoCard.displayName = 'ContactInfoCard';