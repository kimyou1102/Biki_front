import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ModalWrap } from '@atoms';
import { Box, Button, ClickAwayListener, Tooltip, Typography, Zoom } from '@mui/material';
import { ArchiveModal } from '@organisms';
import { movieModalIdState, movieModalPositionState, movieModalState } from '@src/store/movies';
import { MovieLabelType, ScheduleMovieType } from 'src/models/schedule';
import { languageState } from '../../../store/language/atom';

interface ScreeningItemProps {
  titleKo: string;
  titleEn: string;
  time: string;
  label: MovieLabelType;
  movies: ScheduleMovieType[];
  runningTime: number;
  rating: string;
  id?: number;
}

// 메인색상
const MAIN_THEME = '#288CB4';

export function ScreeningItem({ titleKo, titleEn, time, label, runningTime, rating, movies, id }: ScreeningItemProps) {
  const [tooltip, setTooltip] = useState(false);
  const [top, setTop] = useRecoilState(movieModalPositionState);
  const [movieModalId, setmovieModalId] = useRecoilState(movieModalIdState);
  const [movieModal, setMovieModal] = useRecoilState(movieModalState);

  const handleTooltipOpen = () => setTooltip(!tooltip);
  const handleTooltipClose = () => setTooltip(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const language = useRecoilValue(languageState);

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const handleSingleMovieClick = () => {
    if (id) {
      if (isMobile) {
        navigate(`/archive/distributions/detail/${id}`);
      } else {
        setMovieModal(true);
        // setMovieModalData(data);
        setTop(window.scrollY);
        setmovieModalId(id);
        document.querySelector('body')?.classList.add('none');
      }
    }
  };

  const handleGroupMovieClick = (movieId: number) => {
    // handleTooltipClose();
    setMovieModal(true);
    // setMovieModalData(data);
    setTop(window.scrollY);
    setmovieModalId(movieId);
    document.querySelector('body')?.classList.add('none');
  };

  return isMobile ? (
    <Box display="flex" flexDirection="column" width="35vw" onClick={handleSingleMovieClick} sx={{ cursor: 'pointer' }}>
      <Typography fontFamily="PretendardBold" fontWeight="bold" fontSize="1rem">
        {language === 'English' ? titleKo : titleEn}
      </Typography>
      <Typography fontFamily="Pretendard" fontWeight="500" fontSize="0.75rem" color="#4D4E7B" mb="0.3rem">
        {language === 'English' ? titleEn : titleKo}
      </Typography>

      <Typography fontFamily="PretendardBold" fontWeight="bold" fontSize="1rem" mb="5px">
        {time}
      </Typography>

      <Box display="flex" mb="10px" sx={{ flexWrap: 'wrap', gap: '6px 0px' }}>
        <Box padding="2px 8px" bgcolor="#D9D9D9" borderRadius="5px" fontSize="0.7rem" mr="6px">
          {runningTime}
          {t(`movie.minute`)}
        </Box>

        {rating && (
          <Box padding="3px 8px" bgcolor="#D9D9D9" borderRadius="5px" fontSize="0.7rem" mr="6px">
            {rating}
          </Box>
        )}

        <Box padding="3px 8px" bgcolor={label.bgColor} color="white" borderRadius="5px" fontSize="0.7rem" mr="10px">
          {label.name}
        </Box>
      </Box>
      {movies.length > 0 && (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            title={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>{t(`screening.list`)}</div>
                {movies.map((item, index) => (
                  <Button
                    variant="contained"
                    component="button"
                    key={item.id}
                    onClick={() => handleGroupMovieClick(item.id)}
                  >
                    {index + 1}. {item.title}
                  </Button>
                ))}
              </div>
            }
            placement="top"
            TransitionComponent={Zoom}
            onClose={handleTooltipClose}
            open={tooltip}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: MAIN_THEME,
                  '& .MuiTooltip-arrow': {
                    color: 'white',
                  },
                },
              },
            }}
          >
            <Button variant="contained" sx={{ mb: '6px' }} onClick={handleTooltipOpen}>
              {t(`screening.list`)}
            </Button>
          </Tooltip>
        </ClickAwayListener>
      )}
    </Box>
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      width="13rem"
      onClick={handleSingleMovieClick}
      sx={{ cursor: 'pointer' }}
    >
      <Typography fontFamily="Pretendard" fontWeight="bold" fontSize="0.9rem">
        {language === 'English' ? titleKo : titleEn}
      </Typography>
      <Typography fontFamily="Pretendard" fontWeight="500" fontSize="0.8rem" color="#4D4E7B" mb="0.3rem">
        {language === 'English' ? titleEn : titleKo}
      </Typography>

      <Typography fontFamily="Pretendard" fontWeight="bold" fontSize="0.9rem" mb="5px">
        {time}
      </Typography>

      <Box display="flex" mb="10px">
        <Box padding="2px 8px" bgcolor="#D9D9D9" borderRadius="5px" fontSize="0.7rem" mr="6px">
          {runningTime}
          {t(`movie.minute`)}
        </Box>

        {rating && (
          <Box padding="2px 8px" bgcolor="#D9D9D9" borderRadius="5px" fontSize="0.7rem" mr="6px">
            {rating}
          </Box>
        )}

        <Box padding="2px 8px" bgcolor={label.bgColor} color="white" borderRadius="5px" fontSize="0.7rem" mr="10px">
          {label.name}
        </Box>
      </Box>
      {movies.length > 0 && (
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            title={
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>{t(`screening.list`)}</div>
                {movies.map((item, index) => (
                  <Button
                    variant="contained"
                    component="button"
                    key={item.id}
                    onClick={() => handleGroupMovieClick(item.id)}
                  >
                    {index + 1}. {item.title}
                  </Button>
                ))}
              </div>
            }
            placement="top"
            TransitionComponent={Zoom}
            onClose={handleTooltipClose}
            open={tooltip}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: MAIN_THEME,
                  '& .MuiTooltip-arrow': {
                    color: 'white',
                  },
                },
              },
            }}
          >
            <Button variant="contained" sx={{ mb: '6px' }} onClick={handleTooltipOpen}>
              {t(`screening.list`)}
            </Button>
          </Tooltip>
        </ClickAwayListener>
      )}
    </Box>
  );
}
