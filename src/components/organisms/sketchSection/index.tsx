import React, { useState } from 'react';
import { SketchList } from '@organisms/sketchList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SketchProps } from 'src/models/sketch';
import { sketchState } from '../../../recoil/sketch/atom';
import { modalState } from '../../../recoil/archive/atome';

export function SketcSection() {
  const [photos, setPhotos] = useRecoilState<SketchProps[]>(sketchState);
  const [page, setPage] = useState(1);
  const modalValue = useRecoilValue<boolean>(modalState);

  return photos.length === 0 ? (
    <h1>등록된 게시물이 없습니다.</h1>
  ) : (
    <div>
      <SketchList page={page} setPage={setPage} photos={photos} />
      {/* 모달 */}
      {/* <div style={{ width: '1000px', height: '500px', background: 'blue' }}>모달창</div> */}
    </div>
  );
}
