import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FlexContainer, Span, Text, Img, Button } from '@atoms';
import { ScheduleTable, RelatedMovies } from '@molecules';
import { ArchiveModalSlide } from '@organisms';
import { ArchiveTemplate } from '@templates';
import { getMovieByIdApi } from '../../../apis/movie/get-movie-by-id-api';
import { getUserMoviedApi } from '../../../apis/movie/get-user-movie-detail-api';
import { movieModalState, movieModalDataState, movieModalIdState } from '../../../store/movies';
import { MovieBoxInfo, MovieData, UserMovieData } from '../../../models/movie';
import emptyImg from '../../../assets/images/empty.png';
import { languageState } from '../../../store/language/atom';

const Container = styled.div`
  width: 100%;
  background-color: white;
  overflow-y: auto;
  /* height: 100vh; */
  box-sizing: border-box;
`;

const Wrap = styled.div`
  margin-bottom: 48px;
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

export function ArchiveDetail() {
  const [movie, setMovie] = useRecoilState<UserMovieData>(movieModalDataState);
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const [movieSchedule, setMovieSchedule] = useState<any>();
  const language = useRecoilValue(languageState);
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const movieApi = useCallback(async () => {
    await getUserMoviedApi(parseInt(id!, 10))
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
        // setRelatedMovies((prev) => [...prev, res.data]);
        setMovieSchedule({ schedule: res.data.schedule, addInfo: res.data.tags });
      })
      .catch((err) => console.log(err));
  }, [id, setMovie]);

  useEffect(() => {
    if (parseInt(id!, 10) !== Infinity) {
      movieApi();
    }
  }, [movieApi, id]);

  return (
    <ArchiveTemplate title={t(`movie.distribution`)} type="online">
      <Container id="modal">
        <ArchiveModalSlide data={movie} />
        <FlexContainer direction="column" margin="16px 0 26px 0">
          <Span color="black" size={1.5 / 0.8} weight="bold">
            {language === 'English' ? movie.titleKo : movie.titleEn}
          </Span>
          <Span color="#767676" size={1 / 0.8} margin="8px 0 0 0">
            {language === 'English' ? movie.titleEn : movie.titleKo}
          </Span>
        </FlexContainer>

        <Text size={1 / 0.8} color="#242424" margin="0 calc(32px * 0.8) 0 0">
          {t(`movie.director`)} :
          <Span color="#242424" size={1 / 0.8} margin="0 0 0 calc(8px * 0.8)">
            {language === 'English'
              ? `${movie.credit.directorNameKo} / ${movie.credit.directorNameEn}`
              : `${movie.credit.directorNameEn} / ${movie.credit.directorNameKo}`}
          </Span>
        </Text>
        <Text size={1 / 0.8} color="#242424" margin="0 calc(32px * 0.8) 0 0">
          {t(`movie.nationality`)} :
          <Span color="#242424" size={1 / 0.8} margin="0 0 0 calc(8px * 0.8)">
            {movie.country}
          </Span>
        </Text>
        <Text size={1 / 0.8} color="#242424" margin="0 calc(32px * 0.8) 0 0">
          {t(`movie.productionYear`)} :
          <Span color="#242424" size={1 / 0.8} margin="0 0 0 calc(8px * 0.8)">
            {movie.productionYear}
          </Span>
        </Text>
        <Text size={1 / 0.8} color="#242424" margin="0 calc(32px * 0.8) 0 0">
          {t(`movie.exhibtionYear`)} :
          <Span color="#242424" size={1 / 0.8} margin="0 0 0 calc(8px * 0.8)">
            {movie.eventYear}
          </Span>
        </Text>
        <Text size={1 / 0.8} color="#242424" margin="0 calc(32px * 0.8) 0 0">
          {t(`movie.runningTime`)} :
          <Span color="#242424" size={1 / 0.8} margin="0 0 0 calc(8px * 0.8)">
            {movie.runningTime}
            {t(`movie.minute`)}
          </Span>
        </Text>
        <Text size={1 / 0.8} color="#242424" margin="0 calc(32px * 0.8) 0 0">
          {t(`movie.rating`)} :
          <Span color="#242424" size={1 / 0.8} margin="0 0 0 calc(8px * 0.8)">
            {movie.rating}
          </Span>
        </Text>
        <Wrap>
          <Text size={1.5 / 0.8} weight="bold" margin="48px 0 8px 0">
            SCHEDULE
          </Text>
          <ScheduleTable data={movieSchedule} />
        </Wrap>
        <Wrap>
          <Text weight="bold" size={2} margin="0 0 calc(16px * 0.8) 0">
            {t(`movie.synopsis`)}
          </Text>
          <Span className="line-height" lineheight={22} size={1 / 0.8}>
            {language === 'English' ? movie.synopsisKo : movie.synopsisEn}
          </Span>
        </Wrap>
        <Wrap>
          <Text weight="bold" size={1.5 / 0.8} margin="0 0 calc(16px * 0.8) 0">
            {t(`movie.programmerNote`)}
          </Text>
          <Span className="line-height" lineheight={22} size={1 / 0.8}>
            {language === 'English' ? movie.programmerNoteKo : movie.programmerNoteEn}
          </Span>
        </Wrap>
        <Wrap>
          <Text weight="bold" size={1.5 / 0.8} margin="0 0 calc(16px * 0.8) 0">
            {t(`movie.category`)}
          </Text>
          <FlexContainer>
            {movie.categoryImages.map((item) => (
              <Img alt="카테고리이미지" src={item} width={122} height={122} margin="0 calc(20px * 0.8) 0 0" />
            ))}
          </FlexContainer>
        </Wrap>

        <Wrap>
          <Text weight="bold" size={1.5 / 0.8} margin="0 0 calc(16px * 0.8) 0">
            Credit
          </Text>
          <TextWrap>
            <Span size={1 / 0.8}>{t(`archive.section`)}</Span>
            <Span size={1 / 0.8} weight="bold">
              {language === 'English' ? movie.section.nameKo : movie.section.nameEn}
            </Span>
            <Span size={1 / 0.8}>{t(`archive.actor`)}</Span>
            <Span size={1 / 0.8} weight="bold">
              {language === 'English' ? movie.credit.castingKo : movie.credit.castingEn}
            </Span>
            <Span size={1 / 0.8}>{t(`archive.production`)}</Span>
            <Span size={1 / 0.8} weight="bold">
              {movie.contact.distribution}
            </Span>
          </TextWrap>
        </Wrap>

        <Wrap>
          <Text weight="bold" size={1.5 / 0.8} margin="0 0 calc(16px * 0.8) 0">
            Contact
          </Text>
          <Wrap className="contact">
            {/* <Span>배급</Span> */}
            <Span size={1 / 0.8} className="line-height" lineheight={22} weight="bold">
              {movie.contact.distribution}
            </Span>
            <Span size={1 / 0.8} weight="bold">
              {movie.contact.email}
            </Span>
          </Wrap>
        </Wrap>

        <Wrap>
          <Text weight="bold" size={2 / 0.8} margin="0 0 16px 0">
            Director
          </Text>
          <FlexContainer>
            <Img
              src={movie.credit.profileImage === '' ? emptyImg : movie.credit.profileImage}
              alt="감독사진"
              width={160 / 0.8}
              height={160 / 0.8}
              radius="10px"
              objectfit="cover"
            />
            <div style={{ width: 'calc(480px * 0.8)', marginLeft: '8px' }}>
              <Text weight="bold" size={1.5} margin="0 0 8px 0">
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
          <Text weight="bold" size={2 / 0.8} margin="0 0 calc(16px * 0.8) 0">
            {t(`movie.relatedMovie`)}
          </Text>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* <RelatedMovies
              title="테스트 제목목"
              director="테스트 감독"
              year={2022}
              time={90}
              src={movie.credit.profileImage === '' ? emptyImg : movie.credit.profileImage}
            /> */}
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
    </ArchiveTemplate>
  );
}
