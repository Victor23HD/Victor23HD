import { notFound } from "next/navigation";
import { BlogList } from "@/components/sections/BlogList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isValidLocale, locales } from "@/lib/i18n";
import { getBlogPosts, getLocalizedContent } from "@/lib/content";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);
  const posts = getBlogPosts(rawLocale);

  return (
    <section className="section-shell">
      <SectionHeading title={content.ui.blog.title} subtitle={content.ui.blog.subtitle} />
      <BlogList posts={posts} ui={content.ui} />
    </section>
  );
}
