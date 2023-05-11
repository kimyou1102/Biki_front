import React from 'react';
import { FlexContainer, Span, StyledStrong } from '@atoms';
import { YoutubeType } from 'src/models/youtube';

export function YoutubeDescription({ title, date, count }: YoutubeType) {
  return (
    <FlexContainer bgColor="#6DB03C" width={630} height={96} padding="13px" direction="column">
      <StyledStrong>{title}</StyledStrong>
      <FlexContainer justify="space-between" margin="6px 0px 0px 0px">
        <Span color="white">등록일: {date}</Span>
        <Span color="white">조회수 : {count}</Span>
      </FlexContainer>
    </FlexContainer>
  );
}
