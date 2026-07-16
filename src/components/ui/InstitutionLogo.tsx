import Image from "next/image";
import { withBasePath } from "@/lib/paths";

interface InstitutionLogoProps {
  src?: string;
  alt: string;
  fit?: "cover" | "contain";
  fallback?: string;
  bg?: "default" | "dark";
  shape?: "square" | "wide";
}

export function InstitutionLogo({
  src,
  alt,
  fit = "contain",
  fallback,
  bg = "default",
  shape = "square",
}: InstitutionLogoProps) {
  const isCover = fit === "cover";
  const isWide = shape === "wide";
  const isDark = bg === "dark";

  const sizeClass = isWide ? "institution-logo--wide" : "institution-logo--square";
  const bgClass = isDark
    ? "institution-logo--dark"
    : isCover
      ? "institution-logo--brand"
      : "institution-logo--mark";

  if (src) {
    return (
      <div
        className={`institution-logo relative shrink-0 overflow-hidden rounded-2xl ${sizeClass} ${bgClass} ${
          isCover ? "institution-logo--cover" : ""
        }`}
      >
        <Image
          src={withBasePath(src)}
          alt={alt}
          fill
          className={
            isCover
              ? "object-cover"
              : isDark
                ? "object-contain p-2.5"
                : isWide
                  ? "object-contain p-1"
                  : "object-contain p-2"
          }
          sizes={isWide ? "108px" : "72px"}
        />
      </div>
    );
  }

  return (
    <div className="institution-logo institution-logo--fallback" aria-hidden>
      <span>{fallback ?? alt.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}
