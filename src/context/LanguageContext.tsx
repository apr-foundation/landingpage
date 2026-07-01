"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, i18nConfig } from "@/i18n/config";
import { usePathname, useRouter } from "next/navigation";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // Get current locale from pathname
  const getLocaleFromPath = (path: string): Locale => {
    const segments = path.split("/");
    const firstSegment = segments[1];
    if (firstSegment && i18nConfig.locales.includes(firstSegment as Locale)) {
      return firstSegment as Locale;
    }
    return i18nConfig.defaultLocale;
  };

  const [locale, setLocaleState] = useState<Locale>(i18nConfig.defaultLocale);

  useEffect(() => {
    const currentLocale = getLocaleFromPath(pathname);
    setLocaleState(currentLocale);
  }, [pathname]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);

    // Update URL
    const segments = pathname.split("/");
    const firstSegment = segments[1];

    let newPath = "";
    if (firstSegment && i18nConfig.locales.includes(firstSegment as Locale)) {
      // Replace existing locale
      segments[1] = newLocale;
      newPath = segments.join("/") || "/";
    } else {
      // Add locale
      newPath = `/${newLocale}${pathname}`;
    }

    router.push(newPath);
  };

  const toggleLanguage = () => {
    const newLocale = locale === "id" ? "en" : "id";
    setLocale(newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
