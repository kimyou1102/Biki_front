import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { ArchiveTemplate } from '@templates';
import { ArchiveMovieSection, ArchiveModal, ArchiveMovieList } from '@organisms';
import { Footer } from '@layout/Footer';
import { ModalWrap } from '@atoms';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  movieModalState,
  movieModalDataState,
  movieModalPositionState,
  movieState,
  movieInitialState,
} from '../../../../recoil/movies';
import { MovieBoxInfo, MovieData } from '../../../../models/movie';
import { getMovieApi } from '../../../../apis/movie/get-movie-api';

export function ArchiveMoviePage() {
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieModalData, setMovieModalData] = useRecoilState(movieModalDataState);
  const [top, setTop] = useRecoilState(movieModalPositionState);

  const [movies, setMovies] = useRecoilState<MovieData[]>(movieState);
  const setInitialMovieData = useSetRecoilState<MovieData[]>(movieInitialState); // api에서 받아오는 걸로

  const [page, setPage] = useState(0);
  const { t } = useTranslation();

  const movieApi = useCallback(async () => {
    await getMovieApi()
      .then((res) => {
        // console.log(res);
        setMovies(res);
        setInitialMovieData(res);
      })
      .catch((err) => console.log(err));
  }, [setInitialMovieData, setMovies]);

  useEffect(() => {
    movieApi();
  }, [movieApi]);

  const onOutsideModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(e.target);
    const target = e.target as HTMLElement;
    if (!target.closest('#modal')) {
      setMovieModal(false);
      document.querySelector('body')?.classList.remove('none');
    }
  };

  return (
    <>
      <ArchiveTemplate title={t(`movie.distribution`)} type="film">
        {movies.length === 0 ? (
          <h1>{t(`archive.empty`)}</h1>
        ) : (
          <ArchiveMovieList page={page} setPage={setPage} movies={movies} />
        )}
      </ArchiveTemplate>
      <ModalWrap
        top={top}
        className={movieModal ? '' : 'none'}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onOutsideModalClick(e)}
      >
        <ArchiveModal />
      </ModalWrap>
    </>
  );
}
