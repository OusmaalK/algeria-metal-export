'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileText, 
  Award, 
  Phone, 
  MessageCircle,
  ChevronRight,
  Download,
  FileCheck,
  Globe,
  FlaskRound,
  BookOpen,
  Users,
  TestTube,
  Anchor,
  Clock,
  Box,
  CreditCard,
  Ship
} from "lucide-react";

export default function QualityCertificationPage() {
  const { t, locale } = useTranslation();
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
                {t.quality_page.title}
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                {t.quality_page.hero_subtitle}
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
                <div className="w-10 h-10 mb-2">
                  <ShieldCheck className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm whitespace-pre-line">
                  {t.quality_page.certified_quality}
                </h4>
                <p className="text-[10px] text-gray-400 whitespace-pre-line">
                  {t.quality_page.certified_desc}
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
                <div className="w-10 h-10 mb-2">
                  <FileCheck className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm whitespace-pre-line">
                  {t.quality_page.traceable_documents}
                </h4>
                <p className="text-[10px] text-gray-400 whitespace-pre-line">
                  {t.quality_page.traceable_desc}
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
                <div className="w-10 h-10 mb-2">
                  <Globe className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm whitespace-pre-line">
                  {t.quality_page.global_standards}
                </h4>
                <p className="text-[10px] text-gray-400 whitespace-pre-line">
                  {t.quality_page.global_desc}
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
                <div className="w-10 h-10 mb-2">
                  <Users className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm whitespace-pre-line">
                  {t.quality_page.third_party}
                </h4>
                <p className="text-[10px] text-gray-400 whitespace-pre-line">
                  {t.quality_page.third_party_desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1 - Chemical & Mechanical Compliance */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 text-orange-500">
                  <FlaskRound className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-bold whitespace-pre-line">
                  {t.quality_page.card1_title}
                </h2>
              </div>
              <div className="relative h-48 bg-gray-800 mt-4">
                <Image 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80" 
                  alt="Laboratory" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                {t.quality_page.card1_title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {t.quality_page.card1_desc}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table1.parameter}</span>
                  <span className="text-white">{t.quality_page.table1.guarantee}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table1.traceability}</span>
                  <span className="text-white">{t.quality_page.table1.traceability_val}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table1.steel_grade}</span>
                  <span className="text-white">{t.quality_page.table1.steel_grade_val}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table1.radioactivity}</span>
                  <span className="text-white">{t.quality_page.table1.radioactivity_val}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - International Standards */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 text-orange-500">
                  <Award className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-bold whitespace-pre-line">
                  {t.quality_page.card2_title}
                </h2>
              </div>
              <div className="relative h-48 bg-gray-800 mt-4">
                <Image 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
                  alt="Certificates" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                {t.quality_page.card2_title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {t.quality_page.card2_desc}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table2.region}</span>
                  <span className="text-white">{t.quality_page.table2.standard}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table2.europe}</span>
                  <span className="text-white">{t.quality_page.table2.europe_val}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table2.usa}</span>
                  <span className="text-white">{t.quality_page.table2.usa_val}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table2.global}</span>
                  <span className="text-white">{t.quality_page.table2.global_val}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Independent Inspection */}
          <div className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all duration-300">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 text-orange-500">
                  <FileText className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-bold whitespace-pre-line">
                  {t.quality_page.card3_title}
                </h2>
              </div>
              <div className="relative h-48 bg-gray-800 mt-4">
                <Image 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80" 
                  alt="Inspection" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                {t.quality_page.card3_title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {t.quality_page.card3_desc}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table3.agency}</span>
                  <span className="text-white">{t.quality_page.table3.inspection}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table3.sgs}</span>
                  <span className="text-white">{t.quality_page.table3.sgs_val}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table3.cotecna}</span>
                  <span className="text-white">{t.quality_page.table3.cotecna_val}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">{t.quality_page.table3.documentation}</span>
                  <span className="text-white">{t.quality_page.table3.documentation_val}</span>
                </div>
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
            {t.quality_page.download_btn}
          </Link>
        </div>

        {/* ================= CTA BANNER ================= */}
        <div className="bg-[#1e293b] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                {t.quality_page.cta_title}
              </h3>
              <p className="text-sm text-gray-400">
                {t.quality_page.cta_subtitle}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <FileText className="w-4 h-4" /> {t.quality_page.cta_request}
            </Link>
            <Link href="#" className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <MessageCircle className="w-4 h-4" /> {t.quality_page.cta_whatsapp}
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}