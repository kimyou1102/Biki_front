import React from 'react';
import { Span, StyledStrong, ContentDescriptionWrap } from '@atoms';
import { MovieDescriptionInfo } from '../../../models/movie';

export function MovieDescription({ type, title, director, country, year, runningTime }: MovieDescriptionInfo) {
  return (
    <ContentDescriptionWrap type={type} className="normal">
      <StyledStrong color={type === 'main' ? 'white' : 'black'}>{title}</StyledStrong>
      <Span color={type === 'main' ? 'white' : '#767676'} margin="5px 0px 0px 0px">
        {director} | {country} | {year} | {runningTime}분
      </Span>
    </ContentDescriptionWrap>
  );
}
