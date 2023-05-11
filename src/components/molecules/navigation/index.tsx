import React from 'react';
import styled from 'styled-components';
import { Li } from '@atoms';

interface NavigationProps {
  id: number;
  name: string;
}

const StyledUl = styled.ul`
  display: flex;
  width: 541px;
  justify-content: space-between;
  margin-left: 114px;
`;

export function Navigation() {
  const menus: NavigationProps[] = [
    { id: 1, name: 'BIKI' },
    { id: 2, name: '교육' },
    { id: 3, name: '이벤트' },
    { id: 4, name: '비키소식' },
    { id: 5, name: '비키소식' },
    { id: 6, name: 'Contact' },
  ];

  return (
    <StyledUl>
      {menus.map((menu) => (
        <Li key={menu.id} weight="bold">
          {menu.name}
        </Li>
      ))}
    </StyledUl>
  );
}
