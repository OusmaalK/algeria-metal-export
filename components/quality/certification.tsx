// components/quality/QualityPage.tsx
'use client';

import { memo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { QUALITY_CARDS } from '@/constants/quality';
import { QualityHero } from './QualityHero';
import { QualityCard } from './QualityCard';
import { QualityCta } from './QualityCta';

const QualityPage = memo(() => {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <QualityHero t={t} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {QUALITY_CARDS.map((card, index) => (
            <QualityCard key={index} t={t} card={card} index={index} />
          ))}
        </div>
        <QualityCta t={t} />
      </main>
    </div>
  );
});

QualityPage.displayName = 'QualityPage';

export default QualityPage;