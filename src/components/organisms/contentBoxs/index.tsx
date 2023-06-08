import React, { useRef, useEffect } from 'react';
import { ContentBox } from '@molecules/contentBox';
import { SlideContainer } from '@atoms';
import { useSetRecoilState } from 'recoil';
import { ContentProps } from 'src/models/content';
import { mainYoutubeScrollState } from '../../../recoil/scroll/scroll';

interface Props {
  data: ContentProps[];
}

const test = [
  {
    title: '[2022 BIKY : 4] 자원활동가 비키비 헌정영상',
    date: ' 2022 / 07 / 24 14:18:18',
    count: 413,
    id: 1,
    url: 'dowxLQpuMlE',
  },
  {
    title: '[2022 BIKY : 4] 자원활동가 비키비 헌정영상',
    date: ' 2022 / 07 / 24 14:18:18',
    count: 413,
    id: 2,
    url: 'dowxLQpuMlE',
  },
  {
    title: '[2022 BIKY : 4] 자원활동가 비키비 헌정영상',
    date: ' 2022 / 07 / 24 14:18:18',
    count: 413,
    id: 3,
    url: 'dowxLQpuMlE',
  },
  {
    title: '[2022 BIKY : 4] 자원활동가 비키비 헌정영상',
    date: ' 2022 / 07 / 24 14:18:18',
    count: 413,
    id: 4,
    url: 'dowxLQpuMlE',
  },
  {
    title: '[2022 BIKY : 4] 자원활동가 비키비 헌정영상',
    date: ' 2022 / 07 / 24 14:18:18',
    count: 413,
    id: 5,
    url: 'dowxLQpuMlE',
  },
  {
    title: '[2022 BIKY : 4] 자원활동가 비키비 헌정영상',
    date: ' 2022 / 07 / 24 14:18:18',
    count: 413,
    id: 6,
    url: 'dowxLQpuMlE',
  },
];

// export function ContentBoxs({ data }: Props) {
export function ContentBoxs() {
  const setScroll = useSetRecoilState<HTMLDivElement | undefined>(mainYoutubeScrollState);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      setScroll(scrollRef.current);
    }
  }, [setScroll]);

  return (
    <SlideContainer ref={scrollRef}>
      {test.map((youtube) => (
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
