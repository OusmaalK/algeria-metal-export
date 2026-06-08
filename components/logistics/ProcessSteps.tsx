'use client';

import { FileText, CheckCircle2, FileCheck, Package, Ship } from 'lucide-react';

interface ProcessStepsProps {
  t: any;
  locale: string;
}

// ✅ Composant pour l'icône de l'étape (Reste inchangé)
const StepIcon = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <FileText className="w-6 h-6" />;
    case 1:
      return <CheckCircle2 className="w-6 h-6" />;
    case 2:
      return <FileCheck className="w-6 h-6" />;
    case 3:
      return <Package className="w-6 h-6" />;
    case 4:
      return <Ship className="w-6 h-6" />;
    default:
      return null;
  }
};

export default function ProcessSteps({ t, locale }: ProcessStepsProps) {
  const isRTL = locale === 'ar';

  return (
    <div className="mt-12">
      {/* Titre aligné selon la langue */}
      <h3 className={`font-bold text-sm text-[#0f172a] mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t?.logistics?.process?.title}
      </h3>
      
      <div className="relative rounded-xl overflow-hidden">
        {/* Fond dégradé animé */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-50 bg-[length:200%_100%] animate-gradientMove opacity-60"></div>
        
        {/* Grille des étapes */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-6">
          {t?.logistics?.process?.steps?.map((step: any, index: number) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200 hover:bg-orange-50 hover:border-orange-300 hover:shadow-md transition-all duration-300 hover-shake ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              {/* Conteneur d'icône */}
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3 text-orange-500">
                <StepIcon index={index} />
              </div>
              
              {/* Titre & Description de l'étape */}
              <h4 className="font-bold text-xs mb-1 text-[#0f172a] text-center w-full">
                {step?.title}
              </h4>
              <p className="text-[10px] text-gray-500 text-center w-full">
                {step?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}