export type Lang = "es" | "en";

export interface LocalizedText {
  es: string;
  en: string;
}

export interface Pillar {
  title: LocalizedText;
  icon: string;
  content: LocalizedText;
}

export interface KeyStat {
  value: string;
  label: LocalizedText;
}

export interface Sector {
  name: LocalizedText;
  percentage: number;
}

export interface SectorRange {
  name: LocalizedText;
  low: number;
  high: number;
}

export interface ProjectImage {
  src: string;
  caption?: LocalizedText;
}

export type ProjectType = "research" | "assessment" | "policy" | "consulting";
export type ProjectStatus = "in_progress" | "completed";

export interface Project {
  id: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  description: LocalizedText;
  client: string;
  year: number;
  yearEnd?: number;
  region: string;
  type: ProjectType;
  status: ProjectStatus;
  featured?: boolean;
  featuredOrder?: number;
  featuredStat?: KeyStat;
  summaryHighlight?: LocalizedText;
  executiveSummary?: LocalizedText;
  childProjectsTitle?: LocalizedText;
  childProjectsSubtitle?: LocalizedText;
  pillarsTitle?: LocalizedText;
  pillarsSubtitle?: LocalizedText;
  pillars?: Pillar[];
  keyStats?: KeyStat[];
  sectorsTitle?: LocalizedText;
  sectorsSubtitle?: LocalizedText;
  sectors?: Sector[];
  sectorsType?: "percentage" | "range";
  sectorsRangeData?: SectorRange[];
  sectorsSuffix?: string;
  sectorsValuePrefix?: string;
  images?: ProjectImage[];
  externalUrl?: string;
  downloadUrl?: string;
  downloadUrlEn?: string;
  parentProject?: string;
}

export interface Report {
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  client: string;
  year: number;
  featuredStat?: KeyStat;
  executiveSummary?: LocalizedText;
  keyStats?: KeyStat[];
  sectors?: Sector[];
  pillars?: Pillar[];
  downloadUrl?: string;
  downloadUrlEn?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  image: string;
  linkedin: string;
  googleScholar?: string;
}

export type NewsCategory = "publicacion" | "logro" | "evento" | "alianza";

export interface NewsItem {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  date: string;
  category: NewsCategory;
}
