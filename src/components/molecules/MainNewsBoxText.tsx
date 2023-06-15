import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Span, Li, FlexContainer } from '@atoms';

interface Props {
  date: string;
  title: string;
  id: number;
  url: string;
}

export function MainNewsBoxText({ date, title, id, url }: Props) {
  const navigate = useNavigate();
  return (
    <Li outline="#767676" padding="16px 0 16px 0" onClick={() => navigate(`${url}/${id}`)}>
      <FlexContainer>
        <Span weight="lighter" size={0.5} margin="0 calc(40px * 0.8) 0 0">
          {date.replace(/\//gi, '.').substring(2)}
        </Span>
        <Span weight="bold">{title.length > 42 ? `${title.slice(0, 42)}...` : title}</Span>
      </FlexContainer>
    </Li>
  );
}
