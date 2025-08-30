export interface Article {
  id: string;
  created_at: string;
  title_en: string;
  title_so: string;
  title_ar: string;
  content_en: string;
  content_so: string;
  content_ar: string;
  image_url: string;
  video_url?: string;
  category: string;
}
