import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  isValidLocale,
  localeHtmlLang,
  localePath,
  locales,
  type Locale,
} from "@/lib/i18n";
import { getLocalizedContent } from "@/lib/content";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) return {};

  const content = getLocalizedContent(rawLocale);
  const languages = Object.fromEntries(
    locales.map((locale) => [localeHtmlLang[locale], localePath(locale)]),
  );

  return {
    title: `${content.profile.displayName} — ${content.profile.headline}`,
    description: content.profile.summary,
    alternates: {
      canonical: localePath(rawLocale),
      languages,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);

  return (
    <>
      <Header
        locale={rawLocale as Locale}
        ui={content.ui}
        github={content.profile.github}
      />
      <main className="flex-1">{children}</main>
      <Footer locale={rawLocale as Locale} ui={content.ui} />
    </>
  );
}
