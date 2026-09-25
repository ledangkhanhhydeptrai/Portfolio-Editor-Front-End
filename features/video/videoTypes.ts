export interface VideoProject {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  category: string;
  duration: string;
  year: number;
}
