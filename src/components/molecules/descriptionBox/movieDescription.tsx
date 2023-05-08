import React from 'react';
import { FlexContainer, Span, StyledStrong } from '@atoms';
import { MovieType } from '../../../models/movie';

export function MovieDescription({ title, director, country, year, runningTime }: MovieType) {
  return (
    <FlexContainer bgColor="#6DB03C" width={413} height={119} padding="24px" direction="column">
      <StyledStrong>{title}</StyledStrong>
      <Span color="white" margin="6px 0px 0px 0px">
        {director} | {country} | {year} | {runningTime}분
      </Span>
    </FlexContainer>
  );
}
