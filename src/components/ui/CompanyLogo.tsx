import Image from "next/image";

export type CompanyKey = "totvs" | "act" | "transire";
export type LogoFit = "cover" | "contain";

interface LogoImageProps {
  src: string;
  alt: string;
  fit?: LogoFit;
  className?: string;
}

function LogoImage({ src, alt, fit = "contain", className = "" }: LogoImageProps) {
  const isCover = fit === "cover";

  return (
    <div
      className={`company-logo relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ${
        isCover ? "company-logo--cover" : "company-logo--mark"
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={isCover ? "object-cover" : "object-contain p-0.5"}
        sizes="64px"
      />
    </div>
  );
}

interface CompanyLogoProps {
  company: CompanyKey;
  logo?: string;
  logoFit?: LogoFit;
  companyName: string;
  clientLogo?: string;
  clientLogoFit?: LogoFit;
  clientName?: string;
  className?: string;
}

const brand: Record<CompanyKey, { bg: string; fg: string; label: string }> = {
  totvs: { bg: "#00A651", fg: "#ffffff", label: "TOTVS" },
  act: { bg: "#0B1F3A", fg: "#ffffff", label: "ACT" },
  transire: { bg: "#1E3A5F", fg: "#ffffff", label: "Transire" },
};

export function CompanyLogo({
  company,
  logo,
  logoFit = "contain",
  companyName,
  clientLogo,
  clientLogoFit = "cover",
  clientName,
  className = "",
}: CompanyLogoProps) {
  if (logo && clientLogo && clientName) {
    return (
      <div className={`company-logo-stack ${className}`}>
        <LogoImage src={logo} alt={`${companyName} logo`} fit={logoFit} />
        <span className="company-logo-stack__plus" aria-hidden>
          +
        </span>
        <LogoImage src={clientLogo} alt={`${clientName} logo`} fit={clientLogoFit} />
      </div>
    );
  }

  if (logo) {
    return (
      <LogoImage
        src={logo}
        alt={`${companyName} logo`}
        fit={logoFit}
        className={className}
      />
    );
  }

  const style = brand[company];

  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xs font-bold tracking-tight shadow-sm ${className}`}
      style={{ backgroundColor: style.bg, color: style.fg }}
      aria-hidden
    >
      {style.label}
    </div>
  );
}
