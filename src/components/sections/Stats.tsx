import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LocaleStrings, Profile } from "@/lib/types";

interface StatsProps {
  profile: Profile;
  ui: LocaleStrings;
}

export function Stats({ profile, ui }: StatsProps) {
  return (
    <section className="section-shell border-t border-border/70">
      <SectionHeading title={ui.sections.stats} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="card-surface text-center">
            <p className="text-3xl font-semibold text-accent">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
