/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { MovieDescription } from '@molecules';
import { FlexContainer, Img, ContentBoxImgWrap } from '@atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  movieModalState,
  movieModalDataState,
  movieModalPositionState,
  movieModalIdState,
} from '../../../store/movies';
import { MovieBoxInfo, MovieData } from '../../../models/movie';
// import emptyImg from '../../../assets/images/empty.png';
import emptyImg from '../../../assets/images/empty_medium.png';
import { languageState } from '../../../store/language/atom';

interface Props {
  type: 'main' | 'archive';
  data: MovieData;
}

const Parents = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  cursor: pointer;
`;

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

// export function MovieBox({ type, title, director, country, year, runningTime, url }: MovieBoxInfo) {
export function MovieBox({ type, data }: Props) {
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieModalData, setMovieModalData] = useRecoilState(movieModalDataState);
  const [top, setTop] = useRecoilState(movieModalPositionState);
  const [movieModalId, setmovieModalId] = useRecoilState(movieModalIdState);
  const language = useRecoilValue(languageState);

  console.log(data);

  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const onClick = () => {
    if (type === 'archive') {
      if (isMobile) {
        console.log('클릭:', data.id);
        navigate(`/archive/distributions/detail/${data.id}`);
      } else {
        setMovieModal(true);
        // setMovieModalData(data);
        setTop(window.scrollY);
        setmovieModalId(data.id);
        document.querySelector('body')?.classList.add('none');
      }
    } else {
      navigate('/archive/distributions');
    }
  };
  return isMobile ? (
    type === 'archive' ? (
      <Parents onClick={onClick}>
        <Wrap>
          <ContentBoxImgWrap isMobile={isMobile} type="mobile">
            <Img alt="이미지" src={data.stillImage.first === '' ? emptyImg : data.stillImage.first} objectfit="cover" />
          </ContentBoxImgWrap>
          <MovieDescription
            title={language === 'English' ? data.titleKo : data.titleEn}
            director={language === 'English' ? data.credit.directorNameKo : data.credit.directorNameEn}
            country={data.country}
            year={data.eventYear}
            runningTime={data.runningTime}
            type={type}
          />
        </Wrap>
      </Parents>
    ) : (
      <FlexContainer
        width={isMobile ? 296 / 0.8 : 413}
        direction="column"
        margin={type === 'main' ? '0px 17px 0px 0px' : '0px'}
        className={[type, 'cursor'].join(' ')}
        radius="16px"
        onClick={onClick}
      >
        <ContentBoxImgWrap isMobile={isMobile} type="mobile">
          <Img alt="이미지" src={data.stillImage.first === '' ? emptyImg : data.stillImage.first} objectfit="cover" />
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
    )
  ) : (
    <FlexContainer
      width={isMobile ? (type === 'archive' ? '100%' : 296 / 0.8) : 413}
      direction="column"
      margin={type === 'main' ? '0px 17px 0px 0px' : '0px'}
      className={[type, 'cursor'].join(' ')}
      radius="16px"
      onClick={onClick}
    >
      <ContentBoxImgWrap isMobile={isMobile} type="mobile">
        <Img alt="이미지" src={data.stillImage.first === '' ? emptyImg : data.stillImage.first} objectfit="cover" />
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
