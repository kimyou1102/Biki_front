import React, { useState, useEffect, useCallback } from 'react';
import { ArchiveTemplate } from '@templates';
import { ArchiveModal, ArchiveMovieList } from '@organisms';
import { ModalWrap } from '@atoms';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  movieModalState,
  movieModalDataState,
  movieModalPositionState,
  movieState,
  movieInitialState,
} from '../../../recoil/movies';
import { MovieBoxInfo, MovieData } from '../../../models/movie';
import { getSectionByWordApi } from '../../../apis/section/get-section-by-word-api';

export function FindMeFilmPage() {
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieModalData, setMovieModalData] = useRecoilState(movieModalDataState);
  const [top, setTop] = useRecoilState(movieModalPositionState);

  const [movies, setMovies] = useRecoilState<MovieData[]>(movieState);
  const setInitialMovieData = useSetRecoilState<MovieData[]>(movieInitialState); // api에서 받아오는 걸로

  const [page, setPage] = useState(0);

  const sectionApi = useCallback(async () => {
    await getSectionByWordApi('나를 찾아서')
      .then((res) => {
        console.log(res);
        setMovies(res);
        setInitialMovieData(res);
      })
      .catch((err) => console.log(err));
  }, [setMovies, setInitialMovieData]);

  useEffect(() => {
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
      <ArchiveTemplate title="개막작" type="film" pageTitle="2023 프로그램" sub="제18회 BIKY의 상영작을 소개합니다">
        {movies.length === 0 ? (
          <h1>등록된 게시물이 없습니다.</h1>
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
