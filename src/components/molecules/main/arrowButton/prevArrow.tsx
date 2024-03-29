import React from 'react';
import { Img, AbsoluteButton } from '@atoms';
import leftSlide from '../../../../assets/images/leftSlide.png';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <AbsoluteButton
      className={['bottom', 'left'].join(' ')}
      onClick={onClick}
      display="flex"
      position="absolute"
      bottom="19px"
      left="50%"
      zindex={10}
      transform="translateX(calc(-50% - 47px))"
    >
      <Img src={leftSlide} alt="왼쪽슬라이드" width={18} height={18} />
    </AbsoluteButton>
  );
}
