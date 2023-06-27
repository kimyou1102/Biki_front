import React from 'react';
import { FlexContainer, H3 } from '@atoms';
import { DirectionButtons } from '@molecules/buttonList';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';

interface SlideHeaderProps {
  text: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

// 만드는중
export function SlideHeader({ text, onLeftClick, onRightClick }: SlideHeaderProps) {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <FlexContainer direction="row" align="center">
      <H3
        weight="bold"
        size={isMobile ? 1.5 / 0.8 : 2.5}
        font="PretendardMedium"
        margin="0px 13px 6px 0px"
        lineheight={3}
      >
        {text}
      </H3>
      {!isMobile ? <DirectionButtons onLeftClick={onLeftClick} onRightClick={onRightClick} /> : null}
    </FlexContainer>
  );
}
