import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const StyledDiv = styled.div<{ isMobile: boolean }>`
  padding: ${(props) => (props.isMobile ? '28px 16px' : '32px 0px')};
  width: ${(props) => (props.isMobile ? '100%' : '1024px')};
  margin: 0 auto;
  box-sizing: border-box;
`;

export function Section({ children }: Props) {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return <StyledDiv isMobile={isMobile}>{children}</StyledDiv>;
}
