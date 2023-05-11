import React from 'react';
import styled from 'styled-components';
import { Img } from '@atoms';
import { MainPhotoText } from '@molecules/mainPhotoText';
import { MainProps } from 'src/models/main';

const Styled = styled.div`
  width: 100%;
  height: 672px;
  position: relative;
`;

export function MainPhoto({ src, sub, title, date }: MainProps) {
  return (
    <Styled>
      <Img position="absolute" width="100%" height="100%" alt="메인" src={src} />
      <MainPhotoText sub={sub} title={title} date={date} />
    </Styled>
  );
}
