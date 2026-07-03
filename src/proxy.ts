import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18nConfig } from "./i18n/config";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname starts with any locale
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect to default locale
  const defaultLocale = i18nConfig.defaultLocale;
  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip internal paths
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets|icons).*)",
  ],
};
