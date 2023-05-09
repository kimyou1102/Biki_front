import React from 'react';
import { Img, Button } from '@atoms';
import leftSlide from '../../../assets/images/leftSlide.png';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <Button
      onClick={onClick}
      display="flex"
      position="absolute"
      bottom="23px"
      left="50%"
      zIndex={10}
      transform="translateX(calc(-50% - 59px))"
    >
      <Img src={leftSlide} alt="왼쪽슬라이드" width={18} height={18} />
    </Button>
  );
}
