import { notFound } from "next/navigation";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isValidLocale, locales } from "@/lib/i18n";
import { getLocalizedContent } from "@/lib/content";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);

  return (
    <section className="section-shell">
      <SectionHeading title={content.ui.sections.contact} subtitle={content.ui.contact.intro} />
      <ContactPanel profile={content.profile} ui={content.ui} />
    </section>
  );
}
