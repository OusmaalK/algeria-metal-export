// components/hero/types.ts
import { LucideIcon } from 'lucide-react';

export interface HeroFeature {
  icon: LucideIcon;
  key: string;
  sub: string;
}

export interface HeroBackgroundProps {
  src: string;
  alt: string;
}

export interface HeroContentProps {
  t: any;
  onOpenModal: () => void;
}

export interface HeroFeaturesProps {
  t: any;
}

export interface StrategicAdvantageProps {
  t: any;
}

export interface HeroProps {
  t: any;
  locale: string;
}