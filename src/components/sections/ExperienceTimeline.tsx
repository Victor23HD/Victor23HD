import { CompanyLogo, type CompanyKey } from "@/components/ui/CompanyLogo";
import {
  ExperienceCounter,
  type ExperienceCounterLabels,
} from "@/components/ui/ExperienceCounter";
import type { ExperienceItem } from "@/lib/types";

interface ExperienceTimelineProps {
  items: ExperienceItem[];
  storyIntro?: string;
  storyQuote?: string;
  careerStart?: string;
  counterLabels?: ExperienceCounterLabels;
}

export function ExperienceTimeline({
  items,
  storyIntro,
  storyQuote,
  careerStart,
  counterLabels,
}: ExperienceTimelineProps) {
  return (
    <div className="experience-story">
      {storyIntro ? (
        <header className="experience-story__intro">
          {careerStart && counterLabels ? (
            <ExperienceCounter start={careerStart} labels={counterLabels} />
          ) : null}
          <p className="experience-story__arc">{storyIntro}</p>
          {storyQuote ? (
            <blockquote className="experience-story__ethos">
              <p>{storyQuote}</p>
            </blockquote>
          ) : null}
        </header>
      ) : null}

      <div className="experience-story__track">
        {items.map((item, index) => (
          <div key={item.id} className="experience-story__chapter">
            <article className="experience-story__card card-surface">
              <div className="flex gap-4 md:gap-5">
                <CompanyLogo
                  company={item.companyKey as CompanyKey}
                  logo={item.logo}
                  logoFit={item.logoFit}
                  companyName={item.company}
                  clientLogo={item.clientLogo}
                  clientLogoFit={item.clientLogoFit}
                  clientName={item.client}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                      <p className="text-sm text-muted">
                        {item.company}
                        {item.client ? (
                          <>
                            <span className="text-muted/60"> · </span>
                            <span className="font-medium text-foreground/80">{item.client}</span>
                          </>
                        ) : null}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-accent">{item.period}</p>
                  </div>

                  {item.pitch ? (
                    <p className="experience-story__pitch mt-4">{item.pitch}</p>
                  ) : null}

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

            {item.bridge && index < items.length - 1 ? (
              <div className="experience-story__bridge" aria-hidden={false}>
                <span className="experience-story__bridge-line" />
                <div className="experience-story__bridge-text">
                  {item.bridge.split("\n").map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
