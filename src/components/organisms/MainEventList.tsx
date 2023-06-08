import React from 'react';
import { SlideHeader } from '@molecules';
import { useRecoilValue } from 'recoil';
import { mainEventScrollState } from '../../recoil/scroll/scroll';
import { ContentBoxs } from './contentBoxs';

export function MainEventList() {
  const scroll = useRecoilValue<HTMLDivElement | undefined>(mainEventScrollState);

  const onLeftClick = () => {
    if (scroll) {
      scroll.scrollBy({ left: -600, top: 0, behavior: 'smooth' });
    }
  };

  const onRightClick = () => {
    if (scroll) {
      scroll.scrollBy({ left: 600, top: 0, behavior: 'smooth' });
    }
  };
  return (
    <>
      <SlideHeader text="이벤트" onLeftClick={onLeftClick} onRightClick={onRightClick} />
      <ContentBoxs />
    </>
  );
}
