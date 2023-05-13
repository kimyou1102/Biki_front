import React from 'react';
import { ContentDescription } from '@molecules';
import { FlexContainer, Iframe, Img } from '@atoms';
import { ContentBoxInfo } from 'src/models/content';
import { useSetRecoilState } from 'recoil';
import { sketchPhotos, modalState } from '../../../recoil/archive/atome';

export function ContentBox({ type, title, date, count, url }: ContentBoxInfo) {
  const setSketchPhotos = useSetRecoilState<string[]>(sketchPhotos);
  const setModal = useSetRecoilState<boolean>(modalState);

  const onClick = () => {
    if (type === 'archive' && Array.isArray(url)) {
      setSketchPhotos(url);
      setModal(true);
    }
  };

  return (
    <FlexContainer
      onClick={onClick}
      className={type}
      width={type === 'main' ? 630 : 413}
      direction="column"
      margin={type === 'main' ? '0px 17px 0px 0px' : '0px'}
    >
      {type === 'main' ? (
        <Iframe url={!Array.isArray(url) ? url : url[0]} />
      ) : (
        <Img alt="현장스케치" src={url[0]} width={413} height={275} />
      )}
      <ContentDescription title={title} date={date} count={count} type={type} />
    </FlexContainer>
  );
}
