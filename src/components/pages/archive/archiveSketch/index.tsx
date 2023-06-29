import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { ModalWrap } from '@atoms';
import { ArchiveTemplate } from '@templates';
import { SketchModal, SketchList } from '@organisms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, modalPositionState, modalDataState } from '../../../../store/archive/atome';
import { sketchState } from '../../../../store/sketch/atom';
import { SketchProps, SketchType } from '../../../../models/sketch';
import { getSketchApi } from '../../../../apis/sketch/get-sketch-api';

const Modal = styled.div<{ state: boolean }>`
  width: calc(1180px * 0.7);
  height: calc(899px * 0.7);
  background-color: tomato;
  display: ${(props) => (props.state === true ? 'block' : 'none')};
`;

export function ArchiveSketchPage() {
  const [modal, setModal] = useRecoilState<boolean>(modalState);
  // const [modalDatas, setModalDatas] = useRecoilValue(modalDataState);
  const [photos, setPhotos] = useRecoilState<SketchType[]>(sketchState);
  const [page, setPage] = useState(0);
  const [top, setTop] = useRecoilState<number>(modalPositionState);
  const { t } = useTranslation();

  const sketchApi = useCallback(async () => {
    await getSketchApi()
      .then((res) => {
        // console.log(res);
        setPhotos(res);
        // setInitialMovieData(res);
      })
      .catch((err) => console.log(err));
  }, [setPhotos]);

  useEffect(() => {
    sketchApi();
  }, [sketchApi]);

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
      <ArchiveTemplate title={t(`archive.sketch`)} type="sketch">
        {photos.length === 0 ? (
          <h1>{t(`archive.empty`)}</h1>
        ) : (
          <div>
            <SketchList page={page} setPage={setPage} datas={photos} type="sketch" />
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
