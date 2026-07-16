import type { BlogPostMeta, LocaleStrings } from "@/lib/types";

interface BlogListProps {
  posts: BlogPostMeta[];
  ui: LocaleStrings;
}

export function BlogList({ posts, ui }: BlogListProps) {
  if (!posts.length) {
    return (
      <div className="card-surface text-center">
        <p className="text-lg font-medium text-foreground">{ui.common.comingSoon}</p>
        <p className="mt-2 text-sm text-muted">{ui.blog.empty}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.slug} className="card-surface">
          <p className="text-xs font-medium text-accent">{post.date}</p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">{post.title}</h3>
          <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
