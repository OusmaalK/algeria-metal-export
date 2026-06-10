// components/cookies/CookiesPage.tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function CookiesPage() {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';

  console.log('📍 Locale dans CookiesPage:', locale);

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header t={t} locale={locale} />

      
      <main className="container mx-auto px-6 py-12">
        <h1 className={`text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4 ${isRTL ? 'border-l-0 border-r-4 pr-4' : ''}`}>
          {t?.cookies?.title || 'Cookie Policy'}
        </h1>

        <div className="bg-[#1e293b] rounded-lg p-6 border border-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.cookies?.section1_title || '1. What Are Cookies'}
            </h2>
            <p className="text-gray-300">
              {t?.cookies?.section1_desc || 'Cookies are small text files that are stored on your device when you visit our website. They help us understand how you use our site and improve your experience.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.cookies?.section2_title || '2. Types of Cookies We Use'}
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>
                <span className="font-bold text-white">{t?.cookies?.essential || 'Essential Cookies'}</span>: {t?.cookies?.essential_desc || 'Necessary for the website to function properly.'}
              </li>
              <li>
                <span className="font-bold text-white">{t?.cookies?.analytics || 'Analytics Cookies'}</span>: {t?.cookies?.analytics_desc || 'Help us understand how visitors interact with our website.'}
              </li>
              <li>
                <span className="font-bold text-white">{t?.cookies?.functional || 'Functional Cookies'}</span>: {t?.cookies?.functional_desc || 'Enable enhanced functionality and personalization.'}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.cookies?.section3_title || '3. How to Manage Cookies'}
            </h2>
            <p className="text-gray-300">
              {t?.cookies?.section3_desc || 'You can manage or delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.cookies?.section4_title || '4. Third-Party Cookies'}
            </h2>
            <p className="text-gray-300">
              {t?.cookies?.section4_desc || 'We may use third-party services that set cookies on our website. These include analytics providers, advertising networks, and social media platforms.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.cookies?.section5_title || '5. Contact Us'}
            </h2>
            <p className="text-gray-300">
              {t?.cookies?.section5_desc || 'If you have any questions about our Cookie Policy, please contact us at info@algeriametal.com.'}
            </p>
          </section>
        </div>
      </main>

    </div>
  );
}