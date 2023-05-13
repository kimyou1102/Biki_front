import React from 'react';
import { MovieDescription } from '@molecules';
import { FlexContainer, Img } from '@atoms';
import { MovieBoxInfo } from '../../../models/movie';

export function MovieBox({ type, title, director, country, year, runningTime, url }: MovieBoxInfo) {
  return (
    <FlexContainer
      width={413}
      direction="column"
      margin={type === 'main' ? '0px 17px 0px 0px' : '0px'}
      className={type}
    >
      <div style={{ width: '330px', height: '220px' }}>
        <Img alt="이미지" src={url} width="100%" />
      </div>
      <MovieDescription
        title={title}
        director={director}
        country={country}
        year={year}
        runningTime={runningTime}
        type={type}
      />
    </FlexContainer>
  );
}
