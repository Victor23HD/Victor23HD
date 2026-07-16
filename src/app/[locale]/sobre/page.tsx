import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGrid } from "@/components/sections/SkillGrid";
import { TechStack } from "@/components/sections/TechStack";
import { IconGithub, IconLinkedin } from "@/components/ui/NavIcons";
import { getLocalizedContent } from "@/lib/content";
import { isValidLocale, localePath, locales } from "@/lib/i18n";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);

  return (
    <section className="section-shell">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
        <SectionHeading
          title={content.ui.about.title}
          subtitle={content.ui.about.intro}
          align="center"
        />
        <div className="mt-2 space-y-4 text-base leading-relaxed text-muted md:text-lg">
          {content.ui.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={content.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-btn social-btn--linkedin"
          >
            <IconLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={content.profile.github}
            target="_blank"
            rel="noreferrer"
            className="social-btn social-btn--github"
          >
            <IconGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
        <p className="mt-6">
          <Link href={localePath(rawLocale, "vida")} className="text-sm font-medium text-accent hover:underline">
            {content.ui.about.lifeCta}
          </Link>
        </p>
      </div>
      <TechStack title={content.ui.sections.tech} items={content.ui.hero.tech} />
      <div className="grid gap-6 md:grid-cols-3">
        {content.profile.pillars.map((pillar) => (
          <article key={pillar.title} className="card-surface">
            <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-16">
        <SectionHeading title={content.ui.sections.skills} />
        <SkillGrid skills={content.skills} />
      </div>
    </section>
  );
}
