// constants/request.ts
import { Box, Warehouse, Phone, Users } from 'lucide-react';
import { RequestFeatureGridItem, RequestProductItem } from '@/types';

export const REQUEST_FEATURE_GRID: RequestFeatureGridItem[] = [
  { titleKey: 'grid1_title', descKey: 'grid1_desc', icon: Box },
  { titleKey: 'grid2_title', descKey: 'grid2_desc', icon: Warehouse },
  { titleKey: 'grid3_title', descKey: 'grid3_desc', icon: Phone },
  { titleKey: 'grid4_title', descKey: 'grid4_desc', icon: Users },
] as const;

export const REQUEST_PRODUCTS: RequestProductItem[] = [
  { key: 'hms', labelKey: 'product_hms', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&q=80' },
  { key: 'shredded', labelKey: 'product_shredded', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=100&q=80' },
  { key: 'rebar', labelKey: 'product_rebar', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=100&q=80' },
  { key: 'castIron', labelKey: 'product_cast_iron', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=100&q=80' },
  { key: 'steelProducts', labelKey: 'product_steel', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=100&q=80' },
] as const;