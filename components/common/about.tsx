'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Globe, 
  Truck, 
  Phone, 
  MessageCircle,
  ChevronRight,
  Download,
  MapPin,
  Users,
  Package,
  Warehouse,
  ShieldCheck,
  FileCheck,
  Box,
  CreditCard,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function AboutUsPage() {
  const { t, locale, changeLanguage } = useTranslation();
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* ================= MAIN CONTENT ================= */}
      <main className="container mx-auto px-4 py-8">
        
        {/* ================= HERO ================= */}
        <div className="relative mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            {t.about_page.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.about_page.hero_subtitle}
          </p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">{t.about_page.feature1_title}</h3>
            <p className="text-sm text-gray-400">{t.about_page.feature1_desc}</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">{t.about_page.feature2_title}</h3>
            <p className="text-sm text-gray-400">{t.about_page.feature2_desc}</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">{t.about_page.feature3_title}</h3>
            <p className="text-sm text-gray-400">{t.about_page.feature3_desc}</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">{t.about_page.feature4_title}</h3>
            <p className="text-sm text-gray-400">{t.about_page.feature4_desc}</p>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1 - Our Legacy */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div className="relative h-48 bg-gray-800">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" 
                alt="Our Legacy" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{t.about_page.card1_title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {t.about_page.card1_desc}
              </p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card1_item1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card1_item2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card1_item3}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 - Our Infrastructure */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div className="relative h-48 bg-gray-800">
              <Image 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80" 
                alt="Our Infrastructure" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{t.about_page.card2_title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {t.about_page.card2_desc}
              </p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card2_item1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card2_item2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card2_item3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card2_item4}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 - Global Footprint */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div className="relative h-48 bg-gray-800">
              <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80" 
                alt="Global Footprint" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{t.about_page.card3_title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {t.about_page.card3_desc}
              </p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card3_item1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card3_item2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>{t.about_page.card3_item3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= DOWNLOAD BUTTON ================= */}
        <div className="flex justify-center mb-12">
          <Link 
            href="#"
            className="border border-gray-500 hover:border-white text-white px-8 py-3 rounded-md font-bold text-sm tracking-wide transition inline-flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t.about_page.download_btn}
          </Link>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Box className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">{t.about_page.grid1_title}</h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.about_page.grid1_desc}</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Warehouse className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">{t.about_page.grid2_title}</h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.about_page.grid2_desc}</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">{t.about_page.grid3_title}</h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.about_page.grid3_desc}</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">{t.about_page.grid4_title}</h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">{t.about_page.grid4_desc}</p>
          </div>
        </div>

        {/* ================= CTA BANNER ================= */}
        <div className="bg-[#1e293b] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{t.about_page.cta_title}</h3>
              <p className="text-sm text-gray-400">{t.about_page.cta_subtitle}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              {t.about_page.cta_btn1}
            </Link>
            <Link href="#" className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <MessageCircle className="w-4 h-4" /> {t.about_page.cta_btn2}
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}