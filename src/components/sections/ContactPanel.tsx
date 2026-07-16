import { IconGithub, IconLinkedin } from "@/components/ui/NavIcons";
import type { LocaleStrings, Profile } from "@/lib/types";

interface ContactPanelProps {
  profile: Profile;
  ui: LocaleStrings;
}

export function ContactPanel({ profile, ui }: ContactPanelProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card-surface">
        <p className="text-sm leading-relaxed text-muted">{ui.contact.intro}</p>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="font-medium text-foreground">{ui.contact.emailLabel}</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="accent-link">
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">{ui.contact.phoneLabel}</dt>
            <dd className="text-muted">{profile.phone}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">{ui.contact.locationLabel}</dt>
            <dd className="text-muted">{profile.location}</dd>
          </div>
        </dl>
      </div>
      <div className="card-surface">
        <h3 className="text-sm font-semibold text-accent">{ui.contact.socialLabel}</h3>
        <div className="mt-5 flex flex-wrap gap-3">
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
    </div>
  );
}
