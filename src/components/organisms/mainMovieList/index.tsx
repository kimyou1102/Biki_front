import React from 'react';
import { SlideHeader } from '@molecules';
import { MainMovieBoxs } from '@organisms/mainMovieBoxs';
import { MovieInfo } from 'src/models/movie';
import { useRecoilValue } from 'recoil';
import { mainMovieScrollState } from '../../../recoil/notice/notice';

export function MainMovieList() {
  const scroll = useRecoilValue<HTMLDivElement | undefined>(mainMovieScrollState);
  const test: MovieInfo[] = [
    {
      id: 1,
      title: '내 이름은 말룸 테스트',
      director: '테스트',
      country: '브라질',
      year: 2021,
      runningTime: 18,
      url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
    },
    {
      id: 2,
      title: '내 이름은 말룸',
      director: '루이사 코페튜',
      country: '브라질',
      year: 2021,
      runningTime: 18,
      url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
    },
    {
      id: 3,
      title: '내 이름은 말룸',
      director: '루이사 코페튜',
      country: '브라질',
      year: 2021,
      runningTime: 18,
      url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
    },
    {
      id: 4,
      title: '내 이름은 말룸',
      director: '루이사 코페튜',
      country: '브라질',
      year: 2021,
      runningTime: 18,
      url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
    },
    {
      id: 5,
      title: '내 이름은 말룸',
      director: '루이사 코페튜',
      country: '브라질',
      year: 2021,
      runningTime: 18,
      url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
    },
    {
      id: 6,
      title: '내 이름은 말룸',
      director: '루이사 코페튜',
      country: '브라질',
      year: 2021,
      runningTime: 18,
      url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
    },
    {
      id: 7,
      title: '내 이름은 말룸',
      director: '루이사 코페튜',
      country: '브라질',
      year: 2021,
      runningTime: 18,
      url: 'http://www.biky.or.kr/uploads/stillcut/7bc0a491e2e82c11b7f8b3603e9ed479.jpg',
    },
  ];

  const onLeftClick = () => {
    if (scroll) {
      scroll.scrollBy({ left: -600, top: 0, behavior: 'smooth' });
    }
  };

  const onRightClick = () => {
    if (scroll) {
      scroll.scrollBy({ left: 600, top: 0, behavior: 'smooth' });
    }
  };
  return (
    <div>
      <SlideHeader text="BIKI 상영작" onLeftClick={onLeftClick} onRightClick={onRightClick} />
      <MainMovieBoxs data={test} />
    </div>
  );
}
