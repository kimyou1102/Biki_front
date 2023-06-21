import { atom } from 'recoil';

export const languageState = atom<string>({
  key: 'languageState',
  default: 'English',
});
