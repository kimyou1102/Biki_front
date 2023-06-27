/* eslint-disable no-nested-ternary */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { Span, Li, FlexContainer } from '@atoms';

interface Props {
  date: string;
  title: string;
  isCheck: boolean;
}

export function TextList({ date, title, isCheck }: Props) {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <Li outline="#DBDBDB" padding="16px 0 8px 0">
      <FlexContainer direction="column">
        <Span weight="bold" color={isCheck ? 'var(--main-color)' : 'black'} className="text-overflow">
          {isMobile ? title : title !== null ? (title.length > 56 ? `${title.slice(0, 56)}...` : title) : ''}
        </Span>
        <Span weight="bold" size={0.5} color="#999999" margin="4px 0 0 0">
          {date}
        </Span>
      </FlexContainer>
    </Li>
  );
}
