import React from 'react';
import { FlexContainer, Span, StyledStrong } from '@atoms';
import { MovieDescriptionInfo } from '../../../models/movie';

export function MovieDescription({ type, title, director, country, year, runningTime }: MovieDescriptionInfo) {
  return (
    <FlexContainer
      bgColor={type === 'main' ? '#6DB03C' : '#EEEEEE'}
      width={413}
      height={type === 'main' ? 119 : 138}
      padding="19px"
      direction="column"
    >
      <StyledStrong color={type === 'main' ? 'white' : 'black'}>{title}</StyledStrong>
      <Span color={type === 'main' ? 'white' : '#767676'} margin="5px 0px 0px 0px">
        {director} | {country} | {year} | {runningTime}분
      </Span>
    </FlexContainer>
  );
}
