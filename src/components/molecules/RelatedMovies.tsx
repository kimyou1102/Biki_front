import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { Span, Img, FlexContainer } from '@atoms';

interface Props {
  title: string;
  director: string;
  year: number;
  time: number;
  src: string;
}

const Container = styled.div`
  width: calc(440px * 0.8);
  height: calc(334px * 0.8);
  position: relative;
  margin-right: 20px;
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: calc(112px * 0.8);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px 10px 0px 0px;
  padding: calc(20px * 0.8);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export function RelatedMovies({ title, director, year, time, src }: Props) {
  const { t } = useTranslation();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return isMobile ? (
    <FlexContainer>
      <Img src={src} width={160 / 0.8} height={120 / 0.8} alt="관련출품작" margin="0 8px 0 0" />
      <FlexContainer direction="column">
        <Span weight="bold" size={1 / 0.8}>
          {title}
        </Span>
        <Span size={0.75 / 0.8} margin="8px 0 0 0">
          {director} | {year} | {time}
          {t(`movie.minute`)}
        </Span>
      </FlexContainer>
    </FlexContainer>
  ) : (
    <Container>
      <Img src={src} width={440} height={334} alt="관련출품작" />
      <TextBox>
        <Span color="white" weight="bold" size={1.5} margin="0 0 calc(8px * 0.8) 0">
          {title}
        </Span>
        <Span color="white">
          {director}|{year}|{time}
          {t(`movie.minute`)}
        </Span>
      </TextBox>
    </Container>
  );
}
