import { InstitutionLogo } from "@/components/ui/InstitutionLogo";
import { CloudCertificationsStory } from "@/components/sections/CloudCertificationsStory";
import { localeHtmlLang, type Locale } from "@/lib/i18n";
import type { CertificationItem, EducationItem } from "@/lib/types";

interface EducationJourneyProps {
  locale: Locale;
  storyIntro: string;
  storyQuote?: string;
  hoursLabel: string;
  items: EducationItem[];
  cloudCertifications?: {
    bridge: string;
    pitch: string;
    verifyLabel: string;
    items: CertificationItem[];
  };
}

function StoryBridge({ text }: { text: string }) {
  const lines = text.split("\n").filter(Boolean);
  return (
    <div className="experience-story__bridge">
      <span className="experience-story__bridge-line" />
      <div className="experience-story__bridge-text">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function formatHours(hours: number, locale: Locale, label: string) {
  const formatted = hours.toLocaleString(localeHtmlLang[locale]);
  return `${formatted} ${label}`;
}

export function EducationJourney({
  locale,
  storyIntro,
  storyQuote,
  hoursLabel,
  items,
  cloudCertifications,
}: EducationJourneyProps) {
  return (
    <section className="section-shell">
      <div className="experience-story">
        <header className="experience-story__intro">
          <p className="experience-story__arc">{storyIntro}</p>
          {storyQuote ? (
            <blockquote className="experience-story__ethos">
              <p>{storyQuote}</p>
            </blockquote>
          ) : null}
        </header>

        <div className="education-journey education-journey--story experience-story__track">
          {items.map((item, index) => (
            <div key={item.id} className="education-story__chapter">
              <article className="education-card card-surface">
                <div className="flex gap-4 md:gap-5">
                  <InstitutionLogo
                    src={item.logo}
                    alt={item.institution}
                    fit={item.logoFit}
                    bg={item.logoBg}
                    shape={item.logoShape}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted">{item.institution}</p>
                      </div>
                      <p className="text-sm font-medium text-accent text-left md:text-right">
                        <span className="block">{item.period}</span>
                        {item.duration ? (
                          <span className="mt-0.5 block text-xs font-medium text-muted">
                            {item.duration}
                          </span>
                        ) : item.hours ? (
                          <span className="mt-0.5 block text-xs font-medium text-muted">
                            {formatHours(item.hours, locale, hoursLabel)}
                          </span>
                        ) : null}
                      </p>
                    </div>
                    <p className="experience-story__pitch mt-4">{item.pitch}</p>
                    {item.detail ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                    ) : null}
                  </div>
                </div>
              </article>

              {item.id === "fam" && cloudCertifications ? (
                <CloudCertificationsStory {...cloudCertifications} />
              ) : null}

              {item.bridge && index < items.length - 1 ? (
                <StoryBridge text={item.bridge} />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
