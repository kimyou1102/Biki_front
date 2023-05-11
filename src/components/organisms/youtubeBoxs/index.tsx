import React, { useRef, forwardRef, useEffect } from 'react';
import { YoutubeBox } from '@organisms/youtubeBox';
import { FlexContainer, SlideContainer } from '@atoms';
import { useSetRecoilState } from 'recoil';
import { YoutubeProps } from 'src/models/youtube';
import { mainYoutubeScrollState } from '../../../recoil/scroll/scroll';

interface Props {
  data: YoutubeProps[];
}

export function YoutubeBoxs({ data }: Props) {
  const setScroll = useSetRecoilState<HTMLDivElement | undefined>(mainYoutubeScrollState);
  const scrollRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setScroll(scrollRef.current);
  }, [setScroll]);

  return (
    <SlideContainer ref={scrollRef}>
      {data.map((youtube) => (
        <YoutubeBox
          key={youtube.id}
          id={youtube.id}
          title={youtube.title}
          date={youtube.date}
          count={youtube.count}
          url={youtube.url}
        />
      ))}
    </SlideContainer>
  );
}
