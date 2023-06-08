import { atom } from 'recoil';
import { PostType } from 'src/apis/post/model';

export const noticeInputState = atom<string>({
  key: 'noticeInput',
  default: '',
});

// export const noticeSearchState = atom<[]>({
//   key: 'noticeSearchState',
//   default: '',
// });
