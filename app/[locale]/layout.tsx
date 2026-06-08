import { Inter } from 'next/font/google';
import '../../styles/globals.css'; // Ajustez le chemin vers vos styles globaux si nécessaire

const inter = Inter({ subsets: ['latin'] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Optionnel mais fortement recommandé pour fixer les routes valides
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'ar' }
  ];
}

export default async function RootLocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  
  // Résolution propre de la promesse (Spécifique à Next.js 15)
  const { locale } = await params;
  
  // Gestion stricte de la direction
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}