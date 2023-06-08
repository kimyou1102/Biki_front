import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  children?: React.ReactNode;
}

const StyledHeader = styled.header`
  border-bottom: 1px solid #f4f4f4;

  .wrap {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 16px 0;
    max-width: calc(1280px * 0.8);
    margin: auto;
  }
`;

export function HeaderDefault({ children }: HeaderProps) {
  return (
    <StyledHeader>
      <div className="wrap">{children}</div>
    </StyledHeader>
  );
}
