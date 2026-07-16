import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { isValidLocale, locales } from "@/lib/i18n";
import { getLocalizedContent } from "@/lib/content";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);

  return (
    <>
      <Hero locale={rawLocale} profile={content.profile} ui={content.ui} />
      <AboutPreview locale={rawLocale} profile={content.profile} ui={content.ui} />
      <TestimonialsSection
        title={content.ui.testimonials.title}
        viewLinkedInLabel={content.ui.testimonials.viewLinkedIn}
        items={content.testimonials}
      />
    </>
  );
}
