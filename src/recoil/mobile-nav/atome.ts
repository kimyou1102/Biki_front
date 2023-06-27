import { atom } from 'recoil';

export const navState = atom<boolean>({
  key: 'navState',
  default: false,
});
