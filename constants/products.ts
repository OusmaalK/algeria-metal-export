// constants/products.ts
import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "HMS 1 & 2",
    subtitle: "(80:20)",
    category: "ferrous",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    specs: {
      composition: "80% Steel / 20% Iron",
      size: "50x500 mm max",
      thickness: "6 mm min",
      density: "Min 1.2 t/m³",
      moisture: "2% max",
      packaging: "Bulk / Loose",
      origin: "Algeria"
    }
  },
  {
    id: 2,
    title: "Shredded Scrap",
    subtitle: "(SHEAR / SHREDDED)",
    category: "shredded",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=400&q=80",
    specs: {
      composition: "Shredded / Sheared Scrap",
      size: "50x50 mm max",
      thickness: "2 - 8 mm",
      density: "Min 1.1 t/m³",
      moisture: "2% max",
      packaging: "Bulk / Loose",
      origin: "Algeria"
    }
  },
  {
    id: 3,
    title: "Rebar Scrap",
    subtitle: "(STEEL BARS)",
    category: "steel",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80",
    specs: {
      composition: "Rebar / Steel Scrap",
      size: "8 mm - 32 mm",
      length: "1 m max",
      condition: "Clean / Rusty",
      density: "Min 1.3 t/m³",
      packaging: "Bulk / Loose",
      origin: "Algeria"
    }
  },
  {
    id: 4,
    title: "Cast Iron Scrap",
    subtitle: "(FOUNDRY)",
    category: "foundry",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=400&q=80",
    specs: {
      composition: "Cast Iron Scrap / Foundry Returns",
      size: "300 mm max",
      thickness: "50 mm min",
      condition: "Clean / Rusty",
      density: "Min 1.4 t/m³",
      packaging: "Bulk / Loose",
      origin: "Algeria"
    }
  }
] as const;