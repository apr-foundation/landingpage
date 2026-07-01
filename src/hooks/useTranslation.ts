"use client";

import { useState, useEffect } from "react";
import { Locale } from "@/i18n/config";

// Cache untuk translations
const translationsCache = new Map<string, any>();

async function loadTranslations(locale: Locale, namespace: string = "home") {
  const cacheKey = `${locale}/${namespace}`;

  if (translationsCache.has(cacheKey)) {
    return translationsCache.get(cacheKey);
  }

  try {
    const translations = await import(
      `@/i18n/locales/${locale}/${namespace}.json`
    );
    translationsCache.set(cacheKey, translations.default);
    return translations.default;
  } catch (error) {
    console.error(
      `Failed to load translations for ${locale}/${namespace}:`,
      error
    );
    // Fallback ke bahasa Indonesia
    if (locale !== "id") {
      try {
        const fallback = await import(`@/i18n/locales/id/${namespace}.json`);
        translationsCache.set(cacheKey, fallback.default);
        return fallback.default;
      } catch (e) {
        return {};
      }
    }
    return {};
  }
}

export function useTranslation(locale: Locale, namespace: string = "home") {
  const [translations, setTranslations] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const data = await loadTranslations(locale, namespace);
        if (mounted) {
          setTranslations(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error loading translations:", error);
        if (mounted) {
          setTranslations({});
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [locale, namespace]);

  return {
    t: translations,
    loading,
  };
}
