// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { Section } from '@atoms';
import { LabelHint, MovieScheduleTitle, ScreeningItem } from '@molecules';
import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Shadows,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { getMoviesByVenueAndDate } from '@src/apis/movieSchedule/get-movies-by-venue-and-date';
import { getVenueListApi } from '@src/apis/movieSchedule/get-venue-list-type';
import { movieScheduleState } from '@src/recoil/movieSchedule/movieSchedule';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import { MovieScheduleTheaterItemType, ScheduleVenueType } from 'src/models/schedule';

// 메인색상
const MAIN_THEME = '#288CB4';

export function ScheduleInfoPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const tableRoundStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderBottom: '1px solid #DBDBDB',
    fontFamily: 'PretendardBold',
  };

  const theme = createTheme({
    shadows: Array(25).fill('none') as Shadows,
    typography: {
      fontFamily: ['PretendardMedium'].join(','),
    },
    palette: {
      primary: {
        main: MAIN_THEME,
      },
    },
  });

  const [venue, setVenue] = useState<ScheduleVenueType[]>([]);
  const [venueId, setVenueId] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState('');

  const [dates, setDates] = useState<string[]>([]);
  const [movieSchedule, setMovieSchedule] = useRecoilState(movieScheduleState);
  const [rounds, setRounds] = useState<number[]>([]);

  useEffect(() => {
    /**
     * 상영일정을 받아오는 API 호출
     */
    getVenueListApi().then((res) => {
      setVenue(res.data.list);
      setVenueId(res.data.list[0].id); // venue id 선택
      setCurrentDate(res.data.list[0].runningDateStart);
    });
  }, []);

  useEffect(() => {
    if (venueId > 0 && currentDate !== '') {
      getMoviesByVenueAndDate(venueId, currentDate!)
        .then((res) => {
          setMovieSchedule(res.data.data);

          // runningDateStart 부터 runningDateEnd까지 날짜를 전부 저장하는 배열 만들기 위한 변수
          const tempDates = [];
          const startDate = new Date(res.data.data.runningDateStart);
          const endDate = new Date(res.data.data.runningDateEnd);

          // runningDateStart 부터 runningDateEnd까지 날짜를 전부 저장하는 날짜 배열 만들기
          while (startDate <= endDate) {
            const year = startDate.getFullYear();
            const month = String(startDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
            const day = String(startDate.getDate()).padStart(2, '0');
            tempDates.push(`${year}-${month}-${day}`); // 2023-07-11 형태로 저장

            startDate.setDate(startDate.getDate() + 1);
          }

          // 만들어진 날짜 배열을 저장
          setDates(tempDates);

          // 3차시 까지 있으면 1,2,3차시를 저장하는 배열 만들기
          setRounds(Array.from({ length: res.data.data.totalOfTimes }, (_, index) => index + 1));
        })
        .catch((err) => console.log(err));
    }
  }, [currentDate, venueId, setMovieSchedule]);

  function handleVenueIdChange(event: SelectChangeEvent) {
    setVenueId(parseInt(event.target.value, 10));
  }

  // 날짜를 바꿨을 때, 해당하는 날짜의 상열일정 정보를 들고오게 만드는 핸들러
  function handleDateChange(event: React.SyntheticEvent, value: any) {
    setCurrentDate(value);
  }

  // 실제 달력이 렌더링 되게 하는 함수
  function renderMovieSchedule(theater: MovieScheduleTheaterItemType, theaterIdx: number) {
    let movieIndex = 0;
    console.log('실행');

    return (
      <TableBody sx={{ borderBottom: '1px solid #DBDBDB' }}>
        {/* 1. 제일먼저 행의 첫번째에 상영관 이름을 배치한다. */}
        <TableCell key={theater.id}>{theater.name}</TableCell>

        {/* 2.열의 개수(회차의 수)만큼 반복문을 돌린다.
            3. 이때 백엔드에서 데이터를 회차순으로 정렬되서 차례대로 받아오게 된다.
            3-1. 이때 1, 3회차에 데이터가 없고, 2회차에만 데이터가 있을 수 있다.
            ==========================================================================
            만약 2회차 정보만 담겨 있다고 가정하자
            1. 1회차 정보가 없으면 movieSchedule.schedule[theaterIdx][movieIndex].round (아이템의 회차)=== item(해당 열의 회차)가
            일치 하지않으므로 넘어간다.
            2. 2회차 정보가 있으면 해당 아이템을 추가하고, movieIndex를 늘려서 백엔드 데이터의 다음 회차가 있는지 확인하게 된다.
            */}
        {rounds.map((item, index) => {
          if (
            movieSchedule.schedule[theaterIdx][movieIndex] &&
            movieSchedule.schedule[theaterIdx][movieIndex].round === item
          ) {
            const currentMovieIndex = movieIndex;
            movieIndex += 1; // movieIndex 증가

            const currentMovie = movieSchedule.schedule[theaterIdx][currentMovieIndex]; // 현재 영화 정보

            return (
              <TableCell key={item}>
                <ScreeningItem
                  titleKo={currentMovie.titleKo}
                  titleEn={currentMovie.titleEn}
                  time={currentMovie.startTime.substring(0, 5)}
                  runningTime={currentMovie.runningTime}
                  rating={currentMovie.rating}
                  movies={currentMovie.movies}
                />
              </TableCell>
            );
          }

          return <TableCell key={item} />;
        })}
      </TableBody>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MovieScheduleTitle />

          <Box display="flex" width="19rem" alignItems="center">
            <Typography fontFamily="PretendardBold" width="6rem" mr="10px">
              {t(`screening.select`)}
            </Typography>

            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={venueId.toString()}
                onChange={handleVenueIdChange} // eslint-disable-line react/jsx-no-bind
                sx={{ width: '12rem', height: '2.3rem' }}
              >
                {venue.map((item, index) => (
                  <MenuItem value={item.id.toString()} key={item.id}>
                    {item.nameKo}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ border: 'none', mb: '1rem' }}>
          <Tabs
            value={currentDate}
            onChange={handleDateChange} // eslint-disable-line react/jsx-no-bind
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{
              fontFamily: 'PretendardRegular',
            }}
          >
            {dates.map((item, index) => (
              <Tab value={item} label={item} key={item} />
            ))}
          </Tabs>
        </Box>

        <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: '6rem' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={tableRoundStyle} size="small">
                  {t(`screening.name`)}
                </TableCell>

                {rounds.map((item) => (
                  <TableCell align="left" sx={tableRoundStyle} key={item}>
                    {item}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {movieSchedule.theaters.map((theater, theaterIdx) => {
              return renderMovieSchedule(theater, theaterIdx);
            })}
          </Table>
        </TableContainer>

        <Typography fontFamily="PretendardBold" mb="1rem">
          *{t(`screening.label`)}
        </Typography>

        <Box display="flex" width="100%" gap="0 10px;">
          <LabelHint leftText="BF" rightText={t(`screening.bf`)} bgcolor="#FF810D" />
          <LabelHint leftText="GV" rightText={t(`screening.gv`)} bgcolor="#8A2BE2" />
        </Box>

        <Box display="flex" width="100%" gap="0 10px;">
          <LabelHint leftText="Reads" rightText={t(`screening.read`)} bgcolor="#006400" />
          <LabelHint leftText="Greeting" rightText={t(`screening.greeting`)} bgcolor="#FF1191" />
        </Box>

        <Box display="flex" width="100%" gap="0 10px;">
          <LabelHint leftText="W.S" rightText={t(`screening.ws`)} bgcolor="#B7CC37" />
          <LabelHint leftText="Live" rightText={t(`screening.live`)} bgcolor="#283FBC" />
        </Box>

        <Box display="flex" width="100%" gap="0 10px;">
          <LabelHint leftText="Opening" rightText={t(`screening.opening`)} bgcolor="#191919" />
          <LabelHint leftText="Talk" rightText={t(`screening.talk`)} bgcolor="#E5C32B" />
        </Box>
      </Section>
    </ThemeProvider>
  );
}
