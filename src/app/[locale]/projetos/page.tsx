import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isValidLocale, locales } from "@/lib/i18n";
import { getLocalizedContent, getPublishedProjects } from "@/lib/content";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);
  const projects = getPublishedProjects(rawLocale);

  return (
    <section className="section-shell">
      <SectionHeading
        title={content.ui.projects.title}
        subtitle={content.ui.projects.subtitle}
      />
      <ProjectGrid locale={rawLocale} projects={projects} ui={content.ui} />
    </section>
  );
}
