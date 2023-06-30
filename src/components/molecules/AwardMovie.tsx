import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Span, Img, FlexContainer } from '@atoms';
import { AwardWinnersMovieType } from '../../models/history';
import { movieModalIdState, movieModalPositionState, movieModalState } from '../../store/movies';
import { languageState } from '../../store/language/atom';

interface Props {
  data: AwardWinnersMovieType;
}

const Grid = styled.ul`
  display: gird;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`;

export function AwardMovie({ data }: Props) {
  const [top, setTop] = useRecoilState(movieModalPositionState);
  const [movieModalId, setmovieModalId] = useRecoilState(movieModalIdState);
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);

  const { t } = useTranslation();
  const language = useRecoilValue(languageState);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  //   console.log(data);
  const handleMovieClick = () => {
    if (data.id) {
      if (isMobile) {
        navigate(`/archive/distributions/detail/${data.id}`);
      } else {
        setMovieModal(true);
        setTop(window.scrollY);
        setmovieModalId(data.id);
        document.querySelector('body')?.classList.add('none');
      }
    }
  };

  return (
    <FlexContainer align="inherit" onClick={() => handleMovieClick()} className="cursor">
      <div style={{ width: '32%', height: 'calc(200px * 0.8)' }}>
        <Img src={data.image} alt="수상작사진" />
      </div>
      <FlexContainer
        width="68%"
        direction="column"
        justify="center"
        bgcolor="#EEEEEE"
        padding="calc(24px * 0.8) 0 calc(24px * 0.8) calc(30px * 0.8)"
      >
        <Span size={1.5} weight="bold">
          {language === 'English' ? data.titleKo : data.titleEn}
        </Span>
        <Grid>
          <li>
            <Span>섹션 | {data.sectionName}</Span>
          </li>
          <li>
            <Span>감독 | {language === 'English' ? data.directorNameKo : data.directorNameEn}</Span>
          </li>
          <li>
            <Span>국가 | {data.country}</Span>
          </li>
          <li>
            <Span>제작년도 | {data.productionYear}</Span>
          </li>
        </Grid>
      </FlexContainer>
    </FlexContainer>
  );
}
