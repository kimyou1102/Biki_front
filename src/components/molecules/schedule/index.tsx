import { Box, Button, ClickAwayListener, Tooltip, Typography, Zoom } from '@mui/material';
import React, { useState } from 'react';
import { ScheduleMovieType } from 'src/models/schedule';

interface ScreeningItemProps {
  titleKo: string;
  titleEn: string;
  time: string;
  movies: ScheduleMovieType[];
  runningTime: number;
  rating: string;
}

// 메인색상
const MAIN_THEME = '#288CB4';

export function ScreeningItem({ titleKo, titleEn, time, runningTime, rating, movies }: ScreeningItemProps) {
  const [tooltip, setTooltip] = useState(false);

  const handleTooltipOpen = () => setTooltip(!tooltip);
  const handleTooltipClose = () => setTooltip(false);

  return (
    <Box display="flex" flexDirection="column" width="13rem">
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

        <Box padding="2px 8px" bgcolor="#D9D9D9" borderRadius="5px" fontSize="0.7rem" mr="10px">
          GV
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
                  <div key={item.id}>
                    {index + 1}. {item.title}
                  </div>
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
