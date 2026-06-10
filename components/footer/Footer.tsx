'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import CtaBanner from './CtaBanner';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from 'lucide-react';

export interface FooterProps {
  t: any;
  locale: string;
}

export default function Footer({ t, locale }: FooterProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'fr';
  const isRTL = locale === 'ar';

  const align = isRTL ? 'items-end text-right' : 'items-start text-left';
  const rowDirection = isRTL ? 'flex-row-reverse' : 'flex-row';

  // Liens principaux (navigation)
  const mainLinks = [
    { text: t?.nav?.home || 'ACCUEIL', href: `/${currentLocale}` },
    { text: t?.nav?.products || 'PRODUITS', href: `/${currentLocale}/products` },
    { text: t?.nav?.logistics || 'LOGISTIQUE', href: `/${currentLocale}/logistics` },
    { text: t?.nav?.quality || 'QUALITÉ & CERTIFICATION', href: `/${currentLocale}/certification` },
    { text: t?.nav?.about || 'À PROPOS', href: `/${currentLocale}/about` },
    { text: t?.nav?.contact || 'CONTACT', href: `/${currentLocale}/contact` },
    { text: t?.nav?.team || 'ÉQUIPE', href: `/${currentLocale}/team` },
  ];

  // Liens légaux
  const legalLinks = [
    { text: t?.footer?.legal || 'MENTIONS LÉGALES', href: `/${currentLocale}/legal` },
    { text: t?.footer?.privacy || 'POLITIQUE DE CONFIDENTIALITÉ', href: `/${currentLocale}/privacy` },
    { text: t?.footer?.terms || 'CONDITIONS GÉNÉRALES', href: `/${currentLocale}/terms` },
    { text: t?.footer?.terms_of_use || 'CGU', href: `/${currentLocale}/termsofuse` },
    { text: t?.footer?.cookies || 'POLITIQUE DE COOKIES', href: `/${currentLocale}/cookies` },
    { text: t?.footer?.faq || 'FAQ', href: `/${currentLocale}/faq` },
  ];

  // URL de la carte Google Maps avec l'adresse précise
  const mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.166538!2d3.0588!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f2e3e5e5e5e5f%3A0x7e7e7e7e7e7e7e7e!2s12%20Rue%20des%20Fr%C3%A8res%20Bouadou%2C%20Bir%20Mourad%20Ra%C3%AFs%2C%20Alger%2C%20Algeria!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus';

  return (
    <footer
      dir={isRTL ? 'rtl' : 'ltr'}
      className="bg-[#0f172a] text-gray-300 pt-12 pb-6 border-t border-gray-800"
    >
      <div className="container mx-auto px-6">

        {/* CTA */}
        <CtaBanner t={t} locale={locale} />

        {/* SECTION PRINCIPALE */}
        <div className="py-12 border-b border-gray-800">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
              isRTL ? 'lg:[direction:rtl]' : ''
            }`}
          >

            {/* COLONNE 1 : LOGO + DESCRIPTION + RÉSEAUX */}
            <div className={`flex flex-col ${align}`}>
              <div className="mb-4">
                <Link href={`/${currentLocale}`}>
                  <Image
                    src="/icons/logo.png"
                    alt="Algeria Metal Export Logo"
                    width={180}
                    height={60}
                    priority
                    className="object-contain h-15 w-auto"
                  />
                </Link>
              </div>
              <p className="text-sm text-gray-400 mb-4 max-w-xs">
                {t?.footer?.description ||
                  "Votre partenaire de confiance pour l'exportation de ferraille premium depuis l'Algérie vers le monde."}
              </p>
              <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition-colors flex items-center justify-center text-white">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition-colors flex items-center justify-center text-white">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition-colors flex items-center justify-center text-white">
                  <Linkedin size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition-colors flex items-center justify-center text-white">
                  <Twitter size={18} />
                </Link>
              </div>
            </div>

            {/* COLONNE 2 : LIENS RAPIDES */}
            <div className={`flex flex-col ${align}`}>
              <h4 className="text-white font-bold text-lg mb-4 border-b border-orange-500 pb-2 inline-block">
                {t?.footer?.quick_links || 'Liens rapides'}
              </h4>
              <ul className="space-y-2 text-sm">
                {mainLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 ${
                        isRTL ? 'flex-row-reverse justify-end' : ''
                      }`}
                    >
                      <span className="text-orange-500 text-xs">
                        {isRTL ? '◂' : '▸'}
                      </span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLONNE 3 : CONTACT + CARTE */}
            <div className={`flex flex-col ${align}`}>
              <h4 className="text-white font-bold text-lg mb-4 border-b border-orange-500 pb-2 inline-block">
                {t?.footer?.contact_info || 'Contact'}
              </h4>
              <ul className="space-y-3 text-sm mb-4">
                <li className={`flex items-center gap-3 ${rowDirection}`}>
                  <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>contact@shlang.dz</span>
                </li>
                <li className={`flex items-center gap-3 ${rowDirection}`}>
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>+213 770 684 184</span>
                </li>
                <li className={`flex items-center gap-3 ${rowDirection}`}>
                  <MessageCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  <Link
                    href="https://wa.me/+213 775 22 18 69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li className={`flex items-center gap-3 ${rowDirection}`}>
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>{t?.footer?.address || 'Algiers, Algeria'}</span>
                </li>
              </ul>
              
              {/* CARTE DE LOCALISATION */}
              <div className="w-full h-40 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Algeria Metal - Location"
                  className="w-full h-full"
                />
              </div>
              <div className={`mt-2 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                <Link
                  href="https://www.google.com/maps/place/Algiers,+Algeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs text-orange-500 hover:text-orange-400 transition-colors inline-flex items-center gap-1 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  <span>📍</span>
                  {t?.footer?.view_map || 'Voir sur Google Maps'}
                </Link>
              </div>
            </div>

            {/* COLONNE 4 : LIENS LÉGAUX */}
            <div className={`flex flex-col ${align}`}>
              <h4 className="text-white font-bold text-lg mb-4 border-b border-orange-500 pb-2 inline-block">
                {t?.footer?.legal_links || 'Informations légales'}
              </h4>
              <ul className="space-y-2 text-sm">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 ${
                        isRTL ? 'flex-row-reverse justify-end' : ''
                      }`}
                    >
                      <span className="text-orange-500 text-xs">
                        {isRTL ? '◂' : '▸'}
                      </span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* PARTENAIRES - CENTRÉ */}
        <div className="py-6 border-b border-gray-800">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              <span className="text-gray-300">
                {t?.footer?.partners || 'Partenaires :'}
              </span>{' '}
              <span className="text-orange-500 font-semibold">BELLARA</span>,{' '}
              <span className="text-orange-500 font-semibold">TOSYALI</span>{' '}
              <span className="text-gray-400">
                {t?.footer?.partners_text || 'et autres partenaires du domaine métallurgique, nationaux et internationaux.'}
              </span>
            </p>
          </div>
        </div>

        {/* COPYRIGHT - CENTRÉ */}
        <div className="pt-6 text-center text-xs text-gray-500">
          <p>
            {t?.footer?.copyright ||
              '© 2026 Algeria Metal Export Solutions. Tous droits réservés.'}
          </p>
        </div>

      </div>
    </footer>
  );
}