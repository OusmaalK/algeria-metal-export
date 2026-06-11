// constants/hero.ts
import { ShieldCheck, Truck, Warehouse, Globe } from 'lucide-react';
import { HeroFeature } from '@/components/hero/types';

export const HERO_FEATURES: HeroFeature[] = [
  { icon: ShieldCheck, key: 'certified_quality', sub: 'ASTM / EN / ISO\n3.1 Certificate' },
  { icon: Truck, key: 'fast_shipping', sub: 'Mediterranean\nPorts' },
  { icon: Warehouse, key: 'large_capacity', sub: 'Consistent Supply\nBulk Orders' },
  { icon: Globe, key: 'global_reach', sub: 'Europe, MENA\nAsia & Africa' },
] as const;