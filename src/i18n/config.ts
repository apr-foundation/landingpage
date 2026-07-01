export const i18nConfig = {
  defaultLocale: "id",
  locales: ["id", "en"],
  localePrefix: "as-needed",
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
