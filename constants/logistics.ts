// constants/logistics.ts
import { Ship, Warehouse, Globe, Clock, ShieldCheck, FileCheck, MessageCircle, FileText, Truck, Anchor, CreditCard, Box } from 'lucide-react';
import { LogisticsStat, LogisticsPort, LogisticsMarket, LogisticsStep } from '@/types';

export const LOGISTICS_STATS: LogisticsStat[] = [
  { labelKey: 'stat1', value: '3', icon: Ship },
  { labelKey: 'stat2', value: '300,000+', icon: Warehouse },
  { labelKey: 'stat3', value: '20+', icon: Globe },
  { labelKey: 'stat4', value: '3 – 6', icon: Clock },
  { labelKey: 'stat5', value: 'FLEXIBLE', icon: ShieldCheck },
  { labelKey: 'stat6', value: '100%', icon: FileCheck },
] as const;

export const LOGISTICS_PORTS: LogisticsPort[] = [
  {
    nameKey: 'port_skikda_name',
    detailKeys: ['port_skikda_detail1', 'port_skikda_detail2', 'port_skikda_detail3'],
    productsKey: 'port_skikda_products',
    image: 'https://i0.wp.com/www.24hdz.dz/wp-content/uploads/2022/02/1-600x340-1.jpg?w=600&ssl=1'
  },
  {
    nameKey: 'port_oran_name',
    detailKeys: ['port_oran_detail1', 'port_oran_detail2', 'port_oran_detail3'],
    productsKey: 'port_oran_products',
    image: 'https://www.elmoudjahid.com/storage/images/article/7a2b6fbd13685cebe3e57b856e2a8a49.jpg'
  },
  {
    nameKey: 'port_algiers_name',
    detailKeys: ['port_algiers_detail1', 'port_algiers_detail2', 'port_algiers_detail3'],
    productsKey: 'port_algiers_products',
    image: 'https://i0.wp.com/www.24hdz.dz/wp-content/uploads/2021/07/9aab79f6542280477a3fb621ac1af076_M.jpg?w=580&ssl=1'
  }
] as const;

export const LOGISTICS_MARKETS: LogisticsMarket[] = [
  { regionKey: 'market_europe', color: 'blue', countries: ['Italy', 'Spain', 'France', 'Belgium', 'Netherlands'] },
  { regionKey: 'market_middleeast', color: 'green', countries: ['Turkey', 'UAE', 'Saudi Arabia', 'Qatar', 'Oman'] },
  { regionKey: 'market_africa', color: 'orange', countries: ['Morocco', 'Tunisia', 'Libya', 'West Africa', 'East Africa'] },
  { regionKey: 'market_asia', color: 'purple', countries: ['India', 'Pakistan', 'Bangladesh', 'Vietnam'] },
] as const;

export const LOGISTICS_STEPS: LogisticsStep[] = [
  { titleKey: 'process_step1_title', descKey: 'process_step1_desc', icon: MessageCircle },
  { titleKey: 'process_step2_title', descKey: 'process_step2_desc', icon: FileText },
  { titleKey: 'process_step3_title', descKey: 'process_step3_desc', icon: ShieldCheck },
  { titleKey: 'process_step4_title', descKey: 'process_step4_desc', icon: Truck },
  { titleKey: 'process_step5_title', descKey: 'process_step5_desc', icon: Ship },
] as const;

export const SHIPPING_ITEMS = [
  { labelKey: 'ship_incoterms', valueKey: 'ship_incoterms_val', icon: Anchor },
  { labelKey: 'ship_payment', valueKey: 'ship_payment_val', icon: CreditCard },
  { labelKey: 'ship_loading', valueKey: 'ship_loading_val', icon: Clock },
  { labelKey: 'ship_freight', valueKey: 'ship_freight_val', icon: Ship },
  { labelKey: 'ship_packaging', valueKey: 'ship_packaging_val', icon: Box },
  { labelKey: 'ship_inspection', valueKey: 'ship_inspection_val', icon: ShieldCheck },
  { labelKey: 'ship_documents', valueKey: 'ship_documents_val', icon: FileText },
] as const;