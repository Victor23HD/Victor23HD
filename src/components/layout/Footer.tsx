import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import type { LocaleStrings } from "@/lib/types";

interface FooterProps {
  locale: Locale;
  ui: LocaleStrings;
}

export function Footer({ locale, ui }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {year} Victor Caporici. {ui.common.allRights}</p>
        <div className="flex flex-wrap gap-4">
          <Link href={localePath(locale, "contato")} className="hover:text-foreground">
            {ui.nav.contact}
          </Link>
          <a
            href="https://linkedin.com/in/victor23hd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Victor23HD"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
