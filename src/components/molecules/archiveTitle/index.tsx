import React from 'react';
import { H1, Span, FlexContainer } from '@atoms';

interface Props {
  pageTitle?: string;
  sub?: string;
}

export function ArchiveTitle({ pageTitle, sub }: Props) {
  return (
    <FlexContainer align="baseline">
      <H1 size={2.5} weight="bold" margin="0px 19px 32px 0px">
        {pageTitle || '아카이브'}
      </H1>
      <Span size={1.5} weight="bold">
        {sub || '비키의 기록보관소'}
      </Span>
    </FlexContainer>
  );
}
