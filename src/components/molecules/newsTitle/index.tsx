import React from 'react';
import { H1, Span } from '@atoms';

interface Props {
  title: string;
}

export function NewsTitle({ title }: Props) {
  return (
    <div>
      <H1 display="inline-block" size={2.5} weight="bold" margin="0px 13px 0px 0px">
        {title}
      </H1>
      <Span size={1.25} weight="bold">
        비키소식
      </Span>
      <hr style={{ height: '1px', background: '#74B743', border: 'none' }} />
    </div>
  );
}
