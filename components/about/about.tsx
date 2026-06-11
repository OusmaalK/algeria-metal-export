// components/about/AboutPage.tsx
'use client';

import { memo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ABOUT_CARDS } from '@/constants/about';
import { AboutHero } from './AboutHero';
import { AboutFeatures } from './AboutFeatures';
import { AboutCard } from './AboutCard';
import { AboutFeaturesGrid } from './AboutFeaturesGrid';
import { AboutCta } from './AboutCta';

const AboutPage = memo(() => {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <AboutHero t={t} />
        <AboutFeatures t={t} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {ABOUT_CARDS.map((card, index) => (
            <AboutCard key={index} t={t} card={card} />
          ))}
        </div>
        <AboutFeaturesGrid t={t} />
        <AboutCta t={t} />
      </main>
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;