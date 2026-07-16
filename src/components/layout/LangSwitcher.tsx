"use client";

import Link from "next/link";
import { useState } from "react";
import {
  alternateLocales,
  localeLabels,
  localePath,
  type Locale,
} from "@/lib/i18n";

interface LangSwitcherProps {
  locale: Locale;
  pathname: string;
  variant?: "light" | "dark";
}

export function LangSwitcher({
  locale,
  pathname,
  variant = "light",
}: LangSwitcherProps) {
  const [open, setOpen] = useState(false);

  const switchHref = (target: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (
      segments.length > 0 &&
      alternateLocales(locale).concat([locale]).includes(segments[0] as Locale)
    ) {
      segments[0] = target;
      return `/${segments.join("/")}/`;
    }
    return localePath(target);
  };

  const buttonClass =
    variant === "dark"
      ? "nav-pill__lang-btn"
      : "rounded-full border border-border px-3 py-1.5 text-xs font-medium uppercase text-muted transition hover:text-foreground";

  const menuClass =
    variant === "dark"
      ? "absolute right-0 z-50 mt-2 min-w-36 overflow-hidden rounded-xl border border-slate-600 bg-slate-800 p-1 shadow-xl"
      : "absolute right-0 mt-2 min-w-36 rounded-xl border border-border bg-card p-2 shadow-lg";

  const itemClass = (target: Locale) => {
    const active = target === locale;
    if (variant === "dark") {
      return `block rounded-lg px-3 py-2 text-sm transition hover:bg-slate-700 ${
        active ? "font-medium text-white" : "text-slate-300"
      }`;
    }
    return `block rounded-lg px-3 py-2 text-sm transition hover:bg-soft/30 ${
      active ? "font-medium text-accent" : "text-muted"
    }`;
  };

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((value) => !value)} className={buttonClass}>
        {locale.toUpperCase()}
      </button>
      {open ? (
        <div className={menuClass}>
          {alternateLocales(locale)
            .concat([locale])
            .filter((value, index, array) => array.indexOf(value) === index)
            .map((target) => (
              <Link
                key={target}
                href={switchHref(target)}
                className={itemClass(target)}
                onClick={() => setOpen(false)}
              >
                {localeLabels[target]}
              </Link>
            ))}
        </div>
      ) : null}
    </div>
  );
}
