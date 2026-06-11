// constants/quality.ts
import { FlaskRound, Award, FileText, ShieldCheck, FileCheck, Globe, Users } from 'lucide-react';
import { QualityCard } from '@/types';

export const QUALITY_CARDS: QualityCard[] = [
  {
    titleKey: 'card1_title',
    descKey: 'card1_desc',
    icon: FlaskRound,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
    tableRows: [
      { labelKey: 'table1.parameter', valueKey: 'table1.guarantee' },
      { labelKey: 'table1.traceability', valueKey: 'table1.traceability_val' },
      { labelKey: 'table1.steel_grade', valueKey: 'table1.steel_grade_val' },
      { labelKey: 'table1.radioactivity', valueKey: 'table1.radioactivity_val' },
    ]
  },
  {
    titleKey: 'card2_title',
    descKey: 'card2_desc',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80',
    tableRows: [
      { labelKey: 'table2.region', valueKey: 'table2.standard' },
      { labelKey: 'table2.europe', valueKey: 'table2.europe_val' },
      { labelKey: 'table2.usa', valueKey: 'table2.usa_val' },
      { labelKey: 'table2.global', valueKey: 'table2.global_val' },
    ]
  },
  {
    titleKey: 'card3_title',
    descKey: 'card3_desc',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80',
    tableRows: [
      { labelKey: 'table3.agency', valueKey: 'table3.inspection' },
      { labelKey: 'table3.sgs', valueKey: 'table3.sgs_val' },
      { labelKey: 'table3.cotecna', valueKey: 'table3.cotecna_val' },
      { labelKey: 'table3.documentation', valueKey: 'table3.documentation_val' },
    ]
  }
] as const;

export const QUALITY_HERO_ITEMS = [
  { icon: ShieldCheck, titleKey: 'certified_quality', descKey: 'certified_desc' },
  { icon: FileCheck, titleKey: 'traceable_documents', descKey: 'traceable_desc' },
  { icon: Globe, titleKey: 'global_standards', descKey: 'global_desc' },
  { icon: Users, titleKey: 'third_party', descKey: 'third_party_desc' },
] as const;