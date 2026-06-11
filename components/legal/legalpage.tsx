// components/legal/legalpage.tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function LegalPage() {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';

  console.log('📍 Locale dans LegalPage:', locale);

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* ✅ HEADER SUPPRIMÉ */}
      
      <main className="container mx-auto px-6 py-12">
        <h1 className={`text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4 ${isRTL ? 'border-l-0 border-r-4 pr-4' : ''}`}>
          {t?.legal?.title || 'Mentions Légales'}
        </h1>

        <div className="bg-[#1e293b] rounded-lg p-6 border border-gray-700 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dénomination */}
            <div>
              <span className="text-orange-500 font-bold">{t?.legal?.company_name_label || 'Dénomination :'}</span>
              <p>{t?.legal?.company_name || 'Shlang Metal'}</p>
            </div>

            {/* Forme juridique */}
            <div>
              <span className="text-orange-500 font-bold">{t?.legal?.legal_form_label || 'Forme juridique :'}</span>
              <p>{t?.legal?.legal_form || 'SARL'}</p>
            </div>

            {/* Adresse */}
            <div className="md:col-span-2">
              <span className="text-orange-500 font-bold">{t?.legal?.address_label || 'Adresse :'}</span>
              <p>{t?.legal?.address || 'Hai Baba Ali, Section 09, Groupe de propriété n° 67, Rez-de-chaussée, Commune de Bir Touta'}</p>
            </div>

            {/* Lieu */}
            <div>
              <span className="text-orange-500 font-bold">{t?.legal?.location_label || 'Lieu :'}</span>
              <p>{t?.legal?.location || 'Alger'}</p>
            </div>

            {/* Capital */}
            <div>
              <span className="text-orange-500 font-bold">{t?.legal?.capital_label || 'Capital social :'}</span>
              <p>{t?.legal?.capital || '1 200 000,00 DA'}</p>
            </div>

            {/* Début d'activité */}
            <div>
              <span className="text-orange-500 font-bold">{t?.legal?.start_date_label || 'Début d\'activité :'}</span>
              <p>{t?.legal?.start_date || '04/05/2026'}</p>
            </div>

            {/* Base commerciale */}
            <div>
              <span className="text-orange-500 font-bold">{t?.legal?.commercial_base_label || 'Base commerciale :'}</span>
              <p>{t?.legal?.commercial_base || 'Création'}</p>
            </div>

            {/* Local commercial */}
            <div className="md:col-span-2">
              <span className="text-orange-500 font-bold">{t?.legal?.premises_label || 'Local commercial :'}</span>
              <p>{t?.legal?.premises || 'Équipé/Préparé (en bon état)'}</p>
            </div>

            {/* Numéro d'immatriculation */}
            <div className="md:col-span-2">
              <span className="text-orange-500 font-bold">{t?.legal?.registration_number_label || 'Numéro d\'immatriculation :'}</span>
              <p>{t?.legal?.registration_number || '26 B 1205761 - 16 / 00'}</p>
            </div>

            {/* Date d'immatriculation */}
            <div className="md:col-span-2">
              <span className="text-orange-500 font-bold">{t?.legal?.registration_date_label || 'Date d\'immatriculation :'}</span>
              <p>{t?.legal?.registration_date || '04/05/2026'}</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}