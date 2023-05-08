import React from 'react';
import { Span, Li } from '@atoms';

interface Props {
  date: string;
  title: string;
  isCheck: boolean;
}

export function TextList({ date, title, isCheck }: Props) {
  const changeColor = '#74B743';
  return (
    <Li outline="#DBDBDB" padding="16px 0">
      <Span weight="bold" size={0.75} color={isCheck ? changeColor : 'black'} margin="0 24px 0 0">
        {date}
      </Span>
      <Span weight="bold" color={isCheck ? changeColor : 'black'}>
        {title.length > 42 ? `${title.slice(0, 42)}...` : title}
      </Span>
    </Li>
  );
}
