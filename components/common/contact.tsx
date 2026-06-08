'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Calendar,
  Clock,
  Globe,
  Building2,
  Star,
  ChevronRight,
  Download,
  Warehouse,
  Box,
  Users
} from "lucide-react";
import Header from '@/components/header/Header';
import Actions from '@/components/header/Actions';

export default function ContactPage() {
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
            CONTACT
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next metal supply requirement. We are here to help.
          </p>
        </div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Carte 1 : Informations globales */}
          <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl font-bold">GLOBAL CONTACT INFO</h2>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Direct line for inquiries, partnerships, and technical questions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                <span className="text-sm font-bold text-gray-400">EMAIL (INQUIRIES)</span>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Mail className="w-4 h-4 text-orange-500" />
                  contact@algeriametal.dz
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                <span className="text-sm font-bold text-gray-400">PHONE (HEADQUARTERS)</span>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Phone className="w-4 h-4 text-orange-500" />
                  +213 (0) 23 456 789
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                <span className="text-sm font-bold text-gray-400">EMERGENCY / AFTER HOURS</span>
                <div className="flex items-center gap-2 text-sm text-white">
                  <Star className="w-4 h-4 text-orange-500" />
                  +213 (0) 770 123 456
                </div>
              </div>
              <div className="flex items-start justify-between pt-2">
                <span className="text-sm font-bold text-gray-400">ADDRESS</span>
                <div className="flex items-start gap-2 text-sm text-white text-right">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span>
                    12, Rue des Frères Bouadou,<br />
                    Bir Mourad Raïs,<br />
                    Algiers, Algeria
                  </span>
                </div>
              </div>
            </div>

            <Link 
              href="#"
              className="mt-6 block w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md font-bold text-sm tracking-wide transition text-center"
            >
              <Calendar className="w-4 h-4 inline-block mr-2" />
              SCHEDULE A CALL WITH AN EXPERT
            </Link>
          </div>

          {/* Carte 2 : Visiter notre siège */}
          <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-orange-500" />
              <h2 className="text-2xl font-bold">VISIT OUR HEADQUARTERS</h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Schedule a meeting with our technical team. See our processing and logistics capabilities.
            </p>

            <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" 
                alt="Headquarters" 
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-[#0f172a]/80 px-2 py-1 text-[10px] text-white">
                ALGERIA METAL - HEADQUARTERS
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">OFFICE HOURS</span>
                <span className="text-white">Sunday - Thursday: 8:30 AM - 5:30 PM (CET)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">CLOSED</span>
                <span className="text-white">Fridays and Public Holidays</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">VISITOR PARKING</span>
                <span className="text-white">Available on-site</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-400">ACCESSIBILITY</span>
                <span className="text-white">Full ADA compliance.</span>
              </div>
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
            DOWNLOAD VISITOR GUIDE & MAP (PDF)
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
              <h3 className="text-white font-bold text-lg">Need an immediate answer to your technical query?</h3>
              <p className="text-sm text-gray-400">Our technical support team is ready to assist you.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <MessageCircle className="w-4 h-4" /> LIVE CHAT ON WHATSAPP
            </Link>
            <Link href="#" className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              CONTACT OUR TECHNICAL SUPPORT TEAM
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}