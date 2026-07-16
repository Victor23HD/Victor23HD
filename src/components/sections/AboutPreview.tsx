import Link from "next/link";
import {
  IconBriefcase,
  IconGithub,
  IconGraduationCap,
  IconLinkedin,
  IconSparkles,
} from "@/components/ui/NavIcons";
import { localePath, type Locale } from "@/lib/i18n";
import type { LocaleStrings, Profile } from "@/lib/types";

interface AboutPreviewProps {
  locale: Locale;
  profile: Profile;
  ui: LocaleStrings;
}

export function AboutPreview({ locale, profile, ui }: AboutPreviewProps) {
  const { about } = ui;

  const paths = [
    {
      key: "experience",
      href: localePath(locale, "experiencia"),
      icon: IconBriefcase,
      title: about.explore.experience.title,
      description: about.explore.experience.description,
    },
    {
      key: "education",
      href: localePath(locale, "formacao"),
      icon: IconGraduationCap,
      title: about.explore.education.title,
      description: about.explore.education.description,
    },
    {
      key: "life",
      href: localePath(locale, "vida"),
      icon: IconSparkles,
      title: about.explore.life.title,
      description: about.explore.life.description,
    },
  ] as const;

  return (
    <section className="about-preview">
      <div className="section-shell about-preview__inner">
        <div className="about-preview__rule" aria-hidden />
        <header className="about-preview__header">
          <h2 className="about-preview__title">{about.title}</h2>
        </header>

        <div className="about-preview__copy">
          {about.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="about-preview__explore">
          <p className="about-preview__explore-label">{about.exploreLabel}</p>
          <div className="about-preview__paths">
            {paths.map((path) => {
              const Icon = path.icon;
              return (
                <Link key={path.key} href={path.href} className="about-preview__path">
                  <span className="about-preview__path-icon" aria-hidden>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="about-preview__path-text">
                    <span className="about-preview__path-title">{path.title}</span>
                    <span className="about-preview__path-desc">{path.description}</span>
                  </span>
                  <span className="about-preview__path-arrow" aria-hidden>
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="about-preview__social">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-btn social-btn--linkedin"
          >
            <IconLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="social-btn social-btn--github"
          >
            <IconGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
