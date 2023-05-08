import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  children?: React.ReactNode;
}

const StyledHeader = styled.header`
  padding: 25px 0 20px 0;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  justify-content: space-between;
`;

export function HeaderDefault({ children }: HeaderProps) {
  return <StyledHeader>{children}</StyledHeader>;
}
