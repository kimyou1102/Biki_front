import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Span, Text, Img, H1, FlexContainer, Button } from '@atoms';
import { ScheduleTable, RelatedMovies } from '@molecules';
import { getMovieByIdApi } from '../../apis/movie/get-movie-by-id-api';
import { getUserMoviedApi } from '../../apis/movie/get-user-movie-detail-api';
import { ArchiveModalSlide } from './ArchiveModalSlide';
import { movieModalState, movieModalDataState, movieModalIdState } from '../../store/movies';
import { MovieBoxInfo, MovieData, UserMovieData } from '../../models/movie';
import close from '../../assets/images/close.png';
import emptyImg from '../../assets/images/empty.png';
import { languageState } from '../../store/language/atom';

const Container = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '100%' : 'calc(1600px * 0.8)')};
  background-color: white;
  overflow-y: auto;
  height: 100vh;
  padding: ${(props) => (props.isMobile ? '0 16px' : 'calc(100px * 0.8) calc(120px * 0.8)')};
  box-sizing: border-box;
`;

const Wrap = styled.div`
  margin-bottom: calc(48px * 0.8);
  &.contact {
    display: flex;
    flex-direction: column;
    gap: calc(16px * 0.8);
  }
`;

const TextWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  gap: calc(16px * 0.8) calc(29px * 0.8);
  width: calc(495px * 0.8);
`;

export function ArchiveModal() {
  const [movie, setMovie] = useRecoilState<UserMovieData>(movieModalDataState);
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieModalId, setmovieModalId] = useRecoilState(movieModalIdState);
  const [movieSchedule, setMovieSchedule] = useState<any>();
  const language = useRecoilValue(languageState);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const movieApi = useCallback(async () => {
    await getUserMoviedApi(movieModalId)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
        // setRelatedMovies((prev) => [...prev, res.data]);
        setMovieSchedule({ schedule: res.data.schedule, addInfo: res.data.tags });
      })
      .catch((err) => console.log(err));
  }, [movieModalId, setMovie]);

  useEffect(() => {
    if (movieModalId !== Infinity) {
      movieApi();
    }
  }, [movieApi, movieModalId]);

  // useEffect(() => {
  //   if (slick) {
  //     console.log(slick);
  //     slick.slickGoTo(0);
  //   }
  // }, [movieModalData, slick]);

  // useEffect(() => {
  //   // movieModal : 모달이 켜지고 꺼질 때마다 연관 영화 배열 초기화(중복 문제)
  //   setRelatedMovies([]);
  // }, [movieModalData]);

  const onCloseClick = () => {
    setMovieModal(false);
    document.querySelector('body')?.classList.remove('none');
  };

  // console.log({ ...movie.schedule, addInfo: movie.tags });
  console.log(movie);

  return (
    <Container id="modal" isMobile={isMobile}>
      <FlexContainer justify="right" align="center" margin="0 calc(36px * 0.8) calc(32px * 0.8) 0">
        {/* <Span weight="bold" size={2.5}>
          {t(`movie.distribution`)}
        </Span> */}
        <Button border="none" width={48} height={48} onClick={onCloseClick}>
          <Img src={close} alt="닫기아이콘" width={48} height={48} />
        </Button>
      </FlexContainer>
      <ArchiveModalSlide data={movie} />
      <Wrap>
        <Text size={1.25} weight="bold" margin="calc(16px * 0.8) 0">
          SCHEDULE
        </Text>
        <ScheduleTable data={movieSchedule} />
      </Wrap>
      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          {t(`movie.synopsis`)}
        </Text>
        <Span>{language === 'English' ? movie.synopsisKo : movie.synopsisEn}</Span>
      </Wrap>
      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          {t(`movie.programmerNote`)}
        </Text>
        <Span>{language === 'English' ? movie.programmerNoteKo : movie.programmerNoteEn}</Span>
      </Wrap>
      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          {t(`movie.category`)}
        </Text>
        <FlexContainer>
          {movie.categoryImages.map((item) => (
            <Img alt="카테고리이미지" src={item} width={122} height={122} margin="0 calc(20px * 0.8) 0 0" />
          ))}
        </FlexContainer>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          Credit
        </Text>
        <TextWrap>
          <Span>{t(`archive.section`)}</Span>
          <Span weight="bold">{language === 'English' ? movie.section.nameKo : movie.section.nameEn}</Span>
          <Span>{t(`archive.actor`)}</Span>
          <Span weight="bold">{language === 'English' ? movie.credit.castingKo : movie.credit.castingEn}</Span>
          <Span>{t(`archive.production`)}</Span>
          <Span weight="bold">{movie.contact.distribution}</Span>
          <Span>{t(`archive.subtitle`)}</Span>
          <Span weight="bold">{movie.subTitle}</Span>
        </TextWrap>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          Contact
        </Text>
        <Wrap className="contact">
          {/* <Span>배급</Span> */}
          {/* <Span weight="bold">{movie.contact.distribution}</Span> */}
          <Span weight="bold">{movie.contact.email}</Span>
        </Wrap>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          Director
        </Text>
        <FlexContainer>
          <Img
            src={movie.credit.profileImage === '' ? emptyImg : movie.credit.profileImage}
            alt="감독사진"
            width={300}
            height={300}
            radius="10px"
            objectfit="cover"
          />
          <div style={{ width: 'calc(480px * 0.8)', marginLeft: 'calc(24px * 0.8)' }}>
            <Text weight="bold" size={1.5} margin="0 0 calc(20px * 0.8) 0">
              {language === 'English' ? movie.credit.directorNameKo : movie.credit.directorNameEn}
              <Span weight="bold" color="#767676" margin="0 0 0 calc(8px * 0.8)">
                {language === 'English' ? movie.credit.directorNameEn : movie.credit.directorNameKo}
              </Span>
            </Text>
            <Span size={1.125}>
              {language === 'English' ? movie.credit.directorInfoKo : movie.credit.directorInfoEn}
            </Span>
          </div>
        </FlexContainer>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          {t(`movie.relatedMovie`)}
        </Text>
        <div style={{ display: 'flex' }}>
          {movie.relatedMovies.map((e) => (
            <RelatedMovies
              key={e.id}
              title={language === 'English' ? e.titleKo : e.titleEn}
              director={e.directorName}
              year={e.eventYear}
              time={e.runningTime}
              src={e.stillImage}
            />
          ))}
        </div>
      </Wrap>
      {movie.screening.status === '상영' && (
        <FlexContainer justify="right">
          <Button
            bgcolor="var(--main-color)"
            width={440}
            padding="calc(18px * 0.8) calc(100px * 0.8)"
            radius="10px"
            color="white"
            onClick={() => navigate(`/movie/online/${movie.id}`)}
          >
            {t(`movie.goToOnline`)}
          </Button>
        </FlexContainer>
      )}
    </Container>
  );
}
