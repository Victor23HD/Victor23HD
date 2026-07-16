import { locales, type Locale } from "./i18n";
import type { LocalizedContent, BlogPostMeta } from "./types";
import type { LocaleFile } from "./locale-types";
import { listBlogMdxSlugs } from "./mdx";

import profileData from "../../content/data/profile.json";
import experienceData from "../../content/data/experience.json";
import projectsData from "../../content/data/projects.json";
import educationData from "../../content/data/education.json";
import volunteeringData from "../../content/data/volunteering.json";
import testimonialsData from "../../content/data/testimonials.json";
import certificationsData from "../../content/data/certifications.json";
import lifeGamesData from "../../content/data/life-games.json";
import lifeAnimeData from "../../content/data/life-anime.json";
import lifeMusicData from "../../content/data/life-music.json";

import ptLocale from "../../content/locales/pt.json";
import enLocale from "../../content/locales/en.json";
import deLocale from "../../content/locales/de.json";
import frLocale from "../../content/locales/fr.json";

const localeMap: Record<Locale, LocaleFile> = {
  pt: ptLocale as LocaleFile,
  en: enLocale as LocaleFile,
  de: deLocale as LocaleFile,
  fr: frLocale as LocaleFile,
};

export function getLocalizedContent(locale: Locale): LocalizedContent {
  const ui = localeMap[locale].ui;
  const narrative = localeMap[locale].narrative;

  return {
    profile: {
      ...profileData,
      headline: narrative.headline,
      tagline: narrative.tagline,
      summary: narrative.summary,
      pillars: narrative.pillars,
      stats: narrative.stats,
    },
    experience: experienceData.map((item) => ({
      ...item,
      logoFit: item.logoFit as "cover" | "contain" | undefined,
      clientLogoFit: "clientLogoFit" in item
        ? (item.clientLogoFit as "cover" | "contain" | undefined)
        : undefined,
      role: narrative.experience[item.id].role,
      company: narrative.experience[item.id].company,
      client: narrative.experience[item.id].client,
      period: narrative.experience[item.id].period,
      pitch: narrative.experience[item.id].pitch,
      bridge: narrative.experience[item.id].bridge,
      bullets: narrative.experience[item.id].bullets,
    })),
    projects: projectsData.map((item) => ({
      ...item,
      title: narrative.projects[item.slug].title,
      description: narrative.projects[item.slug].description,
      highlights: narrative.projects[item.slug].highlights,
    })),
    education: educationData.map((item) => ({
      ...item,
      logoFit: item.logoFit as "cover" | "contain" | undefined,
      logoBg: ("logoBg" in item
        ? (item.logoBg as "default" | "dark" | undefined)
        : undefined),
      logoShape: ("logoShape" in item
        ? (item.logoShape as "square" | "wide" | undefined)
        : undefined),
      logo: item.logo || undefined,
      title: narrative.education[item.id].title,
      institution: narrative.education[item.id].institution,
      period: narrative.education[item.id].period,
      duration: narrative.education[item.id].duration,
      pitch: narrative.education[item.id].pitch,
      detail: narrative.education[item.id].detail,
      bridge: narrative.education[item.id].bridge,
    })),
    volunteering: volunteeringData.map((item) => ({
      ...item,
      logoFit: item.logoFit as "cover" | "contain" | undefined,
      logoBg: ("logoBg" in item
        ? (item.logoBg as "default" | "dark" | undefined)
        : undefined),
      logoShape: ("logoShape" in item
        ? (item.logoShape as "square" | "wide" | undefined)
        : undefined),
      logo: item.logo || undefined,
      organization: narrative.volunteering[item.id].organization,
      period: narrative.volunteering[item.id].period,
      role: narrative.volunteering[item.id].role,
      pitch: narrative.volunteering[item.id].pitch,
      bullets: narrative.volunteering[item.id].bullets,
    })),
    testimonials: testimonialsData
      .filter((item) => item.published)
      .map((item) => ({
        ...item,
        name: narrative.testimonials[item.id].name,
        role: narrative.testimonials[item.id].role,
        company: narrative.testimonials[item.id].company,
        context: narrative.testimonials[item.id].context,
        quote: narrative.testimonials[item.id].quote,
        avatar: item.avatar || undefined,
        linkedin: item.linkedin || undefined,
      })),
    skills: narrative.skills,
    certifications: certificationsData.map((item) => ({
      id: item.id,
      image: item.image,
      credlyUrl: item.credlyUrl,
      issuer: item.issuer as "aws" | "microsoft",
      name: narrative.cloudCertifications.items[item.id].name,
      tagline: narrative.cloudCertifications.items[item.id].tagline,
    })),
    cloudCertifications: {
      bridge: narrative.cloudCertifications.bridge,
      pitch: narrative.cloudCertifications.pitch,
      verifyLabel: narrative.cloudCertifications.verifyLabel,
    },
    ui: {
      ...ui,
      life: {
        ...ui.life,
        games: lifeGamesData,
        anime: lifeAnimeData,
        music: lifeMusicData,
      },
    },
  };
}

export function getPublishedProjects(locale: Locale) {
  return getLocalizedContent(locale).projects.filter((project) => project.published);
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getLocalizedContent(locale).projects.find(
    (project) => project.slug === slug && project.published,
  );
}

export function getAllProjectSlugs(): string[] {
  return projectsData.filter((project) => project.published).map((project) => project.slug);
}

export function getBlogPosts(locale: Locale): BlogPostMeta[] {
  return listBlogMdxSlugs(locale).map((slug) => ({
    slug,
    title: slug,
    excerpt: "",
    date: "",
    tags: [],
  }));
}

export function getBlogPostSlugs(locale: Locale): string[] {
  return listBlogMdxSlugs(locale);
}

export const BLOG_EMPTY_SLUG = "__empty__";

export function getBlogStaticParams(): { locale: Locale; slug: string }[] {
  return locales.flatMap((locale) => {
    const slugs = listBlogMdxSlugs(locale);
    if (slugs.length > 0) {
      return slugs.map((slug) => ({ locale, slug }));
    }
    return [{ locale, slug: BLOG_EMPTY_SLUG }];
  });
}
