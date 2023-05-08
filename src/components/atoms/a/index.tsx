import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  color?: string;
  url?: string;
}

const StyledLink = styled(Link)<Props>`
  &:link {
    color: ${(props) => (props.color ? props.color : 'black')};
  }
  &:visited {
    color: ${(props) => (props.color ? props.color : 'black')};
  }
`;

export function A({ url, color, children }: Props) {
  return (
    <StyledLink to={url || '/'} color={color}>
      {children}
    </StyledLink>
  );
}
