import React, { useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { SlideHeader } from '@molecules';
import { MainMovieBoxs } from '@organisms/mainMovieBoxs';
import { MovieInfo, MovieData } from 'src/models/movie';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { mainMovieScrollState } from '../../../recoil/notice/notice';
import { movieState, movieInitialState } from '../../../recoil/movies';
import { getMovieApi } from '../../../apis/movie/get-movie-api';

export function MainMovieList() {
  const scroll = useRecoilValue<HTMLDivElement | undefined>(mainMovieScrollState);
  const [initialMovieData, setInitialMovieData] = useRecoilState<MovieData[]>(movieInitialState); // api에서 받아오는 걸로
  const { t } = useTranslation();

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
      <SlideHeader text={t(`main.screening`)} onLeftClick={onLeftClick} onRightClick={onRightClick} />
      <MainMovieBoxs data={initialMovieData} />
    </div>
  );
}
