import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Span, Text, Img, H1, FlexContainer, Button } from '@atoms';
import { ScheduleTable, RelatedMovies } from '@molecules';
import { getMovieByIdApi } from '../../apis/movie/get-movie-by-id-api';
import { getUserMoviedApi } from '../../apis/movie/get-user-movie-detail-api';
import { ArchiveModalSlide } from './ArchiveModalSlide';
import { movieModalState, movieModalDataState, movieModalIdState } from '../../recoil/movies';
import { MovieBoxInfo, MovieData, UserMovieData } from '../../models/movie';
import close from '../../assets/images/close.png';

const Container = styled.div`
  width: calc(1600px * 0.8);
  background-color: white;
  overflow-y: auto;
  height: 100vh;
  padding: calc(100px * 0.8) calc(120px * 0.8);
  box-sizing: border-box;
`;

const Wrap = styled.div`
  margin-bottom: calc(48px * 0.8);
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

  console.log({ ...movie.schedule, addInfo: movie.tags });

  return (
    <Container id="modal">
      <FlexContainer justify="space-between" align="center" margin="0 calc(36px * 0.8) calc(32px * 0.8) 0">
        <Span weight="bold" size={2.5}>
          배급작품
        </Span>
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
          시놉시스
        </Text>
        <Span>{movie.synopsisKo}</Span>
      </Wrap>
      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          프로그래머 노트
        </Text>
        <Span>{movie.programmerNoteKo}</Span>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          Credit
        </Text>
        <TextWrap>
          <Span>섹션</Span>
          <Span weight="bold">{movie.section.nameKo}</Span>
          <Span>배우</Span>
          <Span weight="bold">{movie.credit.castingKo}</Span>
          <Span>자막</Span>
          <Span weight="bold">{movie.subTitle}</Span>
          <Span>관련태그</Span>
          <Span weight="bold">#동물 #동물친구들 #신나는모험 #지구지킴이 #Animal friends</Span>
        </TextWrap>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          Contact
        </Text>
        <TextWrap>
          <Span>제작</Span>
          <Span weight="bold">
            감독: {movie.credit.directorNameEn}, 각본: {movie.credit.directorNameEn}, 프로듀서:{' '}
            {movie.credit.directorNameEn}
          </Span>
          <Span>배급</Span>
          <Span weight="bold">{movie.subTitle}</Span>
        </TextWrap>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          Director
        </Text>
        <FlexContainer>
          <Img
            src={movie.credit.profileImage}
            alt="감독사진"
            width={300}
            height={300}
            radius="10px"
            objectfit="cover"
          />
          <div style={{ width: 'calc(480px * 0.8)', marginLeft: 'calc(24px * 0.8)' }}>
            <Text weight="bold" size={1.5} margin="0 0 calc(20px * 0.8) 0">
              {movie.credit.directorNameKo}
              <Span weight="bold" color="#767676" margin="0 0 0 calc(8px * 0.8)">
                {movie.credit.directorNameEn}
              </Span>
            </Text>
            <Span size={1.125}>{movie.credit.directorInfoKo}</Span>
          </div>
        </FlexContainer>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          관련출품작
        </Text>
        <div style={{ display: 'flex' }}>
          {movie.relatedMovies.map((e) => (
            <RelatedMovies
              key={e.id}
              title={e.titleKo}
              director={e.directorName}
              year={e.eventYear}
              time={e.runningTime}
              src={e.stillImage}
            />
          ))}
        </div>
      </Wrap>
      <FlexContainer justify="right">
        <Button
          bgColor="var(--main-color)"
          width={440}
          padding="calc(18px * 0.8) calc(100px * 0.8)"
          radius="10px"
          color="white"
        >
          온라인 상영관 바로가기
        </Button>
      </FlexContainer>
    </Container>
  );
}
