// constants/contact.ts
import { Box, Warehouse, Phone, Users } from 'lucide-react';
import { ContactFeatureGridItem } from '@/types';

export const CONTACT_FEATURE_GRID: ContactFeatureGridItem[] = [
  { titleKey: 'grid1_title', descKey: 'grid1_desc', icon: Box },
  { titleKey: 'grid2_title', descKey: 'grid2_desc', icon: Warehouse },
  { titleKey: 'grid3_title', descKey: 'grid3_desc', icon: Phone },
  { titleKey: 'grid4_title', descKey: 'grid4_desc', icon: Users },
] as const;