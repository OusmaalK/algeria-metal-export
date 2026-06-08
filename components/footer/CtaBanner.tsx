'use client';

interface CtaBannerProps {
  t: any;
  locale: string;
}

export default function CtaBanner({ t, locale }: CtaBannerProps) {
  const isRTL = locale === 'ar';

  return (
    <div className={`bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 ${isRTL ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
      <div>
        <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
          {t?.footer?.cta?.title || 'Ready to start your project?'}
        </h3>
        <p className="text-orange-100 text-sm max-w-xl">
          {t?.footer?.cta?.subtitle || 'Contact our team today for a personalized quotation.'}
        </p>
      </div>
      <button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-6 py-3 rounded-md text-sm transition-all shadow-md shrink-0">
        {t?.footer?.cta?.button || 'Get a Quote'}
      </button>
    </div>
  );
}