import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { ModalWrap } from '@atoms';
import { ArchiveTemplate } from '@templates';
import { SketchModal, SketchList } from '@organisms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, modalPositionState, modalDataState } from '../../../store/archive/atome';
import { sketchState } from '../../../store/sketch/atom';
import { clipState } from '../../../store/clip/atom';
import { SketchProps, SketchType } from '../../../models/sketch';
import { ClipType } from '../../../models/clip';
import { getSketchApi } from '../../../apis/sketch/get-sketch-api';
import { getClipApi } from '../../../apis/videoClip/get-clip-api';

export function VideoClipPage() {
  const [photos, setPhotos] = useRecoilState(clipState);
  const [page, setPage] = useState(0);
  const { t } = useTranslation();

  const clipApi = useCallback(async () => {
    await getClipApi()
      .then((res) => {
        console.log(res);
        setPhotos(res);
      })
      .catch((err) => console.log(err));
  }, [setPhotos]);

  useEffect(() => {
    clipApi();
  }, [clipApi]);

  const headers: any = t(`header`, { returnObjects: true });
  return (
    <ArchiveTemplate title={headers[4].items[3]} type="sketch">
      {photos.length === 0 ? (
        <h1>{t(`archive.empty`)}</h1>
      ) : (
        <div>
          <SketchList page={page} setPage={setPage} datas={photos} />
        </div>
      )}
    </ArchiveTemplate>
  );
}
