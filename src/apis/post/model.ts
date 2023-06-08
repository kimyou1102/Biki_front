export type PostType = {
  id: number;
  board: string;
  category: string;
  titleKo: string;
  titleEn: string;
  body: string;
  status: number;
  highlightStatus: number;
  files: any[];
  count?: number;
  createdDated?: number;
};
