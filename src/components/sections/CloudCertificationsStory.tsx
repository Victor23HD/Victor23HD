import Image from "next/image";
import type { CertificationItem } from "@/lib/types";

interface CloudCertificationsStoryProps {
  bridge: string;
  pitch: string;
  verifyLabel: string;
  items: CertificationItem[];
}

const issuerLabels: Record<CertificationItem["issuer"], string> = {
  aws: "Amazon Web Services",
  microsoft: "Microsoft",
};

export function CloudCertificationsStory({
  bridge,
  pitch,
  verifyLabel,
  items,
}: CloudCertificationsStoryProps) {
  const bridgeLines = bridge.split("\n").filter(Boolean);

  return (
    <div className="education-story__chapter">
      <div className="experience-story__bridge">
        <span className="experience-story__bridge-line" />
        <div className="experience-story__bridge-text">
          {bridgeLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <article className="cloud-certs-story card-surface">
        <p className="experience-story__pitch">{pitch}</p>

        <div className="cloud-certs-story__grid">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.credlyUrl}
              target="_blank"
              rel="noreferrer"
              className="cloud-certs-story__badge"
            >
              <div className="cloud-certs-story__badge-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 120px, 140px"
                />
              </div>
              <div className="cloud-certs-story__badge-copy">
                <p className="cloud-certs-story__badge-name">{item.name}</p>
                <p className="cloud-certs-story__badge-issuer">
                  {issuerLabels[item.issuer]}
                </p>
                {item.tagline ? (
                  <p className="cloud-certs-story__badge-tagline">{item.tagline}</p>
                ) : null}
                <span className="cloud-certs-story__badge-link">{verifyLabel}</span>
              </div>
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}
