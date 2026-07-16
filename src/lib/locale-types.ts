import type { LocaleStrings } from "./types";

export interface NarrativeExperience {
  role: string;
  company: string;
  client?: string;
  period: string;
  pitch: string;
  bridge?: string;
  bullets: string[];
}

export interface NarrativeProject {
  title: string;
  description: string;
  highlights: string[];
}

export interface NarrativeEducation {
  title: string;
  institution: string;
  period: string;
  duration?: string;
  pitch: string;
  detail?: string;
  bridge?: string;
}

export interface NarrativeVolunteering {
  organization: string;
  period: string;
  role: string;
  pitch: string;
  bullets: string[];
}

export interface NarrativeCloudCertification {
  name: string;
  tagline: string;
}

export interface NarrativeCloudCertifications {
  bridge: string;
  pitch: string;
  verifyLabel: string;
  items: Record<string, NarrativeCloudCertification>;
}

export interface NarrativeTestimonial {
  name: string;
  role: string;
  company: string;
  context?: string;
  quote: string;
}

export interface LocaleNarrative {
  headline: string;
  tagline: string;
  summary: string;
  pillars: { title: string; description: string }[];
  stats: { label: string; value: string }[];
  experience: Record<string, NarrativeExperience>;
  projects: Record<string, NarrativeProject>;
  education: Record<string, NarrativeEducation>;
  volunteering: Record<string, NarrativeVolunteering>;
  testimonials: Record<string, NarrativeTestimonial>;
  skills: { category: string; items: string }[];
  cloudCertifications: NarrativeCloudCertifications;
}

export interface LocaleFile {
  ui: LocaleStrings;
  narrative: LocaleNarrative;
}
