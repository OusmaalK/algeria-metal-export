// components/terms/TermsPage.tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function TermsPage() {
  const { t, locale, changeLanguage } = useTranslation();
  const isRTL = locale === 'ar';

  console.log('📍 Locale dans TermsPage:', locale);

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header t={t} locale={locale} changeLanguage={changeLanguage} />
      
      <main className="container mx-auto px-6 py-12">
        <h1 className={`text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4 ${isRTL ? 'border-l-0 border-r-4 pr-4' : ''}`}>
          {t?.terms?.title || 'Terms & Conditions'}
        </h1>

        <div className="bg-[#1e293b] rounded-lg p-6 border border-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms?.section1_title || '1. General Information'}
            </h2>
            <p className="text-gray-300">
              {t?.terms?.section1_desc || 'These Terms & Conditions govern the sale of products by Algeria Metal Export Solutions (hereinafter referred to as "the Company") to customers. By placing an order, you accept these terms in their entirety.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms?.section2_title || '2. Products and Specifications'}
            </h2>
            <p className="text-gray-300">
              {t?.terms?.section2_desc || 'All products sold by the Company are scrap metals and steel products. Specifications are provided in good faith but may vary slightly due to natural variations in materials. Customers are responsible for verifying that products meet their requirements.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms?.section3_title || '3. Pricing and Payment'}
            </h2>
            <p className="text-gray-300">
              {t?.terms?.section3_desc || 'All prices are quoted in Algerian Dinar (DZD) or US Dollars (USD) depending on the agreement. Payment terms are T/T (Telegraphic Transfer) or L/C (Letter of Credit). Payment must be received before shipment unless otherwise agreed.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms?.section4_title || '4. Shipping and Delivery'}
            </h2>
            <p className="text-gray-300">
              {t?.terms?.section4_desc || 'Shipping is arranged from Algerian ports (Skikda, Oran, Algiers). Delivery times are estimates and not guaranteed. Risk of loss passes to the customer upon loading onto the vessel.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms?.section5_title || '5. Quality and Inspection'}
            </h2>
            <p className="text-gray-300">
              {t?.terms?.section5_desc || 'All products are accompanied by a 3.1 Mill Certificate. Customers may request third-party inspection (SGS, BV, TUV) at their own expense. Claims must be submitted within 7 days of delivery.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms?.section6_title || '6. Limitation of Liability'}
            </h2>
            <p className="text-gray-300">
              {t?.terms?.section6_desc || 'The Company shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the products. The Company\'s total liability shall not exceed the purchase price of the products.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms?.section7_title || '7. Governing Law'}
            </h2>
            <p className="text-gray-300">
              {t?.terms?.section7_desc || 'These terms shall be governed by the laws of Algeria. Any disputes shall be resolved through arbitration or the courts of Algiers, Algeria.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              {t?.terms?.section8_title || '8. Contact Information'}
            </h2>
            <p className="text-gray-300">
              {t?.terms?.section8_desc || 'For any questions regarding these Terms & Conditions, please contact us at info@algeriametal.com.'}
            </p>
          </section>
        </div>
      </main>

    </div>
  );
}