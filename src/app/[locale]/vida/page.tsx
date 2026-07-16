import { notFound } from "next/navigation";
import { LifeSection } from "@/components/sections/LifeSection";
import { getLocalizedContent } from "@/lib/content";
import { isValidLocale, locales } from "@/lib/i18n";

interface LifePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LifePage({ params }: LifePageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);

  return <LifeSection locale={rawLocale} content={content.ui.life} />;
}
