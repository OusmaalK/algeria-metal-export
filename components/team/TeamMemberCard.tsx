// components/team/TeamMemberCard.tsx
'use client';

import { memo } from 'react';
import { Mail, Phone } from 'lucide-react';
import type { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  t: any;
  isRTL: boolean;
}

export const TeamMemberCard = memo(({ member, index, t, isRTL }: TeamMemberCardProps) => {
  return (
    <section className="bg-[#1e293b] rounded-2xl p-6 md:p-8 border border-gray-700 shadow-lg hover:border-orange-500 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        
        {/* Avatar */}
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0">
          <div className="w-full h-full rounded-full bg-linear-to-br from-orange-500 to-amber-600 p-1">
            <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center text-2xl font-bold text-white">
              {t?.team?.[member.initialsKey] || (index === 0 ? 'BA' : 'AM')}
            </div>
          </div>
        </div>
        
        {/* Informations */}
        <div className={`flex-1 space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-bold">
              {t?.team?.[member.nameKey] || (index === 0 ? 'Boulaioune Abdelkader' : 'Akrour Mansour')}
            </h2>
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {t?.team?.[member.roleKey] || (index === 0 ? 'Gérant & Fondateur' : 'Cogérant & Directeur des Opérations')}
            </span>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            {t?.team?.[member.bioKey] || 'Bio non disponible'}
          </p>

          {/* Compétences */}
          <div className="flex flex-wrap gap-2 mt-2">
            {member.skillKeys.map((skillKey) => (
              <span key={skillKey} className="bg-gray-800 text-xs text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                {t?.team?.[skillKey] || 'Compétence'}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-2 mt-4 text-sm">
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Mail className="w-4 h-4 text-orange-500" />
              <span>{member.email}</span>
            </div>
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Phone className="w-4 h-4 text-orange-500" />
              <span>{member.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';