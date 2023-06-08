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
  movies: ScheduleMovieType[];
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
