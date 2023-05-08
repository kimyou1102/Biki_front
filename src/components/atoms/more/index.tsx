import React from 'react';
import styled from 'styled-components';

interface MoreProps {
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}

const StyledSpan = styled.span<MoreProps>`
  color: black;
  cursor: pointer;
  font-weight: bold;
  &:before {
    content: '+';
    margin-right: 2px;
  }
`;

export function More({ children, onClick }: MoreProps) {
  return <StyledSpan onClick={onClick}>{children}</StyledSpan>;
}
