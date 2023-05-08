import React from 'react';
import { MovieDescription } from '@molecules';
import { FlexContainer, Img } from '@atoms';
import { MovieInfo } from '../../../models/movie';

export function MovieBox({ title, director, country, year, runningTime, url }: MovieInfo) {
  return (
    <FlexContainer width={413} direction="column" margin="0px 21px 0px 0px">
      <div style={{ width: '413px', height: '275px' }}>
        <Img alt="이미지" src={url} width="100%" />
      </div>
      <MovieDescription title={title} director={director} country={country} year={year} runningTime={runningTime} />
    </FlexContainer>
  );
}
