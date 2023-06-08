import React, { useEffect, useCallback } from 'react';
import { SlideHeader } from '@molecules';
import { MainMovieBoxs } from '@organisms/mainMovieBoxs';
import { MovieInfo, MovieData } from 'src/models/movie';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { mainMovieScrollState } from '../../../recoil/notice/notice';
import { movieState, movieInitialState } from '../../../recoil/movies';
import { getMovieApi } from '../../../apis/movie/get-movie-api';

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

  const [initialMovieData, setInitialMovieData] = useRecoilState<MovieData[]>(movieInitialState); // api에서 받아오는 걸로

  // const [movies, setMovies] = useRecoilState<MovieData[]>(movieInitialState);

  const movieApi = useCallback(async () => {
    await getMovieApi()
      .then((res) => {
        setInitialMovieData(res);
      })
      .catch((err) => console.log(err));
  }, [setInitialMovieData]);

  useEffect(() => {
    movieApi();
  }, [movieApi]);

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
      <MainMovieBoxs data={initialMovieData} />
    </div>
  );
}
