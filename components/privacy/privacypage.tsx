// components/privacy/PrivacyPage.tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/header/Header';

export default function PrivacyPage() {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';

  console.log('📍 Locale dans PrivacyPage:', locale);

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
    <Header t={t} locale={locale} />
      
      <main className="container mx-auto px-6 py-12">
        <h1 className={`text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4 ${isRTL ? 'border-l-0 border-r-4 pr-4' : ''}`}>
          {t?.privacy?.title || 'Privacy Policy'}
        </h1>

        <div className="bg-[#1e293b] rounded-lg p-6 border border-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.privacy?.section1_title || '1. Information We Collect'}
            </h2>
            <p className="text-gray-300">
              {t?.privacy?.section1_desc || 'We collect personal information that you provide to us directly, such as your name, email address, phone number, and company name when you submit a quote request or contact us.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.privacy?.section2_title || '2. How We Use Your Information'}
            </h2>
            <p className="text-gray-300">
              {t?.privacy?.section2_desc || 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to respond to your inquiries and requests.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.privacy?.section3_title || '3. Data Retention'}
            </h2>
            <p className="text-gray-300">
              {t?.privacy?.section3_desc || 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.privacy?.section4_title || '4. Your Rights'}
            </h2>
            <p className="text-gray-300">
              {t?.privacy?.section4_desc || 'You have the right to access, correct, update, or delete your personal information at any time. Please contact us to exercise these rights.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.privacy?.section5_title || '5. Contact Us'}
            </h2>
            <p className="text-gray-300">
              {t?.privacy?.section5_desc || 'If you have any questions or concerns about this Privacy Policy, please contact us at info@algeriametal.com.'}
            </p>
          </section>
        </div>
      </main>

    </div>
  );
}