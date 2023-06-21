import React, { useEffect, useCallback, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { SlideHeader, MainEventBox } from '@molecules';
import { useRecoilValue } from 'recoil';
import { mainEventScrollState } from '../../recoil/scroll/scroll';
import { MainEventBoxs } from './MainEventBoxs';
// import { getBoardByParamApi } from '../../apis/board/get-board-by-param-api';

export function MainEventList() {
  const scroll = useRecoilValue<HTMLDivElement | undefined>(mainEventScrollState);
  const { t } = useTranslation();

  // const boardApi = useCallback(async () => {
  //   await getBoardByParamApi('event_night')
  //     .then((res) => {
  //       console.log(res.data);
  //       // setEvents(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   boardApi();
  // }, [boardApi]);

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
      <SlideHeader text={t(`main.event`)} onLeftClick={onLeftClick} onRightClick={onRightClick} />
      <MainEventBoxs />
    </>
  );
}
