import React from 'react';
import { Span, Li, FlexContainer } from '@atoms';

interface Props {
  date: string;
  title: string;
  isCheck: boolean;
}

export function TextList({ date, title, isCheck }: Props) {
  const changeColor = 'var(--main-color)';
  return (
    <Li outline="#DBDBDB" padding="16px 0 8px 0">
      <FlexContainer direction="column">
        <Span weight="bold" color={isCheck ? changeColor : 'black'}>
          {title.length > 45 ? `${title.slice(0, 45)}...` : title}
        </Span>
        <Span weight="bold" size={0.5} color="#999999" margin="4px 0 0 0">
          {date}
        </Span>
      </FlexContainer>
    </Li>
  );
}
