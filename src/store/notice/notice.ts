import React from 'react';
import { atom } from 'recoil';
import { PostType } from '@src/models/post';

export interface NoticeType {
  id?: number;
  title: string;
  date: string;
  isCheck: boolean;
}

const test: NoticeType[] = [
  { id: 1, date: '2023/03/21', title: '[2023 BIKI] 계약직 스태프 모집 공고(4차)', isCheck: true },
  { id: 2, date: '2023/03/21', title: '[2023 BIKI] 계약직 스태프 모집 공고(4차)', isCheck: true },
  {
    id: 3,
    date: '2023/03/21',
    title: '(채용) [2023 지역문화전문인력 일경험(신규)지원] 지역문화전문인력 공개모집',
    isCheck: false,
  },
  {
    id: 4,
    date: '2023/03/21',
    title: '(채용) [2023 지역문화전문인력 일경험(신규)지원] 지역문화전문인력 공개모집',
    isCheck: false,
  },
  {
    id: 5,
    date: '2023/03/21',
    title: '(채용) [2023 지역문화전문인력 일경험(신규)지원] 지역문화전문인력 공개모집',
    isCheck: true,
  },
  { id: 6, date: '2023/03/23', title: '[2023 BIKI] 계약직 스태프 모집 공고(4차)', isCheck: true },
  { id: 7, date: '2023/03/24', title: '[2023 BIKI] 계약직 스태프 모집 공고(4차)', isCheck: true },
  { id: 8, date: '2023/03/25', title: '[2023 BIKI] 계약직 스태프 모집 공고(4차)', isCheck: false },
  { id: 9, date: '2023/03/26', title: '[2023 BIKI] 계약직 스태프 모집 공고(4차)', isCheck: false },
  { id: 10, date: '2023/03/27', title: '[2023 BIKI] 계약직 스태프 모집 공고(4차)', isCheck: false },
  { id: 11, date: '2023/03/28', title: '[2023 BIKI] 계약직 스태프 모집 공고(4차)', isCheck: false },
  {
    id: 12,
    date: '2023/03/28',
    title: '[2023 BIKY] 어린이청소년집행위원회 비키즈(BIKies) 최종 합격자 안내',
    isCheck: false,
  },
];

export const noticeState = atom<NoticeType[]>({
  key: 'notices',
  default: test,
});

export interface ScrollType {
  current: object | null;
}

export const mainMovieScrollState = atom<HTMLDivElement | undefined>({
  key: 'scroll',
  default: undefined,
});

const defaultData = {
  id: 0,
  board: '',
  category: '',
  titleKo: '',
  titleEn: '',
  body: '',
  status: 0,
  highlightStatus: 0,
  files: [],
  view: 0,
  createdDated: '',
  createdDate: '',
};

export const noticeListState = atom<PostType[]>({
  key: 'notice',
  default: [defaultData],
});

export const noticeListInitialState = atom<PostType[]>({
  key: 'noticeInitial',
  default: [defaultData],
});
