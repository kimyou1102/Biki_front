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

export type MovieData = {
  id: number;
  eventYear: number;
  section: {
    id: number;
    eventYear: number;
    nameKo: string;
    nameEn: string;
    descriptionKo: string;
    descriptionEn: string;
  };
  titleKo: string;
  titleEn: string;
  productionYear: number;
  country: string;
  rating: string;
  runningTime: number;
  color: string;
  film: string;
  subTitle: string;
  youtube: string;
  synopsisKo: string;
  synopsisEn: string;
  programmerNoteKo: string;
  programmerNoteEn: string;
  relatedMovies: [];
  categories: number[];
  tags: number[];
  screening: {
    id: number;
    status: string;
    vimeo: string;
  };
  distribution: {
    id: number;
    status: string;
    url: string;
  };
  credit: {
    id: number;
    directorNameKo: string;
    directorNameEn: string;
    profileImage: string;
    directorInfoKo: string;
    directorInfoEn: string;
    castingKo: string;
    castingEn: string;
  };
  contact: {
    id: number;
    making: string;
    distribution: string;
  };
  stillImage: {
    id: number;
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  status: string;
  mainPostStatus: string;
};
