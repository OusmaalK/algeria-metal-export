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
import Header from '@/components/header/Header';
import Actions from '@/components/header/Actions';

export default function QualityCertificationPage() {
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
                QUALITY & CERTIFICATION
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                International standards, strict laboratory testing, and full traceability for every shipment.
              </p>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
                <div className="w-10 h-10 mb-2">
                  <ShieldCheck className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm">CERTIFIED<br/>QUALITY</h4>
                <p className="text-[10px] text-gray-400">ASTM / EN / ISO<br/>3.1 Certificate</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
                <div className="w-10 h-10 mb-2">
                  <FileCheck className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm">TRACEABLE<br/>DOCUMENTS</h4>
                <p className="text-[10px] text-gray-400">Mill Test Certificates<br/>Batch Tracking</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
                <div className="w-10 h-10 mb-2">
                  <Globe className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm">GLOBAL<br/>STANDARDS</h4>
                <p className="text-[10px] text-gray-400">EN 10025 / ASTM<br/>ISO 9001:2015</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-[#1e293b] rounded-lg border border-gray-800">
                <div className="w-10 h-10 mb-2">
                  <Users className="w-10 h-10 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm">THIRD PARTY<br/>INSPECTION</h4>
                <p className="text-[10px] text-gray-400">SGS / Bureau Veritas<br/>TUV</p>
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
                <h2 className="text-xl font-bold">Chemical & Mechanical<br/>Compliance</h2>
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
              <h3 className="font-bold text-lg mb-2">Chemical & Mechanical Compliance</h3>
              <p className="text-sm text-gray-400 mb-4">
                Every batch undergoes rigorous spectroscopic analysis and mechanical testing to ensure exact chemical composition and structural integrity.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Parameter</span>
                  <span className="text-white">Standard Guarantee</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Traceability</span>
                  <span className="text-white">Full Heat / Melt Number</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Steel Grade</span>
                  <span className="text-white">Compliant with EN / ASTM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Radioactivity</span>
                  <span className="text-white">100% Certified Free</span>
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
                <h2 className="text-xl font-bold">International<br/>Standards</h2>
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
              <h3 className="font-bold text-lg mb-2">International Standards</h3>
              <p className="text-sm text-gray-400 mb-4">
                Our export products strictly comply with global industrial requirements, enabling seamless integration into European, African, and global supply chains.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Region</span>
                  <span className="text-white">Applicable Standard</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Europe</span>
                  <span className="text-white">EN 10025 / EN 10080</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">USA</span>
                  <span className="text-white">ASTM Specifications</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Global</span>
                  <span className="text-white">ISO 9001:2015 Quality Mgmt</span>
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
                <h2 className="text-xl font-bold">Independent<br/>Inspection</h2>
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
              <h3 className="font-bold text-lg mb-2">Independent Inspection</h3>
              <p className="text-sm text-gray-400 mb-4">
                To ensure absolute transparency, we partner with world-renowned third-party inspection agencies prior to vessel loading.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Agency</span>
                  <span className="text-white">Inspection Type</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">SGS / Bureau Veritas</span>
                  <span className="text-white">Quantity & Quality Audit</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Cotecna / TUV</span>
                  <span className="text-white">Pre-Shipment Inspection</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Documentation</span>
                  <span className="text-white">Mill Test Certificate 3.1</span>
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
            DOWNLOAD SAMPLE MILL TEST CERTIFICATE (PDF)
          </Link>
        </div>

        {/* ================= CTA BANNER ================= */}
        <div className="bg-[#1e293b] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Need specific quality requirements or custom testing?</h3>
              <p className="text-sm text-gray-400">Our laboratory can match your exact industrial specifications.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <FileText className="w-4 h-4" /> REQUEST A QUALITY SPEC SHEET
            </Link>
            <Link href="#" className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <MessageCircle className="w-4 h-4" /> DISCUSS TECHNICAL TERMS ON WHATSAPP
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}