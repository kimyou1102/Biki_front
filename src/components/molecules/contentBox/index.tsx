import React from 'react';
import styled from 'styled-components';
import { ContentDescription } from '@molecules';
import { FlexContainer, Iframe, Img } from '@atoms';
import { ContentBoxInfo } from 'src/models/content';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { modalDataState, modalState, modalPositionState } from '../../../recoil/archive/atome';

const Wrap = styled.div<{ width: number; height: number }>`
  width: ${(props) => `calc(${props.width}px * 0.8)`};
  height: ${(props) => `calc(${props.height}px * 0.8)`};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`;

export function ContentBox({ type, title, date, count, url, subType }: ContentBoxInfo) {
  const [modalDatas, setModalDatas] = useRecoilState(modalDataState);
  const [top, setTop] = useRecoilState<number>(modalPositionState);
  const setModal = useSetRecoilState<boolean>(modalState);

  const onClick = () => {
    if (type === 'archive' && Array.isArray(url)) {
      document.querySelector('body')?.classList.add('none');
      setModalDatas({
        urls: url,
        title: title!,
      });
      setModal(true);
      setTop(window.scrollY);
    }
  };

  return (
    <FlexContainer
      onClick={onClick}
      className={[type, 'cursor'].join(' ')}
      width={type === 'main' ? 630 : 413}
      direction="column"
      margin={type === 'main' ? '0px 17px 0px 0px' : '0px'}
      radius="16px"
    >
      {type === 'main' ? (
        <Wrap width={630} height={352.5}>
          <Iframe
            type="main"
            url={
              !Array.isArray(url)
                ? url.replace('https://www.youtube.com/watch?v=', '')
                : url[0].replace('https://www.youtube.com/watch?v=', '')
            }
          />
        </Wrap>
      ) : (
        <Wrap width={413} height={275}>
          {subType === 'clip' ? (
            <Iframe
              url={
                !Array.isArray(url)
                  ? url.replace('https://www.youtube.com/watch?v=', '')
                  : url[0].replace('https://www.youtube.com/watch?v=', '')
              }
            />
          ) : (
            <Img alt="현장스케치" src={url[0]} width={413} height={275} />
          )}
        </Wrap>
      )}
      <ContentDescription title={title} date={date} count={count} type={type} />
    </FlexContainer>
  );
}
