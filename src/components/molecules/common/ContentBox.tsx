import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { ContentDescription } from '@molecules';
import { FlexContainer, Iframe, Img } from '@atoms';
import { ContentBoxInfo } from 'src/models/content';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { modalDataState, modalState, modalPositionState } from '../../../store/archive/atome';

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

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

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
      // eslint-disable-next-line no-nested-ternary
      width={type === 'main' ? (isMobile ? 307 / 0.8 : 630) : 413}
      direction="column"
      margin={type === 'main' ? '0px 17px 0px 0px' : '0px'}
      radius="16px"
    >
      {type === 'main' ? (
        <Wrap width={isMobile ? 307 / 0.8 : 630} height={isMobile ? 173 / 0.8 : 352.5}>
          <Iframe
            type="main"
            isMobile={isMobile}
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
