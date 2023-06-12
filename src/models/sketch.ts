export interface SketchProps {
  id: number;
  urls: string[];
  title: string;
  date: string | number;
  count: number;
}

export type SketchType = {
  id: number;
  titleKo: string;
  titleEn: string;
  status: number;
  view: number;
  createdDate: string;
  images: string[];
  url?: string;
};

export interface Photo {
  url: string;
}
