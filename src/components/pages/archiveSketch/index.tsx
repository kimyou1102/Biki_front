import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWrap } from '@atoms';
import { ArchiveTemplate } from '@templates';
import { SketcSection, SketchModal, SketchList } from '@organisms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, modalPositionState, modalDataState } from '../../../recoil/archive/atome';
import { sketchState } from '../../../recoil/sketch/atom';
import { SketchProps } from '../../../models/sketch';

const Modal = styled.div<{ state: boolean }>`
  width: calc(1180px * 0.7);
  height: calc(899px * 0.7);
  background-color: tomato;
  display: ${(props) => (props.state === true ? 'block' : 'none')};
`;

export function ArchiveSketchPage() {
  const [modal, setModal] = useRecoilState<boolean>(modalState);
  // const [modalDatas, setModalDatas] = useRecoilValue(modalDataState);
  const [photos, setPhotos] = useRecoilState<SketchProps[]>(sketchState);
  const [page, setPage] = useState(0);

  const [top, setTop] = useRecoilState<number>(modalPositionState);

  const onOutsideModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // console.log(e.target);
    const target = e.target as HTMLElement;
    if (!target.closest('#modal')) {
      setModal(false);
      document.querySelector('body')?.classList.remove('none');
    }
  };

  return (
    <>
      <ArchiveTemplate title="현장스케치" type="sketch">
        {photos.length === 0 ? (
          <h1>등록된 게시물이 없습니다.</h1>
        ) : (
          <div>
            <SketchList page={page} setPage={setPage} photos={photos} />
          </div>
        )}
      </ArchiveTemplate>
      <ModalWrap
        top={top}
        className={modal ? '' : 'none'}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onOutsideModalClick(e)}
      >
        <SketchModal state={modal} />
        {/* <Modal id="modal" state={modal}>
          모달창
        </Modal> */}
      </ModalWrap>
    </>
  );
}