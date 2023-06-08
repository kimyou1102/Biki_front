import { atom } from 'recoil';
import { SketchProps } from 'src/models/sketch';

export const testSketchs: SketchProps[] = [
  {
    id: 1,
    title: '[2022 BIKY] 고마워요, 자원활동가 비키비!',
    date: '2022 / 08 / 05',
    count: 390,
    urls: [
      'http://www.biky.or.kr/uploads/editor/20220805145614_6copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805145602_3copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805145554_2copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805145659_8copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805150022_9copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805150043_10copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805150110_11copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805150143_12copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805150210_13copy.jpg',
      'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66effd194bae87d73dd00522794070855d',
    ],
  },
  {
    id: 2,
    title: '[2022 BIKY] 비키 시상식(2)',
    date: '2022 / 08 / 05',
    count: 405,
    urls: [
      'http://www.biky.or.kr/uploads/editor/20220805151019_1-18.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151222_1-18-1.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151232_1-19copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151257_1-20copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151353_1-20-2copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151409_1-21copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151421_1-21-2copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151435_1-21-3copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151520_1-21-4copy.jpg',
    ],
  },
  {
    id: 3,
    title: '[2022 BIKY] 비키 시상식(1)',
    date: '2022 / 08 / 05',
    count: 405,
    urls: [
      'http://www.biky.or.kr/uploads/editor/20220805144048_1-1copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805144057_1-2-1copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805144106_1-2-2copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805144114_1-4copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805144124_1-5copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805144158_1-5-2copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805144224_1-5-3copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805151435_1-21-3copy.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805144242_1-5-5copy.jpg',
    ],
  },
  {
    id: 4,
    title: '[2022 BIKY] 게스트투어',
    date: '2022 / 08 / 05',
    count: 405,
    urls: [
      'http://www.biky.or.kr/uploads/editor/20220805130641_1.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805130655_2.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805130730_3.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805130739_4.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805130756_5.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805130804_6.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805130818_7.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805130830_8.jpg',
      'http://www.biky.or.kr/uploads/editor/20220805132051_DSC_1687copy.jpg',
    ],
  },
];

export const sketchState = atom<SketchProps[]>({
  key: 'sketch',
  default: testSketchs,
});
