import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledDiv = styled.div`
  padding: 32px 0px;
  width: 1024px;
  margin: 0 auto;
`;

export function Section({ children }: Props) {
  return <StyledDiv>{children}</StyledDiv>;
}
