// hooks/useTranslation.ts
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { translations } from '@/data/translations';

type Locale = 'en' | 'fr' | 'ar';
type Translation = Record<string, any>;

export function useTranslation() {
  const pathname = usePathname();
  const router = useRouter();
  const pathLocale = pathname.split('/')[1] as Locale;
  const [locale, setLocale] = useState<Locale>(pathLocale || 'fr');

  const t = translations[locale] || translations.fr;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  // ✅ changeLanguage est maintenant géré par les liens <Link> dans les composants

  return { t, locale };
}