'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import Actions from './Actions';

interface HeaderProps {
  t: any;
  locale: string;
  changeLanguage: (newLocale: 'en' | 'fr' | 'ar') => void;
}

export default function Header({ t, locale, changeLanguage }: HeaderProps) {
  const isRTL = locale === 'ar';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-[#0f172a] shadow-xl">
      <div 
        className={`w-full max-w-[100vw] overflow-x-hidden flex h-24 items-center justify-between px-2 sm:px-4 lg:px-6 ${
          isRTL ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {/* Logo */}
        <div className={`flex items-center shrink-0 ${isRTL ? 'lg:-mr-2' : 'lg:-ml-2'}`}>
          <Link href={`/${locale}`} className="flex items-center">
            <Image 
              src="/icons/logo.svg"
              alt="Algeria Metal Export Logo"
              width={200}
              height={65}
              priority              
              className="object-contain max-h-[60px]"
            />
          </Link>
        </div>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex flex-1 justify-center px-4">
          <Navigation t={t} locale={locale} />
        </div>

        {/* Actions */}
        <div className="flex items-center shrink-0">
          <Actions t={t} locale={locale} changeLanguage={changeLanguage} />
        </div>

        {/* Menu Hamburger pour mobile */}
        <button 
          className="lg:hidden text-white ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile déroulant */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0f172a] border-t border-slate-900 py-4 px-4">
          <div className="flex flex-col space-y-3">
            <Link 
              href={`/${locale}`} 
              className="text-slate-300 hover:text-white transition uppercase text-sm font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.nav?.home || 'Home'}
            </Link>
            <Link 
              href={`/${locale}/products`} 
              className="text-slate-300 hover:text-white transition uppercase text-sm font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.nav?.products || 'Products'}
            </Link>
            <Link 
              href={`/${locale}/logistics`} 
              className="text-slate-300 hover:text-white transition uppercase text-sm font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.nav?.logistics || 'Logistics'}
            </Link>
            <Link 
              href={`/${locale}/certification`} 
              className="text-slate-300 hover:text-white transition uppercase text-sm font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.nav?.quality || 'Quality'}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className="text-slate-300 hover:text-white transition uppercase text-sm font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.nav?.about || 'About'}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="text-slate-300 hover:text-white transition uppercase text-sm font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.nav?.contact || 'Contact'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}