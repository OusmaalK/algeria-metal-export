// components/faq/FaqPage.tsx
'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqPage() {
  const { t, locale, changeLanguage } = useTranslation();
  const isRTL = locale === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Récupérer les questions depuis les traductions
  const faqItems = t?.faq?.items || [];

  console.log('📍 Locale dans FaqPage:', locale);

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header t={t} locale={locale} changeLanguage={changeLanguage} />
      
      <main className="container mx-auto px-6 py-12">
        <h1 className={`text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4 ${isRTL ? 'border-l-0 border-r-4 pr-4' : ''}`}>
          {t?.faq?.title || 'Frequently Asked Questions'}
        </h1>

        <div className="bg-[#1e293b] rounded-lg p-6 border border-gray-700 space-y-4">
          {faqItems.length > 0 ? (
            faqItems.map((item: any, index: number) => (
              <div key={index} className="border-b border-gray-700 last:border-0 pb-4 last:pb-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center justify-between py-2 text-left ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className="font-bold text-white hover:text-orange-500 transition-colors">
                    {item.question}
                  </span>
                  <span className="text-orange-500">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-gray-300 text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center py-4">
              {t?.faq?.no_items || 'No FAQs available at the moment.'}
            </p>
          )}
        </div>
      </main>

    </div>
  );
}