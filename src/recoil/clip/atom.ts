import { atom } from 'recoil';
import { ClipType } from '@src/models/clip';

export const clipState = atom<ClipType[]>({
  key: 'clip',
  // default: [{ id: 0, titleKo: '', titleEn: '', images: [], url: '', status: 0, view: 0, createdDate: '' }],
  default: [],
});
