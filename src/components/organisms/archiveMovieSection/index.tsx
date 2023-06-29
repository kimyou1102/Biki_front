import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { ArchiveMovieList } from '@organisms/archiveMovieList';
import { MovieInfo, MovieData } from 'src/models/movie';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { movieState, movieInitialState } from '../../../store/movies';
import { getMovieApi } from '../../../apis/movie/get-movie-api';

interface Props {
  data: MovieData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function ArchiveMovieSection({ data, page, setPage }: Props) {
  const { t } = useTranslation();

  // const [movies, setMovies] = useRecoilState<MovieData[]>(movieState);
  // const setInitialMovieData = useSetRecoilState<MovieData[]>(movieInitialState); // api에서 받아오는 걸로

  // const [page, setPage] = useState(0);

  // const [movies, setMovies] = useState([]);

  // const movieApi = useCallback(async () => {
  //   await getMovieApi()
  //     .then((res) => {
  //       console.log(res);
  //       setMovies(res);
  //       setInitialMovieData(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, [setInitialMovieData, setMovies]);

  // useEffect(() => {
  //   movieApi();
  // }, [movieApi]);

  return data.length === 0 ? (
    <h1>{t(`archive.empty`)}</h1>
  ) : (
    <ArchiveMovieList page={page} setPage={setPage} movies={data} />
  );

  // return movies.length === 0 ? (
  //   <h1>등록된 게시물이 없습니다.</h1>
  // ) : (
  //   <ArchiveMovieList page={page} setPage={setPage} movies={movies} />
  // );
}
