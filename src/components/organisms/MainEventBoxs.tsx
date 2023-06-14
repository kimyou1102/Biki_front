import React, { useRef, useEffect } from 'react';
// import { ContentBox } from '@molecules/contentBox';
import { MainEventBox } from '@molecules';
import { SlideContainer } from '@atoms';
import { useSetRecoilState } from 'recoil';
// import { ContentProps } from 'src/models/content';
import { mainEventScrollState } from '../../recoil/scroll/scroll';
import empty from '../../assets/images/empty.png';

// export function ContentBoxs({ data }: Props) {
export function MainEventBoxs() {
  const setScroll = useSetRecoilState<HTMLDivElement | undefined>(mainEventScrollState);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      setScroll(scrollRef.current);
    }
  }, [setScroll]);

  return (
    <SlideContainer ref={scrollRef}>
      <MainEventBox url={empty} width={847} title="나도 성우다!" />
      <MainEventBox url={empty} width={847} title="나도 성우다!" />
      <MainEventBox url={empty} width={847} title="나도 성우다!" />
      <MainEventBox url={empty} title="어린이청소년</br>영화인의 밤" />
    </SlideContainer>
  );
}
