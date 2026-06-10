'use client';

interface CtaBannerProps {
  t: any;
  locale: string;
}

export default function CtaBanner({
  t,
  locale,
}: CtaBannerProps) {
  const isRTL = locale === 'ar';

  return (
    <div
      className={`
        bg-linear-to-r
        from-orange-500
        to-amber-600
        rounded-xl
        p-8
        shadow-xl

        flex
        flex-col
        lg:flex-row

        items-center
        justify-between

        gap-6

        ${isRTL ? 'lg:flex-row-reverse text-right' : 'text-left'}
      `}
    >
      <div className="flex-1">
        <h3 className="text-white font-bold text-2xl mb-2">
          {t?.footer?.cta?.title ||
            'Ready to start your project?'}
        </h3>

        <p className="text-orange-100">
          {t?.footer?.cta?.subtitle ||
            'Contact our team today for a personalized quotation.'}
        </p>
      </div>

      <button
        className="
          bg-white
          text-orange-600
          hover:bg-orange-50
          font-bold
          px-8
          py-3
          rounded-lg
          shadow-md
          transition-all
          shrink-0
        "
      >
        {t?.footer?.cta?.button || 'Get a Quote'}
      </button>
    </div>
  );
}