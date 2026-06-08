'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  FileCheck, 
  Warehouse, 
  Truck, 
  Box, 
  Phone, 
  MessageCircle,
  ChevronRight,
  Download,
  Grid,
  Layers,
  Package,
  Recycle,
  FileText,
  CreditCard
} from "lucide-react";
import Header from '@/components/header/Header';
import Actions from '@/components/header/Actions';

export default function ProductsPage() {
  const { t, locale, changeLanguage } = useTranslation();
  const isRTL = locale === 'ar';
  const [activeFilter, setActiveFilter] = useState('all');

  // ✅ Vérification de sécurité
  if (!t.products_page) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Erreur de traduction</h1>
          <p className="text-gray-400">La clé 'products_page' est manquante dans les fichiers de traduction.</p>
          <p className="text-sm text-gray-500">Vérifiez le fichier : data/translations/{locale}.ts</p>
        </div>
      </div>
    );
  }

  // Données des produits avec catégories
  const products = [
    {
      id: 1,
      title: "HMS 1 & 2",
      subtitle: "(80:20)",
      category: "ferrous",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      specs: {
        composition: "80% Steel / 20% Iron",
        size: "50x500 mm max",
        thickness: "6 mm min",
        density: "Min 1.2 t/m³",
        moisture: "2% max",
        packaging: "Bulk / Loose",
        origin: "Algeria"
      }
    },
    {
      id: 2,
      title: "Shredded Scrap",
      subtitle: "(SHEAR / SHREDDED)",
      category: "shredded",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80",
      specs: {
        composition: "Shredded / Sheared Scrap",
        size: "50x50 mm max",
        thickness: "2 - 8 mm",
        density: "Min 1.1 t/m³",
        moisture: "2% max",
        packaging: "Bulk / Loose",
        origin: "Algeria"
      }
    },
    {
      id: 3,
      title: "Rebar Scrap",
      subtitle: "(STEEL BARS)",
      category: "steel",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80",
      specs: {
        composition: "Rebar / Steel Scrap",
        size: "8 mm - 32 mm",
        length: "1 m max",
        condition: "Clean / Rusty",
        density: "Min 1.3 t/m³",
        packaging: "Bulk / Loose",
        origin: "Algeria"
      }
    },
    {
      id: 4,
      title: "Cast Iron Scrap",
      subtitle: "(FOUNDRY)",
      category: "foundry",
      image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=400&q=80",
      specs: {
        composition: "Cast Iron Scrap / Foundry Returns",
        size: "300 mm max",
        thickness: "50 mm min",
        condition: "Clean / Rusty",
        density: "Min 1.4 t/m³",
        packaging: "Bulk / Loose",
        origin: "Algeria"
      }
    }
  ];

  // Filtrer les produits
  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  // Boutons de filtre
  const filterButtons = [
    { key: 'all', label: t.products_page.all_products, icon: Grid },
    { key: 'ferrous', label: t.products_page.ferrous_scrap, icon: Layers },
    { key: 'non_ferrous', label: t.products_page.non_ferrous_scrap, icon: Package },
    { key: 'shredded', label: t.products_page.shredded_scrap, icon: Recycle },
    { key: 'foundry', label: t.products_page.foundry_scrap, icon: Box },
    { key: 'steel', label: t.products_page.steel_products, icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* ================= HEADER ================= */}
      <Header t={t} locale={locale} changeLanguage={changeLanguage} />

      {/* ================= MAIN CONTENT ================= */}
      <main className="container mx-auto px-4 py-8">
        
        {/* ================= PRODUCTS HERO ================= */}
        <div className="relative mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Titre et description */}
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t.products_page.title}
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                {t.products_page.hero_subtitle}
              </p>
            </div>

            {/* Features Icons */}
            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-2">
                  <ShieldCheck className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="font-bold text-sm whitespace-pre-line">
                  {t.products_page.consistent_quality}
                </h3>
                <p className="text-[10px] text-gray-400 whitespace-pre-line">
                  {t.products_page.consistent_desc}
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-2">
                  <FileCheck className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="font-bold text-sm whitespace-pre-line">
                  {t.products_page.certified_products}
                </h3>
                <p className="text-[10px] text-gray-400 whitespace-pre-line">
                  {t.products_page.certified_desc}
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-2">
                  <Warehouse className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="font-bold text-sm whitespace-pre-line">
                  {t.products_page.large_capacity}
                </h3>
                <p className="text-[10px] text-gray-400 whitespace-pre-line">
                  {t.products_page.large_desc}
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-2">
                  <Truck className="w-12 h-12 text-orange-500" />
                </div>
                <h3 className="font-bold text-sm whitespace-pre-line">
                  {t.products_page.customized_solutions}
                </h3>
                <p className="text-[10px] text-gray-400 whitespace-pre-line">
                  {t.products_page.customized_desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FILTERS & ACTIONS ================= */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveFilter(btn.key)}
              className={`px-4 py-2 rounded text-sm font-medium transition flex items-center gap-2 ${
                activeFilter === btn.key
                  ? 'bg-orange-500 text-white'
                  : 'border border-gray-600 hover:border-white text-gray-300 hover:text-white'
              }`}
            >
              <btn.icon className="w-4 h-4" />
              {btn.label}
            </button>
          ))}
          <button 
            className="border border-gray-600 hover:border-white px-4 py-2 rounded text-sm font-medium text-gray-300 hover:text-white transition flex items-center gap-2 ml-auto"
          >
            <Download className="w-4 h-4" />
            {t.products_page.download_catalogue}
          </button>
        </div>

        {/* ================= PRODUCTS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-[#1e293b] rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition">
              <div className="aspect-[4/3] bg-gray-800 relative">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">
                  {product.title} <span className="text-orange-500 font-normal">{product.subtitle}</span>
                </h3>
                <p className="text-sm text-gray-300 mb-3">{product.specs.composition}</p>
                
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>{t.products_page.size}</span>
                    <span className="text-gray-300">{product.specs.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.products_page.thickness}</span>
                    <span className="text-gray-300">{product.specs.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.products_page.density}</span>
                    <span className="text-gray-300">{product.specs.density}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.products_page.moisture}</span>
                    <span className="text-gray-300">{product.specs.moisture || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.products_page.packaging}</span>
                    <span className="text-gray-300">{product.specs.packaging}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.products_page.origin}</span>
                    <span className="text-gray-300">{product.specs.origin}</span>
                  </div>
                </div>

                <Link 
                  href="#"
                  className="mt-4 block w-full border border-orange-500/50 hover:border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 px-4 py-2 rounded text-xs font-bold text-center transition"
                >
                  {t.products_page.view_specs}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Box className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">
              {t.products_page.packaging_options?.title || "PACKAGING\nOPTIONS"}
            </h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">
              {t.products_page.packaging_options?.desc || "Bulk / Loose\nContainers / Loose"}
            </p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <Warehouse className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">
              {t.products_page.monthly_capacity?.title || "MONTHLY\nCAPACITY"}
            </h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">
              {t.products_page.monthly_capacity?.desc || "100,000+ Tons\nConsistent Supply"}
            </p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <ShieldCheck className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">
              {t.products_page.quality_standard?.title || "QUALITY\nSTANDARD"}
            </h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">
              {t.products_page.quality_standard?.desc || "ASTM / EN / ISO\nCertified Products"}
            </p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <FileCheck className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">
              {t.products_page.inspection?.title || "INSPECTION"}
            </h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">
              {t.products_page.inspection?.desc || "SGS / BV / TUV\nThird Party Inspection"}
            </p>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-lg border border-gray-800 flex flex-col items-center text-center">
            <CreditCard className="w-8 h-8 text-orange-500 mb-2" />
            <h4 className="font-bold text-xs whitespace-pre-line">
              {t.products_page.payment_terms?.title || "PAYMENT\nTERMS"}
            </h4>
            <p className="text-[10px] text-gray-400 whitespace-pre-line">
              {t.products_page.payment_terms?.desc || "T/T / L/C\nFlexible Terms"}
            </p>
          </div>
        </div>

        {/* ================= CTA BANNER ================= */}
        <div className="bg-[#1e293b] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                {t.products_page.cta?.title || "Ready to get a quote for your required product?"}
              </h3>
              <p className="text-sm text-gray-400">
                {t.products_page.cta?.subtitle || "Send us your requirements and receive a competitive offer within 24 hours."}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <ChevronRight className="w-4 h-4" /> {t.products_page.cta?.request || "REQUEST QUOTATION (RFQ)"}
            </Link>
            <Link href="#" className="border border-gray-600 hover:border-white text-white px-6 py-2 rounded text-sm font-medium flex items-center gap-2 transition">
              <MessageCircle className="w-4 h-4" /> {t.products_page.cta?.whatsapp || "CHAT ON WHATSAPP"}
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}