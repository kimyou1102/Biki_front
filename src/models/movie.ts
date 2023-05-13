export interface MovieType {
  title: string;
  director: string;
  country: string;
  year: number;
  runningTime: number;
}

export interface MovieInfo extends MovieType {
  id: number;
  url: string;
}

export interface MovieDescriptionInfo extends MovieType {
  type: 'main' | 'archive';
}

export interface MovieBoxInfo extends MovieInfo {
  type: 'main' | 'archive';
}

export interface Props {
  movieInfo: MovieBoxInfo;
}
