import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// import { ContentBox } from '@molecules/contentBox';
import { MainEventBox } from '@molecules';
import { SlideContainer } from '@atoms';
import { useSetRecoilState } from 'recoil';
// import { ContentProps } from 'src/models/content';
import { mainEventScrollState } from '../../recoil/scroll/scroll';
import main_event1 from '../../assets/images/main_event1.jpg';
import main_event2 from '../../assets/images/main_event2.jpg';
import main_event3 from '../../assets/images/main_event3.jpg';
import main_event4 from '../../assets/images/main_event4.jpg';
import main_event5 from '../../assets/images/main_event5.jpg';

// export function ContentBoxs({ data }: Props) {
export function MainEventBoxs() {
  const setScroll = useSetRecoilState<HTMLDivElement | undefined>(mainEventScrollState);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      setScroll(scrollRef.current);
    }
  }, [setScroll]);

  const datas = [
    { id: 1, url: main_event1, title: t(`event.readingMovie`) },
    { id: 2, url: main_event2, title: t(`event.barrierFree`) },
    { id: 3, url: main_event3, title: t(`event.live`) },
    { id: 4, url: main_event4, title: t(`event.conversation`) },
    { id: 5, url: main_event5, title: t(`event.talk`) },
  ];

  return (
    <SlideContainer ref={scrollRef}>
      {datas.map((data) => (
        <MainEventBox key={data.id} url={data.url} title={data.title} />
      ))}
    </SlideContainer>
  );
}
