import { notFound } from "next/navigation";
import { HomeVolunteering } from "@/components/sections/HomeVolunteering";
import { isValidLocale, locales } from "@/lib/i18n";
import { getLocalizedContent } from "@/lib/content";

interface VolunteeringPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function VolunteeringPage({ params }: VolunteeringPageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);

  return (
    <HomeVolunteering
      title={content.ui.volunteering.title}
      subtitle={content.ui.volunteering.subtitle}
      items={content.volunteering}
    />
  );
}
