'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { usePathname } from 'next/navigation';

interface ActionsProps {
  t: any;
  locale: string;
}

export default function Actions({ t, locale }: ActionsProps) {
  const pathname = usePathname();
  const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
  const isRTL = locale === 'ar';

  return (
    <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
      
      {/* Bouton de demande de devis */}
      <Link
        href={`/${locale}/request`}
        className="bg-[#f97316] hover:bg-orange-600 text-white px-4 py-2 rounded-md font-bold text-xs tracking-wider uppercase transition shadow-md shadow-orange-500/10 whitespace-nowrap"
      >
        {t?.nav?.quotation || 'Request Quotation'}
      </Link>
      
      {/* Sélecteur de langue */}
      <div className={`flex items-center gap-1 text-xs font-bold text-slate-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Link
          href={`/en${currentPath}`}
          className={`transition-colors uppercase ${locale === 'en' ? 'text-white font-extrabold' : 'hover:text-white text-slate-400'}`}
        >
          EN
        </Link>
        <span className="text-slate-600">|</span>
        <Link
          href={`/fr${currentPath}`}
          className={`transition-colors uppercase ${locale === 'fr' ? 'text-white font-extrabold' : 'hover:text-white text-slate-400'}`}
        >
          FR
        </Link>
        <span className="text-slate-600">|</span>
        <Link
          href={`/ar${currentPath}`}
          className={`transition-colors uppercase ${locale === 'ar' ? 'text-white font-extrabold' : 'hover:text-white text-slate-400'}`}
        >
          AR
        </Link>
      </div>

    </div>
  );
}