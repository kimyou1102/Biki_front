import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FlexContainer, Span, Img } from '@atoms';

interface Props {
  url: string;
  width?: number;
  title: string;
}

const ShadowBox = styled.div<{ src: string; width?: number }>`
  width: ${(props) => `calc(${props.width}px * 0.8)`};
  height: calc(413px * 0.8);

  background-color: rgba(0, 0, 0, 0.01);
  /* background-image: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.4) 151.05%); */
  background-image: ${(props) =>
    `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.4) 151.05%), url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.45);
  border-radius: 16px;
`;

const Container = styled.div<{ width?: number }>`
  width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : 'calc(413px * 0.8)')};
  height: calc(413px * 0.8);
  margin-right: calc(24px * 0.8);
  position: relative;
  border-radius: 16px;
`;

const TextWrap = styled.div`
  position: absolute;
  bottom: calc(52px * 0.8);
  left: calc(52px * 0.8);
`;

const Text = styled.span`
  color: white;
  font-size: calc(2.5rem * 0.8);
  font-weight: bold;
`;

export function MainEventBox({ url, width, title }: Props) {
  const navigate = useNavigate();

  const [text1, text2] = title.split('</br>');

  return (
    <Container width={width || 413} onClick={() => navigate('/articles/상영-이벤트')}>
      <ShadowBox src={url} width={width || 413} />
      <TextWrap>
        <Text>{text1}</Text>
        <br />
        <Text>{text2}</Text>
      </TextWrap>
      {/* <Img alt="이벤트사진" src={url} width={width || 413} height={413} /> */}
    </Container>
  );
}
