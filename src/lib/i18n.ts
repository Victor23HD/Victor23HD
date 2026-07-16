export const locales = ["pt", "en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "/" : `${normalized}/`}`;
}

export function alternateLocales(current: Locale): Locale[] {
  return locales.filter((locale) => locale !== current);
}

export const localeLabels: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  de: "Deutsch",
  fr: "Français",
};

export const localeHtmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  de: "de",
  fr: "fr",
};
