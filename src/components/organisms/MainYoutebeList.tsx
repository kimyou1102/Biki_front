import React from 'react';
import { SlideHeader } from '@molecules';
import { useRecoilValue } from 'recoil';
import { mainYoutubeScrollState } from '../../recoil/scroll/scroll';
import { ContentBoxs } from './contentBoxs';

export function MainYoutebeList() {
  const scroll = useRecoilValue<HTMLDivElement | undefined>(mainYoutubeScrollState);

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
      <SlideHeader text="영상" onLeftClick={onLeftClick} onRightClick={onRightClick} />
      <ContentBoxs />
    </>
  );
}
