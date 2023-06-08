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

// eslint-disable-next-line @typescript-eslint/naming-convention
export type modalDataType = {
  title: string;
  urls: string[];
};

export const modalDataState = atom<modalDataType>({
  key: 'modalDataState',
  default: {
    title: '',
    urls: [],
  },
});

export const modalPositionState = atom<number>({
  key: 'modalPositionState',
  default: 0,
});
