'use client';

import Link from 'next/link';
import Logo from '@/components/common/Logo';
import CtaBanner from './CtaBanner';

// L'interface indispensable pour que TypeScript accepte les props
export interface FooterProps {
  t: any;
  locale: string;
}

export default function Footer({ t, locale }: FooterProps) {
  const isRTL = locale === 'ar';
  
  // Sécurité maximale : t?.nav protège du crash si le JSON est vide
  const links = [
    { text: t?.nav?.home || 'HOME', href: '#' },
    { text: t?.nav?.products || 'PRODUCTS', href: '#products' },
    { text: t?.nav?.logistics || 'LOGISTICS', href: '#logistics' },
    { text: t?.nav?.quality || 'QUALITY & CERTIFICATION', href: '#quality' },
    { text: t?.nav?.about || 'ABOUT US', href: '#about' },
    { text: t?.nav?.contact || 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* On transmet t et locale à CtaBanner */}
        <CtaBanner t={t} locale={locale} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 mt-12">
          {/* Bloc Logo */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <Logo width={150} height={40} />
            </div>
            <p className="text-xs mt-2 tracking-widest text-gray-500">EXPORT SOLUTIONS</p>
          </div>

          {/* Liens Rapides */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-bold mb-4">{t?.footer?.quick_links}</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-orange-500 transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos de Contact */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-bold mb-4">{t?.footer?.contact_info}</h4>
            <ul className="space-y-2 text-sm">
              <li className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-orange-500">✉</span> Email: info@algeriametal.com
              </li>
              <li className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-orange-500">✆</span> Phone: +213 55 12 34 56 78
              </li>
              <li className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-orange-500">📍</span> Address: Algiers, Algeria
              </li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-white font-bold mb-4">{t?.footer?.follow_us}</h4>
            <div className={`flex gap-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors">
                <span className="font-bold text-white text-sm">in</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors">
                <span className="font-bold text-white text-sm">☰</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Droits d'auteur */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>{t?.footer?.copyright}</p>
        </div>
      </div>
    </footer>
  );
}