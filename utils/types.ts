export type File = {
  id: number;
  directus_files_id: string;
};

export type Quote = {
  id: number;
  author: string;
  content: string;
};

export type About = {
  title: string;
  subtitle: string;
  // html string
  content: string;
  // image id string
  profile_picture: string;
  quotes: Quote[];
};

export type Page = {
  id: number;
  title: string;
  slug: string;
  keywords: string;
  description: string;
};

export type SocialsUnion =
  | "facebook"
  | "twitter"
  | "instagram"
  | "goodreads"
  | "bookbub";

export type Social = {
  id: number;
  title: string;
  url: string;
};

export type OrderLink = {
  id: number;
  title: string;
  url: string;
};

export type Book = {
  id: number;
  title: string;
  subtitle: string;
  // html string
  summary: string;
  // image id string
  cover: string;
  // image id string
  banner: string;
  quotes: Quote[];
  order_links: OrderLink[];
  aahodges_series_id: number;
};

export type Series = {
  id: number;
  title: string;
  subtitle: string;
  // world id
  world: number;
  banners: File[];
  books: Book[];
};

export type WorldSection = {
  id: number;
  order: number;
  emphasis: string;
  // html string
  content?: string;
  images: File[];
};

export type WorldTimelineEntry = {
  id: number;
  title: string;
  // html string
  content?: string;
  images: File[];
};

export type WorldTimeline = {
  id: number;
  order: number;
  entries?: WorldTimelineEntry[];
};

export type World = {
  id: number;
  title: string;
  subtitle: string;
  // series id's
  series: number[];
  sections: WorldSection[];
  timelines: WorldTimeline[];
};

export type Newsletter = {
  title: string;
  content: string;
  background_image: string;
};
