import { ProjectCard } from "@/components/sections/ProjectCard";
import { type Locale } from "@/lib/i18n";
import type { LocaleStrings, ProjectItem } from "@/lib/types";

interface ProjectGridProps {
  locale: Locale;
  projects: ProjectItem[];
  ui: LocaleStrings;
}

export function ProjectGrid({ locale, projects, ui }: ProjectGridProps) {
  const single = projects.length === 1;

  return (
    <div className={`grid gap-6 ${single ? "max-w-xl md:grid-cols-1" : "md:grid-cols-2"}`}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} locale={locale} project={project} ui={ui} />
      ))}
    </div>
  );
}
