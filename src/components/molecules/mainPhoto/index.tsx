import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Img } from '@atoms';
import { MainPhotoText } from '@molecules/mainPhotoText';
import { MainProps } from 'src/models/main';

const Styled = styled.div<{ src: string }>`
  width: 100%;
  height: calc(700px * 0.8);
  position: relative;
`;

export function MainPhoto({ src, sub, title, date, url }: MainProps) {
  const navigate = useNavigate();
  return (
    <Styled src={src!} onClick={() => navigate(url)}>
      <Img position="absolute" width="100%" height={700} alt="메인" src={src} objectfit="cover" />
      <MainPhotoText sub={sub} title={title} date={date} />
    </Styled>
  );
}
