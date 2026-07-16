import { InstitutionLogo } from "@/components/ui/InstitutionLogo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { VolunteeringItem } from "@/lib/types";

interface HomeVolunteeringProps {
  title: string;
  subtitle: string;
  items: VolunteeringItem[];
}

export function HomeVolunteering({ title, subtitle, items }: HomeVolunteeringProps) {
  if (items.length === 0) return null;

  return (
    <section className="section-shell">
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="volunteering-home">
        {items.map((item) => (
          <article key={item.id} className="volunteering-home__card card-surface">
            <div className="flex gap-4 md:gap-5">
              <InstitutionLogo
                src={item.logo}
                alt={item.organization}
                fit={item.logoFit}
                bg={item.logoBg}
                shape={item.logoShape}
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                    <p className="text-sm text-muted">{item.organization}</p>
                  </div>
                  <p className="text-sm font-medium text-accent">{item.period}</p>
                </div>

                <p className="experience-story__pitch mt-4">{item.pitch}</p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
