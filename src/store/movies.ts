import React from 'react';
import { atom } from 'recoil';
import { MovieInfo, MovieData, UserMovieData } from 'src/models/movie';

export const testMovie: MovieInfo[] = [
  {
    id: 1,
    title: '내 이름은 말룸 테스트',
    director: '테스트',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 2,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 3,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 4,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 5,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 6,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 7,
    title: '내 이름은 말룸 테스트',
    director: '테스트',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 8,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 9,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 10,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 11,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 12,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 13,
    title: '두번째 페이지 제목',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 14,
    title: '내 이름은 말룸 테스트',
    director: '테스트',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 15,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 16,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 17,
    title: '울산현대',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 18,
    title: '전북현대',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 19,
    title: '라화쿵푸 마라탕',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 20,
    title: '탕화쿵푸 마라탕',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 21,
    title: '스마일 마라탕',
    director: '테스트',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 22,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 23,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 24,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 25,
    title: '세번째 페이지 첫제목',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 26,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
  {
    id: 27,
    title: '내 이름은 말룸',
    director: '루이사 코페튜',
    country: '브라질',
    year: 2021,
    runningTime: 18,
    url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
  },
];

const defaultData: MovieData = {
  id: 0,
  eventYear: 0,
  section: {
    id: 0,
    eventYear: 0,
    nameKo: '',
    nameEn: '',
    descriptionKo: '',
    descriptionEn: '',
  },
  titleKo: '',
  titleEn: '',
  productionYear: 0,
  country: '',
  rating: '',
  runningTime: 0,
  color: '',
  film: '',
  subTitle: '',
  youtube: '',
  synopsisKo: '',
  synopsisEn: '',
  programmerNoteKo: '',
  programmerNoteEn: '',
  relatedMovies: [],
  categories: [],
  tags: [],
  screening: {
    id: 0,
    status: '',
    vimeo: '',
  },
  distribution: {
    id: 0,
    status: '',
    url: '',
  },
  credit: {
    id: 0,
    directorNameKo: '',
    directorNameEn: '',
    profileImage: '',
    directorInfoKo: '',
    directorInfoEn: '',
    castingKo: '',
    castingEn: '',
  },
  contact: {
    id: 0,
    making: '',
    distribution: '',
  },
  stillImage: {
    id: 1,
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  status: '',
  mainPostStatus: '',
};

const userMovieDefault: UserMovieData = {
  id: 0,
  eventYear: 0,
  section: {
    id: 0,
    eventYear: 0,
    nameKo: '',
    nameEn: '',
    descriptionKo: '',
    descriptionEn: '',
  },
  titleKo: '',
  titleEn: '',
  productionYear: 0,
  country: '',
  rating: '',
  runningTime: '',
  color: '',
  film: '',
  subTitle: '',
  youtube: '',
  synopsisKo: '',
  synopsisEn: '',
  relatedMovies: [
    {
      id: 0,
      titleKo: '',
      eventYear: 0,
      titleEn: '',
      directorName: '',
      runningTime: 0,
      stillImage: '',
    },
  ],
  tags: [],
  programmerNoteKo: '',
  programmerNoteEn: '',
  screening: {
    id: 0,
    status: '',
    vimeo: '',
  },
  distribution: {
    id: 0,
    status: '',
    url: '',
  },
  credit: {
    id: 0,
    directorNameKo: '',
    directorNameEn: '',
    profileImage: '',
    directorInfoKo: '',
    directorInfoEn: '',
    castingKo: '',
    castingEn: '',
  },
  contact: {
    id: 0,
    email: '',
    distribution: '',
  },
  stillImage: {
    id: 0,
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  schedule: [
    {
      id: 0,
      screeningDate: '',
      startTime: '',
      theater: '',
    },
  ],
  categoryImages: [],
};

export const movieState = atom<MovieData[]>({
  key: 'movies',
  default: [defaultData],
});

export const movieInitialState = atom<MovieData[]>({
  key: 'movieInitialState',
  default: [defaultData],
});

export const movieModalState = atom<boolean>({
  key: 'movieModalState',
  default: false,
});

export const movieModalDataState = atom<UserMovieData>({
  key: 'movieModalDataState',
  default: userMovieDefault,
});

export const movieModalPositionState = atom<number>({
  key: 'movieModalPositionState',
  default: 0,
});

export const movieModalIdState = atom<number>({
  key: 'movieModalIdState',
  default: Infinity,
});
