import { atom } from 'recoil';

export const koUrlState = atom<string[]>({
  key: 'koUrlState',
  default: [],
});

export const enUrlState = atom<string[]>({
  key: 'enUrlState',
  default: [],
});
