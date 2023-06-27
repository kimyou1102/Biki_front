import { ModalWrap } from '@atoms';
import { Box, Button, ClickAwayListener, Tooltip, Typography, Zoom } from '@mui/material';
import { ArchiveModal } from '@organisms';
import { movieModalIdState, movieModalPositionState, movieModalState } from '@src/recoil/movies';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { MovieLabelType, ScheduleMovieType } from 'src/models/schedule';

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

  const handleSingleMovieClick = () => {
    if (id) {
      setMovieModal(true);
      // setMovieModalData(data);
      setTop(window.scrollY);
      setmovieModalId(id);
      document.querySelector('body')?.classList.add('none');
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="12rem"
      component="div"
      onClick={handleSingleMovieClick}
      sx={{ cursor: 'pointer' }}
    >
      <Typography fontFamily="Pretendard" fontWeight="bold" fontSize="0.9rem">
        {titleKo}
      </Typography>
      <Typography fontFamily="Pretendard" fontWeight="500" fontSize="0.8rem" color="#4D4E7B" mb="0.3rem">
        {titleEn}
      </Typography>

      <Typography fontFamily="Pretendard" fontWeight="bold" fontSize="0.9rem" mb="5px">
        {time}
      </Typography>

      <Box display="flex" mb="10px">
        <Box padding="2px 8px" bgcolor="#D9D9D9" borderRadius="5px" fontSize="0.7rem" mr="6px">
          {runningTime}분
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
                <div>상영작 목록</div>
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
              상영작 목록
            </Button>
          </Tooltip>
        </ClickAwayListener>
      )}
    </Box>
  );
}
