'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MessageCircle,
  ChevronRight,
  Download,
  Box,
  Warehouse,
  Users,
  Mail,
  Building2,
  Globe,
  Calendar,
  FileText,
  Send,
  CheckCircle
} from "lucide-react";

export default function RequestQuotationPage() {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';

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
    // TODO: Envoyer le formulaire
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* ================= MAIN CONTENT ================= */}
      <main className="container mx-auto px-4 py-8">
        
        {/* ================= HERO ================= */}
        <div className="relative mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            {t.request_page.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.request_page.hero_subtitle}
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Première ligne : Project & Contact Details + Shipping & Logistics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* PROJECT & CONTACT DETAILS */}
            <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">{t.request_page.section_contact_title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.request_page.contact_company}</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.request_page.contact_person}</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.request_page.contact_email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.request_page.contact_project_type}</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">{t.request_page.select_option}</option>
                    <option value="infrastructure">{t.request_page.project_type_infrastructure}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SHIPPING & LOGISTICS */}
            <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">{t.request_page.section_shipping_title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.request_page.shipping_port_load}</label>
                  <select
                    name="portOfLoad"
                    value={formData.portOfLoad}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">{t.request_page.select_option}</option>
                    <option value="skikda">{t.request_page.port_skikda}</option>
                    <option value="oran">{t.request_page.port_oran}</option>
                    <option value="algiers">{t.request_page.port_algiers}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.request_page.shipping_destination}</label>
                  <input
                    type="text"
                    name="destinationPort"
                    value={formData.destinationPort}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.request_page.shipping_lead_time}</label>
                  <input
                    type="text"
                    name="leadTime"
                    value={formData.leadTime}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">{t.request_page.shipping_incoterm}</label>
                  <select
                    name="incoterm"
                    value={formData.incoterm}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">{t.request_page.select_option}</option>
                    <option value="fob">FOB</option>
                    <option value="cfr">CFR</option>
                    <option value="cif">CIF</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT & CAPACITY SELECTION */}
          <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">{t.request_page.section_products_title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
              {/* HMS 1 & 2 */}
              <div className="bg-[#0f172a] p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&q=80" 
                      alt="HMS" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-bold">{t.request_page.product_hms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">{t.request_page.quantity_label}</span>
                  <input
                    type="text"
                    value={formData.products.hms.quantity}
                    onChange={(e) => handleProductChange('hms', e.target.value)}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-2 py-1 text-white text-sm focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              {/* Shredded Scrap */}
              <div className="bg-[#0f172a] p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=100&q=80" 
                      alt="Shredded" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-bold">{t.request_page.product_shredded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">{t.request_page.quantity_label}</span>
                  <input
                    type="text"
                    value={formData.products.shredded.quantity}
                    onChange={(e) => handleProductChange('shredded', e.target.value)}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-2 py-1 text-white text-sm focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              {/* Rebar Scrap */}
              <div className="bg-[#0f172a] p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=100&q=80" 
                      alt="Rebar" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-bold">{t.request_page.product_rebar}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">{t.request_page.quantity_label}</span>
                  <input
                    type="text"
                    value={formData.products.rebar.quantity}
                    onChange={(e) => handleProductChange('rebar', e.target.value)}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-2 py-1 text-white text-sm focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              {/* Cast Iron Scrap */}
              <div className="bg-[#0f172a] p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=100&q=80" 
                      alt="Cast Iron" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-bold">{t.request_page.product_cast_iron}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">{t.request_page.quantity_label}</span>
                  <input
                    type="text"
                    value={formData.products.castIron.quantity}
                    onChange={(e) => handleProductChange('castIron', e.target.value)}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-2 py-1 text-white text-sm focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              {/* Steel Products */}
              <div className="bg-[#0f172a] p-3 rounded-lg border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=100&q=80" 
                      alt="Steel Products" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-bold">{t.request_page.product_steel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400">{t.request_page.quantity_label}</span>
                  <input
                    type="text"
                    value={formData.products.steelProducts.quantity}
                    onChange={(e) => handleProductChange('steelProducts', e.target.value)}
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-2 py-1 text-white text-sm focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            
            {/* Custom Specifications */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t.request_page.notes_label}</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
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

        {/* ================= DOWNLOAD BUTTON ================= */}
        <div className="flex justify-center mt-8 mb-12">
          <Link 
            href="#"
            className="border border-gray-500 hover:border-white text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition inline-flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t.request_page.download_btn}
          </Link>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Box className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">{t.request_page.grid1_title}</h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.request_page.grid1_desc}</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Warehouse className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">{t.request_page.grid2_title}</h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.request_page.grid2_desc}</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">{t.request_page.grid3_title}</h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.request_page.grid3_desc}</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">{t.request_page.grid4_title}</h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.request_page.grid4_desc}</p>
          </div>
        </div>

        {/* ================= CTA BANNER ================= */}
        <div className="bg-[#1e293b] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{t.request_page.cta_title}</h3>
              <p className="text-sm text-gray-400">{t.request_page.cta_subtitle}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <MessageCircle className="w-4 h-4" /> {t.request_page.cta_btn1}
            </Link>
            <Link href="#" className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              {t.request_page.cta_btn2}
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}