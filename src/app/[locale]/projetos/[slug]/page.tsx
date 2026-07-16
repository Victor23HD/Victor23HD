import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { localePath, isValidLocale, locales } from "@/lib/i18n";
import { getAllProjectSlugs, getLocalizedContent, getProjectBySlug } from "@/lib/content";

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);
  const project = getProjectBySlug(rawLocale, slug);
  if (!project) notFound();

  return (
    <section className="section-shell">
      <Button href={localePath(rawLocale, "projetos")} variant="ghost">
        {content.ui.common.backToProjects}
      </Button>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          {content.ui.common.highlights}
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        {project.url ? (
          <Button href={project.url}>{content.ui.common.viewProject}</Button>
        ) : null}
        {project.repo ? (
          <Button href={project.repo} variant="secondary">
            {content.ui.common.viewCode}
          </Button>
        ) : null}
      </div>
    </section>
  );
}
