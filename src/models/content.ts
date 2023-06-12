export interface ContentType {
  title?: string;
  date?: string | number;
  count?: number;
}

export interface ContentProps extends ContentType {
  id: number;
  url: string | string[];
}

export interface ContentDescriptionInfo extends ContentType {
  type: 'main' | 'archive';
}

export interface ContentBoxInfo extends ContentProps {
  type: 'main' | 'archive';
  subType?: string;
}
