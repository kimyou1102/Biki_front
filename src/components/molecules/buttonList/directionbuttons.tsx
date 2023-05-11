import React from 'react';
import { FlexContainer, Button, Img } from '@atoms';
import leftArrow from '../../../assets/images/leftArrow.png';
import rightArrow from '../../../assets/images/rightArrow.png';

interface Props {
  onRightClick?: () => void;
  onLeftClick?: () => void;
}

export function DirectionButtons({ onLeftClick, onRightClick }: Props) {
  return (
    <FlexContainer>
      <Button
        onClick={onLeftClick}
        bgColor="#74B743"
        width={32}
        height={32}
        radius="50%"
        margin="0px 6px 0px 0px"
        display="flex"
        justify="center"
        align="center"
      >
        <Img alt="왼쪽방향" src={leftArrow} width={12} />
      </Button>
      <Button
        onClick={onRightClick}
        bgColor="#74B743"
        width={32}
        height={32}
        radius="50%"
        display="flex"
        justify="center"
        align="center"
      >
        <Img alt="오른쪽방향" src={rightArrow} width={12} />
      </Button>
    </FlexContainer>
  );
}
