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
import Header from '@/components/header/Header';
import Actions from '@/components/header/Actions';

export default function AboutUsPage() {
  const { t, locale, changeLanguage } = useTranslation();
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* ================= HEADER ================= */}
      <Header t={t} locale={locale} changeLanguage={changeLanguage} />

      {/* ================= MAIN CONTENT ================= */}
      <main className="container mx-auto px-4 py-8">
        
        {/* ================= HERO ================= */}
        <div className="relative mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            ABOUT US
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A leading force in metal and ferrous product exports from Algeria to the world.
          </p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Consistent Quality</h3>
            <p className="text-sm text-gray-400">Our company consistent quality and professional facilities.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Certified Products</h3>
            <p className="text-sm text-gray-400">We indrustrie extensive utility and processing capabilities.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Company Industria</h3>
            <p className="text-sm text-gray-400">Our customely ocragnized scrap and answer aneloeorenee.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Global Footprint</h3>
            <p className="text-sm text-gray-400">Tritair international trade networks to major or port regions.</p>
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
              <h3 className="font-bold text-xl mb-2">Our Legacy</h3>
              <p className="text-sm text-gray-400 mb-4">
                A clean professional office, brown as a modern, professional facility or main office building.
              </p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Key Milestones: Est. early 2000s</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Core Experience: 20+ Years in Industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Key Markets: Established Global Reach</span>
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
              <h3 className="font-bold text-xl mb-2">Our Infrastructure</h3>
              <p className="text-sm text-gray-400 mb-4">
                Extensive facility and processing capabilities, with mass scrap organized hub and logistics.
              </p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Key Facilities: Massive Yard Space</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Modern Processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Integrated Logistics Center</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Multi-modal Transport</span>
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
              <h3 className="font-bold text-xl mb-2">Global Footprint</h3>
              <p className="text-sm text-gray-400 mb-4">
                International trade networks in international export, nations, and ports to major regions.
              </p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Key Markets Served: Algeria, Spain, India...</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Annual Volumes: 2000 volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Multi-modal routes, multiple routes, more</span>
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
            DOWNLOAD CORPORATE BROCHURE (PDF)
          </Link>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Box className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs">PACKAGING</h4>
            <p className="text-[10px] text-gray-400">Bulk / Loose<br/>Containers / Loose</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Warehouse className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs">MONTHLY<br/>CAPACITY</h4>
            <p className="text-[10px] text-gray-400">100,000+ Tons<br/>Consistent Supply</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs">PHONEUS</h4>
            <p className="text-[10px] text-gray-400">+213 55 12 34 56 78</p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs">SNAPPING</h4>
            <p className="text-[10px] text-gray-400">International<br/>Networks</p>
          </div>
        </div>

        {/* ================= CTA BANNER ================= */}
        <div className="bg-[#1e293b] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Looking for a reliable long-term supply partner?</h3>
              <p className="text-sm text-gray-400">Contact us today and let's build a strong partnership together.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              PARTNER WITH US
            </Link>
            <Link href="#" className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <MessageCircle className="w-4 h-4" /> CONTACT OUR TEAM
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}