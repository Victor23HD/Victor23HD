import { Button } from "@/components/ui/Button";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { localePath, type Locale } from "@/lib/i18n";
import type { LocaleStrings, Profile } from "@/lib/types";

interface HeroProps {
  locale: Locale;
  profile: Profile;
  ui: LocaleStrings;
}

export function Hero({ locale, profile, ui }: HeroProps) {
  return (
    <section className="hero-shell">
      <div className="hero-atmosphere" aria-hidden />
      <div className="hero-grid" aria-hidden />

      <div className="section-shell hero-content flex flex-col items-center text-center">
        <div className="hero-avatar-ring hero-enter hero-enter--1">
          <ProfilePhoto
            priority
            className="aspect-square rounded-full"
            sizes="160px"
          />
        </div>

        <h1 className="hero-headline hero-enter hero-enter--2">
          {profile.displayName}
          <span className="hero-headline__sep" aria-hidden>
            {" "}
            •{" "}
          </span>
          {ui.hero.role}
        </h1>

        <p className="hero-tagline hero-enter hero-enter--3">{profile.tagline}</p>

        <div className="hero-actions hero-enter hero-enter--4">
          <Button href={localePath(locale, "contato")}>{ui.hero.ctaContact}</Button>
          <p className="hero-available">
            <span className="hero-available__dot" aria-hidden />
            <span className="hero-available__label">{ui.hero.available}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
