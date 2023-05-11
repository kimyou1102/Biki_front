export interface YoutubeType {
  title?: string;
  date?: string | number;
  count?: number;
}

export interface YoutubeProps extends YoutubeType {
  id: number;
  url: string;
}
