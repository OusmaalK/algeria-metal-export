'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Truck, 
  ShieldCheck, 
  DollarSign, 
  Ship, 
  Warehouse, 
  Globe, 
  Clock, 
  FileText, 
  Phone, 
  MessageCircle,
  ChevronRight,
  Download,
  Box,
  CreditCard,
  CheckCircle,
  Anchor,
  FileCheck
} from "lucide-react";

export default function LogisticsPage() {
  const { t, locale, changeLanguage } = useTranslation();
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* ================= MAIN CONTENT ================= */}
      <main className="container mx-auto px-4 py-8">
        
        {/* ================= HERO ================= */}
        <div className="relative mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t.logistics_page.title}
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                {t.logistics_page.hero_subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {/* 1. MAJOR PORTS */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <Ship className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">3</h4>
            <p className="text-xs text-gray-400 whitespace-pre-line">{t.logistics_page.stat1}</p>
          </div>

          {/* 2. TONS */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <Warehouse className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">300,000+</h4>
            <p className="text-xs text-gray-400 whitespace-pre-line">{t.logistics_page.stat2}</p>
          </div>

          {/* 3. COUNTRIES */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <Globe className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">20+</h4>
            <p className="text-xs text-gray-400 whitespace-pre-line">{t.logistics_page.stat3}</p>
          </div>

          {/* 4. DAYS */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <Clock className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">3 – 6</h4>
            <p className="text-xs text-gray-400 whitespace-pre-line">{t.logistics_page.stat4}</p>
          </div>

          {/* 5. FLEXIBLE INCOTERMS */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <ShieldCheck className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white whitespace-pre-line">{t.logistics_page.stat5}</h4>
            <p className="text-xs text-gray-400 whitespace-pre-line">{t.logistics_page.stat5_desc}</p>
          </div>

          {/* 6. CERTIFIED QUALITY */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <FileCheck className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">100%</h4>
            <p className="text-xs text-gray-400 whitespace-pre-line">{t.logistics_page.stat6}</p>
          </div>
        </div>

        {/* ================= LOADING PORTS ================= */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4">{t.logistics_page.ports_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Port of Skikda */}
            <div className="bg-[#1e293b] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative h-48 bg-gray-800">
                <Image 
                  src="https://i0.wp.com/www.24hdz.dz/wp-content/uploads/2022/02/1-600x340-1.jpg?w=600&ssl=1" 
                  alt="Port of Skikda" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.logistics_page.port_skikda_name}</h3>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_skikda_detail1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_skikda_detail2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_skikda_detail3}</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-400">{t.logistics_page.main_products}: <span className="text-white">{t.logistics_page.port_skikda_products}</span></p>
                </div>
              </div>
            </div>

            {/* Port of Oran */}
            <div className="bg-[#1e293b] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative h-48 bg-gray-800">
                <Image 
                  src="https://www.elmoudjahid.com/storage/images/article/7a2b6fbd13685cebe3e57b856e2a8a49.jpg" 
                  alt="Port of Oran" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.logistics_page.port_oran_name}</h3>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_oran_detail1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_oran_detail2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_oran_detail3}</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-400">{t.logistics_page.main_products}: <span className="text-white">{t.logistics_page.port_oran_products}</span></p>
                </div>
              </div>
            </div>

            {/* Port of Algiers */}
            <div className="bg-[#1e293b] rounded-lg overflow-hidden border border-gray-800">
              <div className="relative h-48 bg-gray-800">
                <Image 
                  src="https://i0.wp.com/www.24hdz.dz/wp-content/uploads/2021/07/9aab79f6542280477a3fb621ac1af076_M.jpg?w=580&ssl=1" 
                  alt="Port of Algiers" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{t.logistics_page.port_algiers_name}</h3>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_algiers_detail1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_algiers_detail2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{t.logistics_page.port_algiers_detail3}</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-400">{t.logistics_page.main_products}: <span className="text-white">{t.logistics_page.port_algiers_products}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN MARKETS ================= */}
        <div className="mb-12 bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4">
            {t.logistics_page.markets_title}
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Carte du monde */}
            <div className="lg:w-1/2 relative h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                alt="World Map" 
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Liste des marchés */}
            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* EUROPE */}
              <div className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-sm text-blue-800">{t.logistics_page.market_europe}</h4>
                </div>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>Italy</li>
                  <li>Spain</li>
                  <li>France</li>
                  <li>Belgium</li>
                  <li>Netherlands</li>
                  <li className="text-blue-400">...</li>
                </ul>
              </div>

              {/* MIDDLE EAST */}
              <div className="p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-sm text-green-800">{t.logistics_page.market_middleeast}</h4>
                </div>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>Turkey</li>
                  <li>UAE</li>
                  <li>Saudi Arabia</li>
                  <li>Qatar</li>
                  <li>Oman</li>
                  <li className="text-green-400">...</li>
                </ul>
              </div>

              {/* AFRICA */}
              <div className="p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-orange-600" />
                  <h4 className="font-bold text-sm text-orange-800">{t.logistics_page.market_africa}</h4>
                </div>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>Morocco</li>
                  <li>Tunisia</li>
                  <li>Libya</li>
                  <li>West Africa</li>
                  <li>East Africa</li>
                  <li className="text-orange-400">...</li>
                </ul>
              </div>

              {/* ASIA */}
              <div className="p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <h4 className="font-bold text-sm text-purple-800">{t.logistics_page.market_asia}</h4>
                </div>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>India</li>
                  <li>Pakistan</li>
                  <li>Bangladesh</li>
                  <li>Vietnam</li>
                  <li className="text-purple-400">...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROCESS & SHIPPING INFO ================= */}
        <div className="mb-12 bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* COLONNE GAUCHE : PROCESS */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4">
                {t.logistics_page.process_title}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                {/* Step 1 */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md">1</div>
                  <div className="mb-1 text-orange-500"><MessageCircle className="w-6 h-6" /></div>
                  <h4 className="font-bold text-xs text-[#0f172a]">{t.logistics_page.process_step1_title}</h4>
                  <p className="text-[10px] text-gray-500">{t.logistics_page.process_step1_desc}</p>
                </div>

                <div className="flex items-center justify-center text-orange-300"><ChevronRight className="w-5 h-5 animate-pulse" /></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md">2</div>
                  <div className="mb-1 text-orange-500"><FileText className="w-6 h-6" /></div>
                  <h4 className="font-bold text-xs text-[#0f172a]">{t.logistics_page.process_step2_title}</h4>
                  <p className="text-[10px] text-gray-500">{t.logistics_page.process_step2_desc}</p>
                </div>

                <div className="flex items-center justify-center text-orange-300"><ChevronRight className="w-5 h-5 animate-pulse" /></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md">3</div>
                  <div className="mb-1 text-orange-500"><ShieldCheck className="w-6 h-6" /></div>
                  <h4 className="font-bold text-xs text-[#0f172a]">{t.logistics_page.process_step3_title}</h4>
                  <p className="text-[10px] text-gray-500">{t.logistics_page.process_step3_desc}</p>
                </div>

                <div className="flex items-center justify-center text-orange-300"><ChevronRight className="w-5 h-5 animate-pulse" /></div>

                {/* Step 4 */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md">4</div>
                  <div className="mb-1 text-orange-500"><Truck className="w-6 h-6" /></div>
                  <h4 className="font-bold text-xs text-[#0f172a]">{t.logistics_page.process_step4_title}</h4>
                  <p className="text-[10px] text-gray-500">{t.logistics_page.process_step4_desc}</p>
                </div>

                <div className="flex items-center justify-center text-orange-300"><ChevronRight className="w-5 h-5 animate-pulse" /></div>

                {/* Step 5 */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md">5</div>
                  <div className="mb-1 text-orange-500"><Ship className="w-6 h-6" /></div>
                  <h4 className="font-bold text-xs text-[#0f172a]">{t.logistics_page.process_step5_title}</h4>
                  <p className="text-[10px] text-gray-500">{t.logistics_page.process_step5_desc}</p>
                </div>
              </div>
            </div>

            {/* COLONNE DROITE : SHIPPING INFO */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4">
                {t.logistics_page.shipping_title}
              </h2>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-linear-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-orange-500" /> {t.logistics_page.ship_incoterms}
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">{t.logistics_page.ship_incoterms_val}</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-linear-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-orange-500" /> {t.logistics_page.ship_payment}
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">{t.logistics_page.ship_payment_val}</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-linear-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" /> {t.logistics_page.ship_loading}
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">{t.logistics_page.ship_loading_val}</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-linear-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <Ship className="w-4 h-4 text-orange-500" /> {t.logistics_page.ship_freight}
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">{t.logistics_page.ship_freight_val}</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-linear-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <Box className="w-4 h-4 text-orange-500" /> {t.logistics_page.ship_packaging}
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">{t.logistics_page.ship_packaging_val}</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-linear-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-500" /> {t.logistics_page.ship_inspection}
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">{t.logistics_page.ship_inspection_val}</div>
                </div>
                <div className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-linear-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-500" /> {t.logistics_page.ship_documents}
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">{t.logistics_page.ship_documents_val}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}