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

export interface Props {
  movieInfo: MovieType;
}
