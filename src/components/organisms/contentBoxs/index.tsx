import React, { useRef, useEffect } from 'react';
import { ContentBox } from '@molecules/contentBox';
import { SlideContainer } from '@atoms';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { ContentProps } from 'src/models/content';
import { mainYoutubeScrollState } from '../../../recoil/scroll/scroll';
import { ClipType } from '../../../models/clip';
import { languageState } from '../../../recoil/language/atom';

interface Props {
  data: ClipType[];
}

export function ContentBoxs({ data }: Props) {
  // export function ContentBoxs() {
  const setScroll = useSetRecoilState<HTMLDivElement | undefined>(mainYoutubeScrollState);
  const scrollRef = useRef<HTMLDivElement>(null);
  const language = useRecoilValue(languageState);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      setScroll(scrollRef.current);
    }
  }, [setScroll]);

  return (
    <SlideContainer ref={scrollRef}>
      {data.map((youtube) => {
        const date = new Date(youtube.createdDate!);
        const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

        return (
          <ContentBox
            key={youtube.id}
            id={youtube.id}
            title={language === 'English' ? youtube.titleKo : youtube.titleEn}
            date={dateStr}
            count={youtube.view}
            url={youtube.url}
            type="main"
          />
        );
      })}
    </SlideContainer>
  );
}
