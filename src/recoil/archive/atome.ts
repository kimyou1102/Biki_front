import { atom } from 'recoil';

export const filmInputState = atom<string>({
  key: 'filmValue',
  default: '',
});

export const sketchInputState = atom<string>({
  key: 'sketchValue',
  default: '',
});

export const sketchPhotos = atom<string[]>({
  key: 'sketchPhoto',
  default: [],
});

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});
