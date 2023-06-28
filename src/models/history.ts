export type HistoryType = {
  id: number;
  eventYear: number;
  nameKo: string;
  nameEn: string;
  eventStart: string;
  eventEnd: string;
  theaterKo: string;
  theaterEn: string;
  hostKo: string;
  hostEn: string;
  eventNature: {
    id: number;
    mottoKo: string;
    mottoEn: string;
    sloganKo: string;
    sloganEn: string;
    formKo: string;
    formEn: string;
  };
  eventScale: {
    id: number;
    movieCountryCount: number;
    movieCount: number;
    guestCountryCount: number;
    guestCount: number;
    screeningCount: number;
  };
  posterImage: string;
  awardWinners: [
    {
      id: number;
      nameKo: string;
      nameEn: string;
      descriptionKo: string;
      descriptionEn: string;
      movies: AwardWinnersMovieType[];
    },
  ];
};

export type AwardWinnersMovieType = {
  id: number;
  sectionName: string;
  titleKo: string;
  titleEn: string;
  directorNameKo: string;
  directorNameEn: string;
  country: string;
  productionYear: 2022;
  image: string;
};
