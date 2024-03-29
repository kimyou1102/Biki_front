import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { ArchiveTemplate } from '@templates';
import { ArchiveModal, ArchiveMovieList } from '@organisms';
import { ModalWrap } from '@atoms';
import { Box, CircularProgress } from '@mui/material';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  movieModalState,
  movieModalDataState,
  movieModalPositionState,
  movieState,
  movieInitialState,
} from '../../store/movies';
import { MovieData } from '../../models/movie';
import { getSectionByIdApi } from '../../apis/section/get-section-by-id-api';

interface Props {
  title: string;
  id: number;
}

export function ProgramMoviesTemplate({ title, id }: Props) {
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieModalData, setMovieModalData] = useRecoilState(movieModalDataState);
  const [top, setTop] = useRecoilState(movieModalPositionState);

  const [movies, setMovies] = useRecoilState<MovieData[]>(movieState);
  const setInitialMovieData = useSetRecoilState<MovieData[]>(movieInitialState); // api에서 받아오는 걸로
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);
  const { t } = useTranslation();

  const sectionApi = useCallback(async () => {
    await getSectionByIdApi(id)
      .then((res) => {
        console.log(res.list);
        setMovies(res.list);
        setInitialMovieData(res.list);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setMovies, setInitialMovieData, id]);

  useEffect(() => {
    setIsLoading(true);
    sectionApi();
  }, [sectionApi]);

  const onOutsideModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#modal')) {
      setMovieModal(false);
      document.querySelector('body')?.classList.remove('none');
    }
  };

  return (
    <>
      <ArchiveTemplate
        title={title}
        id={id}
        type="film"
        pageTitle={t(`screening.title`)}
        sub={t(`screening.introduce`)}
      >
        {isLoading ? (
          <Box width="100%" height="50vh" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="success" />
          </Box>
        ) : (
          //       <ArchiveTemplate title={title} type="film" pageTitle={t(`screening.title`)} sub={t(`screening.introduce`)}>
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
