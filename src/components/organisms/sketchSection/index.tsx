import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWrap } from '@atoms';
import { SketchList } from '@organisms/sketchList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SketchProps } from 'src/models/sketch';
import { sketchState } from '../../../recoil/sketch/atom';
import { modalState, modalPositionState } from '../../../recoil/archive/atome';

const Modal = styled.div<{ state: boolean }>`
  width: 1000px;
  height: 500px;
  background-color: tomato;
  display: ${(props) => (props.state === true ? 'block' : 'none')};
`;

export function SketcSection() {
  const [photos, setPhotos] = useRecoilState<SketchProps[]>(sketchState);
  const [page, setPage] = useState(0);
  // const [modal, setModal] = useRecoilState<boolean>(modalState);
  // const [top, setTop] = useRecoilState<number>(modalPositionState);

  return photos.length === 0 ? (
    <h1>등록된 게시물이 없습니다.</h1>
  ) : (
    <div>
      <SketchList page={page} setPage={setPage} photos={photos} />
    </div>
  );
}
