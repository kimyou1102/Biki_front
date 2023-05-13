import React, { useRef, forwardRef, useEffect } from 'react';
import { ContentBox } from '@organisms/contentBox';
import { FlexContainer, SlideContainer } from '@atoms';
import { useSetRecoilState } from 'recoil';
import { ContentProps } from 'src/models/content';
import { mainYoutubeScrollState } from '../../../recoil/scroll/scroll';

interface Props {
  data: ContentProps[];
}

export function ContentBoxs({ data }: Props) {
  const setScroll = useSetRecoilState<HTMLDivElement | undefined>(mainYoutubeScrollState);
  const scrollRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setScroll(scrollRef.current);
  }, [setScroll]);

  return (
    <SlideContainer ref={scrollRef}>
      {data.map((youtube) => (
        <ContentBox
          key={youtube.id}
          id={youtube.id}
          title={youtube.title}
          date={youtube.date}
          count={youtube.count}
          url={youtube.url}
          type="main"
        />
      ))}
    </SlideContainer>
  );
}