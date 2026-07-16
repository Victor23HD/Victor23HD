import type { SkillCategory } from "@/lib/types";

interface SkillGridProps {
  skills: SkillCategory[];
}

export function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skills.map((skill) => (
        <div key={skill.category} className="card-surface">
          <h3 className="text-sm font-semibold text-accent">{skill.category}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{skill.items}</p>
        </div>
      ))}
    </div>
  );
}
