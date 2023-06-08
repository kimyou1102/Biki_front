import React from 'react';
import { Span, Li, FlexContainer } from '@atoms';

interface Props {
  date: string;
  title: string;
}

export function MainNewsBoxText({ date, title }: Props) {
  return (
    <Li outline="#767676" padding="16px 0 16px 0">
      <FlexContainer>
        <Span weight="lighter" size={0.5} margin="0 calc(40px * 0.8) 0 0">
          {date.replace(/\//gi, '.').substring(2)}
        </Span>
        <Span weight="bold">{title.length > 42 ? `${title.slice(0, 42)}...` : title}</Span>
      </FlexContainer>
    </Li>
  );
}
