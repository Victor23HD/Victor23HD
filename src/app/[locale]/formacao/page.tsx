import { notFound } from "next/navigation";
import { EducationJourney } from "@/components/sections/EducationJourney";
import { isValidLocale, locales } from "@/lib/i18n";
import { getLocalizedContent } from "@/lib/content";

interface EducationPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function EducationPage({ params }: EducationPageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);

  return (
    <EducationJourney
      locale={rawLocale}
      storyIntro={content.ui.education.storyIntro}
      storyQuote={content.ui.education.storyQuote}
      hoursLabel={content.ui.education.hoursLabel}
      items={content.education}
      cloudCertifications={{
        ...content.cloudCertifications,
        items: content.certifications,
      }}
    />
  );
}
