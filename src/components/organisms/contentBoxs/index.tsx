import React, { useRef, useEffect } from 'react';
import { ContentBox } from '@molecules/contentBox';
import { SlideContainer } from '@atoms';
import { useSetRecoilState } from 'recoil';
import { ContentProps } from 'src/models/content';
import { mainYoutubeScrollState } from '../../../recoil/scroll/scroll';
import { ClipType } from '../../../models/clip';

interface Props {
  data: ClipType[];
}

export function ContentBoxs({ data }: Props) {
  // export function ContentBoxs() {
  const setScroll = useSetRecoilState<HTMLDivElement | undefined>(mainYoutubeScrollState);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      setScroll(scrollRef.current);
    }
  }, [setScroll]);

  return (
    <SlideContainer ref={scrollRef}>
      {data.map((youtube) => (
        <ContentBox
          key={youtube.id}
          id={youtube.id}
          title={youtube.titleKo}
          date={youtube.createdDate}
          count={youtube.view}
          url={youtube.url}
          type="main"
        />
      ))}
    </SlideContainer>
  );
}
