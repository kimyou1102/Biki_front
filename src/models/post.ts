export type PostType = {
  id: number;
  board: string;
  category: string;
  titleKo: string;
  titleEn: string;
  body: string;
  status: number;
  highlightStatus: number;
  files: Files[];
  view?: number;
  createdDated?: string;
  createdDate?: string;
};

type Files = {
  count: number;
  file: string;
};
