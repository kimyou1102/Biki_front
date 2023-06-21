import React from 'react';
import { MovieDescription } from '@molecules';
import { FlexContainer, Img, ContentBoxImgWrap } from '@atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  movieModalState,
  movieModalDataState,
  movieModalPositionState,
  movieModalIdState,
} from '../../../recoil/movies';
import { MovieBoxInfo, MovieData } from '../../../models/movie';
// import emptyImg from '../../../assets/images/empty.png';
import emptyImg from '../../../assets/images/empty_medium.png';
import { languageState } from '../../../recoil/language/atom';

interface Props {
  type: 'main' | 'archive';
  data: MovieData;
}

// export function MovieBox({ type, title, director, country, year, runningTime, url }: MovieBoxInfo) {
export function MovieBox({ type, data }: Props) {
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieModalData, setMovieModalData] = useRecoilState(movieModalDataState);
  const [top, setTop] = useRecoilState(movieModalPositionState);
  const [movieModalId, setmovieModalId] = useRecoilState(movieModalIdState);
  const language = useRecoilValue(languageState);

  const navigate = useNavigate();

  const onClick = () => {
    if (type === 'archive') {
      setMovieModal(true);
      // setMovieModalData(data);
      setTop(window.scrollY);
      setmovieModalId(data.id);
      document.querySelector('body')?.classList.add('none');
    } else {
      navigate('/archive/distributions');
    }
  };
  return (
    <FlexContainer
      width={413}
      direction="column"
      margin={type === 'main' ? '0px 17px 0px 0px' : '0px'}
      className={[type, 'cursor'].join(' ')}
      radius="16px"
      onClick={onClick}
    >
      <ContentBoxImgWrap>
        <Img alt="이미지" src={data.stillImage.first === '' ? emptyImg : data.stillImage.first} />
      </ContentBoxImgWrap>
      <MovieDescription
        title={language === 'English' ? data.titleKo : data.titleEn}
        director={language === 'English' ? data.credit.directorNameKo : data.credit.directorNameEn}
        country={data.country}
        year={data.eventYear}
        runningTime={data.runningTime}
        type={type}
      />
    </FlexContainer>
  );
}
