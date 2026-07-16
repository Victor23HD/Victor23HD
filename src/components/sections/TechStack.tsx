import type { ReactElement } from "react";

interface IconProps {
  className?: string;
}

function IconC({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <circle cx="24" cy="24" r="20" fill="#00599C" />
      <path
        fill="#fff"
        d="M24.2 14.2c5.2 0 8.8 3.4 9.2 8h-4.3c-.4-2.4-2.1-4-4.9-4-3.4 0-5.7 2.8-5.7 6.4 0 3.5 2.2 6.3 5.7 6.3 2.9 0 4.7-1.7 5.1-4.2h4.3c-.4 4.7-4.1 8.1-9.4 8.1-5.9 0-10.1-4.2-10.1-10.2 0-6 4.2-10.4 10.1-10.4Z"
      />
    </svg>
  );
}

function IconCpp({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path fill="#00599C" d="M24 4 7 14v20l17 10 17-10V14L24 4Z" />
      <path fill="#fff" d="M24.1 16.4c3.6 0 6.1 2.3 6.5 5.5h-3c-.3-1.6-1.5-2.7-3.5-2.7-2.5 0-4.1 2-4.1 4.6 0 2.5 1.5 4.5 4.1 4.5 2 0 3.4-1.2 3.6-2.9h3c-.4 3.2-2.9 5.6-6.6 5.6-4.3 0-7.2-3-7.2-7.2 0-4.2 2.9-7.4 7.2-7.4Z" />
      <path fill="#fff" d="M34.2 21.2h1.8v1.8h1.8v1.8h-1.8v1.8h-1.8v-1.8h-1.8v-1.8h1.8v-1.8Zm4.8 0H41v1.8h1.8v1.8H41v1.8h-1.8v-1.8h-1.8v-1.8h1.8v-1.8Z" />
    </svg>
  );
}

function IconPython({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path fill="#3776AB" d="M24 6c-7.2 0-6.7 3.1-6.7 3.1l.01 3.2h6.8v1H13.6S10 12.9 10 20.7s3.1 7.5 3.1 7.5h1.9v-3.6s-.1-4.2 4.1-4.2h7.1s4 0 4-3.9V9.2S30.9 6 24 6Zm-3.7 2.1c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.2-1.3 1.2-.7 0-1.3-.5-1.3-1.2 0-.7.6-1.3 1.3-1.3Z" />
      <path fill="#FFD43B" d="M24 42c7.2 0 6.7-3.1 6.7-3.1l-.01-3.2h-6.8v-1h10.5S38 35.1 38 27.3s-3.1-7.5-3.1-7.5h-1.9v3.6s.1 4.2-4.1 4.2h-7.1s-4 0-4 3.9v6.6S17.1 42 24 42Zm3.7-2.1c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.2 1.3-1.2.7 0 1.3.5 1.3 1.2 0 .7-.6 1.3-1.3 1.3Z" />
    </svg>
  );
}

function IconKotlin({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <defs>
        <linearGradient id="kt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E44857" />
          <stop offset="50%" stopColor="#C711E1" />
          <stop offset="100%" stopColor="#7F52FF" />
        </linearGradient>
      </defs>
      <path fill="url(#kt)" d="M8 8h32L24 24 40 40H8V8Z" />
    </svg>
  );
}

function IconLinux({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <ellipse cx="24" cy="28" rx="11" ry="13" fill="#333" />
      <ellipse cx="24" cy="16" rx="8" ry="9" fill="#333" />
      <circle cx="20.5" cy="14.5" r="1.4" fill="#FDD835" />
      <circle cx="27.5" cy="14.5" r="1.4" fill="#FDD835" />
      <path fill="#FDD835" d="M22 19.5c0 1.4.9 2.2 2 2.2s2-.8 2-2.2" />
      <path fill="#E53935" d="M18 34c1.5 3 4 5 6 5s4.5-2 6-5c-2 .8-4 1.2-6 1.2S20 34.8 18 34Z" />
    </svg>
  );
}

function IconRtos({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <rect x="8" y="10" width="32" height="28" rx="4" fill="#0F172A" />
      <rect x="12" y="14" width="24" height="4" rx="1" fill="#38BDF8" />
      <rect x="12" y="22" width="16" height="4" rx="1" fill="#64748B" />
      <rect x="12" y="30" width="20" height="4" rx="1" fill="#64748B" />
      <circle cx="36" cy="24" r="3" fill="#22C55E" />
    </svg>
  );
}

function IconAws({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path fill="#252F3E" d="M14 18h4.2l2.4 7.6 2.4-7.6H27l-4.1 11h-3.6L14 18Zm14.2 0h3.5v11h-3.5V18Z" />
      <path fill="#FF9900" d="M12 33.5c3.8 2.8 9.1 4.2 13.9 4.2 5.2 0 10.3-1.5 14.1-4.5.6-.5 1.2.1.7.8-3.1 4.1-9.9 6.9-15.1 6.9-5.5 0-11.1-2.1-15.2-5.7-.5-.5.1-1.1.9-.7h.7Z" />
    </svg>
  );
}

function IconAzure({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path fill="#0089D6" d="M20.5 8 9 38h9.2L36.5 8H20.5Z" />
      <path fill="#50E6FF" d="m27.2 24.4-5.6 7.2L39 38H25.4L27.2 24.4Z" />
    </svg>
  );
}

function IconGit({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <path fill="#F05032" d="M45.1 22.1 25.9 2.9a3.1 3.1 0 0 0-4.4 0L17.4 7l5.6 5.6a3.7 3.7 0 0 1 4.7 4.7l5.4 5.4a3.7 3.7 0 1 1-1.8 1.8l-5.4-5.4v14.2a3.7 3.7 0 1 1-2.1.1V19.1a3.7 3.7 0 0 1-2-4.9L14.8 8.6 2.9 20.5a3.1 3.1 0 0 0 0 4.4l19.2 19.2a3.1 3.1 0 0 0 4.4 0l18.6-18.6a3.1 3.1 0 0 0 0-4.4Z" />
    </svg>
  );
}

function IconEmv({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <rect x="6" y="12" width="36" height="24" rx="4" fill="#1E3A5F" />
      <rect x="10" y="18" width="8" height="6" rx="1" fill="#F59E0B" />
      <rect x="22" y="18" width="16" height="2" rx="1" fill="#94A3B8" />
      <rect x="22" y="23" width="12" height="2" rx="1" fill="#64748B" />
      <rect x="10" y="28" width="20" height="2" rx="1" fill="#64748B" />
    </svg>
  );
}

const techIcons: Record<string, (props: IconProps) => ReactElement> = {
  C: IconC,
  "C++": IconCpp,
  Python: IconPython,
  Kotlin: IconKotlin,
  Linux: IconLinux,
  RTOS: IconRtos,
  AWS: IconAws,
  Azure: IconAzure,
  Git: IconGit,
  EMV: IconEmv,
};

interface TechStackProps {
  title: string;
  items: string[];
}

export function TechStack({ title, items }: TechStackProps) {
  return (
    <section className="section-shell border-t border-border/70 pt-10 md:pt-12">
      <h2 className="mb-6 text-left text-lg font-semibold text-foreground md:text-xl">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => {
          const Icon = techIcons[item];
          return (
            <div
              key={item}
              title={item}
              className="group flex h-[4.75rem] w-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md"
            >
              {Icon ? (
                <Icon className="h-7 w-7" />
              ) : (
                <span className="text-sm font-semibold text-accent">{item.slice(0, 2)}</span>
              )}
              <span className="text-[0.65rem] font-medium text-muted group-hover:text-foreground">
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
