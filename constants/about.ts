// constants/about.ts
import { Box, Warehouse, Phone, Users } from 'lucide-react';
import { AboutFeature, AboutCard, AboutFeatureGridItem } from '@/types';

export const ABOUT_FEATURES: AboutFeature[] = [
  { titleKey: 'feature1_title', descKey: 'feature1_desc' },
  { titleKey: 'feature2_title', descKey: 'feature2_desc' },
  { titleKey: 'feature3_title', descKey: 'feature3_desc' },
  { titleKey: 'feature4_title', descKey: 'feature4_desc' },
] as const;

export const ABOUT_CARDS: AboutCard[] = [
  {
    titleKey: 'card1_title',
    descKey: 'card1_desc',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
    items: [
      { itemKey: 'card1_item1' },
      { itemKey: 'card1_item2' },
      { itemKey: 'card1_item3' },
    ]
  },
  {
    titleKey: 'card2_title',
    descKey: 'card2_desc',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80',
    items: [
      { itemKey: 'card2_item1' },
      { itemKey: 'card2_item2' },
      { itemKey: 'card2_item3' },
      { itemKey: 'card2_item4' },
    ]
  },
  {
    titleKey: 'card3_title',
    descKey: 'card3_desc',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
    items: [
      { itemKey: 'card3_item1' },
      { itemKey: 'card3_item2' },
      { itemKey: 'card3_item3' },
    ]
  }
] as const;

export const ABOUT_FEATURE_GRID: AboutFeatureGridItem[] = [
  { titleKey: 'grid1_title', descKey: 'grid1_desc', icon: Box },
  { titleKey: 'grid2_title', descKey: 'grid2_desc', icon: Warehouse },
  { titleKey: 'grid3_title', descKey: 'grid3_desc', icon: Phone },
  { titleKey: 'grid4_title', descKey: 'grid4_desc', icon: Users },
] as const;