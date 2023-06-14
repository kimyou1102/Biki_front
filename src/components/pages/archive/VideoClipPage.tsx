import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { ModalWrap } from '@atoms';
import { ArchiveTemplate } from '@templates';
import { SketchModal, SketchList } from '@organisms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, modalPositionState, modalDataState } from '../../../recoil/archive/atome';
import { sketchState } from '../../../recoil/sketch/atom';
import { clipState } from '../../../recoil/clip/atom';
import { SketchProps, SketchType } from '../../../models/sketch';
import { ClipType } from '../../../models/clip';
import { getSketchApi } from '../../../apis/sketch/get-sketch-api';
import { getClipApi } from '../../../apis/videoClip/get-clip-api';

export function VideoClipPage() {
  const [photos, setPhotos] = useRecoilState(clipState);
  const [page, setPage] = useState(0);

  console.log(photos);
  console.log(photos.length);

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

  return (
    <ArchiveTemplate title="영상클립" type="sketch">
      {photos.length === 0 ? (
        <h1>등록된 게시물이 없습니다.</h1>
      ) : (
        <div>
          <SketchList page={page} setPage={setPage} datas={photos} />
        </div>
      )}
    </ArchiveTemplate>
  );
}
