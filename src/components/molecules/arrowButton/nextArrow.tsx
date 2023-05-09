import React from 'react';
import { Img, Button } from '@atoms';
import rightSlide from '../../../assets/images/rightSlide.png';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function NextArrow({ onClick }: ArrowProps) {
  return (
    <Button
      onClick={onClick}
      display="flex"
      position="absolute"
      bottom="23px"
      left="50%"
      zIndex={10}
      transform="translateX(calc(-50% + 59px))"
    >
      <Img src={rightSlide} alt="오른쪽슬라이드" width={18} height={18} />
    </Button>
  );
}
