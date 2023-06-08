import React from 'react';
import { ArchiveTemplate } from '@templates';
import { ArchiveMovieSection, ArchiveModal } from '@organisms';
import { Footer } from '@layout/Footer';
import { ModalWrap } from '@atoms';
import { useRecoilState } from 'recoil';
import { movieModalState, movieModalDataState, movieModalPositionState } from '../../../recoil/movies';
import { MovieBoxInfo, MovieData } from '../../../models/movie';

export function ArchiveMoviePage() {
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieModalData, setMovieModalData] = useRecoilState(movieModalDataState);
  const [top, setTop] = useRecoilState(movieModalPositionState);

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
      <ArchiveTemplate title="배급작품" type="film">
        <ArchiveMovieSection />
      </ArchiveTemplate>
      <ModalWrap
        top={top}
        className={movieModal ? '' : 'none'}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onOutsideModalClick(e)}
      >
        <ArchiveModal />
      </ModalWrap>
      <Footer />
    </>
  );
}
