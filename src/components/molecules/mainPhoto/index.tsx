import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Img } from '@atoms';
import { MainPhotoText } from '@molecules/mainPhotoText';
import { MainProps } from 'src/models/main';

const Styled = styled.div<{ src: string; type: string }>`
  width: 100%;
  height: ${(props) => (props.type === 'mobile' ? '240px' : 'calc(700px * 0.8)')};
  position: relative;
`;

export function MainPhoto({ src, sub, title, date, url, type }: MainProps) {
  const navigate = useNavigate();
  return (
    <Styled src={src!} onClick={() => navigate(url)} type={type}>
      <Img
        position="absolute"
        width="100%"
        height={type === 'mobile' ? 240 / 0.8 : 700}
        alt="메인"
        src={src}
        objectfit="cover"
      />
      <MainPhotoText sub={sub} title={title} date={date} />
    </Styled>
  );
}
