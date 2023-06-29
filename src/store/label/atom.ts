import { MovieLabelType } from '@src/models/schedule';
import { atom } from 'recoil';

export const labelState = atom<MovieLabelType[]>({
  key: 'labelState',
  default: [],
});
