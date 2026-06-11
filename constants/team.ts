// constants/team.ts
import { ShieldCheck, Award, Users, Leaf, Target, Globe } from 'lucide-react';

export const TEAM_MEMBERS = [
  {
    nameKey: 'manager_name',
    roleKey: 'manager_role',
    initialsKey: 'manager_initials',
    bioKey: 'manager_bio',
    skillKeys: ['skill_1', 'skill_2', 'skill_3', 'skill_4'] as const,
    email: 'boulaioune_abdelkader@shlang.dz',
    phone: '+213 770 684 184',
  },
  {
    nameKey: 'cmanager_name',
    roleKey: 'cmanager_role',
    initialsKey: 'cmanager_initials',
    bioKey: 'cmanager_bio',
    skillKeys: ['skill_5', 'skill_6', 'skill_7', 'skill_8'] as const,
    email: 'akrour_mansour@shlang.dz',
    phone: '+213 770 684 195',
  },
] as const;

export const ETHICS_ITEMS = [
  { icon: ShieldCheck, titleKey: 'ethics_transparency', descKey: 'ethics_transparency_desc', defaultTitle: 'Transparence' },
  { icon: Award, titleKey: 'ethics_compliance', descKey: 'ethics_compliance_desc', defaultTitle: 'Conformité' },
  { icon: Users, titleKey: 'ethics_ethics', descKey: 'ethics_ethics_desc', defaultTitle: 'Éthique' },
  { icon: Leaf, titleKey: 'ethics_responsibility', descKey: 'ethics_responsibility_desc', defaultTitle: 'Responsabilité' },
] as const;

export const VALUE_ITEMS = [
  { icon: ShieldCheck, titleKey: 'value_integrity', descKey: 'value_integrity_desc', defaultTitle: 'Intégrité' },
  { icon: Target, titleKey: 'value_expertise', descKey: 'value_expertise_desc', defaultTitle: 'Expertise' },
  { icon: Globe, titleKey: 'value_partnership', descKey: 'value_partnership_desc', defaultTitle: 'Partenariat' },
] as const;

export const STAT_ITEMS = [
  { icon: Award, statKey: 'stat_exp', value: '35+', defaultLabel: 'Expérience combinée (années)' },
  { icon: Globe, statKey: 'stat_ports', value: '3', defaultLabel: 'Ports opérés' },
  { icon: Users, statKey: 'stat_countries', value: '20+', defaultLabel: 'Pays desservis' },
  { icon: Target, statKey: 'stat_volume', value: '100k+', defaultLabel: 'Volume annuel (tonnes)' },
] as const;