// app/[locale]/layout.tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  const { t, locale, changeLanguage } = useTranslation();
  const isRTL = locale === 'ar';

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header t={t} locale={locale} changeLanguage={changeLanguage} />
      <div className="pt-40"> {/* ✅ Padding pour éviter que le contenu passe sous le header */}
        {children}
      </div>
      <Footer t={t} locale={locale} />
    </div>
  );
}