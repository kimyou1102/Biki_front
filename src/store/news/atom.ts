import { atom } from 'recoil';
import { PostType } from '@src/models/post';

export const noticeInputState = atom<string>({
  key: 'noticeInput',
  default: '',
});

// export const noticeSearchState = atom<[]>({
//   key: 'noticeSearchState',
//   default: '',
// });
