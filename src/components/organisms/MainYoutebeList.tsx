import React, { useState, useEffect, useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { SlideHeader } from '@molecules';
import { useRecoilValue } from 'recoil';
import { mainYoutubeScrollState } from '../../store/scroll/scroll';
import { ContentBoxs } from './contentBoxs';
import { getClipApi } from '../../apis/videoClip/get-clip-api';
import { ClipType } from '../../models/clip';

export function MainYoutebeList() {
  const scroll = useRecoilValue<HTMLDivElement | undefined>(mainYoutubeScrollState);
  const [youtubes, setYoutubes] = useState<ClipType[]>([]);
  const { t } = useTranslation();

  const clipApi = useCallback(async () => {
    await getClipApi()
      .then((res) => {
        setYoutubes(res);
      })
      .catch((err) => console.log(err));
  }, [setYoutubes]);

  useEffect(() => {
    clipApi();
  }, [clipApi]);

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
      <SlideHeader text={t(`main.movie`)} onLeftClick={onLeftClick} onRightClick={onRightClick} />
      <ContentBoxs data={youtubes} />
    </>
  );
}
