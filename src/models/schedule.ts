export type MovieSheduleListType = {
  runningDateStart: string;
  runningDateEnd: string;
  totalOfTimes: number; // 회차수
  theaters: MovieScheduleTheaterItemType[];
  schedule: ScheduleItemType[][];
};

export type MovieScheduleTheaterItemType = {
  name: string;
  id: number;
};

export type ScheduleItemType = {
  id: number;
  type: string;
  round: number;
  theater: string;
  screeningDate: string;
  titleKo: string;
  titleEn: string;
  startTime: string;
  rating: string;
  runningTime: number;
  label: MovieLabelType;
  movies: ScheduleMovieType[];
};
export type MovieLabelType = {
  id: number;
  name: string;
  titleKo: string;
  titleEn: string;
  descriptionKo: string;
  descriptionEn: string;
  bgColor: string;
  status: number;
};

export type ScheduleMovieType = {
  id: number;
  title: string;
};

export type ScheduleVenueType = {
  id: number;
  nameKo: string;
  runningDateStart: string;
};
