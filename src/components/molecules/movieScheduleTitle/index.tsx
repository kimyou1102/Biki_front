import React from 'react';
import { Div, H1, Span } from '@atoms';

export function MovieScheduleTitle() {
  return (
    <Div margin="0 0 1rem 0">
      <H1 display="inline-block" size={2.5} weight="bold" margin="0px 13px 0px 0px">
        상영시간표
      </H1>
      <Span size={1.25} weight="bold">
        2023 프로그램
      </Span>
    </Div>
  );
}
