// components/logistics/LogisticsPage.tsx
'use client';

import { memo } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { LogisticsHero } from './LogisticsHero';
import { LogisticsStats } from './LogisticsStats';
import { LogisticsPorts } from './LogisticsPorts';
import { LogisticsMarkets } from './LogisticsMarkets';
import { LogisticsProcess } from './LogisticsProcess';
import { LogisticsShipping } from './LogisticsShipping';

const LogisticsPage = memo(() => {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <main className="container mx-auto px-4 py-8">
        <LogisticsHero t={t} />
        <LogisticsStats t={t} />
        <LogisticsPorts t={t} />
        <LogisticsMarkets t={t} locale={locale} />
        <div className="mb-12 bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <LogisticsProcess t={t} />
            <LogisticsShipping t={t} />
          </div>
        </div>
      </main>
    </div>
  );
});

LogisticsPage.displayName = 'LogisticsPage';

export default LogisticsPage; 