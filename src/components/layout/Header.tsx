"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  IconBriefcase,
  IconFolder,
  IconGithub,
  IconGraduationCap,
  IconHeart,
  IconHome,
  IconMenu,
  IconMoon,
  IconSparkles,
  IconSun,
} from "@/components/ui/NavIcons";
import { localeHtmlLang, localePath, type Locale } from "@/lib/i18n";
import type { LocaleStrings } from "@/lib/types";
import { LangSwitcher } from "./LangSwitcher";

interface HeaderProps {
  locale: Locale;
  ui: LocaleStrings;
  github?: string;
}

const primaryNav = [
  { key: "home" as const, segment: "", icon: IconHome },
  { key: "projects" as const, segment: "projetos", icon: IconFolder },
  { key: "experience" as const, segment: "experiencia", icon: IconBriefcase },
  { key: "education" as const, segment: "formacao", icon: IconGraduationCap },
  { key: "volunteering" as const, segment: "voluntariado", icon: IconHeart },
  { key: "life" as const, segment: "vida", icon: IconSparkles },
];

const secondaryNav = [
  { key: "about" as const, segment: "sobre" },
  { key: "blog" as const, segment: "blog" },
  { key: "contact" as const, segment: "contato" },
];

const mobileNav = [...primaryNav, ...secondaryNav];

function isActive(pathname: string, locale: Locale, segment: string) {
  const homePath = `/${locale}`;
  if (!segment) {
    return pathname === homePath || pathname === `${homePath}/`;
  }
  return pathname.includes(`/${segment}`);
}

export function Header({ locale, ui, github = "https://github.com/Victor23HD" }: HeaderProps) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
    <header className="nav-shell">
      <nav className="nav-pill" aria-label="Main">
        <div className="nav-pill__links">
          {primaryNav.map((item) => {
            const active = isActive(pathname, locale, item.segment);
            const Icon = item.icon;
            return (
              <Link
                key={item.key}
                href={item.segment ? localePath(locale, item.segment) : localePath(locale)}
                className={`nav-pill__link ${active ? "nav-pill__link--active" : ""}`}
                aria-label={ui.nav[item.key]}
              >
                <Icon />
                <span className="nav-pill__link-label">{ui.nav[item.key]}</span>
              </Link>
            );
          })}
        </div>

        <div className="nav-pill__actions">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="nav-pill__icon-btn"
            aria-label="GitHub"
          >
            <IconGithub />
          </a>
          <LangSwitcher locale={locale} pathname={pathname} variant="dark" />
          <button
            type="button"
            onClick={toggleTheme}
            className="nav-pill__theme-btn"
            aria-label={dark ? ui.common.lightMode : ui.common.darkMode}
          >
            {dark ? <IconSun className="h-4 w-4 text-slate-800" /> : <IconMoon className="h-4 w-4 text-slate-700" />}
          </button>
          <button
            type="button"
            className="nav-pill__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-menu"
            aria-label="Menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <IconMenu />
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <nav id="nav-mobile-menu" className="nav-mobile-menu" aria-label="Pages">
          {mobileNav.map((item) => {
            const active = isActive(pathname, locale, item.segment);
            return (
              <Link
                key={item.key}
                href={item.segment ? localePath(locale, item.segment) : localePath(locale)}
                className={`nav-mobile-link ${active ? "nav-mobile-link--active" : ""}`}
              >
                {"icon" in item ? <item.icon /> : null}
                <span>{ui.nav[item.key]}</span>
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
    <div className="nav-spacer" aria-hidden />
    </>
  );
}
