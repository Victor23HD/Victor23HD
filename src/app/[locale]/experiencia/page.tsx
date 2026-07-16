import { notFound } from "next/navigation";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { isValidLocale, locales } from "@/lib/i18n";
import { getLocalizedContent } from "@/lib/content";

interface ExperiencePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);

  return (
    <section className="section-shell">
      <ExperienceTimeline
        items={content.experience}
        storyIntro={content.ui.experience.storyIntro}
        storyQuote={content.ui.experience.storyQuote}
        careerStart={content.profile.careerStart}
        counterLabels={content.ui.experience.counter}
      />
    </section>
  );
}
