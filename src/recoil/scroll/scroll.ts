import { atom } from 'recoil';

export const mainYoutubeScrollState = atom<HTMLDivElement | undefined>({
  key: 'youTubeScroll',
  default: undefined,
});

export const mainEventScrollState = atom<HTMLDivElement | undefined>({
  key: 'eventScroll',
  default: undefined,
});
