import { Button } from "@/components/ui/Button";
import { localePath, type Locale } from "@/lib/i18n";
import type { LocaleStrings, ProjectItem } from "@/lib/types";

interface ProjectCardProps {
  locale: Locale;
  project: ProjectItem;
  ui: LocaleStrings;
}

export function ProjectCard({ locale, project, ui }: ProjectCardProps) {
  const hasLinks = Boolean(project.url || project.repo);

  return (
    <article className="card-surface flex h-full flex-col">
      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button href={localePath(locale, `projetos/${project.slug}`)} variant="secondary">
          {ui.common.readMore}
        </Button>
        {project.url ? (
          <Button href={project.url} variant="ghost">
            {ui.common.viewProject}
          </Button>
        ) : null}
        {project.repo ? (
          <a href={project.repo} target="_blank" rel="noreferrer" className="accent-link text-sm">
            {ui.common.viewCode}
          </a>
        ) : null}
        {!hasLinks ? (
          <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted">
            {ui.common.comingSoon}
          </span>
        ) : null}
      </div>
    </article>
  );
}
