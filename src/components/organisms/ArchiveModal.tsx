import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Span, Text, Img, H1, FlexContainer, Button } from '@atoms';
import { ScheduleTable, RelatedMovies } from '@molecules';
import { getMovieByIdApi } from '../../apis/movie/get-movie-by-id-api';
import { ArchiveModalSlide } from './ArchiveModalSlide';
import { movieModalState, movieModalDataState } from '../../recoil/movies';
import { MovieBoxInfo, MovieData } from '../../models/movie';
import close from '../../assets/images/close.png';
import poster from '../../assets/images/poster.png';

const Container = styled.div`
  width: calc(1600px * 0.8);
  background-color: white;
  overflow-y: auto;
  height: 100vh;
  padding: calc(36px * 0.8) 0 0 calc(120px * 0.8);
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
  const [movieModalData, setMovieModalData] = useRecoilState(movieModalDataState);
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [relatedMovies, setRelatedMovies] = useState<any[]>([]);

  console.log(relatedMovies);
  const movieApi = useCallback(async () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < movieModalData.relatedMovies; i++) {
      // eslint-disable-next-line no-await-in-loop
      await getMovieByIdApi(movieModalData.relatedMovies[i])
        .then((res) => {
          console.log(res.data);
          setRelatedMovies((prev) => [...prev, res.data]);
        })
        .catch((err) => console.log(err));
    }
  }, [movieModalData.relatedMovies]);

  useEffect(() => {
    movieApi();
  }, [movieApi]);

  const onCloseClick = () => {
    setMovieModal(false);
    document.querySelector('body')?.classList.remove('none');
  };

  const test = [
    {
      date: '2023.07.12',
      time: '13:30',
      cinema: '영화의전당 중극장',
      addInfo: '부가정보',
      ticketLink: '/',
    },
    {
      date: '2023.07.17',
      time: '11:30',
      cinema: '영화의전당 소극장',
      addInfo: '부가정보',
      ticketLink: '/',
    },
  ];
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
      <ArchiveModalSlide data={movieModalData} />
      <Wrap>
        <Text size={1.25} weight="bold" margin="0 0 calc(16px * 0.8) 0">
          SCHEDULE
        </Text>
        <ScheduleTable data={test} />
      </Wrap>
      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          시놉시스
        </Text>
        <Span>{movieModalData.synopsisKo}</Span>
      </Wrap>
      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          프로그래머 노트
        </Text>
        <Span>{movieModalData.programmerNoteKo}</Span>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          Credit
        </Text>
        <TextWrap>
          <Span>섹션</Span>
          <Span weight="bold">{movieModalData.section.nameKo}</Span>
          <Span>배우</Span>
          <Span weight="bold">{movieModalData.credit.castingKo}</Span>
          <Span>자막</Span>
          <Span weight="bold">{movieModalData.subTitle}</Span>
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
            감독: {movieModalData.credit.directorNameEn}, 각본: {movieModalData.credit.directorNameEn}, 프로듀서:{' '}
            {movieModalData.credit.directorNameEn}
          </Span>
          <Span>배급</Span>
          <Span weight="bold">{movieModalData.subTitle}</Span>
        </TextWrap>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          Director
        </Text>
        <FlexContainer>
          <Img src={movieModalData.credit.profileImage} alt="감독사진" width={300} height={300} radius="10px" />
          <div style={{ width: 'calc(480px * 0.8)', marginLeft: 'calc(24px * 0.8)' }}>
            <Text weight="bold" size={1.5} margin="0 0 calc(20px * 0.8) 0">
              {movieModalData.credit.directorNameKo}
              <Span weight="bold" color="#767676" margin="0 0 0 calc(8px * 0.8)">
                {movieModalData.credit.directorNameEn}
              </Span>
            </Text>
            <Span size={1.125}>{movieModalData.credit.directorInfoKo}</Span>
          </div>
        </FlexContainer>
      </Wrap>

      <Wrap>
        <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
          관련출품작
        </Text>
        <div>
          {relatedMovies.map((e) => (
            <RelatedMovies
              key={e.id}
              title={e.titleKo}
              director={e.credit.directorNameEn}
              year={e.productionYear}
              time={e.runningTime}
              src={e.stillImage.first === '' ? poster : e.stillImage.first}
            />
          ))}
        </div>
      </Wrap>

      <Button
        bgColor="var(--main-color)"
        width={440}
        padding="calc(18px * 0.8) calc(100px * 0.8)"
        radius="10px"
        color="white"
      >
        온라인 상영관 바로가기
      </Button>
    </Container>
  );
}
