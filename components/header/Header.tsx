'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';
import Actions from './Actions';

interface HeaderProps {
  t: any;
  locale: string;
  changeLanguage: (newLocale: 'en' | 'fr' | 'ar') => void;
}

export default function Header({ t, locale, changeLanguage }: HeaderProps) {
  const isRTL = locale === 'ar';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-[#0f172a] shadow-xl">
      <div 
        className={`w-full max-w-[100vw] overflow-x-hidden flex h-24 items-center justify-between px-4 sm:px-8 lg:px-12 ${
          isRTL ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {/* À gauche : Logo agrandi en hauteur et décalé vers l'extérieur */}
        <div className={`flex items-center shrink-0 ${isRTL ? 'lg:-mr-4' : 'lg:-ml-4'}`}>
          <Link href={`/${locale}`} className="flex items-center">
            <Image 
              src="/icons/logo.svg"
              alt="Algeria Metal Export Logo"
              width={280}
              height={90}
              priority              
              className="object-contain max-h-[80px]"
            />
          </Link>
        </div>

        {/* Zone centrale : Liens de navigation */}
        <div className="flex-1 flex justify-center px-6">
          <Navigation t={t} locale={locale} />
        </div>

        {/* À droite : Bouton + Sélecteur alignés */}
        <div className="flex items-center shrink-0">
          <Actions t={t} locale={locale} changeLanguage={changeLanguage} />
        </div>
      </div>
    </header>
  );
}