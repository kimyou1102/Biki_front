import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Th, Tr } from '@atoms';

interface TableRowProps {
  id: number;
  num: number;
  title: string;
  count: number;
  date: string;
}

export function TableRow({ id, num, title, count, date }: TableRowProps) {
  const navigate = useNavigate();
  return (
    <Tr>
      <Th>{num}</Th>
      <Th
        className="title"
        onClick={() => {
          navigate(`${id}`, { replace: false, state: { id, title, count, date } });
        }}
      >
        {title}
      </Th>
      <Th>{count}</Th>
      <Th>{date}</Th>
    </Tr>
  );
}
