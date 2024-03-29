import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { ArchiveTemplate } from '@templates';
import { ArchiveMovieSection, ArchiveModal, ArchiveMovieList } from '@organisms';
import { ModalWrap } from '@atoms';
import { Box, CircularProgress } from '@mui/material';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  movieModalState,
  movieModalDataState,
  movieModalPositionState,
  movieState,
  movieInitialState,
} from '../../../../store/movies';
import { MovieBoxInfo, MovieData } from '../../../../models/movie';
import { getMovieApi } from '../../../../apis/movie/get-movie-api';
import { pageState } from '../../../../store/archive/atome';

export function ArchiveMoviePage() {
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieModalData, setMovieModalData] = useRecoilState(movieModalDataState);
  const [top, setTop] = useRecoilState(movieModalPositionState);
  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useRecoilState<MovieData[]>(movieState);
  const setInitialMovieData = useSetRecoilState<MovieData[]>(movieInitialState); // api에서 받아오는 걸로

  // const [page, setPage] = useState(0);
  const [page, setPage] = useRecoilState<number>(pageState);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const movieApi = useCallback(async () => {
    await getMovieApi()
      .then((res) => {
        // console.log(res);
        setMovies(res);
        setInitialMovieData(res);
        setIsLoading(false);
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
        {isLoading ? (
          <Box width="100%" height="50vh" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="success" />
          </Box>
        ) : (
          //       <ArchiveTemplate title={t(`movie.distribution`)} type="film">
          //         {movies.length === 0 ? (
          //           <h1>{t(`archive.empty`)}</h1>
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
