// components/request/RequestPage.tsx
'use client';

import { useState, memo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { Download, Send } from 'lucide-react';
import { RequestHero } from './RequestHero';
import { RequestForm } from './RequestForm';
import { RequestFeaturesGrid } from './RequestFeaturesGrid';
import { RequestCta } from './RequestCta';

const RequestPage = memo(() => {
  const { t, locale } = useTranslation();

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    projectType: '',
    portOfLoad: '',
    destinationPort: '',
    leadTime: '',
    incoterm: '',
    notes: '',
    products: {
      hms: { quantity: '' },
      shredded: { quantity: '' },
      rebar: { quantity: '' },
      castIron: { quantity: '' },
      steelProducts: { quantity: '' }
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (product: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [product]: { quantity: value }
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <RequestHero t={t} />
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <RequestForm 
            t={t} 
            locale={locale} 
            formData={formData} 
            handleChange={handleChange} 
            handleProductChange={handleProductChange} 
          />
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition inline-flex items-center gap-2 shadow-lg shadow-orange-500/25"
            >
              <Send className="w-4 h-4" />
              {t.request_page.submit_btn}
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-8 mb-12">
          <Link
            href="#"
            className="border border-gray-500 hover:border-white text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition inline-flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t.request_page.download_btn}
          </Link>
        </div>

        <RequestFeaturesGrid t={t} />
        <RequestCta t={t} />
      </main>
    </div>
  );
});

RequestPage.displayName = 'RequestPage';

export default RequestPage;