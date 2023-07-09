import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Th, Tr } from '@atoms';

interface TableRowProps {
  id: number;
  num: number;
  title: string;
  count: number;
  date: string;
  hilightStatus?: boolean;
}

export function TableRow({ id, num, title, count, date, hilightStatus }: TableRowProps) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <Tr highlightStatus={hilightStatus}>
      {!isMobile ? <Th>{num}</Th> : null}
      <Th
        className="title mobile"
        onClick={() => {
          navigate(`${id}`, { replace: false, state: { id, title, count, date } });
        }}
      >
        {title}
      </Th>
      {!isMobile ? <Th>{count}</Th> : null}
      <Th>{date}</Th>
    </Tr>
  );
}
