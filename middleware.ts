// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr', 'ar'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // ✅ EXCLURE LES ASSETS STATIQUES
  if (pathname.startsWith('/static/') || pathname.startsWith('/images/') || pathname.startsWith('/icons/')) {
    return NextResponse.next();
  }

  // ✅ REDIRECTION POUR LES DOUBLES LOCALES
  if (pathname.match(/^\/(en|fr|ar)\/(en|fr|ar)\//)) {
    const cleanPath = pathname.replace(/^\/(en|fr|ar)\//, '/');
    request.nextUrl.pathname = cleanPath;
    return NextResponse.redirect(request.nextUrl);
  }

  // Nettoyer les segments 'defined'
  if (pathname.includes('defined')) {
    const cleanPath = pathname.replace(/\/[a-z]+defined/g, '');
    request.nextUrl.pathname = cleanPath;
    return NextResponse.redirect(request.nextUrl);
  }

  // Vérifier si la pathname commence par une locale valide
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Rediriger vers la locale par défaut
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|icons/).*)',
  ],
};