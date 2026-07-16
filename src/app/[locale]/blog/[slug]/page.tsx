import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { localePath, isValidLocale } from "@/lib/i18n";
import {
  BLOG_EMPTY_SLUG,
  getBlogPostSlugs,
  getBlogStaticParams,
  getLocalizedContent,
} from "@/lib/content";

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogStaticParams();
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isValidLocale(rawLocale)) notFound();

  const content = getLocalizedContent(rawLocale);
  const posts = getBlogPostSlugs(rawLocale);

  if (slug === BLOG_EMPTY_SLUG || !posts.includes(slug)) {
    if (posts.length > 0 && slug !== BLOG_EMPTY_SLUG) {
      notFound();
    }

    return (
      <section className="section-shell">
        <Button href={localePath(rawLocale, "blog")} variant="ghost">
          {content.ui.common.backToBlog}
        </Button>
        <div className="card-surface mt-8 text-center">
          <p className="text-lg font-medium text-foreground">{content.ui.common.comingSoon}</p>
          <p className="mt-2 text-sm text-muted">{content.ui.blog.empty}</p>
        </div>
      </section>
    );
  }

  notFound();
}
