import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  ThemeProvider,
  Shadows,
  createTheme,
} from '@mui/material';
import { Section, Span, H3, Img, ModalWrap } from '@atoms';
import { ArchiveTitle, AwardMovie, HistoryOutlineTable } from '@molecules';
import { ArchiveModal } from '@organisms';
import { Helmet } from 'react-helmet-async';
import { getHistoryByYearApi } from '../../../apis/history/get-history-by-year-api';
import { HistoryType } from '../../../models/history';
import { movieModalIdState, movieModalPositionState, movieModalState } from '../../../store/movies';
import { languageState } from '../../../store/language/atom';

// 메인색상
const MAIN_THEME = '#288CB4';

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

export function HistoryPage() {
  const [currentTitle, setCurrentTitle] = useState('개요/규모');
  const numbers = Array.from({ length: 18 }, (v, i) => i).reverse();
  const ordinal = Array(numbers.length).fill('th');
  ordinal[1] = 'st';
  ordinal[2] = 'nd';
  const [venue, setVenue] = useState<number[]>(numbers);
  const [selectCount, setSelectCount] = useState<number>(17);
  const [history, setHistory] = useState<HistoryType>();

  const [top, setTop] = useRecoilState(movieModalPositionState);
  const [movieModalId, setmovieModalId] = useRecoilState(movieModalIdState);
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  const { t } = useTranslation();
  const language = useRecoilValue(languageState);

  const startYear = 2005;

  const historyApi = useCallback(async () => {
    await getHistoryByYearApi(startYear + selectCount)
      .then((res) => {
        console.log(res.data);
        setHistory(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectCount]);

  useEffect(() => {
    historyApi();
  }, [historyApi]);

  function handleTitleChange(event: React.SyntheticEvent, value: any) {
    setCurrentTitle(value);
  }

  function handleCountChange(event: SelectChangeEvent) {
    setSelectCount(parseInt(event.target.value, 10));
  }

  const onOutsideModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#modal')) {
      setMovieModal(false);
      document.querySelector('body')?.classList.remove('none');
    }
  };

  const Style = {
    width: '25%',
    display: 'flex',
    alignItems: 'flex-start',

    ':hover': {
      borderBottom: `2px solid ${MAIN_THEME}`,
    },
  };

  const WrapStyle = {
    padding: 'calc(48px * 0.8) 0px',
    borderBottom: '1px solid #767676',
  };

  return (
    <>
      <Helmet>
        <title>비키가 걸어온 길</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Section>
          <Box display="flex" alignItems="flex-start" flexDirection="column">
            {!isMobile ? <ArchiveTitle /> : null}
            {isMobile ? (
              <H3 size={1.5 / 0.8} weight="bold" font="PretendardBold" margin="0 0 10px 0px;">
                {t(`history.title`)}
              </H3>
            ) : null}
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent={isMobile ? 'right' : 'space-between'}
              marginBottom="2rem"
            >
              {!isMobile ? (
                <H3 size={2} weight="bold">
                  {t(`history.title`)}
                </H3>
              ) : null}

              <FormControl>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectCount.toString()}
                  onChange={handleCountChange} // eslint-disable-line react/jsx-no-bind
                  sx={{ width: '12rem', height: '2.3rem' }}
                >
                  {venue.map((item, index) =>
                    item === 0 ? (
                      <MenuItem value={item.toString()}>Pre BIKY</MenuItem>
                    ) : (
                      // eslint-disable-next-line react/no-array-index-key
                      <MenuItem value={item.toString()} key={index}>
                        {language === 'English' ? `제${item}회 BIKY` : `${item}${ordinal[item]} BIKY`}
                      </MenuItem>
                    ),
                  )}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ border: 'none' }}>
            <Tabs
              value={currentTitle}
              onChange={handleTitleChange} // eslint-disable-line react/jsx-no-bind
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                fontFamily: 'PretendardRegular',
              }}
            >
              <Tab value="개요/규모" label={t(`history.outline`)} sx={Style} />
              <Tab value="상영작" label={t(`history.screening`)} sx={Style} />
              <Tab value="수상작" label={t(`history.winner`)} sx={Style} />
              <Tab value="포스터" label={t(`history.poster`)} sx={Style} />
            </Tabs>
          </Box>
          {currentTitle === '개요/규모' ? (
            <>
              <Box sx={WrapStyle}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Span size={2} weight="bold">
                    {t(`history.outline`)}
                  </Span>
                  <Span size={1.5} weight="bold">
                    {language === 'English' ? history?.nameKo : history?.nameEn}
                  </Span>
                  <HistoryOutlineTable
                    year={`${history?.eventStart} ~ ${history?.eventEnd}`}
                    // eslint-disable-next-line no-nested-ternary
                    location={history ? (language === 'English' ? history.theaterKo : history.theaterEn) : ''}
                    // eslint-disable-next-line no-nested-ternary
                    host={history ? (language === 'English' ? history.hostKo : history.hostEn) : ''}
                  />
                </Box>
              </Box>
              <Box sx={WrapStyle}>
                <Span size={2} weight="bold">
                  {t(`history.style`)}
                </Span>
                <Box sx={{ display: ' grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <Span size={1.5} weight="bold">
                    {t(`history.motto`)}
                  </Span>
                  <Span size={1.5} weight="bold">
                    {t(`history.slogan`)}
                  </Span>
                  <Span size={1.5}>
                    {language === 'English' ? history?.eventNature.mottoKo : history?.eventNature.mottoEn}
                  </Span>
                  <Span size={1.5}>
                    {language === 'English' ? history?.eventNature.sloganKo : history?.eventNature.sloganEn}
                  </Span>
                </Box>
              </Box>
              <Box sx={{ padding: 'calc(48px * 0.8) 0px' }}>
                <Span size={2} weight="bold">
                  {t(`history.scale`)}
                </Span>
                <Box sx={{ display: ' grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <Span size={1.5} weight="bold">
                    {t(`history.movieCount`)}
                  </Span>
                  <Span size={1.5} weight="bold">
                    {t(`history.guestCount`)}
                  </Span>
                  <Span size={1.5} weight="bold">
                    {t(`history.screenCount`)}
                  </Span>
                  <Span size={1.5}>
                    {history?.eventScale.movieCountryCount}
                    {t(`history.country`)} {history?.eventScale.movieCount}
                    {t(`history.film`)}
                  </Span>
                  <Span size={1.5}>
                    {history?.eventScale.guestCountryCount}
                    {t(`history.country`)} {history?.eventScale.guestCount}
                    {t(`history.people`)}
                  </Span>
                  <Span size={1.5}>
                    {history?.eventScale.screeningCount}
                    {t(`history.count`)}
                  </Span>
                </Box>
              </Box>
            </>
          ) : null}
          {currentTitle === '상영작' ? <h1>상영작</h1> : null}
          {currentTitle === '수상작'
            ? history?.awardWinners.map((item) => (
                <Box sx={{ padding: 'calc(48px * 0.8) 0px' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
                    <Span size={1.5} weight="bold">
                      {language === 'English' ? item.nameKo : item.nameEn}
                    </Span>
                    <Span size={1}>{language === 'English' ? item.descriptionKo : item.descriptionEn}</Span>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {item.movies.map((e, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <AwardMovie key={i} data={e} />
                    ))}
                  </Box>
                </Box>
              ))
            : null}
          {currentTitle === '포스터' ? (
            <Box sx={{ padding: 'calc(48px * 0.8) 0px' }}>
              <Span size={2} weight="bold">
                {language === 'English' ? history?.nameKo : history?.nameEn}
              </Span>
              <Box margin="0 auto" marginTop="2rem">
                <Img src={history?.posterImage} alt="포스터" />
              </Box>
            </Box>
          ) : null}
        </Section>
        <ModalWrap
          top={top}
          className={movieModal ? '' : 'none'}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onOutsideModalClick(e)}
        >
          <ArchiveModal />
        </ModalWrap>
      </ThemeProvider>
    </>
  );
}
