// components/team/TeamPage.tsx
'use client';

import { memo, lazy, Suspense } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { TEAM_MEMBERS } from '@/constants/team';
import { TeamMemberCard } from './TeamMemberCard';
import { EthicsSection } from './EthicsSection';
import { ValuesSection } from './ValuesSection';
import { StatsSection } from './StatsSection';
import { CtaSection } from './CtaSection';

const Header = lazy(() => import('@/components/header/Header'));

const TeamPage = memo(() => {
  const { t, locale } = useTranslation();
  const isRTL = locale === 'ar';

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Suspense fallback={<div className="h-screen bg-[#0f172a]"></div>}>
        <Header t={t} locale={locale} />
      </Suspense>
      
      <main className="container mx-auto px-6 py-12 space-y-16">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t?.team?.hero_title || 'Notre Équipe de Direction'}
          </h1>
          <p className="text-lg text-gray-300">
            {t?.team?.hero_subtitle || 'Des experts engagés pour une métallurgie d\'avenir'}
          </p>
        </section>

        {/* Team Members */}
        {TEAM_MEMBERS.map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} t={t} isRTL={isRTL} />
        ))}

        <EthicsSection t={t} isRTL={isRTL} />
        <ValuesSection t={t} isRTL={isRTL} />
        <StatsSection t={t} isRTL={isRTL} />
        <CtaSection t={t} locale={locale} isRTL={isRTL} />

      </main>

    </div>
  );
});


export default TeamPage;