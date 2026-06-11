// types/index.ts

// --- Ancienne interface Product (conservée pour compatibilité) ---
export interface LegacyProduct {
  name: string;
  description: string;
  specs: string[];
  icon?: string;
}

// --- Statistiques ---
export interface Stat {
  number: string;
  label: string;
}

// --- Ports ---
export interface Port {
  name: string;
  location: string;
}

// --- Certifications ---
export interface Certification {
  name: string;
  logo?: string;
}

// --- Formulaire RFQ ---
export interface RFQFormData {
  product: string;
  quantity: string;
  incoterm: string;
  destination: string;
  country: string;
  frequency: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  file: File | null;
}

// --- Processus ---
export interface Process {
  step: string;
  title: string;
  description: string;
}

// --- Équipe ---
export interface TeamMember {
  nameKey: 'manager_name' | 'cmanager_name';
  roleKey: 'manager_role' | 'cmanager_role';
  initialsKey: 'manager_initials' | 'cmanager_initials';
  bioKey: 'manager_bio' | 'cmanager_bio';
  skillKeys: readonly ['skill_1', 'skill_2', 'skill_3', 'skill_4'] | readonly ['skill_5', 'skill_6', 'skill_7', 'skill_8'];
  email: string;
  phone: string;
}

// --- Hero ---
export interface HeroFeature {
  icon: any; // Lucide icon
  key: string;
  sub: string;
}

// --- Spécifications produit (nouvelle version) ---
export interface ProductSpecs {
  composition: string;
  size: string;
  thickness?: string;
  density: string;
  moisture?: string;
  packaging: string;
  origin: string;
  length?: string;
  condition?: string;
}

// --- Produit (nouvelle version pour la page produits) ---
export interface Product {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  specs: ProductSpecs;
}

export interface LogisticsStat {
  labelKey: string;
  value: string;
  icon: any;
}

export interface LogisticsPort {
  nameKey: string;
  detailKeys: string[];
  productsKey: string;
  image: string;
}

export interface LogisticsMarket {
  regionKey: string;
  color: string;
  countries: string[];
}

export interface LogisticsStep {
  titleKey: string;
  descKey: string;
  icon: any;
}

export interface QualityCard {
  titleKey: string;
  descKey: string;
  icon: any;
  image: string;
  tableRows: QualityTableRow[];
}

export interface QualityTableRow {
  labelKey: string;
  valueKey: string;
}

export interface AboutFeature {
  titleKey: string;
  descKey: string;
}

export interface AboutCard {
  titleKey: string;
  descKey: string;
  image: string;
  items: AboutCardItem[];
}

export interface AboutCardItem {
  itemKey: string;
}

export interface AboutFeatureGridItem {
  titleKey: string;
  descKey: string;
  icon: any;
}

export interface ContactFeatureGridItem {
  titleKey: string;
  descKey: string;
  icon: any;
}

export interface RequestFeatureGridItem {
  titleKey: string;
  descKey: string;
  icon: any;
}

export interface RequestProductItem {
  key: string;
  labelKey: string;
  image: string;
}