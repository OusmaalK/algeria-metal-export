// components/products/types.ts
import { LucideIcon } from 'lucide-react';

export interface FilterButton {
  key: string;
  label: string;
  icon: LucideIcon;
}

export interface ProductsHeroProps {
  t: any;
}

export interface ProductsFiltersProps {
  t: any;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export interface ProductsGridProps {
  t: any;
  products: any[];
}

export interface ProductsGridItemProps {
  t: any;
  product: any;
}

export interface ProductsFeaturesProps {
  t: any;
}

export interface ProductsCtaProps {
  t: any;
}