// components/terms-of-use/TermsOfUsePage.tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/header/Header';

export default function TermsOfUsePage() {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';

  console.log('📍 Locale dans TermsOfUsePage:', locale);

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header t={t} locale={locale} />
      
      <main className="container mx-auto px-6 py-12">
        <h1 className={`text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4 ${isRTL ? 'border-l-0 border-r-4 pr-4' : ''}`}>
          {t?.terms_of_use?.title || 'Terms of Use'}
        </h1>

        <div className="bg-[#1e293b] rounded-lg p-6 border border-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms_of_use?.section1_title || '1. Acceptance of Terms'}
            </h2>
            <p className="text-gray-300">
              {t?.terms_of_use?.section1_desc || 'By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the site.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms_of_use?.section2_title || '2. Intellectual Property'}
            </h2>
            <p className="text-gray-300">
              {t?.terms_of_use?.section2_desc || 'All content on this website, including text, graphics, logos, and images, is the property of Algeria Metal Export Solutions and is protected by international copyright and trademark laws.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms_of_use?.section3_title || '3. User Conduct'}
            </h2>
            <p className="text-gray-300">
              {t?.terms_of_use?.section3_desc || 'You agree to use this website only for lawful purposes. You may not post or transmit any content that is illegal, harmful, or violates the rights of others.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms_of_use?.section4_title || '4. Limitation of Liability'}
            </h2>
            <p className="text-gray-300">
              {t?.terms_of_use?.section4_desc || 'Algeria Metal Export Solutions shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms_of_use?.section5_title || '5. Links to Third-Party Sites'}
            </h2>
            <p className="text-gray-300">
              {t?.terms_of_use?.section5_desc || 'This website may contain links to third-party websites. These links are provided for your convenience only, and we do not endorse or assume any responsibility for the content of such sites.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms_of_use?.section6_title || '6. Changes to Terms'}
            </h2>
            <p className="text-gray-300">
              {t?.terms_of_use?.section6_desc || 'We reserve the right to update or modify these Terms of Use at any time without prior notice. Your continued use of the website constitutes acceptance of the updated terms.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms_of_use?.section7_title || '7. Governing Law'}
            </h2>
            <p className="text-gray-300">
              {t?.terms_of_use?.section7_desc || 'These Terms of Use shall be governed by the laws of Algeria. Any disputes shall be resolved through the courts of Algiers, Algeria.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms_of_use?.section8_title || '8. Contact Information'}
            </h2>
            <p className="text-gray-300">
              {t?.terms_of_use?.section8_desc || 'If you have any questions about these Terms of Use, please contact us at info@algeriametal.com.'}
            </p>
          </section>
        </div>
      </main>

    </div>
  );
}