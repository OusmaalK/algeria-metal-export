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
import Header from '@/components/header/Header';
import Actions from '@/components/header/Actions';

export default function LogisticsPage() {
  const { t, locale, changeLanguage } = useTranslation();
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* ================= HEADER ================= */}
      <Header t={t} locale={locale} changeLanguage={changeLanguage} />

      {/* ================= MAIN CONTENT ================= */}
      <main className="container mx-auto px-4 py-8">
        
        {/* ================= HERO ================= */}
        <div className="relative mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                LOGISTICS & SHIPPING
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Strategically located in the Mediterranean, Algeria offers faster and more cost-effective shipping to Europe, MENA and Africa.
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
            <p className="text-xs text-gray-400">MAJOR PORTS</p>
          </div>

          {/* 2. TONS */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <Warehouse className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">300,000+</h4>
            <p className="text-xs text-gray-400">TONS</p>
          </div>

          {/* 3. COUNTRIES */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <Globe className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">20+</h4>
            <p className="text-xs text-gray-400">COUNTRIES</p>
          </div>

          {/* 4. DAYS */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <Clock className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">3 – 6</h4>
            <p className="text-xs text-gray-400">DAYS</p>
          </div>

          {/* 5. FLEXIBLE INCOTERMS */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <ShieldCheck className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">FLEXIBLE</h4>
            <p className="text-xs text-gray-400">INCOTERMS</p>
          </div>

          {/* 6. CERTIFIED QUALITY */}
          <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-xl border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-10 h-10 mb-3">
              <FileCheck className="w-10 h-10 text-orange-500" />
            </div>
            <h4 className="font-bold text-xl text-white">100%</h4>
            <p className="text-xs text-gray-400">CERTIFIED</p>
          </div>
        </div>

        {/* ================= LOADING PORTS ================= */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4">LOADING PORTS</h2>
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
                <h3 className="font-bold text-lg mb-2">PORT OF SKIKDA</h3>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Deep water port</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Modern equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Fast vessel handling</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-400">Main products: <span className="text-white">All scrap grades</span></p>
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
                <h3 className="font-bold text-lg mb-2">PORT OF ORAN</h3>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Strategic West Algeria port</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Easy access to Europe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>High storage capacity</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-400">Main products: <span className="text-white">HMS, Shredded, Rebar, Cast Iron</span></p>
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
                <h3 className="font-bold text-lg mb-2">PORT OF ALGIERS</h3>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Capital city port</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Regular shipping lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Efficient clearance</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-400">Main products: <span className="text-white">All scrap grades</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN MARKETS ================= */}
        <div className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4 animate-fade-in-up">
            MAIN MARKETS
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Carte du monde (placeholder) */}
            <div className="lg:w-1/2 relative h-64 bg-gray-100 rounded-lg overflow-hidden animate-fade-in-up animation-delay-200">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                alt="World Map" 
                fill
                className="object-contain p-4"
              />
            </div>

            {/* Liste des marchés */}
            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* EUROPE - Bleu */}
              <div className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-md animate-fade-in-up animation-delay-300">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-sm text-blue-800">EUROPE</h4>
                </div>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li className="hover:text-blue-900 transition-colors">Italy</li>
                  <li className="hover:text-blue-900 transition-colors">Spain</li>
                  <li className="hover:text-blue-900 transition-colors">France</li>
                  <li className="hover:text-blue-900 transition-colors">Belgium</li>
                  <li className="hover:text-blue-900 transition-colors">Netherlands</li>
                  <li className="text-blue-400">...</li>
                </ul>
              </div>

              {/* MIDDLE EAST - Vert */}
              <div className="p-4 rounded-xl bg-green-50 hover:bg-green-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-md animate-fade-in-up animation-delay-400">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-sm text-green-800">MIDDLE EAST</h4>
                </div>
                <ul className="text-xs text-green-700 space-y-1">
                  <li className="hover:text-green-900 transition-colors">Turkey</li>
                  <li className="hover:text-green-900 transition-colors">UAE</li>
                  <li className="hover:text-green-900 transition-colors">Saudi Arabia</li>
                  <li className="hover:text-green-900 transition-colors">Qatar</li>
                  <li className="hover:text-green-900 transition-colors">Oman</li>
                  <li className="text-green-400">...</li>
                </ul>
              </div>

              {/* AFRICA - Orange */}
              <div className="p-4 rounded-xl bg-orange-50 hover:bg-orange-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-md animate-fade-in-up animation-delay-500">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-orange-600" />
                  <h4 className="font-bold text-sm text-orange-800">AFRICA</h4>
                </div>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li className="hover:text-orange-900 transition-colors">Morocco</li>
                  <li className="hover:text-orange-900 transition-colors">Tunisia</li>
                  <li className="hover:text-orange-900 transition-colors">Libya</li>
                  <li className="hover:text-orange-900 transition-colors">West Africa</li>
                  <li className="hover:text-orange-900 transition-colors">East Africa</li>
                  <li className="text-orange-400">...</li>
                </ul>
              </div>

              {/* ASIA - Violet */}
              <div className="p-4 rounded-xl bg-purple-50 hover:bg-purple-100 hover:-translate-y-1 transition-all duration-300 hover:shadow-md animate-fade-in-up animation-delay-600">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <h4 className="font-bold text-sm text-purple-800">ASIA</h4>
                </div>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li className="hover:text-purple-900 transition-colors">India</li>
                  <li className="hover:text-purple-900 transition-colors">Pakistan</li>
                  <li className="hover:text-purple-900 transition-colors">Bangladesh</li>
                  <li className="hover:text-purple-900 transition-colors">Vietnam</li>
                  <li className="text-purple-400">...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OUR EXPORT PROCESS & SHIPPING INFORMATION ================= */}
        <div className="mb-12 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Colonne Gauche : OUR EXPORT PROCESS */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4 animate-fade-in-up">
                OUR EXPORT PROCESS
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                {/* Step 1: INQUIRY */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md group-hover:shadow-lg transition-shadow">1</div>
                  <div className="mb-1 text-orange-500 group-hover:text-orange-600 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xs text-[#0f172a]">INQUIRY</h4>
                  <p className="text-[10px] text-gray-500">You send us<br/>your request</p>
                </div>

                <div className="flex items-center justify-center text-orange-300">
                  <ChevronRight className="w-5 h-5 animate-pulse" />
                </div>

                {/* Step 2: CONFIRMATION */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md group-hover:shadow-lg transition-shadow">2</div>
                  <div className="mb-1 text-orange-500 group-hover:text-orange-600 transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xs text-[#0f172a]">CONFIRMATION</h4>
                  <p className="text-[10px] text-gray-500">We confirm<br/>availability</p>
                </div>

                <div className="flex items-center justify-center text-orange-300">
                  <ChevronRight className="w-5 h-5 animate-pulse" />
                </div>

                {/* Step 3: INSPECTION */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md group-hover:shadow-lg transition-shadow">3</div>
                  <div className="mb-1 text-orange-500 group-hover:text-orange-600 transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xs text-[#0f172a]">INSPECTION</h4>
                  <p className="text-[10px] text-gray-500">Quality check<br/>by SGS</p>
                </div>

                <div className="flex items-center justify-center text-orange-300">
                  <ChevronRight className="w-5 h-5 animate-pulse" />
                </div>

                {/* Step 4: LOADING */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md group-hover:shadow-lg transition-shadow">4</div>
                  <div className="mb-1 text-orange-500 group-hover:text-orange-600 transition-colors">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xs text-[#0f172a]">LOADING</h4>
                  <p className="text-[10px] text-gray-500">Professional<br/>loading</p>
                </div>

                <div className="flex items-center justify-center text-orange-300">
                  <ChevronRight className="w-5 h-5 animate-pulse" />
                </div>

                {/* Step 5: SHIPPING */}
                <div className="flex flex-col items-center p-3 rounded-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md group-hover:shadow-lg transition-shadow">5</div>
                  <div className="mb-1 text-orange-500 group-hover:text-orange-600 transition-colors">
                    <Ship className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xs text-[#0f172a]">SHIPPING</h4>
                  <p className="text-[10px] text-gray-500">On-time<br/>delivery</p>
                </div>
              </div>
            </div>

            {/* Colonne Droite : SHIPPING INFORMATION */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-6 border-l-4 border-orange-500 pl-4 animate-fade-in-up animation-delay-200">
                SHIPPING INFORMATION
              </h2>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-orange-500" /> INCOTERMS
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">FOB / CIF / CFR</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-orange-500" /> PAYMENT TERMS
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">T/T (Telegraphic Transfer) / L/C</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" /> LOADING TIME
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">3 – 5 Days After Confirmation</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <Ship className="w-4 h-4 text-orange-500" /> FREIGHT TYPE
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">Bulk / Break Bulk / Container</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <Box className="w-4 h-4 text-orange-500" /> PACKAGING
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">Bulk / Loose / Bales / Containers</div>
                </div>
                <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-500" /> INSPECTION
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">SGS / BV / TUV – On loading</div>
                </div>
                <div className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-gray-50 to-white font-bold text-sm text-[#0f172a] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-500" /> DOCUMENTS
                  </div>
                  <div className="col-span-2 p-3 text-sm text-gray-600">Commercial Invoice, Packing List, B/L, Certificate of Origin, Mill Test (3.1)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}