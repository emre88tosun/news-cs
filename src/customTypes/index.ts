export type ApiResponse = {
  status: string;
  totalResults: number;
  results: News[];
  nextPage: string;
};

export type News = {
  article_id: string;
  title: string;
  link: string;
  keywords: string[] | null;
  creator: string[] | null;
  video_url: string | null;
  description: string;
  content: string;
  pubDate: string;
  pubDateTZ: string;
  image_url: string | null;
  source_id: string;
  source_priority: number;
  source_name: string;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
  ai_tag: string;
  sentiment: string;
  sentiment_stats: string;
  ai_region: string;
  ai_org: string;
  duplicate: boolean;
};