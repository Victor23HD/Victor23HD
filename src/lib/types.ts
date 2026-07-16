import type { Locale } from "./i18n";

export interface Profile {
  name: string;
  displayName: string;
  careerStart: string;
  headline: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  pillars: { title: string; description: string }[];
  stats: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  companyKey: string;
  logo?: string;
  logoFit?: "cover" | "contain";
  logoBg?: "default" | "dark";
  logoShape?: "square" | "wide";
  clientLogo?: string;
  clientLogoFit?: "cover" | "contain";
  role: string;
  company: string;
  client?: string;
  period: string;
  pitch: string;
  bridge?: string;
  bullets: string[];
  tags?: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  url?: string;
  repo?: string;
  published: boolean;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  logo?: string;
  logoFit?: "cover" | "contain";
  logoBg?: "default" | "dark";
  logoShape?: "square" | "wide";
  hours?: number;
  title: string;
  institution: string;
  period: string;
  duration?: string;
  pitch: string;
  detail?: string;
  bridge?: string;
}

export interface VolunteeringItem {
  id: string;
  logo?: string;
  logoFit?: "cover" | "contain";
  logoBg?: "default" | "dark";
  logoShape?: "square" | "wide";
  organization: string;
  period: string;
  role: string;
  pitch: string;
  bullets: string[];
  tags?: string[];
}

export interface SkillCategory {
  category: string;
  items: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  tagline?: string;
  image: string;
  credlyUrl: string;
  issuer: "aws" | "microsoft";
}

export interface LifeGame {
  id: string;
  name: string;
  image: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
}

export interface LifeFeatured {
  tag: string;
  title: string;
  pitch: string;
  clearedLabel: string;
}

export interface LifeTopic {
  id: string;
  tag: string;
  title: string;
  pitch: string;
  items?: string[];
}

export interface LifeContent {
  eyebrow: string;
  title: string;
  intro: string;
  featuredLabel: string;
  libraryLabel: string;
  filterAll: string;
  featured: LifeFeatured;
  games: LifeGame[];
  anime: LifeGame[];
  music: MusicTrack[];
  topics: LifeTopic[];
  closing?: string;
  backToAbout: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  initials: string;
  avatar?: string;
  linkedin?: string;
  published: boolean;
  name: string;
  role: string;
  company: string;
  context?: string;
  quote: string;
}

export interface LocaleStrings {
  nav: {
    home: string;
    about: string;
    life: string;
    experience: string;
    projects: string;
    education: string;
    volunteering: string;
    blog: string;
    contact: string;
  };
  hero: {
    role: string;
    available: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    tech: string[];
  };
  sections: {
    stats: string;
    tech: string;
    experience: string;
    projects: string;
    skills: string;
    volunteering: string;
    contact: string;
    blog: string;
    education: string;
    certifications: string;
  };
  common: {
    viewProject: string;
    viewCode: string;
    backToProjects: string;
    backToBlog: string;
    comingSoon: string;
    readMore: string;
    downloadCv: string;
    sendEmail: string;
    darkMode: string;
    lightMode: string;
    allRights: string;
    highlights: string;
    notFound: string;
  };
  contact: {
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    socialLabel: string;
  };
  about: {
    title: string;
    intro: string;
    summary: string[];
    paragraphs: string[];
    lifeCta: string;
    exploreLabel: string;
    explore: {
      experience: { title: string; description: string };
      education: { title: string; description: string };
      life: { title: string; description: string };
    };
  };
  life: Omit<LifeContent, "games" | "anime" | "music">;
  blog: {
    title: string;
    subtitle: string;
    empty: string;
  };
  projects: {
    title: string;
    subtitle: string;
    unpublished: string;
  };
  experience: {
    title: string;
    subtitle: string;
    storyIntro: string;
    storyQuote: string;
    counter: {
      year: string;
      years: string;
      month: string;
      months: string;
      and: string;
      almost: string;
      suffix: string;
    };
  };
  education: {
    storyIntro: string;
    storyQuote: string;
    hoursLabel: string;
  };
  volunteering: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    viewLinkedIn: string;
  };
  home: {
    education: {
      title: string;
      subtitle: string;
    };
    volunteering: {
      title: string;
      subtitle: string;
    };
  };
}

export interface LocalizedContent {
  profile: Profile;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  volunteering: VolunteeringItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  cloudCertifications: {
    bridge: string;
    pitch: string;
    verifyLabel: string;
  };
  testimonials: TestimonialItem[];
  ui: LocaleStrings & { life: LifeContent };
}
