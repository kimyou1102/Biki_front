import React from 'react';
import { FlexContainer, H3 } from '@atoms';
import { DirectionButtons } from '@molecules/buttonList';

interface SlideHeaderProps {
  text: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

// 만드는중
export function SlideHeader({ text, onLeftClick, onRightClick }: SlideHeaderProps) {
  return (
    <FlexContainer direction="row" align="center">
      <H3 weight="bold" size={2.5} font="PretendardMedium" margin="0px 13px 6px 0px" lineHeight={3}>
        {text}
      </H3>
      <DirectionButtons onLeftClick={onLeftClick} onRightClick={onRightClick} />
    </FlexContainer>
  );
}
