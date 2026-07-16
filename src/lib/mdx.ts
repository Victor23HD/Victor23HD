import fs from "fs";
import path from "path";
import type { Locale } from "./i18n";

export interface MdxFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
}

const blogRoot = path.join(process.cwd(), "content", "blog");

export function getBlogMdxPath(locale: Locale, slug: string): string | null {
  const filePath = path.join(blogRoot, locale, `${slug}.mdx`);
  return fs.existsSync(filePath) ? filePath : null;
}

export function listBlogMdxSlugs(locale: Locale): string[] {
  const dir = path.join(blogRoot, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") && file !== ".gitkeep")
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function parseFrontmatter(raw: string): {
  frontmatter: MdxFrontmatter;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return {
      frontmatter: { title: "", excerpt: "", date: "" },
      content: raw,
    };
  }

  const [, yaml, content] = match;
  const frontmatter: Record<string, string | string[]> = {};

  yaml.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;

    if (trimmed.startsWith("tags:")) {
      const tags = trimmed
        .replace("tags:", "")
        .trim()
        .replace(/^\[|\]$/g, "")
        .split(",")
        .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
      frontmatter.tags = tags;
      return;
    }

    const [key, ...rest] = trimmed.split(":");
    if (key && rest.length) {
      frontmatter[key.trim()] = rest
        .join(":")
        .trim()
        .replace(/^['"]|['"]$/g, "");
    }
  });

  return {
    frontmatter: frontmatter as unknown as MdxFrontmatter,
    content,
  };
}
