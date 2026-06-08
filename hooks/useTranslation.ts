// hooks/useTranslation.ts
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { translations } from '@/data/translations';

type Locale = 'en' | 'fr' | 'ar';
type Translation = Record<string, any>;

export function useTranslation() {
  const pathname = usePathname();
  const pathLocale = pathname.split('/')[1] as Locale;
  const [locale, setLocale] = useState<Locale>(pathLocale || 'fr');

  // ✅ Utiliser l'objet translations directement
  const t = translations[locale] || translations.fr;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const changeLanguage = (newLocale: Locale) => {
    if (newLocale !== locale) {
      window.location.href = `/${newLocale}`;
    }
  };

  return { t, locale, changeLanguage };
}